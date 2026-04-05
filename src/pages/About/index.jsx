const AboutPage = () => {
  return (
    <div className="pt-20">
      <section className="py-16 md:py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-widest uppercase text-gold mb-4 font-medium">Our Story</p>
          <h1 className="font-serif text-4xl md:text-6xl text-gray-900 tracking-wide mb-6">About DUNMORPH</h1>
          <div className="w-16 h-px bg-gold mx-auto mb-8" />
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            DUNMORPH was born from a desire to redefine modern elegance. We believe in clothing that doesn't just follow trends — it shapes them quietly, with intention and precision.
          </p>
          <p className="text-gray-500 leading-relaxed mb-8">
            Every piece in our collection is designed with purpose, crafted with care, and curated for those who appreciate the subtlety of true style. From the fabrics we choose to the silhouettes we create, each decision is guided by an unwavering commitment to quality.
          </p>
          <p className="text-gray-500 leading-relaxed">
            We are a brand for those who don't need to announce their presence — their style speaks for itself.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-cream-dark">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { title: 'Quality', text: 'Fabrics and craftsmanship we stand behind.' },
            { title: 'Intention', text: 'Every piece designed with deliberate purpose.' },
            { title: 'Quietude', text: 'Style that speaks without raising its voice.' },
          ].map((item) => (
            <div key={item.title} className="py-6">
              <p className="text-xs tracking-widest uppercase text-gold mb-2">{item.title}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
