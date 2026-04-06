import SEO from '../../components/SEO';

const CookiePolicyPage = () => {
  return (
    <div className="pt-20">
      <SEO title="Cookie Policy" description="Information about how DUNMORPH uses cookies on our website." />

      <section className="py-16 md:py-24 px-6 bg-cream-dark">
        <div className="max-w-4xl mx-auto text-center">
          <p className="section-subtitle">Legal</p>
          <h1 className="section-title mb-4">Cookie Policy</h1>
          <p className="text-gray-500 max-w-lg mx-auto text-sm">
            Explaining how and why we use cookies and similar technologies.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-12 text-sm text-gray-600 leading-relaxed">
          
          <div>
            <h2 className="font-serif text-xl md:text-2xl text-gray-900 tracking-wide mb-4">What Are Cookies?</h2>
            <p>
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide reporting information and personalize your shopping experience.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl md:text-2xl text-gray-900 tracking-wide mb-4">How We Use Cookies</h2>
            <p>We use cookies for several reasons:</p>
            <ul className="list-disc pl-5 space-y-4 mt-4">
              <li>
                <strong>Essential Cookies:</strong> These cookies are strictly necessary to provide you with services available through our Website and to use some of its features, such as adding items to your cart and securely checking out.
              </li>
              <li>
                <strong>Analytics Cookies:</strong> These cookies collect information that is used either in aggregate form to help us understand how our Website is being used or how effective our marketing campaigns are, or to help us customize our Website for you.
              </li>
              <li>
                <strong>Preference Cookies:</strong> These cookies allow our Website to remember choices you make (such as your preferred language or the region you are in) and provide enhanced, more personal features.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-xl md:text-2xl text-gray-900 tracking-wide mb-4">Managing Cookies</h2>
            <p>
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in your web browser. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.
            </p>
            <p className="mt-2">
              As the means by which you can refuse cookies through your web browser controls vary from browser-to-browser, you should visit your browser's help menu for more information.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default CookiePolicyPage;
