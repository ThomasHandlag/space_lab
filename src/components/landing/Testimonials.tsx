import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Fawzi Sayed",
    role: "Ui Ux Designer",
    rating: 5.0,
    text: "consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis. Sed lobortis orci elementum egestas lobortis. Sed lobortis orci elementum egestas lobortis.",
  },
  {
    name: "Fawzi Sayed",
    role: "Ui Ux Designer",
    rating: 5.0,
    text: "consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis. Sed lobortis orci elementum egestas lobortis. Sed lobortis orci elementum egestas lobortis.",
  },
  {
    name: "Fawzi Sayed",
    role: "Ui Ux Designer",
    rating: 5.0,
    text: "consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis. Sed lobortis orci elementum egestas lobortis. Sed lobortis orci elementum egestas lobortis.",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 bg-l-bg relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-l-heading mb-4">
            Testimonials That Speak to{" "}
            <span className="text-primary">My Results</span>
          </h2>
          <p className="text-l-text max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
            interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed lobortis orci elementum egestas lobortis.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`p-8 rounded-3xl border transition-all duration-300 ${i === active
                  ? "border-primary bg-primary  shadow-2xl shadow-primary/20 scale-105"
                  : "border-l-card-border bg-l-card hover:border-primary/20 hover:shadow-lg"
                }`}
            >
              <div className="flex items-center gap-4 mb-4">
                {/* Avatar */}
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${i === active
                      ? "bg-white/20 "
                      : "bg-primary/10 text-primary"
                    }`}
                >
                  {t.name[0]}
                </div>
                <div>
                  <h4
                    className={`font-bold ${i === active ? "" : "text-l-heading"
                      }`}
                  >
                    {t.name}
                  </h4>
                  <p
                    className={`text-xs ${i === active ? "" : "text-l-muted"
                      }`}
                  >
                    {t.role}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star
                    key={si}
                    size={14}
                    className={
                      i === active
                        ? "text-yellow-300 fill-yellow-300"
                        : "text-yellow-400 fill-yellow-400"
                    }
                  />
                ))}
                <span
                  className={`text-sm font-medium ml-2 ${i === active ? "" : "text-l-heading"
                    }`}
                >
                  {t.rating}
                </span>
              </div>

              <p
                className={`text-sm leading-relaxed ${i === active ? "" : "text-l-text"
                  }`}
              >
                {t.text}
              </p>
            </div>
          ))}
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center items-center gap-4 mt-10">
          <button
            onClick={() =>
              setActive((prev) =>
                prev > 0 ? prev - 1 : testimonials.length - 1
              )
            }
            className="w-10 h-10 rounded-full border border-l-card-border flex items-center justify-center text-l-heading hover:bg-primary hover:text-white hover:border-primary transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-3 h-3 rounded-full transition-all ${i === active ? "bg-primary w-8" : "bg-l-dot"
                  }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={() =>
              setActive((prev) =>
                prev < testimonials.length - 1 ? prev + 1 : 0
              )
            }
            className="w-10 h-10 rounded-full border border-l-card-border flex items-center justify-center text-l-heading hover:bg-primary hover:text-white hover:border-primary transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
