import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Sparkles, Mail, MapPin } from 'lucide-react';

interface ContactCTAProps {
  onOpenContactModal: () => void;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({ onOpenContactModal }) => {
  const { t } = useLanguage();

  return (
    <section className="relative py-28 md:py-36 bg-[#050308] border-t border-white/5 overflow-hidden">
      {/* Immersive Atmospheric Radial Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] md:w-[1000px] h-[550px] md:h-[650px] bg-gradient-to-b from-[#8a2be2]/25 via-[#6d1bb5]/15 to-transparent blur-[170px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 grid-bg-overlay opacity-30 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#160c28] border border-[#8a2be2]/40 shadow-[0_0_25px_rgba(138,43,226,0.3)] text-xs font-bold uppercase tracking-widest text-[#e9d5ff] mb-8">
          <Sparkles className="w-4 h-4 text-[#c084fc]" />
          <span>{t('Démarrons l’aventure', "Let's build together")}</span>
        </div>

        {/* Section 50: Headline */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black font-heading text-white tracking-tight leading-[0.98] mb-6 md:mb-8">
          <span>{t('Vous avez un produit en tête ?', 'Have a product in mind?')}</span>
        </h2>

        {/* Section 50: Supporting Copy */}
        <p className="text-base sm:text-lg md:text-xl text-[#dedae9] max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed">
          {t(
            'Dites-nous ce que vous construisez. On vous dira comment on l’aborderait — pas de blabla, un cadrage technique et une estimation au forfait ferme.',
            'Tell us what you’re building. We’ll tell you how we’d approach it — no marketing fluff, just sharp technical scoping and a guaranteed fixed price.'
          )}
        </p>

        {/* Primary Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <button
            type="button"
            onClick={onOpenContactModal}
            className="btn-primary text-base sm:text-lg py-4 px-10 shadow-[0_0_40px_rgba(138,43,226,0.6)] group"
          >
            <span>{t('Lancer votre projet', 'Launch your project')}</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
          </button>
        </div>

        {/* Convergence Visual: Idea + Design + Code + AI + Product + Scale = ZETOS */}
        <div className="max-w-2xl mx-auto p-4 sm:p-5 rounded-2xl bg-[#0c0718] border border-[#8a2be2]/30 mb-12 shadow-xl">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-mono text-[#dedae9]">
            <span className="text-white font-bold">Idée</span>
            <span className="text-[#8a2be2]">•</span>
            <span className="text-white font-bold">Design</span>
            <span className="text-[#8a2be2]">•</span>
            <span className="text-white font-bold">Code</span>
            <span className="text-[#8a2be2]">•</span>
            <span className="text-white font-bold">IA</span>
            <span className="text-[#8a2be2]">•</span>
            <span className="text-white font-bold">Produit</span>
            <span className="text-[#8a2be2]">•</span>
            <span className="text-white font-bold">Scale</span>
            <span className="text-[#c084fc] font-black">=</span>
            <span className="px-3 py-1 rounded-full bg-[#8a2be2] text-white font-black font-heading shadow-[0_0_15px_#8a2be2]">
              ZETOS
            </span>
          </div>
        </div>

        {/* Studio Direct Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto pt-8 border-t border-white/10">
          <a
            href="mailto:dev@zetos.fr"
            className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-[#0e0918] border border-white/5 hover:border-[#8a2be2]/40 transition-colors group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#1b0d2e] flex items-center justify-center text-[#c084fc]">
              <Mail className="w-5 h-5" />
            </div>
            <div className="text-left">
              <span className="text-[11px] text-[#9890a8] block">{t('Email direct', 'Direct Email')}</span>
              <span className="text-xs sm:text-sm font-bold text-white group-hover:text-[#c084fc] transition-colors">
                dev@zetos.fr
              </span>
            </div>
          </a>

          <div className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-[#0e0918] border border-white/5">
            <div className="w-10 h-10 rounded-xl bg-[#1b0d2e] flex items-center justify-center text-[#c084fc]">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="text-left">
              <span className="text-[11px] text-[#9890a8] block">{t('Studio à Paris', 'Paris Studio')}</span>
              <span className="text-xs sm:text-sm font-bold text-white">Paris, France · Agréé CII</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
