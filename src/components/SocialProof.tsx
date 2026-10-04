import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TESTIMONIALS } from '../data/content';
import { Quote, Sparkles, Award } from 'lucide-react';

export const SocialProof: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section className="relative py-24 md:py-32 bg-[#080510] border-t border-white/5 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8a2be2]/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#160c28] border border-[#8a2be2]/30 text-xs font-bold uppercase tracking-widest text-[#c084fc] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('Témoignages & Confiance', 'Social Proof & Praise')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-heading text-white tracking-tight mb-5">
            {t('Ils ont changé de dimension', 'Built for high-growth teams')}
          </h2>

          <p className="text-base md:text-lg text-[#9890a8] leading-relaxed">
            {t(
              'La satisfaction de nos fondateurs partenaires est notre seule métrique de succès.',
              'The measurable success and satisfaction of our partner founders is our primary metric.'
            )}
          </p>
        </div>

        {/* Featured Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="relative rounded-3xl bg-gradient-to-b from-[#130b22] to-[#0a0612] border border-white/10 hover:border-[#8a2be2]/40 p-8 sm:p-10 transition-all duration-300 shadow-2xl flex flex-col justify-between"
            >
              <div>
                <Quote className="w-10 h-10 text-[#8a2be2]/40 mb-6" />
                <p className="text-sm sm:text-base text-[#dedae9] leading-relaxed italic mb-8">
                  "{language === 'fr' ? test.quote : test.quoteEn}"
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-base font-bold font-heading text-white">{test.author}</h4>
                  <span className="text-xs text-[#c084fc] font-semibold">
                    {test.role} @ {test.company}
                  </span>
                </div>

                <div className="text-right">
                  <span className="text-lg sm:text-xl font-black font-heading text-white">
                    {test.metric}
                  </span>
                  <span className="block text-[10px] text-[#9890a8]">
                    {language === 'fr' ? test.metricLabel : test.metricLabelEn}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CII Certification & Sister Agency Banner */}
        <div className="max-w-5xl mx-auto rounded-2xl bg-[#0f0a1c] border border-[#8a2be2]/30 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#8a2be2]/20 border border-[#8a2be2]/40 flex items-center justify-center shrink-0">
              <Award className="w-6 h-6 text-[#c084fc]" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold font-heading text-white">
                {t('Zetos est agréé Crédit Impôt Innovation (CII)', 'Zetos is French CII Innovation Tax Credit Accredited')}
              </h4>
              <p className="text-xs sm:text-sm text-[#9890a8] mt-0.5">
                {t(
                  'Bénéficiez d’un remboursement de 20% de vos dépenses de R&D et développement.',
                  'Claim 20% of all eligible product development spend back directly from the government.'
                )}
              </p>
            </div>
          </div>

          <a
            href="https://enjyn.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-[#dedae9] hover:text-white transition-all"
          >
            <span>{t('Agence GTM sœur : Enjyn ↗', 'Sister GTM Agency : Enjyn ↗')}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
