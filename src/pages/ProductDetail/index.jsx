import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../../data/productData';
import { useCart } from '../../context/CartContext';

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();

  const [selectedSize, setSelectedSize] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-serif text-4xl text-gray-900 mb-4">Product Not Found</h1>
          <Link to="/men" className="btn-outline-dark">
            Return to Collection
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) return;
    addToCart(product, selectedSize);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 px-6 py-16 md:py-24">
          {/* Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-x-visible">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`flex-shrink-0 w-20 h-24 md:w-20 md:h-24 overflow-hidden transition-all duration-300 ${
                    activeImage === index
                      ? 'ring-2 ring-gold'
                      : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 aspect-[3/4] overflow-hidden">
              <img
                src={product.images[activeImage]}
                alt={product.name}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-center">
            <p className="text-xs tracking-widest uppercase text-gold mb-3">
              {product.subcategory?.replace(/-/g, ' ')}
            </p>
            <h1 className="font-serif text-3xl md:text-4xl text-gray-900 mb-4 tracking-wide">
              {product.name}
            </h1>
            <p className="text-2xl text-gray-900 mb-8">${product.price}</p>

            <p className="text-gray-600 leading-relaxed mb-10">
              {product.description}
            </p>

            {/* Size Selector */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm text-gray-900 font-medium">Size</p>
                {selectedSize && (
                  <button
                    onClick={() => setSelectedSize(null)}
                    className="text-xs text-gray-500 underline hover:text-gold transition-colors"
                  >
                    Clear
                  </button>
                )}
              </div>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-[48px] h-12 px-4 text-sm border transition-all duration-300 ${
                      selectedSize === size
                        ? 'border-gold bg-gold text-white'
                        : 'border-gray-300 text-gray-700 hover:border-gold'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              disabled={!selectedSize}
              className={`w-full py-4 text-sm tracking-widest uppercase transition-all duration-500 ${
                selectedSize
                  ? added
                    ? 'bg-green-700 text-white'
                    : 'bg-gold text-cream hover:bg-gold-dark'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {added ? 'Added to Cart' : selectedSize ? 'Add to Cart' : 'Select a Size'}
            </button>

            {/* Details */}
            <div className="mt-10 pt-8 border-t border-gray-200 space-y-4">
              {[
                'Complimentary shipping on all orders',
                'Free returns within 30 days',
                'Complimentary garment care guide included',
              ].map((text) => (
                <p key={text} className="text-sm text-gray-500 flex items-center gap-3">
                  <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
