const services = [
  {
    image: "/images/family-insurance.png",
    title: "Final Expense Basics",
    description: "Learn about the basics of final expense coverage and how it can be used to help manage end-of-life costs.",
    variant: "blue",
  },
  {
    image: "/images/mortgage-insurance.png",
    title: "Why Plan Ahead?",
    description: "Discover the importance of early preparation and how exploring options in advance can ease future stress for loved ones.",
    variant: "beige",
  },
  {
    image: "/images/pension-planning.png",
    title: "Coverage Options",
    description: "Explore different final expense plan structures that may suit a variety of personal and family needs.",
    variant: "blue",
  },
  {
    image: "/images/permanent-life-insurance.png",
    title: "Cost Considerations",
    description: "Understand the typical costs associated with final expense coverage and what factors might influence pricing.",
    variant: "beige",
  },
  {
    image: "/images/retirement-planning.png",
    title: "Common Questions",
    description: "Find answers to frequently asked questions about eligibility, payments, coverage details, and how plans are structured.",
    variant: "blue",
  },
  {
    image: "/images/funeral-planning.png",
    title: "How to Get Started",
    description: "Get guidance on steps to take when considering final expense and what information may be needed.",
    variant: "beige",
  },
] as const;

const ExploreSection = () => {
  return (
    <section className="relative overflow-hidden py-20" style={{ backgroundColor: "#09103E" }}>
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/videos/waves.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#09103E]/70" />
      </div>

      <div className="relative container mx-auto px-4 lg:px-8">
        <h2 className="text-center font-display text-3xl md:text-4xl font-bold text-white mb-3">
          Explore Your Options with Confidence
        </h2>
        <p className="mx-auto max-w-2xl text-center text-white/80 text-sm md:text-base mb-12">
          Learn more about final expense planning, available coverage options,
          common questions, and how to take the next step—all in one place.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service) => {
            const isBlue = service.variant === "blue";
            return (
              <div
                key={service.title}
                className={
                  "rounded-xl p-7 shadow-lg transition-transform hover:-translate-y-1 " +
                  (isBlue ? "bg-[#1976D2] text-white" : "bg-[#FFE6C5] text-[#09103E]")
                }
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md" style={{ backgroundColor: "#09103E" }}>
                  <img src={service.image} alt="" className="h-6 w-6 object-contain" />
                </div>
                <h3 className={"font-display text-base font-bold mb-2 " + (isBlue ? "text-white" : "text-[#09103E]")}>
                  {service.title}
                </h3>
                <p className={"text-sm leading-relaxed " + (isBlue ? "text-white/85" : "text-[#09103E]/80")}>
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
