import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStats } from './components/TrustStats';
import { ZeroToOneJourney } from './components/ZeroToOneJourney';
import { ThreeWaysToLaunch } from './components/ThreeWaysToLaunch';
import { EntrepreneurStory } from './components/EntrepreneurStory';
import { PortfolioSection } from './components/PortfolioSection';
import { WhatWeBuild } from './components/WhatWeBuild';
import { AISection } from './components/AISection';
import { InternalProducts } from './components/InternalProducts';
import { ProductCompanyStatement } from './components/ProductCompanyStatement';
import { PhilosophySection } from './components/PhilosophySection';
import { SocialProof } from './components/SocialProof';
import { ProjectEstimator } from './components/ProjectEstimator';
import { FAQSection } from './components/FAQSection';
import { ContactCTA } from './components/ContactCTA';
import { ContactModal } from './components/ContactModal';
import { CustomCursor } from './components/CustomCursor';
import { Footer } from './components/Footer';

export const AppContent: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [initialBrief, setInitialBrief] = useState<{
    service?: string;
    stage?: string;
    budget?: string;
    timeline?: string;
  } | null>(null);

  const handleOpenContactModal = (projectTitle?: string) => {
    if (projectTitle) {
      setInitialBrief({
        service: `Projet similaire à ${projectTitle}`,
        stage: 'MVP / Accélération',
        budget: '6 500€ - 15 000€',
        timeline: '3 à 6 semaines'
      });
    } else {
      setInitialBrief(null);
    }
    setIsContactModalOpen(true);
  };

  const handleSelectOffer = (offerId: string) => {
    const offerNames: Record<string, string> = {
      validation: 'Étape 01 — Valider votre idée (Test Marché & Maquettes)',
      build: 'Étape 02 — Construire votre produit (MVP Web & Mobile)',
      scale: 'Étape 03 — Scaler avec l’IA (Agents & Automatisation)'
    };
    setInitialBrief({
      service: offerNames[offerId] || 'Offre Zetos',
      budget: offerId === 'validation' ? '995 €' : offerId === 'build' ? '6 500 €' : '4 800 €',
      timeline: offerId === 'validation' ? '5 à 7 jours' : offerId === 'build' ? '3 à 6 semaines' : '3 à 8 semaines'
    });
    setIsContactModalOpen(true);
  };

  const handlePreloadBrief = (briefData: {
    service: string;
    stage: string;
    budget: string;
    timeline: string;
  }) => {
    setInitialBrief(briefData);
    setIsContactModalOpen(true);
  };

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050308] text-[#f5f3f9] selection:bg-[#8a2be2] selection:text-white flex flex-col font-sans">
      {/* Custom Desktop Magnetic Cursor */}
      <CustomCursor />

      {/* Sticky Frosted Header Navigation */}
      <Navbar onOpenContactModal={() => handleOpenContactModal()} />

      {/* Main Page Narrative Flow */}
      <main className="flex-1">
        {/* 1. Hero with 3D WebGL Ecosystem, Dominant Statement & Stage Selector */}
        <Hero
          onOpenContactModal={() => handleOpenContactModal()}
          onScrollToSection={handleScrollToSection}
        />

        {/* 2. Trust & Verified Numbers (100+ Projects, 30+ Devs, 96% NPS, -20% CII) */}
        <TrustStats />

        {/* 3. The "Zero to One" Interactive Journey (Idea -> Validate -> Design -> Build -> Launch -> Scale) */}
        <ZeroToOneJourney onOpenContactModal={() => handleOpenContactModal()} />

        {/* 4. Three Ways to Launch (Valider, Construire, Scaler) */}
        <ThreeWaysToLaunch onSelectOffer={handleSelectOffer} />

        {/* 5. Entrepreneurial Story, Kinetic Text & "One Team" Architecture */}
        <EntrepreneurStory onOpenContactModal={() => handleOpenContactModal()} />

        {/* 6. Cinematic Portfolio & Case Studies (Real Zetos projects & Deep Dive Modals) */}
        <PortfolioSection onOpenContactModal={handleOpenContactModal} />

        {/* 7. What We Build — Capabilities & Product Craft (Product, Intelligence, Experience, Long-term) */}
        <WhatWeBuild onOpenContactModal={() => handleOpenContactModal()} />

        {/* 8. Signature AI Section — Data. Intelligence. Action. & Live Agent Simulator */}
        <AISection onOpenContactModal={() => handleOpenContactModal()} />

        {/* 9. "We Build Our Own Products" (The Patch, Mulink, Tip, Seiki) */}
        <InternalProducts onOpenContactModal={handleOpenContactModal} />

        {/* 10. The Product Company Brand Statement & Live Status Pipeline */}
        <ProductCompanyStatement onOpenContactModal={() => handleOpenContactModal()} />

        {/* 11. Founders Section (Anthony Muñoz Cifuentes & Théo Pascard + 5 Principles) */}
        <PhilosophySection />

        {/* 12. Social Proof, Client Quotes (Alexandre Darbois @ Humoon) & Industries Matrix */}
        <SocialProof />

        {/* 13. Interactive Live Scope & Cost Estimator */}
        <ProjectEstimator onPreloadBrief={handlePreloadBrief} />

        {/* 14. FAQ Section (Fixed price, CII tax credit, IP ownership, Paris team) */}
        <FAQSection onOpenContactModal={() => handleOpenContactModal()} />

        {/* 15. Grand Finale Contact CTA (Have a product in mind? Convergence) */}
        <ContactCTA onOpenContactModal={() => handleOpenContactModal()} />
      </main>

      {/* Interactive Project Scoping Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        initialBrief={initialBrief}
      />

      {/* Luxury Dark Footer */}
      <Footer onOpenContactModal={() => handleOpenContactModal()} />
    </div>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
