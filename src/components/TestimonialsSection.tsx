import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Robert H.",
    image: "/images/testimonial-robert.jpg",
    text: "When I started thinking about how I could help my family avoid future stress, I came across information on final expense planning. The process was simple and informative, and it helped me see the value in being proactive. Now, I feel more confident knowing I've made thoughtful decisions for the road ahead.",
  },
  {
    name: "James R.",
    image: "/images/testimonial-james.jpg",
    text: "I never thought much about end-of-life planning until I saw how difficult it was for a close friend's family to cover final expenses. That experience made me realize the value of being prepared. Exploring final expense coverage helped me understand what steps I could take to ease the burden on my loved ones.",
  },
  {
    name: "Susan D.",
    image: "/images/testimonial-susan.jpg",
    text: "Planning for final expenses wasn't something I ever looked into until recently. After doing some research, I realized how helpful it could be for my family. Taking time to understand my options gave me a clearer picture of what's involved and helped me feel more prepared.",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="py-20 bg-soft-gray">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-navy text-center mb-12">
          Testimonials From Clients
        </h2>

        <div className="max-w-3xl mx-auto relative">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-sm text-center">
            <img
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
            />
            <p className="font-display font-bold text-navy text-lg mb-4">{testimonials[current].name}</p>
            <p className="text-muted-foreground font-body leading-relaxed italic">
              "{testimonials[current].text}"
            </p>
          </div>

          <div className="flex justify-center items-center gap-4 mt-8">
            <button onClick={prev} className="w-10 h-10 rounded-full bg-navy text-primary-foreground flex items-center justify-center hover:bg-navy-light transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-3 h-3 rounded-full transition-colors ${i === current ? 'bg-accent' : 'bg-navy/30'}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full bg-navy text-primary-foreground flex items-center justify-center hover:bg-navy-light transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
