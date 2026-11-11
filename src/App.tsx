/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { IntroductionSection } from './components/IntroductionSection';
import { ServicesSection } from './components/ServicesSection';
import { WhoWeHelpSection } from './components/WhoWeHelpSection';
import { HowWeWorkSection } from './components/HowWeWorkSection';
import { OurWorkSection } from './components/OurWorkSection';
import { AboutSection } from './components/AboutSection';
import { FutureVisionSection } from './components/FutureVisionSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BrandKitModal } from './components/BrandKitModal';
import { ProjectEstimatorModal } from './components/ProjectEstimatorModal';
import { LegalModals } from './components/LegalModals';

export default function App() {
  const [brandKitOpen, setBrandKitOpen] = useState(false);
  const [estimatorOpen, setEstimatorOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  // Pre-filled data state for the contact form when triggered from services or estimator
  const [contactInitialState, setContactInitialState] = useState<{
    projectType?: string;
    timeline?: string;
    budget?: string;
    description?: string;
  }>({});

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleServiceSelect = (serviceTitle: string) => {
    setContactInitialState((prev) => ({
      ...prev,
      projectType: serviceTitle.includes('MVP')
        ? 'Startup MVP'
        : serviceTitle.includes('Website')
        ? 'Website Development'
        : serviceTitle.includes('Mobile')
        ? 'Mobile App Development'
        : serviceTitle.includes('Backend')
        ? 'Backend / API'
        : serviceTitle.includes('Maintenance')
        ? 'Maintenance'
        : 'Other',
      description: `Inquiry regarding: ${serviceTitle}\nWe are interested in discussing scope and development timelines.`,
    }));
    scrollToContact();
  };

  const handleSimilarProjectInquiry = (projectName: string) => {
    setContactInitialState((prev) => ({
      ...prev,
      description: `Inquiry based on case study: "${projectName}"\nWe are looking to develop a similar solution for our business.`,
    }));
    scrollToContact();
  };

  const handleApplyEstimate = (details: {
    projectType: string;
    timeline: string;
    budget: string;
    description: string;
  }) => {
    setContactInitialState({
      projectType: details.projectType.includes('MVP')
        ? 'Startup MVP'
        : details.projectType.includes('Website')
        ? 'Website Development'
        : details.projectType.includes('Mobile')
        ? 'Mobile App Development'
        : details.projectType.includes('Backend')
        ? 'Backend / API'
        : 'Other',
      timeline: details.timeline,
      budget: details.budget,
      description: details.description,
    });
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* 1. Header with Blueprint Navigation & "Start Your Project" CTA */}
      <Navbar
        onOpenBrandKit={() => setBrandKitOpen(true)}
        onOpenEstimator={() => setEstimatorOpen(true)}
        onStartProject={scrollToContact}
      />

      <main className="flex-grow">
        {/* Section 01: Hero with Three.js 3D Scene */}
        <HeroSection
          onStartProject={scrollToContact}
          onExploreServices={scrollToServices}
          onOpenEstimator={() => setEstimatorOpen(true)}
        />

        {/* Section 02: Introduction & 3 Stages */}
        <IntroductionSection onStartProject={scrollToContact} />

        {/* Section 03 & Phase 4: Core Services */}
        <ServicesSection onSelectServiceForInquiry={handleServiceSelect} />

        {/* Section 04 & Phase 5: Who We Help */}
        <WhoWeHelpSection onDiscussIdea={scrollToContact} />

        {/* Section 05 & Phase 6: How We Work (10-Step Workflow) */}
        <HowWeWorkSection onStartProject={scrollToContact} />

        {/* Section 06 & Phase 7: Our Work / Portfolio */}
        <OurWorkSection onStartSimilarProject={handleSimilarProjectInquiry} />

        {/* Section 08 & Phase 8: About SPLANJOX & Founder */}
        <AboutSection />

        {/* Section 07 & Phase 9: Future Vision (Current Business vs Future Initiatives) */}
        <FutureVisionSection onStartProject={scrollToContact} />

        {/* Section 08 & Phase 10: Final CTA & Contact Form */}
        <ContactSection
          initialProjectType={contactInitialState.projectType}
          initialTimeline={contactInitialState.timeline}
          initialBudget={contactInitialState.budget}
          initialDescription={contactInitialState.description}
          onOpenPrivacy={() => setLegalModalType('privacy')}
          onOpenTerms={() => setLegalModalType('terms')}
          onOpenEstimator={() => setEstimatorOpen(true)}
        />
      </main>

      {/* Phase 11: Footer */}
      <Footer
        onOpenBrandKit={() => setBrandKitOpen(true)}
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
      />

      {/* Modals */}
      <BrandKitModal
        isOpen={brandKitOpen}
        onClose={() => setBrandKitOpen(false)}
      />

      <ProjectEstimatorModal
        isOpen={estimatorOpen}
        onClose={() => setEstimatorOpen(false)}
        onApplyToContact={handleApplyEstimate}
      />

      <LegalModals
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
