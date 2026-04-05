import { Link } from 'react-router-dom';
import { bestSellers } from '../../data/productData';
import { useCart } from '../../context/CartContext';

const BestSellers = () => {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-subtitle">Most Coveted</p>
          <h2 className="section-title">Best Sellers</h2>
          <div className="w-16 h-px bg-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group">
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden mb-4 aspect-[3/4]">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {/* Quick Add Overlay */}
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

export default BestSellers;
