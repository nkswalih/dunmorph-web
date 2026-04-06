import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a1429] text-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-xl tracking-wider">
              DUNMORPH.
            </Link>
            <p className="mt-4 text-sm text-cream/60 leading-relaxed">
              Heritage craftsmanship meets modern refinement.
              <br />
              Est. 2024.
            </p>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-6 text-gold">
              Collections
            </h4>
            <div className="space-y-3">
              <Link to="/men" className="block text-sm text-cream/60 hover:text-cream transition-colors duration-300">
                Men
              </Link>
              <Link to="/women" className="block text-sm text-cream/60 hover:text-cream transition-colors duration-300">
                Women
              </Link>
              <Link to="/accessories" className="block text-sm text-cream/60 hover:text-cream transition-colors duration-300">
                Accessories
              </Link>
              <Link to="/accessories" className="block text-sm text-cream/60 hover:text-cream transition-colors duration-300">
                Watches
              </Link>
            </div>
          </div>

          {/* Client Service */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-6 text-gold">
              Client Service
            </h4>
            <div className="space-y-3">
              <Link to="/contact" className="block text-sm text-cream/60 hover:text-cream transition-colors duration-300">
                Contact Us
              </Link>
              <Link to="/shipping-and-returns" className="block text-sm text-cream/60 hover:text-cream transition-colors duration-300">
                Shipping & Returns
              </Link>
              <Link to="/size-chart" className="block text-sm text-cream/60 hover:text-cream transition-colors duration-300">
                Size Guide
              </Link>
              <Link to="/care-instructions" className="block text-sm text-cream/60 hover:text-cream transition-colors duration-300">
                Care Instructions
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-6 text-gold">
              Legal
            </h4>
            <div className="space-y-3">
              <Link to="/privacy-policy" className="block text-sm text-cream/60 hover:text-cream transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms-and-conditions" className="block text-sm text-cream/60 hover:text-cream transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="/cookie-policy" className="block text-sm text-cream/60 hover:text-cream transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-cream/40">&copy; {currentYear} DUNMORPH. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://www.instagram.com/dunmorph.in/" target="_blank" rel="noopener noreferrer" className="text-cream/40 hover:text-cream transition-colors duration-300" aria-label="Instagram">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
