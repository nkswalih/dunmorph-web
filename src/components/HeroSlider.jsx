import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

const HeroSlider = ({ slides = [] }) => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent(prev => (prev + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (paused || slides.length <= 1) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [paused, next, slides.length]);

  if (!slides.length) return null;

  return (
    <section
      className="relative h-[70vh] min-h-[500px] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === current ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            loading={index === 0 ? 'eager' : 'lazy'}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            {slide.subtitle && (
              <p className="text-xs tracking-widest uppercase text-gold mb-4 animate-fade-in">
                {slide.subtitle}
              </p>
            )}
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-6 tracking-wide leading-tight">
              {slide.title}
            </h1>
            {slide.description && (
              <p className="text-white/70 text-sm md:text-base max-w-md mx-auto mb-8 leading-relaxed">
                {slide.description}
              </p>
            )}
            {slide.link && (
              <Link to={slide.link} className="btn-primary">
                {slide.cta || 'Explore Now'}
              </Link>
            )}
          </div>
        </div>
      ))}

      {/* Dots */}
      {slides.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`transition-all duration-300 ${
                index === current
                  ? 'w-8 h-2 bg-gold'
                  : 'w-2 h-2 bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default HeroSlider;
