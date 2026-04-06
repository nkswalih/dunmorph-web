import { useState } from 'react';

const FilterSidebar = ({ isOpen, onClose, filters, onFilterChange, subcategories = [], sizes = [], priceRange = { min: 0, max: 5000 } }) => {
  const [localPrice, setLocalPrice] = useState(priceRange.max);

  const handleSubcategoryToggle = (sub) => {
    onFilterChange({
      ...filters,
      subcategory: filters.subcategory === sub ? '' : sub,
    });
  };

  const handleSizeToggle = (size) => {
    onFilterChange({
      ...filters,
      size: filters.size === size ? '' : size,
    });
  };

  const handlePriceChange = (value) => {
    setLocalPrice(value);
    onFilterChange({
      ...filters,
      maxPrice: parseInt(value),
    });
  };

  const handleSortChange = (sort) => {
    onFilterChange({ ...filters, sort });
  };

  const clearAll = () => {
    setLocalPrice(priceRange.max);
    onFilterChange({ sort: 'featured', subcategory: '', size: '', maxPrice: undefined });
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-[55] transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[340px] max-w-full bg-cream z-[60] shadow-2xl transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} flex flex-col`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="font-serif text-2xl text-gray-900 tracking-wide">Filters</h2>
          <div className="flex items-center gap-4">
            <button
              onClick={clearAll}
              className="text-xs tracking-widest uppercase text-gray-500 hover:text-gold transition-colors"
            >
              Clear All
            </button>
            <button onClick={onClose} className="text-gray-500 hover:text-gold transition-colors" aria-label="Close">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Filters Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8">

          {/* Sort */}
          <div>
            <h3 className="text-xs tracking-widest uppercase text-gray-900 font-medium mb-4">Sort By</h3>
            <div className="space-y-3">
              {[
                { value: 'featured', label: 'Featured' },
                { value: 'price-low', label: 'Price: Low to High' },
                { value: 'price-high', label: 'Price: High to Low' },
                { value: 'newest', label: 'Newest' },
                { value: 'name-az', label: 'Name: A to Z' },
              ].map(opt => (
                <button
                  key={opt.value}
                  onClick={() => handleSortChange(opt.value)}
                  className={`block w-full text-left text-sm py-2 px-3 transition-all duration-200 ${
                    filters.sort === opt.value
                      ? 'text-gold bg-gold/5 font-medium'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Subcategory */}
          {subcategories.length > 0 && (
            <div>
              <h3 className="text-xs tracking-widest uppercase text-gray-900 font-medium mb-4">Category</h3>
              <div className="space-y-3">
                {subcategories.map(sub => (
                  <button
                    key={sub.value}
                    onClick={() => handleSubcategoryToggle(sub.value)}
                    className={`flex items-center gap-3 w-full text-left text-sm py-1 transition-colors ${
                      filters.subcategory === sub.value ? 'text-gold font-medium' : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <div className={`w-4 h-4 border flex items-center justify-center transition-colors ${
                      filters.subcategory === sub.value ? 'border-gold bg-gold' : 'border-gray-300'
                    }`}>
                      {filters.subcategory === sub.value && (
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    {sub.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Price Range */}
          <div>
            <h3 className="text-xs tracking-widest uppercase text-gray-900 font-medium mb-4">Price Range</h3>
            <div className="px-1">
              <input
                type="range"
                min={priceRange.min}
                max={priceRange.max}
                value={localPrice}
                onChange={(e) => handlePriceChange(e.target.value)}
                className="w-full accent-gold cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>₹{priceRange.min}</span>
                <span className="text-gold font-medium">Up to ₹{localPrice.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Sizes */}
          {sizes.length > 0 && (
            <div>
              <h3 className="text-xs tracking-widest uppercase text-gray-900 font-medium mb-4">Size</h3>
              <div className="flex flex-wrap gap-2">
                {sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => handleSizeToggle(size)}
                    className={`min-w-[44px] h-10 px-3 text-xs border transition-all duration-200 ${
                      filters.size === size
                        ? 'border-gold bg-gold text-white'
                        : 'border-gray-300 text-gray-600 hover:border-gold'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200">
          <button
            onClick={onClose}
            className="w-full py-4 bg-gray-900 text-white text-xs tracking-widest uppercase hover:bg-gold transition-colors"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;
