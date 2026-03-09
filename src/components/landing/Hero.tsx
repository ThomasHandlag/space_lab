import { lazy, Suspense } from "react";
import { ArrowDownRight } from "lucide-react";

const HeroScene = lazy(() => import("./HeroScene"));

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center pt-20 overflow-hidden"
            style={{ background: `linear-gradient(to bottom right, var(--l-hero-from), var(--l-hero-via), var(--l-hero-to))` }}
        >
            {/* Decorative blobs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="relative z-10">
                    <p className="text-sm font-semibold text-primary tracking-wider uppercase mb-4">
                        Hello!
                    </p>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-l-heading leading-tight mb-6">
                        I&apos;m Thomas,{" "}
                        <span className="text-primary">Space Jam&apos;s Developer</span>
                    </h1>
                    <p className="text-l-text text-lg max-w-md mb-8">
                        I am a passionate developer with a year of experience in creating stunning websites and applications
                    </p>

                    {/* Stats & CTA */}
                    <div className="flex items-center gap-6 mb-8">
                        <div className="flex items-center gap-3">
                            <div className="w-16 h-16 rounded-full bg-l-dark flex items-center justify-center text-white font-bold text-lg">
                                1
                            </div>
                            <div>
                                <p className="font-bold text-l-heading text-lg">Year</p>
                                <p className="text-l-text text-sm">Experience</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                        <a
                            href="#portfolio"
                            className="inline-flex items-center gap-2 px-8 py-3.5 bg-l-dark text-white font-medium rounded-full hover:bg-primary transition-colors"
                        >
                            Portfolio
                            <ArrowDownRight size={18} />
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-l-heading text-l-heading font-medium rounded-full hover:bg-l-dark hover:text-white transition-colors"
                        >
                            Hire me
                            <ArrowDownRight size={18} />
                        </a>
                    </div>
                </div>

            </div>

            {/* 3D Scene — responsive: full width on mobile, 3/4 on desktop */}
            <div className="fixed top-0 right-0 w-full md:w-3/4 h-screen pointer-events-none z-0">
                <Suspense fallback={null}>
                    <HeroScene />
                </Suspense>
            </div>
        </section>
    );
}
