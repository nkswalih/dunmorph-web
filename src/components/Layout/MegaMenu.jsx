const MegaMenu = ({ active, type }) => {
  const isShop = type === 'shop';

  const shopConfig = {
    brands: [
      {
        name: 'Linen by Dunmorph',
        image: 'https://wandering-maroon-m7ikahhtjm.edgeone.app/2.png',
        href: '/men',
      },
      {
        name: 'Premium Collection',
        image: 'https://low-harlequin-neyyy2vzww.edgeone.app/2.png',
        href: '/men',
      },
      {
        name: 'Linen Pants',
        image: 'https://tremendous-sapphire-bfiqeajuao.edgeone.app/3.png',
        href: '/men',
      },
      {
        name: 'Classic Wide-Leg',
        image: 'https://economic-amethyst-5athli2mzy.edgeone.app/3.png',
        href: '/men',
      },
    ],
    sidebarLinks: [
      { name: 'Brands', href: '/men' },
      { name: 'Explore', href: '/men' },
      { name: 'Clothing', href: '/men' },
      { name: 'Accessories', href: '/men' },
      { name: 'Shoes', href: '/men' },
      { name: 'Big & Tall', href: '/men' },
    ]
  };

  const collectionsConfig = {
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
      {
        heading: 'Trending',
        links: [
          { name: 'Linen', href: '/men' },
          { name: 'Polo Shirts', href: '/men' },
          { name: 'Shorts', href: '/men' },
        ],
      }
    ],
    image: 'https://i.pinimg.com/736x/bd/a7/3d/bda73d5c156d7a83b29b4436f0a7636e.jpg',
    editorial: 'The Collection',
  };

  return (
    <div
      className={`absolute top-0 left-0 w-full transition-all duration-300 ease-out origin-top ${
        active
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}
    >
      <div className="bg-cream/95 backdrop-blur-md border-t border-gray-200 shadow-xl px-8 py-10 lg:px-16 lg:py-12">
        <div className="max-w-[1400px] mx-auto">
          {isShop ? (
             <div className="flex gap-12">
               {/* Sidebar */}
               <div className="w-[15%] border-r border-gray-200 pr-6 space-y-8 py-4">
                 {shopConfig.sidebarLinks.map((link, idx) => (
                   <a
                     key={link.name}
                     href={link.href}
                     className={`block font-serif tracking-wide text-lg transition-colors ${idx === 0 ? 'text-gray-900 border-b border-gray-900 pb-2' : 'text-gray-500 hover:text-gold'}`}
                   >
                     {link.name}
                   </a>
                 ))}
               </div>
               
               {/* Brands Grid */}
               <div className="flex-1">
                 <p className="text-xs tracking-widest uppercase text-gray-900 mb-6 font-medium">MEN'S BRANDS</p>
                 <div className="grid grid-cols-4 gap-6">
                   {shopConfig.brands.map(brand => (
                     <a href={brand.href} key={brand.name} className="block group relative aspect-[3/4] overflow-hidden bg-gray-100 border border-gray-200">
                       <img src={brand.image} alt={brand.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                       <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                         <span className="text-white font-serif text-2xl tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0 text-center px-4">
                           {brand.name}
                         </span>
                       </div>
                     </a>
                   ))}
                 </div>
               </div>
             </div>
          ) : (
            <div className="flex gap-10">
              {/* Collection Lists */}
              {collectionsConfig.columns.map((col, idx) => (
                <div key={idx} className="w-1/4">
                  <p className="text-xs tracking-widest uppercase text-gray-900 mb-6 font-medium border-b border-gray-200 pb-2">
                    {col.heading}
                  </p>
                  <div className="space-y-4">
                    {col.links.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        className="block text-sm text-gray-600 hover:text-gold transition-colors duration-300"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>
              ))}

              {/* Editorial Image */}
              <div className="w-1/4 flex items-center justify-end">
                <div className="relative w-full max-w-sm aspect-[4/5] overflow-hidden">
                  <img
                    src={collectionsConfig.image}
                    alt={collectionsConfig.editorial}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                    <p className="font-serif text-2xl text-white tracking-wide">
                      {collectionsConfig.editorial}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
