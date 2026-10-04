import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ThreeWaysToLaunch } from './components/ThreeWaysToLaunch';
import { CorePillars } from './components/CorePillars';
import { PortfolioSection } from './components/PortfolioSection';
import { ProjectEstimator } from './components/ProjectEstimator';
import { CapabilitiesBento } from './components/CapabilitiesBento';
import { PhilosophySection } from './components/PhilosophySection';
import { SocialProof } from './components/SocialProof';
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
        stage: 'MVP / Refonte',
        budget: '5 000€ - 10 000€',
        timeline: '1 à 2 mois'
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
      budget: offerId === 'validation' ? '995 €' : '6 500 € - 15 000 €',
      timeline: offerId === 'validation' ? '5 à 7 jours' : '3 à 6 semaines'
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
      {/* Custom Desktop Cursor */}
      <CustomCursor />

      {/* Navigation Header */}
      <Navbar onOpenContactModal={() => handleOpenContactModal()} />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero with 3D WebGL Canvas & Client Marquee */}
        <Hero
          onOpenContactModal={() => handleOpenContactModal()}
          onScrollToSection={handleScrollToSection}
        />

        {/* 2. 3 Launch Offers (Valider, Construire, Scaler) */}
        <ThreeWaysToLaunch onSelectOffer={handleSelectOffer} />

        {/* 3. Core Capability Pillars (Ce qui nous rend inarrêtables) */}
        <CorePillars onOpenContactModal={() => handleOpenContactModal()} />

        {/* 4. Portfolio Showcase (Des projets qui comptent & Deep Dive Modals) */}
        <PortfolioSection onOpenContactModal={handleOpenContactModal} />

        {/* 5. Interactive Live Scope & Cost Estimator */}
        <ProjectEstimator onPreloadBrief={handlePreloadBrief} />

        {/* 6. Bento Grid Capabilities (On construit, on maintient, on scale) */}
        <CapabilitiesBento onOpenContactModal={() => handleOpenContactModal()} />

        {/* 7. Philosophy & Founders Section (By entrepreneurs, for entrepreneurs) */}
        <PhilosophySection />

        {/* 8. Social Proof & Testimonials (Alexandre Darbois @ Humoon + CII) */}
        <SocialProof />

        {/* 9. FAQ Section */}
        <FAQSection onOpenContactModal={() => handleOpenContactModal()} />

        {/* 10. Grand Finale Contact CTA */}
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
