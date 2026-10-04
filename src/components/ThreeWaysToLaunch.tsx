import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { OFFERS } from '../data/content';
import { Check, ArrowRight, Sparkles, Clock, Shield, Layers, Cpu, Smartphone } from 'lucide-react';

interface ThreeWaysToLaunchProps {
  onSelectOffer: (offerId: string) => void;
}

export const ThreeWaysToLaunch: React.FC<ThreeWaysToLaunchProps> = ({ onSelectOffer }) => {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>('validation');

  const activeOffer = OFFERS.find((o) => o.id === activeTab) || OFFERS[0];

  return (
    <section id="offres" className="relative py-24 md:py-32 bg-[#080510] border-t border-white/5">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8a2be2]/8 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#160c28] border border-[#8a2be2]/30 text-xs font-bold uppercase tracking-widest text-[#c084fc] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('Offres & Tarifs au forfait', 'Engagements & Fixed Pricing')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-heading text-white tracking-tight mb-5">
            {t('Un studio. Trois façons de lancer.', 'One studio. Three ways to launch.')}
          </h2>

          <p className="text-base md:text-lg text-[#9890a8] leading-relaxed">
            {t(
              'Que vous partiez d’une feuille blanche ou d’un produit à faire pivoter, nous avons structuré des forfaits clairs et sans dépassement.',
              'Whether starting from a blank page or scaling an established SaaS, our fixed-price scopes deliver certainty with zero surprises.'
            )}
          </p>
        </div>

        {/* Tab Selector Buttons */}
        <div className="flex justify-center mb-10 md:mb-14">
          <div className="inline-flex flex-wrap items-center justify-center p-1.5 rounded-2xl md:rounded-full bg-[#0d0915] border border-white/10 shadow-2xl gap-1">
            {OFFERS.map((offer) => {
              const isSelected = activeTab === offer.id;
              return (
                <button
                  key={offer.id}
                  type="button"
                  onClick={() => setActiveTab(offer.id)}
                  className={`flex items-center gap-2.5 px-5 py-3 rounded-xl md:rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#8a2be2] to-[#7c3aed] text-white shadow-[0_0_20px_rgba(138,43,226,0.5)] scale-[1.02]'
                      : 'text-[#9890a8] hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="text-base">{offer.emoji}</span>
                  <span>{language === 'fr' ? offer.title : offer.titleEn}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Tab Main Showcase Card */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-b from-[#130b22] to-[#0a0612] border border-[#8a2be2]/30 p-6 sm:p-8 md:p-12 shadow-[0_25px_70px_rgba(0,0,0,0.6)] relative overflow-hidden transition-all duration-500">
          {/* Subtle Ambient Radial Highlight */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#8a2be2]/20 blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center relative z-10">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* Badge & Timeline */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-[#8a2be2]/20 border border-[#8a2be2]/40 text-xs font-bold text-[#c084fc] uppercase tracking-wider">
                  {language === 'fr' ? activeOffer.step : activeOffer.stepEn}
                </span>

                <div className="flex items-center gap-1.5 text-xs text-[#9890a8] font-medium bg-white/5 px-3 py-1 rounded-full border border-white/5">
                  <Clock className="w-3.5 h-3.5 text-[#a855f7]" />
                  <span>{language === 'fr' ? activeOffer.timeline : activeOffer.timelineEn}</span>
                </div>
              </div>

              {/* Offer Headline */}
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-white mb-4 leading-tight">
                {language === 'fr' ? activeOffer.headline : activeOffer.headlineEn}
              </h3>

              {/* Offer Description */}
              <p className="text-sm sm:text-base text-[#dedae9] leading-relaxed mb-8">
                {language === 'fr' ? activeOffer.description : activeOffer.descriptionEn}
              </p>

              {/* Key Deliverables List */}
              <div className="space-y-3 mb-8">
                <p className="text-xs uppercase tracking-wider font-bold text-[#9890a8]">
                  {t('Livrables inclus dans le forfait :', 'Included in the fixed scope:')}
                </p>
                {(language === 'fr' ? activeOffer.deliverables : activeOffer.deliverablesEn).map(
                  (item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#8a2be2]/20 border border-[#8a2be2]/40 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#c084fc]" />
                      </div>
                      <span className="text-xs sm:text-sm text-[#f5f3f9] font-medium">{item}</span>
                    </div>
                  )
                )}
              </div>

              {/* Pricing & CTA Row */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-6 border-t border-white/10">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs text-[#9890a8] uppercase font-semibold">
                      {t('À partir de', 'Starting from')}
                    </span>
                    <span className="text-2xl sm:text-3xl font-black text-white font-heading">
                      {activeOffer.startingPrice}
                    </span>
                  </div>
                  <span className="text-xs text-[#a855f7] font-medium block">
                    {language === 'fr' ? activeOffer.priceNote : activeOffer.priceNoteEn}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectOffer(activeOffer.id)}
                  className="btn-primary sm:ml-auto text-sm py-3 px-6 shadow-[0_0_25px_rgba(138,43,226,0.4)]"
                >
                  <span>{t('Choisir ce forfait', 'Select this scope')}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Interactive Mockup / Illustration Card */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="w-full relative rounded-2xl bg-[#090510] border border-white/10 p-6 shadow-2xl overflow-hidden group">
                {/* Visual Header bar */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/5">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-[10px] font-mono text-[#9890a8]">
                    zetos://delivery/{activeOffer.id}
                  </span>
                </div>

                {/* Offer specific dynamic graphic */}
                {activeOffer.id === 'validation' && (
                  <div className="space-y-4 py-3">
                    <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#160c28]/60 border border-[#8a2be2]/30">
                      <Smartphone className="w-6 h-6 text-[#c084fc] shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-white">Interactive Figma Prototype</div>
                        <div className="text-[11px] text-[#9890a8]">60fps clickable UX flow</div>
                      </div>
                      <span className="ml-auto text-[10px] font-bold px-2 py-0.5 rounded bg-[#8a2be2]/30 text-[#c084fc]">
                        READY
                      </span>
                    </div>

                    <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/5">
                      <Shield className="w-6 h-6 text-[#a855f7] shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-white">Market Risk Scoring</div>
                        <div className="text-[11px] text-[#9890a8]">User interviews analysis</div>
                      </div>
                      <span className="ml-auto text-[10px] font-bold px-2 py-0.5 rounded bg-green-500/20 text-green-400">
                        100%
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-gradient-to-r from-[#8a2be2]/10 to-transparent border border-[#8a2be2]/20">
                      <div className="text-[11px] text-[#dedae9] italic">
                        "En 5 jours, on a pu tester nos hypothèses et sécuriser nos premiers bêta-testeurs."
                      </div>
                    </div>
                  </div>
                )}

                {activeOffer.id === 'build' && (
                  <div className="space-y-4 py-3">
                    <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#160c28]/60 border border-[#8a2be2]/30">
                      <div className="flex items-center gap-3">
                        <Layers className="w-6 h-6 text-[#c084fc]" />
                        <div>
                          <div className="text-xs font-bold text-white">Fullstack Production MVP</div>
                          <div className="text-[11px] text-[#9890a8]">iOS, Android & Web App</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-green-500/20 text-green-400">
                        LIVE
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                        <div className="text-[10px] text-[#9890a8] uppercase">Paiements Stripe</div>
                        <div className="text-xs font-bold text-white mt-1">Abonnements OK</div>
                      </div>
                      <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                        <div className="text-[10px] text-[#9890a8] uppercase">Déploiement</div>
                        <div className="text-xs font-bold text-white mt-1">CI/CD Automatisé</div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-gradient-to-r from-[#8a2be2]/10 to-transparent border border-[#8a2be2]/20">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[#dedae9]">Agrément CII éligible</span>
                        <span className="font-bold text-[#c084fc]">-20% remboursé</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeOffer.id === 'scale' && (
                  <div className="space-y-4 py-3">
                    <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#160c28]/60 border border-[#8a2be2]/30">
                      <div className="flex items-center gap-3">
                        <Cpu className="w-6 h-6 text-[#c084fc]" />
                        <div>
                          <div className="text-xs font-bold text-white">Autonomous AI Multi-Agents</div>
                          <div className="text-[11px] text-[#9890a8]">Connected to business APIs</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-500/20 text-[#c084fc]">
                        ORCHESTRATING
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                        <div className="text-[10px] text-[#9890a8] uppercase">Latence LLM</div>
                        <div className="text-xs font-bold text-white mt-1">&lt; 380ms (RAG)</div>
                      </div>
                      <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                        <div className="text-[10px] text-[#9890a8] uppercase">Précision</div>
                        <div className="text-xs font-bold text-white mt-1">99.4% Guardrails</div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-gradient-to-r from-[#8a2be2]/10 to-transparent border border-[#8a2be2]/20">
                      <div className="text-[11px] text-[#dedae9]">
                        Agents prédictifs intégrés à vos bases PostgreSQL et CRM.
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
