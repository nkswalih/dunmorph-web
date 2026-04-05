import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://style-old-money.com/cdn/shop/articles/0_X5R8X1ct55rnvyit_7.jpg?v=1729752765"
          alt="DUNMORPH Heritage Collection"
          className="w-full h-full object-cover"
          loading="eager"
        />

        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 animate-slide-up">
        <p className="text-xs tracking-widest uppercase text-gold mb-4 shadow-lg">
          Based on India | Kerala
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-wide leading-tight">
          The Art of
          <br />
          <span className="italic">Quiet</span> Luxury
        </h1>
        <p className="text-white/70 text-sm md:text-base max-w-md mx-auto mb-10 leading-relaxed">
          Where heritage craftsmanship meets modern refinement.
          <br />
          A collection for those who know.
        </p>
        <Link to="/men" className="btn-primary">
          Explore Collection
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-5 h-5 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
