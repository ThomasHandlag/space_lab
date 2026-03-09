import { ArrowUpRight } from "lucide-react";

const tags = [
  "Landing Page",
  "Product Design",
  "Animation",
  "Glassmorphism",
  "Cards",
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-l-bg-alt relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-4xl font-bold text-l-heading">
            Lets have a look at
            <br />
            my <span className="text-primary">Portfolio</span>
          </h2>
          <a
            href="#"
            className="text-primary font-medium text-sm hover:underline flex items-center gap-1"
          >
            See All <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Portfolio Card */}
        <div className="bg-l-card rounded-3xl overflow-hidden shadow-sm border border-l-card-border hover:shadow-xl transition-shadow">
          <div className="grid lg:grid-cols-2">
            {/* Image placeholder */}
            <div className="relative h-80 lg:h-auto bg-linear-to-br from-primary to-[#7B61FF] flex items-center justify-center">
              <div className="text-center text-white">
                <p className="text-4xl font-bold mb-2">Audiopc</p>
                <p className="opacity-70">Rust audio processing library</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12">
              <div className="flex flex-wrap gap-2 mb-6">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 bg-l-badge text-primary text-xs font-medium rounded-full border border-primary/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-l-heading mb-4">
                Audiopc - Rust Audio Processing Library
              </h3>
              <p className="text-l-text text-sm leading-relaxed mb-6">
                Audiopc is a Rust library designed for efficient audio processing.
                It provides a range of tools and features for manipulating audio data,
                making it ideal for developers working on audio applications or
                projects that require high-performance audio processing.
              </p>

              <a
                href="#"
                className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline"
              >
                View Project <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
