const API_BASE = '/db.json';

let _cache = null;
let _cacheTime = 0;
const CACHE_DURATION = 30000; // 30 seconds

const getDB = async () => {
  const now = Date.now();
  if (_cache && now - _cacheTime < CACHE_DURATION) return _cache;
  const res = await fetch(API_BASE);
  if (!res.ok) throw new Error('Failed to fetch data');
  _cache = await res.json();
  _cacheTime = now;
  return _cache;
};

// Fetch all products with optional filters
export const fetchProducts = async (filters = {}) => {
  const db = await getDB();
  let items = [...db.products];

  // Category filter
  if (filters.category) {
    items = items.filter(p => p.category === filters.category);
  }

  // Subcategory filter
  if (filters.subcategory) {
    items = items.filter(p => p.subcategory === filters.subcategory);
  }

  // Search query
  if (filters.search) {
    const q = filters.search.toLowerCase();
    items = items.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.subcategory.toLowerCase().includes(q)
    );
  }

  // Price range
  if (filters.minPrice !== undefined) {
    items = items.filter(p => p.price >= filters.minPrice);
  }
  if (filters.maxPrice !== undefined) {
    items = items.filter(p => p.price <= filters.maxPrice);
  }

  // Size filter
  if (filters.size) {
    items = items.filter(p => p.sizes.includes(filters.size));
  }

  // Sort
  if (filters.sort) {
    switch (filters.sort) {
      case 'price-low':
        items.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        items.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        items.sort((a, b) => b.id - a.id);
        break;
      case 'name-az':
        items.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }
  }

  return items;
};

// Fetch single product by ID
export const fetchProductById = async (id) => {
  const db = await getDB();
  return db.products.find(p => p.id === parseInt(id)) || null;
};

// Fetch best sellers (first 4)
export const fetchBestSellers = async () => {
  const db = await getDB();
  return db.products.slice(0, 4);
};

// Fetch collections
export const fetchCollections = async () => {
  const db = await getDB();
  return db.collections;
};

// Search products
export const searchProducts = async (query) => {
  return fetchProducts({ search: query });
};

// Get available subcategories for a category
export const getSubcategories = async (category) => {
  const items = await fetchProducts({ category });
  const subs = [...new Set(items.map(p => p.subcategory))];
  return subs.map(s => ({
    value: s,
    label: s.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
  }));
};

// Get all unique sizes for a set of products
export const getAvailableSizes = async (category) => {
  const items = await fetchProducts({ category });
  return [...new Set(items.flatMap(p => p.sizes))];
};

// Get price range for a category
export const getPriceRange = async (category) => {
  const items = await fetchProducts({ category });
  if (!items.length) return { min: 0, max: 10000 };
  const prices = items.map(p => p.price);
  return { min: Math.min(...prices), max: Math.max(...prices) };
};
