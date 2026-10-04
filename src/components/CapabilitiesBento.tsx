import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BENTO_CAPABILITIES } from '../data/content';
import { Smartphone, Layers, Bot, Sparkles } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Smartphone: <Smartphone className="w-6 h-6 text-[#c084fc]" />,
  Layers: <Layers className="w-6 h-6 text-[#c084fc]" />,
  Bot: <Bot className="w-6 h-6 text-[#c084fc]" />,
  Sparkles: <Sparkles className="w-6 h-6 text-[#c084fc]" />
};

export const CapabilitiesBento: React.FC<{ onOpenContactModal: () => void }> = () => {
  const { language, t } = useLanguage();

  return (
    <section className="relative py-24 md:py-32 bg-[#080510] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#160c28] border border-[#8a2be2]/30 text-xs font-bold uppercase tracking-widest text-[#c084fc] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('Expertise & Stack Technique', 'Core Technical Expertise')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-heading text-white tracking-tight mb-5">
            {t('On construit, on maintient, on scale', 'We build, maintain, and scale')}
          </h2>

          <p className="text-base md:text-lg text-[#9890a8] leading-relaxed">
            {t(
              'De la première ligne de code au scale international, nous apportons l’exigence d’ingénierie et l’agilité produit nécessaires à votre succès.',
              'From your first commit to global production scale, we deliver the engineering rigor and product agility needed to win.'
            )}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BENTO_CAPABILITIES.map((bento) => (
            <div
              key={bento.id}
              className="group relative rounded-3xl bg-[#0e0918] border border-white/10 hover:border-[#8a2be2]/50 p-8 sm:p-10 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(138,43,226,0.2)] flex flex-col justify-between overflow-hidden"
            >
              {/* Corner Glow */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#8a2be2]/15 blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#1b0d2e] border border-[#8a2be2]/40 flex items-center justify-center">
                    {iconMap[bento.icon]}
                  </div>

                  <span className="text-xs uppercase tracking-widest font-extrabold text-[#c084fc]">
                    {language === 'fr' ? bento.subtitle : bento.subtitleEn}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black font-heading text-white mb-3 leading-tight">
                  {language === 'fr' ? bento.title : bento.titleEn}
                </h3>

                <p className="text-sm sm:text-base text-[#dedae9] leading-relaxed mb-6">
                  {language === 'fr' ? bento.description : bento.descriptionEn}
                </p>
              </div>

              {/* Tags */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap gap-2">
                {bento.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs font-semibold text-[#dedae9] group-hover:border-[#8a2be2]/30 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
