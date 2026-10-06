import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { OFFERS } from '../data/content';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Check,
  ChevronRight
} from 'lucide-react';

interface ThreeWaysToLaunchProps {
  onSelectOffer: (offerId: string) => void;
}

export const ThreeWaysToLaunch: React.FC<ThreeWaysToLaunchProps> = ({ onSelectOffer }) => {
  const { language, t } = useLanguage();
  const [selectedOfferTab, setSelectedOfferTab] = useState<'validation' | 'build' | 'scale'>('build');

  const currentOffer = OFFERS.find((o) => o.id === selectedOfferTab) || OFFERS[0];

  return (
    <section id="offres" className="relative py-24 md:py-32 bg-[#050308] border-b border-white/5 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#8a2be2]/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/3 left-0 w-[550px] h-[550px] bg-[#a855f7]/8 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#160c28] border border-[#8a2be2]/30 text-xs font-bold uppercase tracking-widest text-[#c084fc] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('Offres Clés en Main · Forfait Fixe', 'Turnkey Offers · Fixed Price')}</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-heading text-white tracking-tight mb-6">
            <span>{t('Trois manières de lancer.', 'Three ways to launch.')}</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-[#dedae9] leading-relaxed">
            {t(
              'Que vous partiez d’une simple idée ou d’un produit existant à accélérer, nous intervenons avec un engagement de résultat au forfait ferme.',
              'Whether starting from a raw concept or scaling an existing platform with AI, we deliver with fixed-price accountability.'
            )}
          </p>
        </div>

        {/* 3 Main Offer Selectors (Large High-Impact Tabs) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {OFFERS.map((offer) => {
            const isSelected = selectedOfferTab === offer.id;
            return (
              <div
                key={offer.id}
                onClick={() => setSelectedOfferTab(offer.id as any)}
                className={`p-6 sm:p-8 rounded-3xl border text-left transition-all duration-400 cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#190c30] to-[#0c0617] border-[#8a2be2] shadow-[0_15px_40px_rgba(138,43,226,0.3)] -translate-y-1'
                    : 'bg-[#0d0915] border-white/5 hover:border-white/20 hover:bg-[#120a1d]'
                }`}
              >
                {/* Active Indicator Bar */}
                {isSelected && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8a2be2] via-[#c084fc] to-[#a855f7]" />
                )}

                <div>
                  {/* Step & Price Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                        isSelected
                          ? 'bg-[#8a2be2]/30 text-[#e9d5ff] border border-[#8a2be2]/50'
                          : 'bg-white/5 text-[#9890a8]'
                      }`}
                    >
                      {language === 'fr' ? offer.step : offer.stepEn}
                    </span>

                    <span className="text-sm font-bold font-mono text-[#c084fc]">
                      {offer.startingPrice}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-black font-heading text-white mb-2">
                    {language === 'fr' ? offer.title : offer.titleEn}
                  </h3>

                  {/* Headline */}
                  <p className="text-xs sm:text-sm text-[#dedae9] leading-relaxed mb-6">
                    {language === 'fr' ? offer.headline : offer.headlineEn}
                  </p>
                </div>

                {/* Timeline & Select Action */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-[#9890a8] font-mono">
                    {language === 'fr' ? offer.timeline : offer.timelineEn}
                  </span>
                  <span
                    className={`font-bold inline-flex items-center gap-1 ${
                      isSelected ? 'text-[#c084fc]' : 'text-[#dedae9]'
                    }`}
                  >
                    <span>{isSelected ? t('Sélectionné', 'Active View') : t('Explorer', 'Explore')}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Offer Deep Dive Experience */}
        <div className="rounded-3xl bg-gradient-to-b from-[#110920] to-[#07040d] border border-[#8a2be2]/40 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#8a2be2]/15 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              {/* Badge & Step */}
              <div className="flex items-center gap-3">
                <span className="text-3xl">{currentOffer.emoji}</span>
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#c084fc]">
                    {language === 'fr' ? currentOffer.step : currentOffer.stepEn}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black font-heading text-white">
                    {language === 'fr' ? currentOffer.title : currentOffer.titleEn}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#dedae9] leading-relaxed">
                {language === 'fr' ? currentOffer.description : currentOffer.descriptionEn}
              </p>

              {/* Step-by-Step Visual Process Pipeline */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#9890a8]">
                  {t('Processus de réalisation étape par étape :', 'Step-by-step execution roadmap:')}
                </h4>
                {currentOffer.processSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#0d0718] border border-white/5 flex items-start gap-3"
                  >
                    <span className="w-6 h-6 rounded-full bg-[#8a2be2]/20 border border-[#8a2be2]/40 flex items-center justify-center text-xs font-mono font-bold text-[#c084fc] shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <div>
                      <h5 className="text-xs sm:text-sm font-bold text-white">
                        {language === 'fr' ? step.title : step.titleEn}
                      </h5>
                      <p className="text-[11px] text-[#9890a8]">
                        {language === 'fr' ? step.desc : step.descEn}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Deliverables Checklist */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#9890a8] mb-3">
                  {t('Ce qui est inclus et garanti :', 'Included & guaranteed deliverables:')}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {(language === 'fr' ? currentOffer.deliverables : currentOffer.deliverablesEn).map(
                    (d, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#dedae9]">
                        <CheckCircle2 className="w-4 h-4 text-[#a855f7] shrink-0" />
                        <span>{d}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Right Card: Fixed Price Box & Direct CTA (6 cols) */}
            <div className="lg:col-span-6 flex flex-col justify-between p-8 rounded-3xl bg-[#090510] border border-white/10 shadow-2xl relative">
              <div className="mb-8">
                {/* Price Display */}
                <span className="text-xs font-mono text-[#9890a8] uppercase block mb-1">
                  {t('Tarif d’engagement forfait', 'Fixed engagement price')}
                </span>
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-4xl sm:text-5xl font-black font-heading text-white">
                    {currentOffer.startingPrice}
                  </span>
                  <span className="text-xs font-mono text-[#34d399] bg-[#10b981]/15 px-2.5 py-1 rounded-full">
                    {language === 'fr' ? currentOffer.priceNote : currentOffer.priceNoteEn}
                  </span>
                </div>

                {/* Timeline */}
                <div className="flex items-center gap-2 text-xs text-[#dedae9] font-mono mb-6">
                  <Clock className="w-4 h-4 text-[#c084fc]" />
                  <span>
                    {t('Délai de livraison estimé :', 'Estimated delivery time:')}{' '}
                    <strong className="text-white">
                      {language === 'fr' ? currentOffer.timeline : currentOffer.timelineEn}
                    </strong>
                  </span>
                </div>

                {/* Guarantees */}
                <div className="space-y-2 p-4 rounded-2xl bg-[#140b24]/70 border border-[#8a2be2]/30 mb-8">
                  <div className="flex items-center gap-2 text-xs text-[#e9d5ff]">
                    <ShieldCheck className="w-4 h-4 text-[#c084fc] shrink-0" />
                    <span>{t('Agrément Crédit Impôt Innovation (-20%)', 'Accredited French CII Tax Credit (-20%)')}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#e9d5ff]">
                    <Check className="w-4 h-4 text-[#c084fc] shrink-0" />
                    <span>{t('100% Propriété Intellectuelle & Code source cédés', '100% IP & Source Code Transfer')}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#e9d5ff]">
                    <Check className="w-4 h-4 text-[#c084fc] shrink-0" />
                    <span>{t('Zéro surfacturation · Prix ferme garanti', 'Zero hidden fees · Guaranteed fixed price')}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={() => onSelectOffer(currentOffer.id)}
                className="btn-primary w-full py-4 text-sm sm:text-base shadow-[0_0_30px_rgba(138,43,226,0.5)] group cursor-pointer"
              >
                <span>
                  {t(
                    `Choisir l’offre ${currentOffer.title}`,
                    `Select ${currentOffer.titleEn} offer`
                  )}
                </span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
