import { ArrowDownRight, CheckCircle } from "lucide-react";

export default function WhyHireMe() {
  return (
    <section className="py-24 bg-l-bg relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <div className="relative">
            <div className="w-full aspect-square max-w-md mx-auto rounded-3xl bg-linear-to-br from-primary/10 to-[#9B8AFF]/10 flex items-center justify-center relative overflow-hidden">
              <div className="w-3/4 h-3/4 rounded-2xl bg-linear-to-br from-primary to-[#7B61FF] flex items-center justify-center">
                <div className="text-center text-white">
                  <p className="text-6xl font-bold">25+</p>
                  <p className="text-lg mt-2 opacity-80">Project Completed</p>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute bottom-6 right-6 bg-l-card rounded-2xl shadow-xl px-5 py-3 flex items-center gap-2">
                <CheckCircle size={20} className="text-primary" />
                <div>
                  <p className="text-2xl font-bold text-l-heading">25+</p>
                  <p className="text-xs text-l-text">Project Completed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-4xl font-bold text-l-heading mb-4">
              Why Hire me?
            </h2>
            <p className="text-l-text mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              lacus nunc, posuere in justo vulputate, bibendum sodales
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-l-bg-alt rounded-2xl p-5 text-center">
                <p className="text-3xl font-bold text-primary">25+</p>
                <p className="text-sm text-l-text mt-1">Project Completed</p>
              </div>
              <div className="bg-l-bg-alt rounded-2xl p-5 text-center">
                <p className="text-3xl font-bold text-primary">1+</p>
                <p className="text-sm text-l-text mt-1">Years Experience</p>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-l-dark text-white font-medium rounded-full hover:bg-primary transition-colors"
            >
              Hire me
              <ArrowDownRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
