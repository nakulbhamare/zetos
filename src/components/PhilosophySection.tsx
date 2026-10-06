import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PHILOSOPHY_PRINCIPLES, FOUNDERS } from '../data/content';
import { Sparkles, ArrowUpRight, ChevronDown } from 'lucide-react';

export const PhilosophySection: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);

  return (
    <section id="philosophie" className="relative py-24 md:py-32 bg-[#050308] border-b border-white/5 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[750px] bg-[#8a2be2]/10 blur-[170px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#160c28] border border-[#8a2be2]/30 text-xs font-bold uppercase tracking-widest text-[#c084fc] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('Notre Histoire & Philosophie', 'Our Story & Philosophy')}</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-heading text-white tracking-tight mb-6">
            <span>By entrepreneurs, </span>
            <span className="text-gradient-purple">for entrepreneurs.</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-[#dedae9] leading-relaxed">
            {t(
              'Nous ne sommes pas une agence classique. Nous sommes des entrepreneurs qui en accompagnent d’autres — avec la même intensité, les mêmes exigences et la même obsession du résultat.',
              'We are not a traditional agency. We are founders partnering with founders — bringing the same surgical intensity, uncompromising standards, and ruthless focus on results.'
            )}
          </p>
        </div>

        {/* The 5 Founding Principles Section */}
        <div className="mb-24 md:mb-32">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
            <h3 className="text-xl sm:text-2xl font-black font-heading text-white">
              {t('Nos 5 principes fondateurs', 'Our 5 Core Principles')}
            </h3>
            <span className="text-xs uppercase tracking-widest text-[#9890a8] font-bold">
              {t('Ce qui nous guide', 'What drives us')}
            </span>
          </div>

          <div className="space-y-4">
            {PHILOSOPHY_PRINCIPLES.map((principle, index) => {
              const isOpen = activeAccordion === index;
              return (
                <div
                  key={principle.num}
                  className={`rounded-2xl transition-all duration-300 border ${
                    isOpen
                      ? 'bg-gradient-to-r from-[#160b28] to-[#0c0816] border-[#8a2be2]/60 shadow-[0_10px_30px_rgba(138,43,226,0.2)]'
                      : 'bg-[#0d0915] border-white/5 hover:border-white/15'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setActiveAccordion(isOpen ? null : index)}
                    className="w-full p-6 sm:p-8 flex items-center justify-between text-left gap-4 cursor-pointer"
                  >
                    <div className="flex items-center gap-4 sm:gap-8">
                      <span className="text-sm sm:text-base font-mono font-bold text-[#c084fc] shrink-0">
                        {principle.num} / 05
                      </span>
                      <h4 className="text-lg sm:text-2xl font-bold font-heading text-white">
                        {language === 'fr' ? principle.title : principle.titleEn}
                      </h4>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-[#8a2be2] text-white' : 'text-[#9890a8]'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0 text-sm sm:text-base text-[#dedae9] leading-relaxed max-w-3xl border-t border-white/5 mt-2 animate-fade-in">
                      {language === 'fr' ? principle.body : principle.bodyEn}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Sections 28 & 29: Founders Spotlight Editorial Cards */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#c084fc] block mb-2">
              {t('L’ÉQUIPE FONDATRICE', 'FOUNDING PARTNERS')}
            </span>
            <h3 className="text-3xl sm:text-4xl font-black font-heading text-white mb-3">
              {t('Built by entrepreneurs.', 'Built by entrepreneurs.')}
            </h3>
            <p className="text-sm md:text-base text-[#9890a8]">
              {t(
                'Deux profils complémentaires engagés dans la conception et l’accélération de vos produits.',
                'Two complementary founder profiles directly involved in the strategic & technical execution of your products.'
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {FOUNDERS.map((founder) => (
              <div
                key={founder.id}
                className="group relative rounded-3xl bg-[#0f0a1c] border border-white/10 hover:border-[#8a2be2]/60 p-8 sm:p-10 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(138,43,226,0.25)] flex flex-col justify-between overflow-hidden"
              >
                {/* Background ambient lighting */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#8a2be2]/15 blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

                <div>
                  {/* Founder Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8a2be2] to-[#4c1d95] p-0.5 shadow-[0_0_25px_rgba(138,43,226,0.5)]">
                      <div className="w-full h-full rounded-[14px] bg-[#0d0915] flex items-center justify-center text-xl font-black font-heading text-white">
                        {founder.name
                          .split(' ')
                          .map((n) => n[0])
                          .slice(0, 2)
                          .join('')}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl sm:text-2xl font-black font-heading text-white">
                        {founder.name}
                      </h4>
                      <span className="text-xs sm:text-sm font-semibold text-[#c084fc]">
                        {language === 'fr' ? founder.role : founder.roleEn}
                      </span>
                    </div>
                  </div>

                  {/* Track Record Tag */}
                  <div className="p-3 rounded-xl bg-[#140b24] border border-white/5 mb-4 text-xs font-mono text-[#e9d5ff]">
                    {language === 'fr' ? founder.trackRecord : founder.trackRecordEn}
                  </div>

                  {/* Bio */}
                  <p className="text-xs sm:text-sm text-[#dedae9] leading-relaxed mb-6">
                    {language === 'fr' ? founder.bio : founder.bioEn}
                  </p>

                  {/* Specialties Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {(language === 'fr' ? founder.specialties : founder.specialtiesEn).map(
                      (spec, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-[11px] font-semibold text-[#dedae9]"
                        >
                          {spec}
                        </span>
                      )
                    )}
                  </div>
                </div>

                {/* LinkedIn Link */}
                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-[#9890a8]">
                    {t('Profil certifié', 'Verified Profile')}
                  </span>

                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#180e2b] border border-[#8a2be2]/30 hover:border-[#8a2be2] text-xs font-bold text-white transition-all hover:bg-[#8a2be2]/20 cursor-pointer"
                  >
                    <svg className="w-3.5 h-3.5 fill-current text-[#0077b5]" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
                    </svg>
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#a855f7]" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
