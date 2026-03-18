import { Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div
          className="overflow-hidden rounded-2xl"
          style={{
            background: "linear-gradient(135deg, #09103E 0%, #09103E 65%, #756256 100%)",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="px-8 py-14 lg:px-14">
              <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
                <span className="text-white">Secure Your Future</span>
                <br />
                <span style={{ color: "#FFDBA2" }}>Personalized</span>
                <br />
                <span style={{ color: "#FFDBA2" }}>Guidance!</span>
              </h2>

              <p className="text-white/75 font-body max-w-md mb-10">
                Thoughtful planning today can make a meaningful difference for your loved ones, offering clarity, comfort, and fewer worries during difficult times.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <a
                  href="/quote"
                  className="inline-flex items-center justify-center rounded-md bg-blue-600 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                >
                  Get a Quote
                </a>

                <a href="tel:18008953413" className="inline-flex items-center gap-3 text-white/90">
                  <Phone className="h-5 w-5" style={{ color: "#1D4ED8" }} />
                  <span className="text-sm font-medium">1-800-895-3413 (TTY)</span>
                </a>
              </div>
            </div>

            <div className="relative h-[360px] sm:h-[420px] lg:h-[520px]">
              <img
                src="/images/5.png"
                alt="Secure your future"
                className="absolute inset-0 h-full w-full object-contain object-bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
