import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "Working with XINN was a game-changer for our project. He delivered the data pipelines ahead of schedule with insights that set a new standard for our marketing strategy.",
    author: "Michael Rodriguez",
    role: "Product Manager, Tech Innovators",
  },
  {
    text: "Nuryasin possesses a rare blend of technical expertise and business acumen. His dashboards didn't just show numbers; they told a compelling story that guided our quarterly objectives.",
    author: "Sarah Jenkins",
    role: "Senior Data Scientist, Analytics Corp",
  },
  {
    text: "I was incredibly impressed by his ability to clean and structure our messy datasets. The resulting clarity allowed us to identify revenue leaks we didn't even know existed.",
    author: "David Chen",
    role: "Operations Director, Growth Co",
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-background border-t-2 border-border"
    >
      <div className="container mx-auto px-6 py-24 md:py-32 relative z-10 flex flex-col items-center text-center">
        {/* ─── Header ─── */}
        <p className="text-sm font-bold text-muted-foreground uppercase tracking-[0.25em] mb-4">
          What People Say
        </p>
        <h2
          className="font-serif font-black text-foreground leading-[1.08] tracking-[-0.03em] mb-16"
          style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)" }}
        >
          Kind words from{" "}
          <em className="font-serif text-primary italic">amazing people.</em>
        </h2>

        {/* ─── Testimonial Carousel ─── */}
        <div className="w-full max-w-4xl relative">
          {/* Card */}
          <div className="neo-card bg-secondary/30 p-8 md:p-12 min-h-[300px] flex flex-col justify-between items-center relative transition-all duration-300">
            {/* Quote Icon */}
            <div className="absolute -top-6 neo-card bg-primary p-3 rounded-full flex items-center justify-center">
              <Quote size={24} className="text-foreground fill-foreground" />
            </div>

            {/* Testimonial Text */}
            <p className="text-lg md:text-2xl font-serif text-foreground leading-relaxed mt-6 mb-10 max-w-3xl mx-auto italic">
              "{testimonials[currentIndex].text}"
            </p>

            {/* Author Info */}
            <div className="flex flex-col items-center gap-1">
              <h4 className="text-lg font-black text-foreground">
                {testimonials[currentIndex].author}
              </h4>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                {testimonials[currentIndex].role}
              </p>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={prevTestimonial}
              className="neo-btn bg-card p-3 rounded-xl hover:bg-primary transition-colors duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} className="text-foreground" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 border-2 border-border ${
                    idx === currentIndex
                      ? "w-8 bg-primary"
                      : "w-2.5 bg-background hover:bg-secondary"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="neo-btn bg-card p-3 rounded-xl hover:bg-primary transition-colors duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} className="text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};