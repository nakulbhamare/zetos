import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CORE_PILLARS } from '../data/content';
import { Compass, Gauge, Target, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-7 h-7 text-[#c084fc]" />,
  Gauge: <Gauge className="w-7 h-7 text-[#c084fc]" />,
  Target: <Target className="w-7 h-7 text-[#c084fc]" />,
  ShieldCheck: <ShieldCheck className="w-7 h-7 text-[#c084fc]" />
};

export const CorePillars: React.FC<{ onOpenContactModal: () => void }> = () => {
  const { language, t } = useLanguage();

  return (
    <section className="relative py-24 md:py-32 bg-[#050308] border-t border-white/5 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#8a2be2]/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#a855f7]/8 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#160c28] border border-[#8a2be2]/30 text-xs font-bold uppercase tracking-widest text-[#c084fc] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('Notre Différence', 'Our Edge')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-heading text-white tracking-tight mb-5">
            {t('Ce qui nous rend inarrêtables', 'What makes us unstoppable')}
          </h2>

          <p className="text-base md:text-lg text-[#9890a8] leading-relaxed">
            {t(
              'Par des entrepreneurs, pour des entrepreneurs. Quatre piliers intangibles qui définissent chaque produit livré.',
              'By founders, for founders. Four fundamental pillars that define every single product we architect and ship.'
            )}
          </p>
        </div>

        {/* 4 Pillars Grid with 10x Luxury Styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {CORE_PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="group relative rounded-3xl bg-gradient-to-b from-[#11091e]/90 to-[#090510] border border-white/10 hover:border-[#8a2be2]/50 p-8 sm:p-10 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(138,43,226,0.2)] flex flex-col justify-between overflow-hidden"
            >
              {/* Background ambient corner glow on hover */}
              <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-[#8a2be2]/20 blur-3xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

              {/* Top Row: Icon + Number */}
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-[#1d0f33] border border-[#8a2be2]/40 flex items-center justify-center group-hover:border-[#c084fc] group-hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(138,43,226,0.3)]">
                    {iconMap[pillar.icon]}
                  </div>

                  <span className="text-4xl sm:text-5xl font-black font-heading text-white/10 group-hover:text-[#8a2be2]/30 transition-colors select-none">
                    {pillar.number}
                  </span>
                </div>

                {/* Tag */}
                <div className="mb-3">
                  <span className="text-xs uppercase tracking-[0.2em] font-extrabold text-[#c084fc]">
                    {language === 'fr' ? pillar.tag : pillar.tagEn}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-4 leading-tight">
                  {language === 'fr' ? pillar.title : pillar.titleEn}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-[#dedae9] leading-relaxed mb-8">
                  {language === 'fr' ? pillar.description : pillar.descriptionEn}
                </p>
              </div>

              {/* Bottom Stat Row */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-xl sm:text-2xl font-black font-heading text-white">
                    {pillar.stat}
                  </span>
                  <span className="block text-xs text-[#9890a8] font-medium">
                    {language === 'fr' ? pillar.statLabel : pillar.statLabelEn}
                  </span>
                </div>

                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#8a2be2] group-hover:border-[#c084fc] transition-colors">
                  <ArrowRight className="w-4 h-4 text-[#dedae9] group-hover:text-white transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
