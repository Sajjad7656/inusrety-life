import { Phone, CheckCircle } from "lucide-react";

const benefits = ["Affordable Options", "Easy Process", "Family Support"];

const WhyConsiderSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-6">
          Why Consider Final Expense?
        </h2>

        <div className="flex flex-wrap justify-center gap-10 mb-10">
          {benefits.map((b) => (
            <div key={b} className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5" style={{ color: "#1D4ED8" }} />
              <span className="text-gray-500 font-body text-sm">{b}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="tel:18008953413" className="flex items-center gap-3 text-navy">
            <Phone className="w-5 h-5" style={{ color: "#1D4ED8" }} />
            <span className="text-lg font-medium">1-800-895-3413 (TTY)</span>
          </a>
          <a
            href="/quote"
            className="bg-blue-600 text-white font-display font-semibold px-10 py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            Get a Quote
          </a>
        </div>

        <div className="mt-16">
          <h3 className="font-display text-4xl md:text-5xl font-bold text-navy leading-tight">
            You Have Questions
            <br />
            We Have Answers
          </h3>
        </div>
      </div>
    </section>
  );
};

export default WhyConsiderSection;
