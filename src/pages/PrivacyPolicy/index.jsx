import SEO from '../../components/SEO';

const PrivacyPolicyPage = () => {
  return (
    <div className="pt-20">
      <SEO title="Privacy Policy" description="Read how DUNMORPH collects, uses, and protects your personal data." />

      <section className="py-16 md:py-24 px-6 bg-cream-dark">
        <div className="max-w-4xl mx-auto text-center">
          <p className="section-subtitle">Legal</p>
          <h1 className="section-title mb-4">Privacy Policy</h1>
          <p className="text-gray-500 max-w-lg mx-auto text-sm">
            Last updated: April 2026. We are committed to protecting your personal information and your right to privacy.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-12 text-sm text-gray-600 leading-relaxed">
          
          <div>
            <h2 className="font-serif text-xl md:text-2xl text-gray-900 tracking-wide mb-4">1. Information We Collect</h2>
            <p>
              We collect personal information that you voluntarily provide to us when you register on the Website, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Website, or otherwise when you contact us.
            </p>
            <p className="mt-2">
              The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make, and the products and features you use. The personal information we collect may include the following: names, phone numbers, email addresses, mailing addresses, billing addresses, debit/credit card numbers, and other similar information.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl md:text-2xl text-gray-900 tracking-wide mb-4">2. How We Use Your Information</h2>
            <p>
              We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-4">
              <li>To facilitate account creation and logon process.</li>
              <li>To fulfill and manage your orders.</li>
              <li>To send administrative information to you.</li>
              <li>To send you marketing and promotional communications.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-xl md:text-2xl text-gray-900 tracking-wide mb-4">3. Will Your Information Be Shared?</h2>
            <p>
              We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We may process or share your data that we hold based on the following legal basis:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-4">
              <li><strong>Consent:</strong> We may process your data if you have given us specific consent to use your personal information for a specific purpose.</li>
              <li><strong>Legitimate Interests:</strong> We may process your data when it is reasonably necessary to achieve our legitimate business interests.</li>
              <li><strong>Performance of a Contract:</strong> Where we have entered into a contract with you, we may process your personal information to fulfill the terms of our contract, specifically involving third party courier services.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-xl md:text-2xl text-gray-900 tracking-wide mb-4">4. How Long Do We Keep Your Information?</h2>
            <p>
              We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements).
            </p>
          </div>

          <div className="pt-8 border-t border-gray-200">
            <p className="mb-4">If you have questions or comments about this notice, you may email us at <strong>privacy@dunmorph.com</strong>.</p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
