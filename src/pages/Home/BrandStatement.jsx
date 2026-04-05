import { Link } from 'react-router-dom';

const BrandStatement = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-cream-dark">
      <div className="max-w-4xl mx-auto text-center">
        <p className="section-subtitle mb-6">Our Philosophy</p>
        <blockquote className="font-serif text-3xl md:text-4xl lg:text-5xl text-gray-900 tracking-wide leading-tight mb-8">
          &ldquo;We do not follow trends. We craft
          <span className="italic text-gold"> permanence</span>
          .&rdquo;
        </blockquote>
        <div className="w-12 h-px bg-gold mx-auto mb-8" />
        <p className="text-gray-600 max-w-xl mx-auto leading-relaxed mb-10">
          DUNMORPH was founded on a singular belief: that true style is timeless.
          Each garment is a testament to decades of artisanal mastery, rendered in
          fabrics sourced from the world's finest mills.
        </p>
        <Link to="/men" className="btn-outline-dark">
          Discover the Menswear Edit
        </Link>
      </div>
    </section>
  );
};

export default BrandStatement;
