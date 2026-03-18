import { Phone } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="mt-12 px-4 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        <div
          className="overflow-hidden rounded-3xl shadow-lg"
          style={{ backgroundColor: "#FFE6C5" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative min-h-[320px] lg:min-h-[420px]">
              <img
                src="/images/3"
                alt="About Insurety Life"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="p-8 lg:p-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-6">About Us</h2>

              <div className="space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">
                  Insurety Life provides information on final expense plans designed to help cover end-of-life costs and support loved ones during difficult times.
                </p>

                <p className="text-lg leading-relaxed">
                  With a caring approach and clear guidance, Insurety Life aims to assist individuals in exploring options for planning ahead, understanding costs, and considering ways to support loved ones during challenging times.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-6">
                <a
                  href="#"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg transition-colors"
                >
                  Learn More
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>

                <a href="tel:18008953413" className="inline-flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-lg font-medium text-gray-700">1-800-895-3413 (TTY)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
