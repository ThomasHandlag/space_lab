import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WorkExperience from "@/components/landing/WorkExperience";
import WhyHireMe from "@/components/landing/WhyHireMe";
import Portfolio from "@/components/landing/Portfolio";
import Testimonials from "@/components/landing/Testimonials";
import ContactCTA from "@/components/landing/ContactCTA";
import SkillsMarquee from "@/components/landing/SkillsMarquee";
import Blog from "@/components/landing/Blog";
import Footer from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Services />
      <WorkExperience />
      <WhyHireMe />
      <Portfolio />
      <Testimonials />
      <ContactCTA />
      <SkillsMarquee />
      <Blog />
      <Footer />
    </div>
  );
}
