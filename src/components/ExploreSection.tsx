const services = [
  {
    image: "/images/family-insurance.png",
    title: "Final Expense Basics",
    description: "Learn about the basics of final expense coverage and how it can be used to help manage end-of-life costs.",
  },
  {
    image: "/images/mortgage-insurance.png",
    title: "Why Plan Ahead?",
    description: "Discover the importance of early preparation and how exploring options in advance can ease future stress for loved ones.",
  },
  {
    image: "/images/pension-planning.png",
    title: "Coverage Options",
    description: "Explore different final expense plan structures that may suit a variety of personal and family needs.",
  },
  {
    image: "/images/permanent-life-insurance.png",
    title: "Cost Considerations",
    description: "Understand the typical costs associated with final expense coverage and what factors might influence pricing.",
  },
  {
    image: "/images/retirement-planning.png",
    title: "Common Questions",
    description: "Find answers to frequently asked questions about eligibility, payments, coverage details, and how plans are structured.",
  },
  {
    image: "/images/funeral-planning.png",
    title: "How to Get Started",
    description: "Get guidance on steps to take when considering final expense and what information may be needed.",
  },
];

const ExploreSection = () => {
  return (
    <section className="py-20 bg-soft-gray">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-navy text-center mb-4">
          Explore Your Options with Confidence
        </h2>
        <p className="text-muted-foreground font-body text-center mb-12 max-w-3xl mx-auto">
          Learn more about final expense planning, available coverage options, common questions, and how to take the next step—all in one place.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group">
              <div className="p-6 flex justify-center">
                <img src={service.image} alt={service.title} className="h-32 w-32 object-contain group-hover:scale-105 transition-transform" />
              </div>
              <div className="px-6 pb-6">
                <h3 className="font-display text-lg font-bold text-navy mb-2">{service.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
