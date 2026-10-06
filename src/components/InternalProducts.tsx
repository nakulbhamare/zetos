import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CASE_STUDIES } from '../data/content';
import { Sparkles, ArrowRight, Flame, Radio, Plane, MonitorPlay, GraduationCap } from 'lucide-react';

interface InternalProductsProps {
  onOpenContactModal: (projectContext?: string) => void;
}

export const InternalProducts: React.FC<InternalProductsProps> = ({ onOpenContactModal }) => {
  const { language, t } = useLanguage();

  const internalProjects = CASE_STUDIES.filter((p) => p.isInternalProduct);

  const getIcon = (type: string) => {
    switch (type) {
      case 'GraduationCap': return GraduationCap;
      case 'Plane': return Plane;
      case 'MonitorPlay': return MonitorPlay;
      case 'Radio': return Radio;
      default: return Sparkles;
    }
  };

  return (
    <section id="own-products" className="relative py-24 md:py-32 bg-[#050308] border-b border-white/5 overflow-hidden">
      {/* Ambient lighting */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-[#8a2be2]/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#160c28] border border-[#8a2be2]/30 text-xs font-bold uppercase tracking-widest text-[#c084fc] mb-4">
            <Flame className="w-3.5 h-3.5" />
            <span>{t('Preuve par l’Action', 'Proof in Action')}</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-heading text-white tracking-tight mb-6">
            <span className="block">{t('On ne fait pas que construire des produits.', 'We don’t just build products.')}</span>
            <span className="block text-gradient-purple">
              {t('On construit les nôtres.', 'We build our own.')}
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-[#dedae9] leading-relaxed">
            {t(
              'La meilleure preuve de notre savoir-faire : nous concevons, finançons et faisons grandir nos propres logiciels SaaS et applications mobiles. C’est pour cela qu’on sait exactement comment réussir les vôtres.',
              'The ultimate proof of our craft: we build, fund, and operate our own software products and mobile apps. That is why we know precisely how to make yours succeed.'
            )}
          </p>
        </div>

        {/* 4 Internal Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {internalProjects.map((proj) => {
            const Icon = getIcon(proj.iconType);
            return (
              <div
                key={proj.id}
                className="group relative rounded-3xl bg-gradient-to-b from-[#130b22] to-[#08040f] border border-[#8a2be2]/30 hover:border-[#8a2be2]/70 p-8 sm:p-10 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(138,43,226,0.25)] flex flex-col justify-between overflow-hidden"
              >
                {/* Background glow */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-[#8a2be2]/15 blur-2xl group-hover:scale-150 transition-transform pointer-events-none" />

                <div>
                  {/* Badge & Live Status */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-[#8a2be2]/20 border border-[#8a2be2]/40 text-xs font-mono font-bold text-[#c084fc] uppercase">
                        {proj.badge}
                      </span>
                      <span className="text-xs text-[#9890a8] font-semibold">
                        {language === 'fr' ? proj.category : proj.categoryEn}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                      <span className="text-xs font-mono font-bold text-[#34d399]">
                        {proj.liveStatus || 'LIVE'}
                      </span>
                    </div>
                  </div>

                  {/* Title & Icon */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-2xl bg-[#1a0f30] border border-[#8a2be2]/30 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#c084fc]" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black font-heading text-white">
                      {proj.title}
                    </h3>
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-[#dedae9] leading-relaxed mb-6">
                    {language === 'fr' ? proj.summary : proj.summaryEn}
                  </p>

                  {/* Metrics Bar */}
                  <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-[#0a0512] border border-white/5 mb-6">
                    {proj.metrics.map((m, i) => (
                      <div key={i} className="text-center">
                        <span className="block text-sm sm:text-base font-black font-heading text-white">
                          {m.value}
                        </span>
                        <span className="block text-[10px] text-[#9890a8] truncate">
                          {language === 'fr' ? m.label : m.labelEn}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Stack & Action */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.stack.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-[#9890a8]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => onOpenContactModal(proj.title)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#c084fc] hover:text-white transition-colors cursor-pointer"
                  >
                    <span>{t('Projet similaire', 'Build similar')}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
