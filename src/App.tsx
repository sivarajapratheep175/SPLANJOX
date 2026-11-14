import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WhatWeDoSection } from './components/WhatWeDoSection';
import { OurWorkSection } from './components/OurWorkSection';
import { HowWeWorkSection } from './components/HowWeWorkSection';
import { AboutSection } from './components/AboutSection';
import { FutureVisionSection } from './components/FutureVisionSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LegalModals } from './components/LegalModals';
import { ScrollProgressBar } from './components/ScrollProgressBar';

export default function App() {
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  const [contactPrefill, setContactPrefill] = useState<{
    version: number;
    projectType?: string;
    message?: string;
  }>({ version: 0 });

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (projectType: string, serviceTitle: string) => {
    setContactPrefill((prev) => ({
      version: prev.version + 1,
      projectType,
      message: `Hello SPLANJOX,\n\nI would like to discuss ${serviceTitle} for our project.`,
    }));
    scrollToSection('contact');
  };

  const handleDiscussSimilarWork = (projectName: string) => {
    setContactPrefill((prev) => ({
      version: prev.version + 1,
      projectType: 'Web Application',
      message: `Hello SPLANJOX,\n\nI saw "${projectName}" in your work section and would like to discuss a similar solution.`,
    }));
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-white text-[#080F1C] flex flex-col selection:bg-[#2563EB] selection:text-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2.5 focus:rounded-lg focus:bg-[#080F1C] focus:text-white focus:text-sm focus:font-semibold focus:shadow-lg"
      >
        Skip to main content
      </a>

      <ScrollProgressBar />

      <Navbar onStartProject={() => scrollToSection('contact')} />

      <main id="main-content" tabIndex={-1} className="flex-grow focus:outline-none">
        <HeroSection
          onStartProject={() => scrollToSection('contact')}
          onExploreWork={() => scrollToSection('our-work')}
        />

        <WhatWeDoSection onSelectService={handleSelectService} />

        <OurWorkSection onDiscussSimilar={handleDiscussSimilarWork} />

        <HowWeWorkSection />

        <AboutSection />

        <FutureVisionSection />

        <ContactSection
          prefillVersion={contactPrefill.version}
          initialProjectType={contactPrefill.projectType}
          initialMessage={contactPrefill.message}
        />
      </main>

      <Footer
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
      />

      <LegalModals
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
