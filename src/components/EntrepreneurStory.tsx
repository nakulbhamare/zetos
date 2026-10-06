import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CORE_PILLARS } from '../data/content';
import {
  Sparkles,
  ArrowRight,
  Compass,
  Gauge,
  Target,
  ShieldCheck,
  Users,
  Zap,
  Rocket
} from 'lucide-react';

interface EntrepreneurStoryProps {
  onOpenContactModal: () => void;
}

export const EntrepreneurStory: React.FC<EntrepreneurStoryProps> = () => {
  const { language, t } = useLanguage();
  const [activeCycleWord, setActiveCycleWord] = useState(0);

  const cycleWordsFr = ['Lancer.', 'Rater.', 'Pivoter.', 'Apprendre.', 'Scaler.', 'Répéter.'];
  const cycleWordsEn = ['Launch.', 'Fail.', 'Pivot.', 'Learn.', 'Scale.', 'Repeat.'];
  const words = language === 'fr' ? cycleWordsFr : cycleWordsEn;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCycleWord((prev) => (prev + 1) % words.length);
    }, 1800);
    return () => clearInterval(timer);
  }, [words.length]);

  const pillarIcons: Record<string, any> = {
    Compass,
    Gauge,
    Target,
    ShieldCheck
  };

  return (
    <section id="entrepreneurs" className="relative py-24 md:py-32 bg-[#050308] border-b border-white/5 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-1/4 w-[650px] h-[650px] bg-[#8a2be2]/10 blur-[170px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#a855f7]/8 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Tag */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#160c28] border border-[#8a2be2]/30 text-xs font-bold uppercase tracking-widest text-[#c084fc] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('Notre ADN Entrepreneurial', 'Our Founder DNA')}</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-heading text-white tracking-tight mb-6">
            <span>{t('Par des entrepreneurs,', 'By entrepreneurs,')} </span>
            <span className="text-gradient-purple">{t('pour des entrepreneurs.', 'for entrepreneurs.')}</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-[#dedae9] leading-relaxed mb-10">
            {t(
              'Nous ne sommes pas une agence de sous-traitance anonyme. Nous avons créé, financé et scalé nos propres logiciels. Nous comprenons exactement ce que vous traversez.',
              'We are not an anonymous outsourcing agency. We have built, funded, and scaled our own software. We know firsthand the hurdles you navigate daily.'
            )}
          </p>

          {/* Kinetic Word Reveal: Launch. Fail. Pivot. Learn. Scale. Repeat. */}
          <div className="inline-flex items-center gap-2 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-[#0e081c] border border-white/10 shadow-2xl flex-wrap justify-center">
            {words.map((w, idx) => {
              const isCurrent = activeCycleWord === idx;
              return (
                <span
                  key={idx}
                  className={`text-sm sm:text-lg md:text-xl font-black font-heading transition-all duration-300 px-2 py-1 rounded-lg ${
                    isCurrent
                      ? 'text-white bg-[#8a2be2] shadow-[0_0_20px_rgba(138,43,226,0.6)] scale-105'
                      : 'text-[#605970]'
                  }`}
                >
                  {w}
                </span>
              );
            })}
          </div>
        </div>

        {/* The 3 Core Zetos Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {CORE_PILLARS.map((pillar) => {
            const Icon = pillarIcons[pillar.icon] || Compass;
            return (
              <div
                key={pillar.number}
                className="group relative rounded-3xl bg-gradient-to-b from-[#11091e] to-[#07040d] border border-white/10 hover:border-[#8a2be2]/60 p-7 sm:p-8 transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_15px_40px_rgba(138,43,226,0.25)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-[#c084fc] px-2.5 py-1 rounded-full bg-[#8a2be2]/20 border border-[#8a2be2]/40">
                      {pillar.number}
                    </span>
                    <Icon className="w-5 h-5 text-[#a855f7] group-hover:scale-110 transition-transform" />
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#9890a8] block mb-2">
                    {language === 'fr' ? pillar.tag : pillar.tagEn}
                  </span>

                  <h3 className="text-lg sm:text-xl font-black font-heading text-white mb-3 group-hover:text-[#c084fc] transition-colors">
                    {language === 'fr' ? pillar.title : pillar.titleEn}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#dedae9] leading-relaxed mb-6">
                    {language === 'fr' ? pillar.description : pillar.descriptionEn}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <span className="block text-2xl font-black font-heading text-white">
                    {pillar.stat}
                  </span>
                  <span className="text-[11px] text-[#9890a8]">
                    {language === 'fr' ? pillar.statLabel : pillar.statLabelEn}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section 15: "ONE TEAM" Visual Architecture Architecture */}
        <div className="rounded-3xl bg-gradient-to-br from-[#120a22] via-[#0b0614] to-[#050308] border border-[#8a2be2]/40 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#c084fc] block mb-2">
              {t('COLLABORATION DIRECTE SANS INTERMÉDIAIRE', 'DIRECT BUILDER COLLABORATION')}
            </span>
            <h3 className="text-3xl sm:text-4xl font-black font-heading text-white tracking-tight mb-3">
              One team. One product. One direction.
            </h3>
            <p className="text-xs sm:text-sm text-[#dedae9]">
              {t(
                'Pas de strates managériales opaques, pas d’account managers qui ne savent pas coder. Vous dialoguez directement avec l’équipe senior qui conçoit et développe votre produit.',
                'No opaque management layers, no non-technical middlemen. You work directly with the senior engineering and design leads building your product.'
              )}
            </p>
          </div>

          {/* Connected One-Team Visual Flow */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 items-center max-w-4xl mx-auto">
            {/* 1. Founder */}
            <div className="p-4 rounded-2xl bg-[#160d28] border border-white/10 text-center shadow-lg">
              <Users className="w-6 h-6 text-[#c084fc] mx-auto mb-2" />
              <span className="text-xs font-bold text-white block">Vous (Fondateur)</span>
              <span className="text-[10px] text-[#9890a8]">Vision & Marché</span>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex justify-center text-[#8a2be2]">
              <ArrowRight className="w-5 h-5 animate-pulse" />
            </div>

            {/* 2. Zetos Senior Core */}
            <div className="p-5 rounded-2xl bg-[#8a2be2]/25 border border-[#8a2be2] text-center shadow-[0_0_25px_rgba(138,43,226,0.35)] scale-105">
              <Zap className="w-6 h-6 text-white mx-auto mb-2" />
              <span className="text-sm font-black text-white block font-heading">ZETOS Senior Lead</span>
              <span className="text-[10px] text-[#e9d5ff]">Product · Architecture</span>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex justify-center text-[#8a2be2]">
              <ArrowRight className="w-5 h-5 animate-pulse" />
            </div>

            {/* 3. Live Product */}
            <div className="p-4 rounded-2xl bg-[#160d28] border border-[#10b981]/40 text-center shadow-lg">
              <Rocket className="w-6 h-6 text-[#34d399] mx-auto mb-2" />
              <span className="text-xs font-bold text-white block">Produit Live</span>
              <span className="text-[10px] text-[#34d399]">En Production</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
