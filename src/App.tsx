/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WhatWeDo } from './components/WhatWeDo';
import { PurposeMissionVision } from './components/PurposeMissionVision';
import { CoreValues } from './components/CoreValues';
import { PhilosophySection } from './components/PhilosophySection';
import { GroupDivisions } from './components/GroupDivisions';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BrandKitModal } from './components/BrandKitModal';

export default function App() {
  const [brandKitOpen, setBrandKitOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Top Sticky Navigation */}
      <Navbar onOpenBrandKit={() => setBrandKitOpen(true)} />

      {/* Main Sections in the exact sequence requested */}
      <main className="flex-grow">
        {/* 1. Hero: "SPLANJOX: Beyond Innovation. Building the Future." + Three.js 3D Engine */}
        <HeroSection onOpenBrandKit={() => setBrandKitOpen(true)} />

        {/* 2. What We Do: Product Development, Software Services, Research & Innovation */}
        <WhatWeDo />

        {/* 3. Purpose & Mission (and Vision) */}
        <PurposeMissionVision />

        {/* 4. Core Values: The 6 values as cards */}
        <CoreValues />

        {/* 5. Philosophy Quote: "We don't build software just because we can. We build software because it solves a problem." */}
        <PhilosophySection />

        {/* Group Divisions: SPLANJOX Group structure from official Brand Board */}
        <GroupDivisions />

        {/* 6. Contact: Email, LinkedIn, simple interactive form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenBrandKit={() => setBrandKitOpen(true)} />

      {/* Official Brand Kit & Guidelines Modal */}
      <BrandKitModal
        isOpen={brandKitOpen}
        onClose={() => setBrandKitOpen(false)}
      />
    </div>
  );
}
