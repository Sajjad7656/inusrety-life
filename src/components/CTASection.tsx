const CTASection = () => {
  return (
    <section id="quote" className="py-20 bg-navy">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Secure Your Future
        </h2>
        <p className="font-display text-xl text-accent mb-6">Personalized Guidance!</p>
        <p className="text-primary-foreground/80 font-body max-w-2xl mx-auto mb-10">
          Thoughtful planning today can make a meaningful difference for your loved ones, offering clarity, comfort, and fewer worries during difficult times.
        </p>
        <a
          href="#quote"
          className="inline-block bg-accent text-accent-foreground font-display font-semibold px-12 py-4 rounded-full hover:bg-amber-hover transition-colors text-lg"
        >
          Get a Quote
        </a>
      </div>
    </section>
  );
};

export default CTASection;
