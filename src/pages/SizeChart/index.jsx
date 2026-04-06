import SEO from '../../components/SEO';

const SizeChartPage = () => {
  return (
    <div className="pt-20">
      <SEO title="Size Chart" description="Find your perfect fit with the Dunmorph size guide for clothing and footwear." />

      {/* Header */}
      <section className="py-16 md:py-24 px-6 bg-cream-dark">
        <div className="max-w-4xl mx-auto text-center">
          <p className="section-subtitle">Find Your Fit</p>
          <h1 className="section-title mb-4">Size Chart</h1>
          <p className="text-gray-500 max-w-lg mx-auto">
            Use the size guides below to find your perfect measurements across our clothing and footwear collections.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-16">

          {/* Men's Clothing */}
          <div>
            <h2 className="font-serif text-2xl md:text-3xl text-gray-900 tracking-wide mb-2">Men's Clothing</h2>
            <div className="w-12 h-px bg-gold mb-8" />
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-900">
                    <th className="py-4 px-4 text-left text-xs tracking-widest uppercase text-gray-900 font-medium">Size</th>
                    <th className="py-4 px-4 text-center text-xs tracking-widest uppercase text-gray-900 font-medium">Chest (in)</th>
                    <th className="py-4 px-4 text-center text-xs tracking-widest uppercase text-gray-900 font-medium">Waist (in)</th>
                    <th className="py-4 px-4 text-center text-xs tracking-widest uppercase text-gray-900 font-medium">Hip (in)</th>
                    <th className="py-4 px-4 text-center text-xs tracking-widest uppercase text-gray-900 font-medium">EU Equivalent</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { size: 'XS', chest: '34-36', waist: '28-30', hip: '34-36', eu: '44' },
                    { size: 'S', chest: '36-38', waist: '30-32', hip: '36-38', eu: '46' },
                    { size: 'M', chest: '38-40', waist: '32-34', hip: '38-40', eu: '48' },
                    { size: 'L', chest: '40-42', waist: '34-36', hip: '40-42', eu: '50' },
                    { size: 'XL', chest: '42-44', waist: '36-38', hip: '42-44', eu: '52' },
                    { size: 'XXL', chest: '44-46', waist: '38-40', hip: '44-46', eu: '54' },
                  ].map((row, i) => (
                    <tr key={row.size} className={`border-b border-gray-200 ${i % 2 === 0 ? 'bg-white' : 'bg-cream'}`}>
                      <td className="py-4 px-4 font-medium text-gray-900">{row.size}</td>
                      <td className="py-4 px-4 text-center text-gray-600">{row.chest}</td>
                      <td className="py-4 px-4 text-center text-gray-600">{row.waist}</td>
                      <td className="py-4 px-4 text-center text-gray-600">{row.hip}</td>
                      <td className="py-4 px-4 text-center text-gray-600">{row.eu}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Women's Clothing */}
          <div>
            <h2 className="font-serif text-2xl md:text-3xl text-gray-900 tracking-wide mb-2">Women's Clothing</h2>
            <div className="w-12 h-px bg-gold mb-8" />
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-900">
                    <th className="py-4 px-4 text-left text-xs tracking-widest uppercase text-gray-900 font-medium">Size</th>
                    <th className="py-4 px-4 text-center text-xs tracking-widest uppercase text-gray-900 font-medium">Bust (in)</th>
                    <th className="py-4 px-4 text-center text-xs tracking-widest uppercase text-gray-900 font-medium">Waist (in)</th>
                    <th className="py-4 px-4 text-center text-xs tracking-widest uppercase text-gray-900 font-medium">Hip (in)</th>
                    <th className="py-4 px-4 text-center text-xs tracking-widest uppercase text-gray-900 font-medium">EU Equivalent</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { size: 'XS', bust: '30-32', waist: '24-26', hip: '34-36', eu: '34' },
                    { size: 'S', bust: '32-34', waist: '26-28', hip: '36-38', eu: '36' },
                    { size: 'M', bust: '34-36', waist: '28-30', hip: '38-40', eu: '38' },
                    { size: 'L', bust: '36-38', waist: '30-32', hip: '40-42', eu: '40' },
                    { size: 'XL', bust: '38-40', waist: '32-34', hip: '42-44', eu: '42' },
                  ].map((row, i) => (
                    <tr key={row.size} className={`border-b border-gray-200 ${i % 2 === 0 ? 'bg-white' : 'bg-cream'}`}>
                      <td className="py-4 px-4 font-medium text-gray-900">{row.size}</td>
                      <td className="py-4 px-4 text-center text-gray-600">{row.bust}</td>
                      <td className="py-4 px-4 text-center text-gray-600">{row.waist}</td>
                      <td className="py-4 px-4 text-center text-gray-600">{row.hip}</td>
                      <td className="py-4 px-4 text-center text-gray-600">{row.eu}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Footwear */}
          <div>
            <h2 className="font-serif text-2xl md:text-3xl text-gray-900 tracking-wide mb-2">Footwear</h2>
            <div className="w-12 h-px bg-gold mb-8" />
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-900">
                    <th className="py-4 px-4 text-left text-xs tracking-widest uppercase text-gray-900 font-medium">UK</th>
                    <th className="py-4 px-4 text-center text-xs tracking-widest uppercase text-gray-900 font-medium">US (Men)</th>
                    <th className="py-4 px-4 text-center text-xs tracking-widest uppercase text-gray-900 font-medium">US (Women)</th>
                    <th className="py-4 px-4 text-center text-xs tracking-widest uppercase text-gray-900 font-medium">EU</th>
                    <th className="py-4 px-4 text-center text-xs tracking-widest uppercase text-gray-900 font-medium">Foot Length (cm)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { uk: '6', usm: '7', usw: '8', eu: '39', cm: '24.5' },
                    { uk: '7', usm: '8', usw: '9', eu: '40', cm: '25.4' },
                    { uk: '8', usm: '9', usw: '10', eu: '42', cm: '26.2' },
                    { uk: '9', usm: '10', usw: '11', eu: '43', cm: '27.1' },
                    { uk: '10', usm: '11', usw: '12', eu: '44', cm: '27.9' },
                    { uk: '11', usm: '12', usw: '13', eu: '45', cm: '28.8' },
                  ].map((row, i) => (
                    <tr key={row.uk} className={`border-b border-gray-200 ${i % 2 === 0 ? 'bg-white' : 'bg-cream'}`}>
                      <td className="py-4 px-4 font-medium text-gray-900">{row.uk}</td>
                      <td className="py-4 px-4 text-center text-gray-600">{row.usm}</td>
                      <td className="py-4 px-4 text-center text-gray-600">{row.usw}</td>
                      <td className="py-4 px-4 text-center text-gray-600">{row.eu}</td>
                      <td className="py-4 px-4 text-center text-gray-600">{row.cm}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Measuring Tips */}
          <div className="bg-cream-dark p-8 md:p-12">
            <h3 className="font-serif text-xl md:text-2xl text-gray-900 tracking-wide mb-6">How to Measure</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Chest / Bust', desc: 'Measure around the fullest part of your chest, keeping the tape level and snug.' },
                { title: 'Waist', desc: 'Measure around your natural waistline, keeping the tape comfortably loose.' },
                { title: 'Hip', desc: 'Measure around the fullest part of your hips, approximately 8 inches below your waist.' },
              ].map(tip => (
                <div key={tip.title}>
                  <p className="text-sm font-medium text-gray-900 mb-2 tracking-wide">{tip.title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{tip.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default SizeChartPage;
