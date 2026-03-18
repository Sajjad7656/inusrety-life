const services = [
  {
    image: "/images/pension-planning.png",
    title: "Pension Planning",
    description: "Plan your retirement with confidence through comprehensive pension planning resources and expert guidance.",
  },
  {
    image: "/images/funeral-planning.png",
    title: "Funeral Planning",
    description: "Take proactive steps to arrange end-of-life plans, reducing stress and financial burden on your loved ones.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-soft-gray rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-28 w-28 object-contain"
                />
              </div>
              <h3 className="font-display text-xl font-bold text-navy mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <a href="#" className="text-accent font-display font-semibold text-sm hover:underline">
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
