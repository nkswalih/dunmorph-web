const ContactPage = () => {
  return (
    <div className="pt-20">
      <section className="py-16 md:py-28 px-6">
        <div className="max-w-xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-gold mb-4 font-medium text-center">Get in Touch</p>
          <h1 className="font-serif text-4xl md:text-6xl text-gray-900 tracking-wide mb-6 text-center">Contact</h1>
          <div className="w-16 h-px bg-gold mx-auto mb-8" />

          <form className="space-y-6">
            <div>
              <label className="block text-xs tracking-widest uppercase text-gray-500 mb-2">Name</label>
              <input
                type="text"
                className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gold transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs tracking-widest uppercase text-gray-500 mb-2">Email</label>
              <input
                type="email"
                className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gold transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs tracking-widest uppercase text-gray-500 mb-2">Message</label>
              <textarea
                rows="5"
                className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gold transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gray-900 text-white text-xs tracking-widest uppercase py-4 hover:bg-gold transition-colors duration-300"
            >
              Send Message
            </button>
          </form>

          <div className="mt-16 pt-8 border-t border-gray-200 text-center">
            <p className="text-xs tracking-widest uppercase text-gray-500 mb-2">Email</p>
            <p className="text-sm text-gray-700">hello@dunmorph.com</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
