import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Robert H.",
    image: "/images/testimonial-robert.jpg",
    text: "When I started thinking about how I could help my family avoid future stress, I came across information on final expense planning. The process was simple and informative, and it helped me see the value in being proactive. Now, I feel more confident knowing I’ve made thoughtful decisions for the road ahead. It’s one of those things you don’t realize the importance of—until you do.",
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
  {
    name: "Maria L.",
    image: "/images/testimonial-susan.jpg",
    text: "The guidance was clear and easy to follow. I appreciated having information laid out in a way that made planning ahead feel manageable. It gave me real peace of mind knowing my family will be supported.",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
    }, 5000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-navy text-center mb-12">
          Testimonials From Clients
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl px-6 py-12 md:px-12 text-center" style={{ backgroundColor: "#FFE6C5" }}>
            <p className="text-navy font-body leading-relaxed italic">
              "{testimonials[current].text}"
            </p>
          </div>

          <div className="-mt-7 flex flex-col items-center">
            <img
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="h-14 w-14 rounded-full object-cover border-4 border-white shadow-sm"
            />

            <div className="mt-3 flex items-center gap-1 text-amber">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-sm">★</span>
              ))}
            </div>

            <div className="mt-2 font-display font-bold text-navy">
              {testimonials[current].name}
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={
                  "h-2.5 w-2.5 rounded-full transition-colors " +
                  (i === current ? "bg-blue-600" : "bg-gray-300")
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
