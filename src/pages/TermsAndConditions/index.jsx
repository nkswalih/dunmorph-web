import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';

const TermsAndConditionsPage = () => {
  const sections = [
    {
      title: '1. General Terms',
      content: `Welcome to DUNMORPH. By accessing and using our website, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use this site.

DUNMORPH reserves the right to update these Terms and Conditions at any time without prior notice. Your continued use of the site following any changes constitutes your acceptance of the new terms.`,
    },
    {
      title: '2. Products & Pricing',
      content: `All products displayed on our website are subject to availability. We reserve the right to discontinue any product at any time. Prices for our products are subject to change without notice.

We make every effort to display our products and their colours as accurately as possible. However, we cannot guarantee that your monitor's display of any colour will be accurate. All prices are listed in Indian Rupees (₹) and include applicable taxes unless otherwise stated.`,
    },
    {
      title: '3. Orders & Payment',
      content: `When you place an order with DUNMORPH, you are making an offer to purchase. We reserve the right to refuse or cancel any order at any time for reasons including but not limited to product availability, errors in pricing or product information, or suspected fraudulent activity.

We accept major credit cards, debit cards, UPI, and net banking. All payment information is securely processed through our encrypted payment gateway.`,
    },
    {
      title: '4. Shipping & Delivery',
      content: `DUNMORPH offers complimentary shipping on all orders within India. International shipping rates are calculated at checkout. Delivery times are estimates and are not guaranteed.

Standard delivery within India: 5–7 business days. Express delivery: 2–3 business days. International delivery: 10–15 business days. We are not responsible for delays caused by customs processing for international orders.`,
    },
    {
      title: '5. Returns & Exchanges',
      content: `We accept returns within 30 days of delivery for unused items in their original packaging and condition. Items must be unworn, unwashed, and with all original tags attached.

To initiate a return, please contact our customer service team. Return shipping for defective items will be covered by DUNMORPH. For all other returns, the customer is responsible for return shipping costs. Refunds will be processed to the original payment method within 7–10 business days after we receive the returned item.`,
    },
    {
      title: '6. Intellectual Property',
      content: `All content on this website including but not limited to text, graphics, logos, images, product descriptions, and software is the property of DUNMORPH and is protected by international copyright laws.

You may not reproduce, distribute, modify, or create derivative works from any content on this site without express written permission from DUNMORPH.`,
    },
    {
      title: '7. Privacy & Data',
      content: `Your privacy is important to us. We collect and process personal data in accordance with our Privacy Policy. By using our website, you consent to the collection and use of your information as described therein.

We implement appropriate security measures to protect your personal information against unauthorized access, alteration, or destruction.`,
    },
    {
      title: '8. Limitation of Liability',
      content: `DUNMORPH shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our website or products. Our total liability shall not exceed the amount paid by you for the specific product giving rise to the claim.

This limitation applies to all causes of action, whether based on contract, tort, or any other legal theory.`,
    },
    {
      title: '9. Contact Information',
      content: `For any questions regarding these Terms and Conditions, please contact us:

Email: legal@dunmorph.com
Phone: +91 484 xxx xxxx
Address: DUNMORPH, Kerala, India

Our customer service team is available Monday through Saturday, 9:00 AM to 6:00 PM IST.`,
    },
  ];

  return (
    <div className="pt-20">
      <SEO title="Terms & Conditions" description="Read the DUNMORPH terms and conditions governing your use of our website and services." />

      {/* Header */}
      <section className="py-16 md:py-24 px-6 bg-cream-dark">
        <div className="max-w-4xl mx-auto text-center">
          <p className="section-subtitle">Legal</p>
          <h1 className="section-title mb-4">Terms & Conditions</h1>
          <p className="text-gray-500 max-w-lg mx-auto text-sm">
            Last updated: April 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-12">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-serif text-xl md:text-2xl text-gray-900 tracking-wide mb-4">
                {section.title}
              </h2>
              <div className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                {section.content}
              </div>
            </div>
          ))}

          {/* Footer CTA */}
          <div className="pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-500 text-sm mb-6">
              If you have any questions about these terms, please don't hesitate to reach out.
            </p>
            <Link to="/contact" className="btn-outline-dark">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditionsPage;
