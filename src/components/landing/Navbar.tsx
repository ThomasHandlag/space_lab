import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Service", href: "#services" },
    { label: "Resume", href: "#resume" },
    { label: "Project", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50" style={{ background: "var(--l-nav-bg)", backdropFilter: "blur(12px)" }}>
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between bg-l-card/80 rounded-b-3xl border-b border-l-card-border">
                <Link to="/" className="text-2xl font-bold text-l-heading">
                    Thomas
                </Link>

                {/* Desktop Nav */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <a
                                href={link.href}
                                className="text-sm font-medium text-l-text hover:text-primary transition-colors"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="hidden md:flex items-center gap-3">
                    <ThemeToggle />
                    <a
                        href="#contact"
                        className="inline-flex items-center px-6 py-2.5 bg-l-dark text-white text-sm font-medium rounded-full hover:bg-primary transition-colors"
                    >
                        Hire me
                    </a>
                </div>

                {/* Mobile toggle */}
                <div className="md:hidden flex items-center gap-2">
                    <ThemeToggle />
                    <button
                        className="text-l-heading"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {mobileOpen && (
                <div className="md:hidden bg-l-card border-t border-l-card-border px-6 pb-4" style={{ background: "var(--l-mobile-bg)" }}>
                    <ul className="flex flex-col gap-4 pt-4">
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    className="text-sm font-medium text-l-text hover:text-primary transition-colors"
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a
                                href="#contact"
                                className="inline-flex items-center px-6 py-2.5 bg-l-dark text-white text-sm font-medium rounded-full hover:bg-primary transition-colors"
                                onClick={() => setMobileOpen(false)}
                            >
                                Hire me
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
