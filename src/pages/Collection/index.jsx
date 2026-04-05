import { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../../data/productData';
import { useCart } from '../../context/CartContext';

const CollectionPage = () => {
  const [sortBy, setSortBy] = useState('featured');

  const menProducts = products.filter((p) => p.category === 'men');

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-16 md:py-24 px-6 bg-cream-dark">
        <div className="max-w-7xl mx-auto text-center">
          <p className="section-subtitle">The Edit</p>
          <h1 className="section-title mb-4">Men's Collection</h1>
          <p className="text-gray-500 max-w-lg mx-auto">
            Refined essentials for the modern gentleman. Each piece designed
            with intention, crafted with precision.
          </p>
        </div>
      </section>

      {/* Filter Bar (Non-functional) */}
      <section className="border-b border-gray-200 px-6">
        <div className="max-w-7xl mx-auto py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs tracking-wider text-gray-500 uppercase">
            {menProducts.length} Pieces
          </p>
          <div className="flex items-center gap-6">
            {/* Filter Button (Visual Only) */}
            <button className="flex items-center gap-2 text-xs tracking-wider uppercase text-gray-600 hover:text-gold transition-colors duration-300">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
              </svg>
              Filter
            </button>
            {/* Sort Select */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
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

      {/* Product Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
            {menProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group">
      <Link
        to={`/product/${product.id}`}
        className="block relative overflow-hidden mb-4 aspect-[3/4]"
      >
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {/* Quick Add */}
        <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product, product.sizes[1] || product.sizes[0]);
            }}
            className="w-full py-3 bg-cream text-gray-900 text-xs tracking-widest uppercase hover:bg-gold hover:text-white transition-colors duration-300"
          >
            Quick Add
          </button>
        </div>
      </Link>
      <Link to={`/product/${product.id}`} className="block">
        <h3 className="text-sm font-medium text-gray-900 group-hover:text-gold transition-colors duration-300 line-clamp-1">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 mt-1">${product.price}</p>
      </Link>
    </div>
  );
};

export default CollectionPage;
