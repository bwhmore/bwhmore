import React from 'react';
import Hero from './Hero';
import ProgramOverview from './ProgramOverview';
import StatSection from './StatSection';
import ProgramPillars from './ProgramPillars';
import AboutSection from './AboutSection';
import CtaSection from './CtaSection';
import ContactForm from './ContactForm';

const HomeLayout = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProgramOverview />
      <StatSection />
      <ProgramPillars />
      <AboutSection />
      <CtaSection />
      <ContactForm />
    </main>
  );
};

export default HomeLayout;
