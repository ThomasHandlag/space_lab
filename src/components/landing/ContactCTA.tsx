import { Send } from "lucide-react";
import { useState } from "react";

export default function ContactCTA() {
  const [email, setEmail] = useState("");

  return (
    <section id="contact" className="py-24 bg-l-bg-alt">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-linear-to-br from-l-dark to-l-dark-alt rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-primary/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Have an Awesome Project Idea?{" "}
              <span className="text-primary">Let&apos;s Discuss</span>
            </h2>

            <div className="max-w-md mx-auto mt-8">
              <div className="flex bg-white/10 backdrop-blur-sm rounded-full overflow-hidden border border-white/20">
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-6 py-4 bg-transparent text-white placeholder-white/50 outline-none text-sm"
                />
                <button
                  className="px-6 py-4 bg-primary text-white font-medium text-sm hover:bg-[#4A2FBE] transition-colors flex items-center gap-2 rounded-full m-1"
                  type="button"
                >
                  Send <Send size={16} />
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <div className="text-center">
                <p className="text-2xl font-bold text-white">4.9/5</p>
                <p className="text-white/60 text-sm">Average Ratings</p>
              </div>
              <div className="w-px bg-white/20" />
              <div className="text-center">
                <p className="text-2xl font-bold text-white">25+</p>
                <p className="text-white/60 text-sm">Projects Completed</p>
              </div>
              <div className="w-px bg-white/20" />
              <div className="text-center">
                <p className="text-2xl font-bold text-white">Certified</p>
                <p className="text-white/60 text-sm">Google Android Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
