import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ThreeHeroCanvas } from './ThreeHeroCanvas';
import { CLIENT_LOGOS } from '../data/content';
import { ArrowRight, CheckCircle2, Code2, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenContactModal: () => void;
  onScrollToSection: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContactModal, onScrollToSection }) => {
  const { t } = useLanguage();

  return (
    <section
      id="top"
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-28 md:pt-36 pb-12 overflow-hidden bg-[#050308]"
    >
      {/* 3D Interactive WebGL Canvas */}
      <ThreeHeroCanvas />

      {/* Atmospheric Ambient Purple Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[500px] md:h-[650px] bg-gradient-to-b from-[#8a2be2]/18 via-[#6d1bb5]/10 to-transparent blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-[#8a2be2]/10 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-[#c084fc]/8 blur-[120px] pointer-events-none rounded-full" />

      {/* Subtle Matrix Grid Texture */}
      <div className="absolute inset-0 grid-bg-overlay opacity-30 pointer-events-none" />

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center my-auto flex flex-col items-center">
        {/* Studio Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#160c28]/80 border border-[#8a2be2]/30 shadow-[0_0_20px_rgba(138,43,226,0.25)] mb-6 md:mb-8 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#a855f7] animate-pulse shadow-[0_0_8px_#a855f7]" />
          <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[#e9d5ff]">
            {t('Studio de développement produit · Paris', 'Product Development Studio · Paris')}
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-heading tracking-tight leading-[0.96] mb-6 md:mb-8">
          <span className="block text-white">Zero to One.</span>
          <span className="block text-gradient-purple">
            {t('Et au-delà.', 'And beyond.')}
          </span>
        </h1>

        {/* Hero Description */}
        <p className="text-base sm:text-lg md:text-xl text-[#dedae9] max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed font-normal">
          {t(
            'Agence de développement web, mobile, SaaS et produits IA. De l’idée au scale, on conçoit, on code, on lance — pas de blabla, que de l’exécution.',
            'Paris-based studio shipping web, mobile, SaaS, and custom AI products. From zero to scale — we design, we code, we launch. No fluff, pure execution.'
          )}
        </p>

        {/* Dual CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10 md:mb-14">
          <button
            type="button"
            onClick={onOpenContactModal}
            className="btn-primary text-sm md:text-base py-3.5 px-8 w-full sm:w-auto shadow-[0_0_35px_rgba(138,43,226,0.45)] group"
          >
            <span>{t('Lancer votre projet', 'Launch your project')}</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <button
            type="button"
            onClick={() => onScrollToSection('portfolio')}
            className="btn-secondary text-sm md:text-base py-3.5 px-8 w-full sm:w-auto"
          >
            <span>{t('Explorer le portfolio', 'Explore portfolio')}</span>
          </button>
        </div>

        {/* Key Trust Signals Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 max-w-3xl w-full">
          <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-[#0f0a1c]/60 border border-white/5 backdrop-blur-sm">
            <ShieldCheck className="w-4 h-4 text-[#a855f7] shrink-0" />
            <span className="text-xs font-semibold text-[#dedae9]">
              {t('Agrément CII (-20%)', 'CII Tax Credit (-20%)')}
            </span>
          </div>

          <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-[#0f0a1c]/60 border border-white/5 backdrop-blur-sm">
            <CheckCircle2 className="w-4 h-4 text-[#a855f7] shrink-0" />
            <span className="text-xs font-semibold text-[#dedae9]">
              {t('Tarifs au forfait fixe', '100% Fixed Price')}
            </span>
          </div>

          <div className="col-span-2 sm:col-span-1 flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-[#0f0a1c]/60 border border-white/5 backdrop-blur-sm">
            <Code2 className="w-4 h-4 text-[#a855f7] shrink-0" />
            <span className="text-xs font-semibold text-[#dedae9]">
              {t('100% Code & IP cédés', '100% IP & Source Code')}
            </span>
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
