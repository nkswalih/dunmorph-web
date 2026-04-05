import { Link } from 'react-router-dom';
import { collections } from '../../data/productData';

const FeaturedCollections = () => {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-subtitle">Curated For You</p>
          <h2 className="section-title">The Collections</h2>
          <div className="w-16 h-px bg-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection) => (
            <div key={collection.name} className="group relative overflow-hidden aspect-[3/4]">
              <img
                src={collection.image}
                alt={collection.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30 transition-all duration-500 group-hover:bg-black/40" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3 className="font-serif text-2xl md:text-3xl text-white tracking-wide mb-4">
                  {collection.name}
                </h3>
                {collection.active ? (
                  <Link
                    to={collection.href}
                    className="inline-block px-8 py-3 border border-white text-white text-xs tracking-widest uppercase transition-all duration-500 hover:bg-white hover:text-gray-900"
                  >
                    Discover
                  </Link>
                ) : (
                  <span className="text-xs tracking-widest uppercase text-white/50">
                    Coming Soon
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
