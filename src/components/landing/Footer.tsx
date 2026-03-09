import { Phone, Mail, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Service", href: "#services" },
  { label: "Resume", href: "#resume" },
  { label: "Project", href: "#portfolio" },
];

export default function Footer() {
  return (
    <footer className="bg-l-dark text-white relative z-20">
      {/* CTA Bar */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold">Lets Connect there</h3>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 bg-primary text-white font-medium rounded-full hover:bg-[#4A2FBE] transition-colors"
          >
            Hire me
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <Phone size={16} className="text-primary" />
                +20 11 43 63 73 41
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <Mail size={16} className="text-primary" />
                truongthuongvan203@gmail.com
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <Globe size={16} className="text-primary" />
                app.bustify.com
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-6">
              Get the latest information
            </h4>
            <p className="text-white/50 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              congue interdum ligula a dignissim. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed lobortis orci elementum egestas
              lobortis.
            </p>

            {/* Email input */}
            <div className="flex mt-6 bg-white/10 rounded-full overflow-hidden border border-white/10">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-5 py-3 bg-transparent text-white placeholder-white/40 outline-none text-sm"
              />
              <button
                className="px-5 py-3 bg-primary text-white text-sm font-medium rounded-full m-0.5 hover:bg-[#4A2FBE] transition-colors"
                type="button"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-wrap items-center justify-between gap-4 text-white/40 text-xs">
          <p>Copyright© 2023 Thomas Handlag. All Rights Reserved.</p>
          <p>
            <Link to="#" className="hover:text-white transition-colors">
              User Terms & Conditions
            </Link>
            {" | "}
            <Link to="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
