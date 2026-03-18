import { Phone, CheckCircle } from "lucide-react";

const benefits = ["Affordable Options", "Easy Process", "Family Support"];

const WhyConsiderSection = () => {
  return (
    <section className="py-20 bg-navy">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-10">
          Why Consider Final Expense?
        </h2>

        <div className="flex flex-wrap justify-center gap-8 mb-10">
          {benefits.map((b) => (
            <div key={b} className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-accent" />
              <span className="text-primary-foreground font-display font-semibold text-lg">{b}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="tel:18008953413" className="flex items-center gap-2 text-primary-foreground/80 text-sm">
            <Phone className="w-4 h-4" />
            1-800-895-3413 (TTY)
          </a>
          <a href="#quote" className="bg-accent text-accent-foreground font-display font-semibold px-10 py-3 rounded-full hover:bg-amber-hover transition-colors">
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyConsiderSection;
