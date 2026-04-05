const MegaMenu = ({ active, type }) => {
  const shopConfig = {
    title: 'SHOP',
    columns: [
      {
        heading: 'Shop',
        links: [
          { name: 'All Pieces', href: '/men' },
          { name: 'Shirts', href: '/men' },
          { name: 'Trousers', href: '/men' },
          { name: 'Blazers', href: '/men' },
          { name: 'Knitwear', href: '/men' },
        ],
      },
      {
        heading: 'Collections',
        links: [
          { name: 'Essentials', href: '/men' },
          { name: 'New Arrivals', href: '/men' },
          { name: 'Formal', href: '/men' },
          { name: 'Casual', href: '/men' },
        ],
      },
    ],
    image: 'https://i.pinimg.com/736x/bd/a7/3d/bda73d5c156d7a83b29b4436f0a7636e.jpg',
    editorial: 'Timeless Essentials',
  };

  const collectionsConfig = {
    title: 'COLLECTIONS',
    columns: [
      {
        heading: 'Featured',
        links: [
          { name: 'All Men', href: '/men' },
          { name: 'New Arrivals', href: '/men' },
          { name: 'Best Sellers', href: '/men' },
        ],
      },
      {
        heading: 'Categories',
        links: [
          { name: 'Shirts', href: '/men' },
          { name: 'Outerwear', href: '/men' },
          { name: 'Trousers', href: '/men' },
          { name: 'Accessories', href: '/accessories' },
        ],
      },
    ],
    image: 'https://i.pinimg.com/736x/bd/a7/3d/bda73d5c156d7a83b29b4436f0a7636e.jpg',
    editorial: 'The Collection',
  };

  const config = type === 'collections' ? collectionsConfig : shopConfig;

  const colWidth = 'w-1/4';
  const imageCol = 'w-1/2';

  return (
    <div
      className={`transition-all duration-500 ease-in-out ${
        active
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 -translate-y-2 pointer-events-none'
      }`}
      style={{ maxHeight: '65vh' }}
    >
      <div className="bg-[#fef9f3] min-h-full shadow-md px-16 py-12">
        <div className="flex gap-10 max-w-[1400px] mx-auto">
          {/* Column 1: Categories */}
          <div className={colWidth}>
            <p className="text-xs tracking-widest uppercase text-gold mb-6 font-medium">
              {config.columns[0].heading}
            </p>
            <div className="space-y-4">
              {config.columns[0].links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-sm text-gray-700 hover:text-gold transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Subcategories */}
          <div className={colWidth}>
            <p className="text-xs tracking-wider uppercase text-gold mb-6 font-medium">
              {config.columns[1].heading}
            </p>
            <div className="space-y-4">
              {config.columns[1].links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-sm text-gray-700 hover:text-gold transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Spacer col */}
          <div className={colWidth + ' flex items-center justify-center'}>
            <div className="text-center">
              <p className="text-xs tracking-widest uppercase text-gray-400 mb-2">
                Explore the full range
              </p>
              <a
                href="/men"
                className="text-lg font-serif text-gray-900 hover:text-gold transition-colors duration-300"
              >
                View All →
              </a>
            </div>
          </div>

          {/* Column 3: Editorial Image */}
          <div className={imageCol + ' flex items-center justify-end'}>
            <div className="relative w-full max-w-md aspect-[4/5] overflow-hidden">
              <img
                src={config.image}
                alt={config.editorial}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/40 to-transparent">
                <p className="font-serif text-2xl text-white tracking-wide">
                  {config.editorial}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
