import { useState, useEffect } from 'react';
import { fetchBestSellers } from '../../services/api';
import ProductCard from '../../components/ProductCard';

const BestSellers = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchBestSellers();
        setProducts(data);
      } catch (err) {
        console.error('Failed to load best sellers:', err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-subtitle">Most Coveted</p>
          <h2 className="section-title">Best Sellers</h2>
          <div className="w-16 h-px bg-gold mx-auto mt-6" />
        </div>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="aspect-[3/4] bg-gray-200 mb-4" />
                <div className="h-4 bg-gray-200 w-3/4 mb-2" />
                <div className="h-3 bg-gray-200 w-1/4" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BestSellers;
