const Editorial = () => {
  return (
    <section className="relative h-[70vh] md:h-[80vh] min-h-[500px] overflow-hidden">
      <img
        // src="https://i.pinimg.com/1200x/6b/16/4f/6b164f15d732e56099d23067ce897c04.jpg"
        // src="https://aicdn.picsart.com/fc49f02c-0539-49be-a84f-37f7f4388b30.jpg"
        src="https://aicdn.picsart.com/9e47e422-2ccf-45a2-bacf-78dff37c299c.jpg"
        alt="DUNMORPH Editorial"
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/25" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-6 animate-slide-up">
          <p className="text-xs tracking-widest uppercase text-gold mb-4">
            The Journal
          </p>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white tracking-wide mb-6">
            Crafted, Not <span className="italic">Chased</span>
          </h2>
          <p className="text-white/70 max-w-lg mx-auto leading-relaxed text-sm md:text-base">
            Every thread, every stitch, every detail speaks to a philosophy of
            enduring elegance. This is not fashion for seasons. This is style for life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Editorial;
