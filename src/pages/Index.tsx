
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import ProgramOverview from "@/components/home/ProgramOverview";
import Vision from "@/components/home/Vision";
import WhyThisMatters from "@/components/home/WhyThisMatters";
import StatSection from "@/components/home/StatSection";
import ProgramPillars from "@/components/home/ProgramPillars";
import AboutSection from "@/components/home/AboutSection";
import ContactForm from "@/components/home/ContactFormNew";
import CtaSection from "@/components/home/CtaSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ProgramOverview />
        <Vision />
        <WhyThisMatters />
        <StatSection />
        <ProgramPillars />
        <AboutSection />
        <CtaSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
