import { useState, useEffect } from 'react';
import { fetchProducts, getSubcategories, getAvailableSizes, getPriceRange } from '../../services/api';
import ProductCard from '../../components/ProductCard';
import HeroSlider from '../../components/HeroSlider';
import FilterSidebar from '../../components/FilterSidebar';
import SEO from '../../components/SEO';

const menHeroSlides = [
  {
    image: 'https://wandering-maroon-m7ikahhtjm.edgeone.app/2.png',
    title: "Men's Collection",
    subtitle: 'The Edit',
    description: 'Refined essentials for the modern gentleman. Each piece designed with intention.',
    link: '/men',
    cta: 'Shop Now',
  },
  {
    image: 'https://low-harlequin-neyyy2vzww.edgeone.app/2.png',
    title: 'Premium Linen',
    subtitle: 'New Season',
    description: 'Discover our latest range of premium linen shirts and trousers.',
    link: '/men',
    cta: 'Explore',
  },
  {
    image: 'https://tremendous-sapphire-bfiqeajuao.edgeone.app/3.png',
    title: 'Tailored Fit',
    subtitle: 'Signature Style',
    description: 'Precision tailoring meets contemporary design.',
    link: '/men',
    cta: 'View All',
  },
];

const CollectionPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterOpen, setFilterOpen] = useState(false);
  const [subcategories, setSubcategories] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 5000 });
  const [filters, setFilters] = useState({
    sort: 'featured',
    subcategory: '',
    size: '',
    maxPrice: undefined,
  });

  // Load filter options once
  useEffect(() => {
    const loadFilterOptions = async () => {
      try {
        const [subs, szs, pr] = await Promise.all([
          getSubcategories('men'),
          getAvailableSizes('men'),
          getPriceRange('men'),
        ]);
        setSubcategories(subs);
        setSizes(szs);
        setPriceRange(pr);
      } catch (err) {
        console.error('Failed to load filter options:', err);
      }
    };
    loadFilterOptions();
  }, []);

  // Fetch products when filters change
  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const data = await fetchProducts({
          category: 'men',
          subcategory: filters.subcategory || undefined,
          size: filters.size || undefined,
          maxPrice: filters.maxPrice,
          sort: filters.sort,
        });
        setProducts(data);
      } catch (err) {
        console.error('Failed to load products:', err);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, [filters]);

  return (
    <div className="pt-20">
      <SEO title="Men's Collection" description="Refined essentials for the modern gentleman." />

      {/* Hero Slider */}
      <HeroSlider slides={menHeroSlides} />

      {/* Filter Bar */}
      <section className="border-b border-gray-200 px-6">
        <div className="max-w-7xl mx-auto py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs tracking-wider text-gray-500 uppercase">
            {products.length} {products.length === 1 ? 'Piece' : 'Pieces'}
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => setFilterOpen(true)}
              className="flex items-center gap-2 text-xs tracking-wider uppercase text-gray-600 hover:text-gold transition-colors duration-300"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
              </svg>
              Filter
              {(filters.subcategory || filters.size || filters.maxPrice) && (
                <span className="w-2 h-2 bg-gold rounded-full" />
              )}
            </button>
            <select
              value={filters.sort}
              onChange={(e) => setFilters(f => ({ ...f, sort: e.target.value }))}
              className="text-xs tracking-wider uppercase text-gray-600 bg-transparent border-none outline-none cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </div>
      </section>

      {/* Filter Sidebar */}
      <FilterSidebar
        isOpen={filterOpen}
        onClose={() => setFilterOpen(false)}
        filters={filters}
        onFilterChange={setFilters}
        subcategories={subcategories}
        sizes={sizes}
        priceRange={priceRange}
      />

      {/* Product Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="aspect-[3/4] bg-gray-200 mb-4" />
                  <div className="h-4 bg-gray-200 w-3/4 mb-2" />
                  <div className="h-3 bg-gray-200 w-1/4" />
                </div>
              ))}
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg mb-4">No products match your filters</p>
              <button
                onClick={() => setFilters({ sort: 'featured', subcategory: '', size: '', maxPrice: undefined })}
                className="btn-outline-dark"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CollectionPage;
