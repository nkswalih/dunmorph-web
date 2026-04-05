import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="text-center">
          <p className="text-xs tracking-widest uppercase text-gold mb-3 font-medium">Your Bag</p>
          <h1 className="font-serif text-4xl md:text-5xl text-gray-900 tracking-wide mb-6">
            Shopping Bag
          </h1>
          <div className="w-16 h-px bg-gold mx-auto mb-8" />
          <p className="text-gray-500 mb-8">Your bag is currently empty.</p>
          <Link to="/men" className="btn-outline-dark">
            Explore the Collection
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs tracking-widest uppercase text-gold mb-3 font-medium">Your Bag</p>
            <h1 className="font-serif text-4xl md:text-5xl text-gray-900 tracking-wide">
              Shopping Bag
            </h1>
            <p className="text-gray-500 mt-2">{cartItems.length} item{cartItems.length > 1 ? 's' : ''}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-8">
              {cartItems.map((item) => (
                <div key={item.cartId} className="flex gap-6 pb-8 border-b border-gray-200">
                  {/* Image */}
                  <Link to={`/product/${item.id}`} className="flex-shrink-0 w-28 h-36 overflow-hidden">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </Link>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <div>
                          <Link to={`/product/${item.id}`}>
                            <h3 className="text-sm font-medium text-gray-900 hover:text-gold transition-colors duration-300">
                              {item.name}
                            </h3>
                          </Link>
                          <p className="text-xs text-gray-500 mt-1">Size: {item.size}</p>
                        </div>
                        <p className="text-sm font-medium text-gray-900">₹{item.price.toLocaleString()}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.cartId)}
                      className="text-xs text-gray-500 hover:text-gold transition-colors duration-300 self-start"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-cream-dark p-8">
                <h3 className="font-serif text-xl tracking-wide mb-6">Order Summary</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span className="text-gold">Complimentary</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between text-gray-900 font-medium text-base">
                      <span>Total</span>
                      <span>₹{subtotal.toLocaleString()}</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">Inclusive of all taxes</p>
                  </div>
                </div>
                <button className="w-full py-4 mt-8 bg-gold text-cream text-sm tracking-widest uppercase hover:bg-gold-dark transition-colors duration-300 cursor-pointer">
                  Proceed to Checkout
                </button>
                <Link
                  to="/men"
                  className="block text-center text-xs tracking-widest uppercase text-gray-500 hover:text-gold transition-colors duration-300 mt-4"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartPage;
