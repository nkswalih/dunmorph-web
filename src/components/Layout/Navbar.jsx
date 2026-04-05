import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '../../data/menuData';
import { useCart } from '../../context/CartContext';
import MegaMenu from './MegaMenu';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMega, setActiveMega] = useState(null);
  const [mobileAccordion, setMobileAccordion] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const closeTimer = useRef(null);
  const { cartCount } = useCart();
  const { pathname } = useLocation();

  const isHero = pathname === '/' && !scrolled;
  const showLightText = isHero && !activeMega;
  const navText = showLightText ? 'text-white' : 'text-gray-700';

  const popularCollections = [
    { name: 'New Arrivals', href: '/men' },
    { name: 'Best Sellers', href: '/men' },
    { name: 'Shirts', href: '/men' },
    { name: 'Outerwear', href: '/men' },
    { name: 'Trousers', href: '/men' },
    { name: 'Knitwear', href: '/men' },
  ];

  const accountLinks = [
    { label: 'My Account', href: '/login' },
    { label: 'Orders', href: '/login' },
    { label: 'Wishlist', href: '/login' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setScrolled(false);
    setMobileOpen(false);
    setActiveMega(null);
    setMobileAccordion(null);
    setSearchOpen(false);
    setAccountOpen(false);
    setCartOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);


  const openMega = (key) => {
    clearTimeout(closeTimer.current);
    setActiveMega(key);
  };

  const scheduleCloseMega = () => {
    closeTimer.current = setTimeout(() => setActiveMega(null), 300);
  };

  const cancelCloseMega = () => {
    clearTimeout(closeTimer.current);
  };

  const toggleMobileAccordion = (name) => {
    setMobileAccordion((prev) => (prev === name ? null : name));
  };

  const closeAllDropdowns = () => {
    setSearchOpen(false);
    setAccountOpen(false);
    setCartOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          activeMega
            ? 'bg-cream/95 backdrop-blur-md shadow-sm'
            : isHero
            ? 'bg-transparent'
            : scrolled
            ? 'bg-cream/95 backdrop-blur-md shadow-sm'
            : 'bg-cream shadow-sm'
        }`}
      >
        <div className="w-full px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-2xl tracking-wider transition-colors duration-500 ${
                showLightText ? 'text-white' : 'text-gray-900'
              }`}
            >
              DUNMORPH.
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => {
                const isMega = link.name === 'SHOP' || link.name === 'COLLECTIONS';
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={
                      isMega && link.active
                        ? () => openMega(link.name.toLowerCase())
                        : undefined
                    }
                    onMouseLeave={isMega ? scheduleCloseMega : undefined}
                  >
                    <Link
                      to={link.href}
                      className={`text-xs tracking-widest uppercase py-2 transition-all duration-300 hover:text-gold ${navText} ${
                        !link.active ? 'opacity-40 cursor-not-allowed' : ''
                      }`}
                    >
                      {link.name}
                    </Link>
                  </div>
                );
              })}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-5">
              {/* Search with Dropdown */}
              <div className="relative">
                <button
                  onClick={() => {
                    setSearchOpen(!searchOpen);
                    setAccountOpen(false);
                    setCartOpen(false);
                  }}
                  className={`transition-colors duration-300 hover:text-gold ${navText}`}
                  aria-label="Search"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </button>

                {searchOpen && (
                  <div className="absolute right-0 top-full mt-4 w-72 bg-white shadow-xl border border-gray-100 rounded-sm overflow-hidden z-50">
                    <div className="p-4 border-b border-gray-100">
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search..."
                        className="w-full text-sm bg-gray-50 border border-gray-200 px-3 py-2 outline-none focus:border-gold transition-colors"
                        autoFocus
                      />
                    </div>
                    <div className="p-3">
                      <p className="text-xs tracking-widest uppercase text-gray-400 mb-2">
                        Popular Collections
                      </p>
                      {popularCollections.map((col) => (
                        <Link
                          key={col.name}
                          to={col.href}
                          onClick={() => setSearchOpen(false)}
                          className="block text-sm text-gray-700 hover:text-gold py-2 transition-colors duration-300"
                        >
                          {col.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Account with Dropdown */}
              <div className="relative hidden lg:block">
                <button
                  onClick={() => {
                    setAccountOpen(!accountOpen);
                    setSearchOpen(false);
                    setCartOpen(false);
                  }}
                  className={`transition-colors duration-300 hover:text-gold ${navText}`}
                  aria-label="Account"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </button>

                {accountOpen && (
                  <div className="absolute right-0 top-full mt-4 w-48 bg-white shadow-xl border border-gray-100 rounded-sm overflow-hidden z-50">
                    {accountLinks.map((link) => (
                      <Link
                        key={link.label}
                        to={link.href}
                        onClick={() => setAccountOpen(false)}
                        className="block text-sm text-gray-700 hover:text-gold px-4 py-2.5 transition-colors duration-300 border-b border-gray-50 last:border-0"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Cart with Dropdown */}
              <div className="relative">
                <button
                  onClick={() => {
                    setCartOpen(!cartOpen);
                    setSearchOpen(false);
                    setAccountOpen(false);
                  }}
                  className={`relative transition-colors duration-300 hover:text-gold ${navText}`}
                  aria-label="Cart"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 w-4 h-4 bg-gold text-white text-xs rounded-full flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </button>

                {cartOpen && (
                  <div className="absolute right-0 top-full mt-4 w-56 bg-white shadow-xl border border-gray-100 rounded-sm overflow-hidden z-50">
                    <Link
                      to="/cart"
                      onClick={() => setCartOpen(false)}
                      className="block text-sm text-gray-700 hover:text-gold px-4 py-3 transition-colors duration-300 text-center border-b border-gray-100"
                    >
                      View Cart ({cartCount} {cartCount === 1 ? 'item' : 'items'})
                    </Link>
                    <Link
                      to="/cart"
                      onClick={() => setCartOpen(false)}
                      className="block text-xs tracking-widest uppercase bg-gray-900 text-white hover:bg-gold px-4 py-3 transition-colors duration-300 text-center"
                    >
                      Checkout
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`md:hidden transition-colors duration-300 hover:text-gold ${navText}`}
                aria-label="Menu"
              >
                {mobileOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 9h16.5m-16.5 6.75h16.5"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full-Width Mega Menu */}
      <div
        className="fixed left-0 top-20 w-full z-40"
        onMouseEnter={cancelCloseMega}
        onMouseLeave={scheduleCloseMega}
      >
        <MegaMenu active={activeMega === 'shop'} type="shop" />
        <MegaMenu active={activeMega === 'collections'} type="collections" />
      </div>

      {/* Click outside to close dropdowns */}
      {searchOpen && (
        <div className="fixed inset-0 z-30" onClick={closeAllDropdowns} />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-cream transition-transform duration-500 md:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: 0 }}
      >
        <div className="pt-24 px-8 pb-8 overflow-y-auto h-full">
          <div className="space-y-2">
            {navLinks
              .filter((link) => link.active)
              .map((link) => {
                const isMega = link.name === 'SHOP';
                return (
                  <div key={link.name}>
                    <div className="flex items-center justify-between py-4 border-b border-gray-200">
                      <Link
                        to={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={`text-sm tracking-widest uppercase transition-colors duration-300 hover:text-gold text-gray-800`}
                      >
                        {link.name}
                      </Link>
                      {isMega && link.active && (
                        <button
                          onClick={() => toggleMobileAccordion(link.name)}
                          className="text-gray-400 hover:text-gold transition-colors duration-300"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-4 w-4 transition-transform duration-300 ${
                              mobileAccordion === link.name ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.5}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        </button>
                      )}
                    </div>

                    {/* Accordion content */}
                    {isMega && mobileAccordion === link.name && (
                      <div className="pl-4 py-3 space-y-3 animate-fade-in">
                        <Link
                          to="/men"
                          onClick={() => setMobileOpen(false)}
                          className="block text-sm text-gray-600 hover:text-gold transition-colors duration-300 py-1"
                        >
                          All Pieces
                        </Link>
                        {['Shirts', 'Trousers', 'Blazers', 'Knitwear'].map(
                          (name) => (
                            <Link
                              key={name}
                              to="/men"
                              onClick={() => setMobileOpen(false)}
                              className="block text-sm text-gray-600 hover:text-gold transition-colors duration-300 py-1"
                            >
                              {name}
                            </Link>
                          )
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <Link
              to="/login"
              onClick={() => setMobileOpen(false)}
              className="block text-sm tracking-widest uppercase text-gray-600 hover:text-gold transition-colors py-2"
            >
              Account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
