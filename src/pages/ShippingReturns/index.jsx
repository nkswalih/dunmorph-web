import SEO from '../../components/SEO';

const ShippingReturnsPage = () => {
  return (
    <div className="pt-20">
      <SEO title="Shipping & Returns" description="Information about Dunmorph shipping policies and returns." />

      <section className="py-16 md:py-24 px-6 bg-cream-dark">
        <div className="max-w-4xl mx-auto text-center">
          <p className="section-subtitle">Client Service</p>
          <h1 className="section-title mb-4">Shipping & Returns</h1>
          <p className="text-gray-500 max-w-lg mx-auto text-sm">
            Everything you need to know about getting your order and returning it if necessary.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-12">
          
          <div>
            <h2 className="font-serif text-xl md:text-2xl text-gray-900 tracking-wide mb-4">Shipping Policy</h2>
            <div className="text-gray-600 text-sm leading-relaxed space-y-4">
              <p>
                DUNMORPH is proud to offer complimentary standard shipping on all orders within India. 
                Orders are processed and dispatched within 1-2 business days from our Kerala headquarters.
              </p>
              <h3 className="font-semibold text-gray-900 mt-6 mb-2">Delivery Timelines</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Standard Delivery (Complimentary):</strong> 5–7 business days</li>
                <li><strong>Express Delivery (₹499):</strong> 2–3 business days</li>
                <li><strong>International Shipping:</strong> 10–15 business days (Rates calculated at checkout based on destination)</li>
              </ul>
              <p className="mt-4">
                Please note that international orders may be subject to local customs duties and taxes, which are the responsibility of the recipient.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-xl md:text-2xl text-gray-900 tracking-wide mb-4">Returns & Exchanges</h2>
            <div className="text-gray-600 text-sm leading-relaxed space-y-4">
              <p>
                We accept returns and exchanges within 30 days of the delivery date. Items must be returned in their original condition: unworn, unwashed, and with all original tags and packaging intact.
              </p>
              <h3 className="font-semibold text-gray-900 mt-6 mb-2">How to Return an Item</h3>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Contact our client service team at <strong>returns@dunmorph.com</strong> to initiate the process.</li>
                <li>Securely pack the items in the original packaging.</li>
                <li>Attach the provided return label to the outside of the package.</li>
                <li>Drop the package off at your nearest authorized courier location.</li>
              </ol>
              <p className="mt-4">
                Refunds are processed within 7-10 business days after we receive and inspect the returned items. The refund will be credited to your original method of payment.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ShippingReturnsPage;
