import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FAQ_ITEMS } from '../data/content';
import { HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';

export const FAQSection: React.FC<{ onOpenContactModal: () => void }> = ({ onOpenContactModal }) => {
  const { language, t } = useLanguage();
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="relative py-24 md:py-32 bg-[#050308] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#160c28] border border-[#8a2be2]/30 text-xs font-bold uppercase tracking-widest text-[#c084fc] mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{t('Foire Aux Questions', 'Frequently Asked Questions')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-white tracking-tight mb-5">
            {t('Tout ce que vous devez savoir', 'Everything you need to know')}
          </h2>

          <p className="text-base md:text-lg text-[#9890a8] leading-relaxed">
            {t(
              'Des réponses claires et sans jargon sur notre fonctionnement, nos tarifs et nos garanties.',
              'Clear and straightforward answers regarding our fixed-price scopes, guarantees, and Paris team.'
            )}
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 mb-16">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? 'bg-gradient-to-r from-[#140b24] to-[#0d0817] border-[#8a2be2]/50 shadow-[0_10px_30px_rgba(138,43,226,0.15)]'
                    : 'bg-[#0b0712] border-white/5 hover:border-white/15'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                  className="w-full p-6 sm:p-7 flex items-center justify-between text-left gap-4"
                >
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#c084fc] block mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold font-heading text-white">
                      {language === 'fr' ? item.question : item.questionEn}
                    </h3>
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
                  <div className="px-6 sm:px-7 pb-6 sm:pb-7 text-xs sm:text-sm text-[#dedae9] leading-relaxed border-t border-white/5 pt-4 animate-fade-in">
                    {language === 'fr' ? item.answer : item.answerEn}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="text-center p-8 rounded-3xl bg-[#0f0a1c] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-base font-bold font-heading text-white">
              {t('Une question spécifique sur votre projet ?', 'Have a specific question about your project?')}
            </h4>
            <p className="text-xs text-[#9890a8] mt-0.5">
              {t('Nous répondons sous 24h avec une analyse concrète.', 'We reply within 24h with actionable insights.')}
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenContactModal}
            className="btn-secondary text-xs sm:text-sm py-2.5 px-5 shrink-0"
          >
            <MessageSquare className="w-4 h-4 mr-1 text-[#c084fc]" />
            <span>{t('Poser une question', 'Ask a question')}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
