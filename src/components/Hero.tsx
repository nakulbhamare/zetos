import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ThreeHeroCanvas } from './ThreeHeroCanvas';
import { CLIENT_LOGOS, JOURNEY_STAGES } from '../data/content';
import { ArrowRight, CheckCircle2, Code2, ShieldCheck, Sparkles, Smartphone, LayoutDashboard, TrendingUp, Layers } from 'lucide-react';

interface HeroProps {
  onOpenContactModal: () => void;
  onScrollToSection: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContactModal, onScrollToSection }) => {
  const { language, t } = useLanguage();
  const [activeStage, setActiveStage] = useState(0);

  const stageIcons = [Sparkles, Layers, LayoutDashboard, Code2, Smartphone, TrendingUp];

  return (
    <section
      id="top"
      className="relative min-h-[96vh] lg:min-h-screen flex flex-col justify-between pt-28 md:pt-36 pb-12 overflow-hidden bg-[#050308]"
    >
      {/* 3D Interactive WebGL Canvas */}
      <ThreeHeroCanvas activeStageIndex={activeStage} />

      {/* Atmospheric Ambient Purple Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] md:w-[1000px] h-[550px] md:h-[700px] bg-gradient-to-b from-[#8a2be2]/20 via-[#6d1bb5]/12 to-transparent blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#8a2be2]/12 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-20 right-10 w-[450px] h-[450px] bg-[#c084fc]/10 blur-[130px] pointer-events-none rounded-full" />

      {/* Subtle Matrix Grid Texture */}
      <div className="absolute inset-0 grid-bg-overlay opacity-35 pointer-events-none" />

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center my-auto flex flex-col items-center">
        {/* Studio Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#160c28]/90 border border-[#8a2be2]/40 shadow-[0_0_25px_rgba(138,43,226,0.3)] mb-6 md:mb-8 backdrop-blur-md">
          <span className="w-2.5 h-2.5 rounded-full bg-[#a855f7] animate-pulse shadow-[0_0_10px_#a855f7]" />
          <span className="text-xs md:text-sm font-black uppercase tracking-[0.22em] text-[#e9d5ff]">
            {t('Studio de développement produit · Paris', 'Product Development Studio · Paris')}
          </span>
        </div>

        {/* Hero Dominant Title */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black font-heading tracking-tight leading-[0.94] mb-6 md:mb-8">
          <span className="block text-white">Zero to One.</span>
          <span className="block text-gradient-purple">
            {t('Et au-delà.', 'And beyond.')}
          </span>
        </h1>

        {/* Hero Core Proposition */}
        <p className="text-base sm:text-lg md:text-xl text-[#dedae9] max-w-3xl mx-auto mb-8 md:mb-10 leading-relaxed font-normal">
          {t(
            'Agence de développement web, mobile, SaaS et produits IA. De l’idée au scale, on conçoit, on code, on lance — pas de blabla, que de l’exécution.',
            'Paris-based studio shipping web, mobile, SaaS, and custom AI products. From zero to scale — we design, we code, we launch. No fluff, pure execution.'
          )}
        </p>

        {/* Dual CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10 md:mb-12">
          <button
            type="button"
            onClick={onOpenContactModal}
            className="btn-primary text-sm md:text-base py-4 px-8 w-full sm:w-auto shadow-[0_0_35px_rgba(138,43,226,0.5)] group cursor-pointer"
          >
            <span>{t('Lancer votre projet', 'Launch your project')}</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <button
            type="button"
            onClick={() => onScrollToSection('journey')}
            className="btn-secondary text-sm md:text-base py-4 px-8 w-full sm:w-auto cursor-pointer"
          >
            <span>{t('Découvrir la méthode', 'Discover the method')}</span>
          </button>
        </div>

        {/* Key Trust Signals Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 max-w-3xl w-full mb-12">
          <div className="flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#0f0a1c]/70 border border-white/10 backdrop-blur-md shadow-lg">
            <ShieldCheck className="w-4 h-4 text-[#a855f7] shrink-0" />
            <span className="text-xs font-bold text-[#dedae9]">
              {t('Agrément CII (-20%)', 'CII Tax Credit (-20%)')}
            </span>
          </div>

          <div className="flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#0f0a1c]/70 border border-white/10 backdrop-blur-md shadow-lg">
            <CheckCircle2 className="w-4 h-4 text-[#a855f7] shrink-0" />
            <span className="text-xs font-bold text-[#dedae9]">
              {t('Tarifs au forfait fixe', '100% Fixed Price')}
            </span>
          </div>

          <div className="col-span-2 sm:col-span-1 flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#0f0a1c]/70 border border-white/10 backdrop-blur-md shadow-lg">
            <Code2 className="w-4 h-4 text-[#a855f7] shrink-0" />
            <span className="text-xs font-bold text-[#dedae9]">
              {t('100% Code & IP cédés', '100% IP & Source Code')}
            </span>
          </div>
        </div>

        {/* Interactive Product Pipeline Stage Selector (Idea -> Validate -> Design -> Build -> Launch -> Scale) */}
        <div className="w-full max-w-4xl p-2 rounded-2xl bg-[#0b0614]/85 border border-[#8a2be2]/30 backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
          <div className="flex items-center justify-between px-3 py-1.5 mb-2 border-b border-white/5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#9890a8]">
                {t('CYCLE PRODUIT ZETOS · INTERACTIF', 'ZETOS PRODUCT CYCLE · INTERACTIVE')}
              </span>
            </div>
            <span className="text-[11px] font-mono text-[#c084fc]">
              {JOURNEY_STAGES[activeStage].duration}
            </span>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-1">
            {JOURNEY_STAGES.map((stage, idx) => {
              const Icon = stageIcons[idx] || Sparkles;
              const isActive = activeStage === idx;
              return (
                <button
                  key={stage.step}
                  type="button"
                  onClick={() => setActiveStage(idx)}
                  className={`flex flex-col items-center gap-1.5 py-2.5 px-2 rounded-xl transition-all duration-300 text-left cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-b from-[#8a2be2]/30 to-[#6d1bb5]/20 border border-[#c084fc]/50 text-white shadow-[0_0_15px_rgba(138,43,226,0.3)]'
                      : 'hover:bg-white/5 text-[#9890a8] hover:text-[#dedae9] border border-transparent'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#c084fc]' : 'text-[#605970]'}`} />
                  <span className="text-[11px] font-bold tracking-tight">
                    {language === 'fr' ? stage.title : stage.titleEn}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Stage Live Snapshot Preview */}
          <div className="mt-3 pt-3 border-t border-white/5 px-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-left">
            <div>
              <p className="text-xs sm:text-sm font-semibold text-white">
                {language === 'fr' ? JOURNEY_STAGES[activeStage].subtitle : JOURNEY_STAGES[activeStage].subtitleEn}
              </p>
              <p className="text-[11px] text-[#9890a8]">
                {language === 'fr' ? JOURNEY_STAGES[activeStage].description : JOURNEY_STAGES[activeStage].descriptionEn}
              </p>
            </div>
            <button
              type="button"
              onClick={() => onScrollToSection('journey')}
              className="inline-flex items-center gap-1 text-[11px] font-bold text-[#c084fc] hover:text-white shrink-0 transition-colors cursor-pointer"
            >
              <span>{t('Détails de l’étape', 'Stage details')}</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Infinite Client Marquee Bar */}
      <div className="relative z-10 w-full mt-12 pt-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 mb-3 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#786f8a]">
            {t('Ils nous ont confié leurs produits', 'Products trusted by visionary founders')}
          </p>
        </div>

        {/* Marquee Ticker */}
        <div className="relative w-full overflow-hidden mask-gradient-x">
          <div className="animate-marquee flex items-center gap-8 md:gap-14 py-2">
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((name, index) => (
              <div
                key={`${name}-${index}`}
                className="flex items-center gap-2 shrink-0 group cursor-default"
              >
                <span className="text-xs sm:text-sm md:text-base font-extrabold tracking-[0.18em] text-[#6b627d] group-hover:text-[#c084fc] transition-colors uppercase select-none">
                  {name}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#8a2be2]/30 group-hover:bg-[#8a2be2] transition-colors ml-4" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
