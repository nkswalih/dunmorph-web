import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const CartDrawer = ({ isOpen, onClose }) => {
  const { cartCount, cartItems = [] } = useCart(); // Assuming cartItems is available, if not we will adjust

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-[400px] max-w-full bg-cream z-[70] shadow-2xl transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="font-serif text-2xl text-gray-900 tracking-wide">Your Bag ({cartCount})</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gold transition-colors"
            aria-label="Close Cart"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Cart Items Area */}
        <div className="flex-1 overflow-y-auto p-6">
          {cartCount === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <p className="text-gray-500 tracking-widest text-sm uppercase">Your bag is empty</p>
              <Link 
                to="/men" 
                onClick={onClose}
                className="text-xs uppercase tracking-widest border-b border-gray-900 pb-1 hover:text-gold hover:border-gold transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
             <div className="space-y-6">
                {cartItems.map((item, index) => (
                  <div key={item.cartId || index} className="flex gap-4 items-center group">
                    <div className="w-20 h-24 bg-gray-100 overflow-hidden flex-shrink-0">
                      <img 
                        src={item.image || item.thumbnail || (item.images && item.images[0]) || 'https://i.pinimg.com/736x/21/df/b8/21dfb85848bb0170428dccad9ca114c0.jpg'} 
                        alt={item.name} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-sm tracking-wide text-gray-900 line-clamp-1">{item.name || 'Premium Item'}</h3>
                      <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest">{item.size && `Size: ${item.size}`}</p>
                      <p className="text-sm font-medium text-gray-900 mt-2">${item.price?.toFixed(2) || '0.00'}</p>
                    </div>
                  </div>
                ))}
             </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 bg-white">
          <div className="space-y-4">
            <Link 
              to="/cart"
              onClick={onClose}
              className="w-full block py-4 text-center border border-gray-900 text-gray-900 text-xs tracking-widest uppercase hover:bg-gray-50 transition-colors"
            >
              View Detailed Bag
            </Link>
            <Link 
              to="/cart" // Needs checkout route eventually
              onClick={onClose}
              className="w-full block py-4 text-center bg-gray-900 text-white text-xs tracking-widest uppercase hover:bg-gold transition-colors"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
