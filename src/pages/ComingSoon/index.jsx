import { useParams, Link } from 'react-router-dom';

const ComingSoonPage = () => {
  const { category } = useParams();

  const categoryInfo = {
    women: { title: 'Women', subtitle: 'Elegance for Her' },
    accessories: { title: 'Accessories', subtitle: 'The Finishing Touch' },
    watches: { title: 'Watches', subtitle: 'Timepieces of Distinction' },
  };

  const info = categoryInfo[category?.toLowerCase()] || {
    title: category?.charAt(0).toUpperCase() + category?.slice(1),
    subtitle: 'Coming Soon',
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-xs tracking-widest uppercase text-gold mb-4 font-medium">
          In Development
        </p>
        <h1 className="font-serif text-5xl md:text-7xl text-gray-900 mb-4 tracking-wide">
          {info.title}
        </h1>
        <div className="w-16 h-px bg-gold mx-auto mb-6" />
        <p className="text-gray-500 text-lg mb-4">{info.subtitle}</p>
        <p className="text-gray-400 text-sm max-w-md mx-auto mb-10">
          We are crafting something exceptional. The {info.title.toLowerCase()}{' '}
          collection will be available soon.
        </p>
        <Link to="/" className="btn-outline-dark">
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default ComingSoonPage;
