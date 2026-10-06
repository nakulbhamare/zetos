import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TESTIMONIALS, INDUSTRIES } from '../data/content';
import { Quote } from 'lucide-react';

export const SocialProof: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="temoignages" className="relative py-24 md:py-32 bg-[#050308] border-b border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-[650px] h-[650px] bg-[#8a2be2]/10 blur-[170px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#160c28] border border-[#8a2be2]/30 text-xs font-bold uppercase tracking-widest text-[#c084fc] mb-4">
            <Quote className="w-3.5 h-3.5" />
            <span>{t('Témoignages & Confiance', 'Client Testimonials & Proof')}</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-heading text-white tracking-tight mb-6">
            {t('Ce que disent les fondateurs.', 'What founders say.')}
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-[#dedae9] leading-relaxed">
            {t(
              'Des partenariats durables basés sur la confiance, le respect strict des délais et la performance produit.',
              'Long-term partnerships built on trust, strict deadline adherence, and shipped product performance.'
            )}
          </p>
        </div>

        {/* Section 30: Major Cinematic Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {TESTIMONIALS.map((testi) => (
            <div
              key={testi.id}
              className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#130b24] to-[#08040f] border border-[#8a2be2]/30 relative flex flex-col justify-between shadow-2xl hover:border-[#8a2be2]/60 transition-colors"
            >
              {/* Quote icon background */}
              <Quote className="w-12 h-12 text-[#8a2be2]/15 absolute top-6 right-6 pointer-events-none" />

              <div>
                {/* Metric pill */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#8a2be2]/20 border border-[#8a2be2]/40 text-xs font-mono font-bold text-[#e9d5ff] mb-6">
                  <span className="text-sm font-black text-white">{testi.metric}</span>
                  <span>{language === 'fr' ? testi.metricLabel : testi.metricLabelEn}</span>
                </div>

                {/* Quote Text */}
                <p className="text-sm sm:text-base text-[#dedae9] leading-relaxed italic mb-8">
                  “{language === 'fr' ? testi.quote : testi.quoteEn}”
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 border-t border-white/10 flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#8a2be2] to-[#4c1d95] flex items-center justify-center text-sm font-black text-white font-heading shadow-md">
                  {testi.author
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">{testi.author}</h4>
                  <span className="text-xs text-[#c084fc] font-medium">
                    {testi.role} @{testi.company}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section 32: Industries Matrix */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#0b0614] border border-white/10 shadow-2xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 pb-4 border-b border-white/10">
            <div>
              <span className="text-xs font-mono font-bold text-[#c084fc] uppercase tracking-wider block mb-1">
                {t('ÉCOSYSTÈMES & SECTEURS D’ACTIVITÉ', 'INDUSTRIES & ECOSYSTEMS')}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black font-heading text-white">
                {t('Une expertise éprouvée multi-secteurs', 'Proven expertise across modern verticals')}
              </h3>
            </div>
            <span className="text-xs text-[#9890a8] font-mono">
              {t('10+ secteurs couverts', '10+ verticals shipped')}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {INDUSTRIES.map((ind, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[#12081c] border border-white/5 hover:border-[#8a2be2]/40 transition-colors text-center"
              >
                <span className="text-sm font-bold text-white block mb-1">{ind.name}</span>
                <span className="text-[11px] text-[#9890a8] font-mono">{ind.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
