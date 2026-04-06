import SEO from '../../components/SEO';

const CareInstructionsPage = () => {
  return (
    <div className="pt-20">
      <SEO title="Care Instructions" description="Learn how to care for your Dunmorph garments." />

      <section className="py-16 md:py-24 px-6 bg-cream-dark">
        <div className="max-w-4xl mx-auto text-center">
          <p className="section-subtitle">Client Service</p>
          <h1 className="section-title mb-4">Care Instructions</h1>
          <p className="text-gray-500 max-w-lg mx-auto text-sm">
            Maintain the longevity and quality of your DUNMORPH pieces with these specialized fabric care guides.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-12">
          
          <div>
            <h2 className="font-serif text-xl md:text-2xl text-gray-900 tracking-wide mb-4">Linen Care</h2>
            <div className="text-gray-600 text-sm leading-relaxed space-y-4 border-l-2 border-gold pl-6 py-2">
              <p>Linen is a durable, breathable natural fiber that softens over time. To preserve its texture and color, follow these guidelines:</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Machine wash cold on a gentle cycle, or hand wash.</li>
                <li>Do not bleach. Opt for gentle, liquid detergents.</li>
                <li>Line dry in the shade to prevent color fading and excessive creasing.</li>
                <li>Iron on medium-high heat while the fabric is still slightly damp for a crisp look.</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-xl md:text-2xl text-gray-900 tracking-wide mb-4">Cotton Care</h2>
            <div className="text-gray-600 text-sm leading-relaxed space-y-4 border-l-2 border-gold pl-6 py-2">
              <p>Our premium cotton is woven for exceptional softness. Keep it looking its best by washing with care:</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Machine wash inside out on a cool, delicate cycle.</li>
                <li>Wash with like colors to prevent color transfer.</li>
                <li>Tumble dry on low or lay flat to dry to minimize shrinkage.</li>
                <li>Iron on medium heat if necessary.</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-xl md:text-2xl text-gray-900 tracking-wide mb-4">Leather & Accessories</h2>
            <div className="text-gray-600 text-sm leading-relaxed space-y-4 border-l-2 border-gold pl-6 py-2">
              <p>Full-grain leather develops a unique patina over time. Treat it respectfully to ensure it ages beautifully.</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Keep leather away from prolonged direct heat and sunlight.</li>
                <li>Wipe clean with a soft, slightly damp cloth. Do not use harsh chemicals.</li>
                <li>Apply a premium leather conditioner every 6 months to keep it supple.</li>
                <li>Store in the provided dust bag when not in use to protect from dust and moisture.</li>
              </ul>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default CareInstructionsPage;
