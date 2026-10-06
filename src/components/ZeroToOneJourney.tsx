import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { JOURNEY_STAGES } from '../data/content';
import {
  Sparkles,
  ArrowRight,
  Clock,
  Layers,
  LayoutDashboard,
  Code2,
  Smartphone,
  TrendingUp,
  Check,
  Activity
} from 'lucide-react';

interface ZeroToOneJourneyProps {
  onOpenContactModal: () => void;
}

export const ZeroToOneJourney: React.FC<ZeroToOneJourneyProps> = ({ onOpenContactModal }) => {
  const { language, t } = useLanguage();
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  const stage = JOURNEY_STAGES[activeStageIndex];
  const stageIcons = [Sparkles, Layers, LayoutDashboard, Code2, Smartphone, TrendingUp];

  return (
    <section id="journey" className="relative py-24 md:py-32 bg-[#050308] border-b border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-[#8a2be2]/10 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-0 w-[550px] h-[550px] bg-[#a855f7]/8 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#160c28] border border-[#8a2be2]/30 text-xs font-bold uppercase tracking-widest text-[#c084fc] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('La Méthode Zetos · Zero to One', 'The Zetos Method · Zero to One')}</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-heading text-white tracking-tight mb-6">
            <span>{t('De l’idée au produit.', 'From idea to product.')}</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-[#dedae9] leading-relaxed">
            {t(
              'Un parcours en 6 étapes éprouvé sur plus de 100 produits pour éliminer le risque d’échec et expédier un produit exceptionnel.',
              'A battle-tested 6-stage journey proven across 100+ software launches to eliminate execution risk and ship exceptional software.'
            )}
          </p>
        </div>

        {/* Stage Navigation Stepper */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-12">
          {JOURNEY_STAGES.map((s, idx) => {
            const Icon = stageIcons[idx] || Sparkles;
            const isActive = activeStageIndex === idx;
            return (
              <button
                key={s.step}
                type="button"
                onClick={() => setActiveStageIndex(idx)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[110px] ${
                  isActive
                    ? 'bg-gradient-to-b from-[#180c2e] to-[#0d071a] border-[#8a2be2] shadow-[0_0_25px_rgba(138,43,226,0.35)]'
                    : 'bg-[#0d0915] border-white/5 hover:border-white/15 hover:bg-[#120c1e]'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <span
                    className={`text-xs font-mono font-bold ${
                      isActive ? 'text-[#c084fc]' : 'text-[#605970]'
                    }`}
                  >
                    {s.step}
                  </span>
                  <Icon
                    className={`w-4 h-4 ${isActive ? 'text-[#c084fc]' : 'text-[#9890a8]'}`}
                  />
                </div>

                <div>
                  <h3 className="text-sm font-bold font-heading text-white">
                    {language === 'fr' ? s.title : s.titleEn}
                  </h3>
                  <span className="text-[10px] text-[#9890a8] font-mono">
                    {language === 'fr' ? s.duration : s.durationEn}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Main Stage Showcase (Split Layout: Detailed Stage Info & Live Dynamic Mockup) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Stage Explanation & Outputs (5 cols) */}
          <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-[#0e081c] border border-white/10 flex flex-col justify-between shadow-2xl">
            <div>
              {/* Stage Badge & Step Indicator */}
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-full bg-[#8a2be2]/20 border border-[#8a2be2]/40 text-xs font-mono font-bold text-[#c084fc]">
                  ÉTAPE {stage.step} / 06
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-mono text-[#9890a8]">
                  <Clock className="w-3.5 h-3.5 text-[#c084fc]" />
                  {language === 'fr' ? stage.duration : stage.durationEn}
                </span>
              </div>

              {/* Subtitle / Big Quote */}
              <h3 className="text-2xl sm:text-3xl font-black font-heading text-white mb-4 leading-tight">
                “{language === 'fr' ? stage.subtitle : stage.subtitleEn}”
              </h3>

              {/* Detailed Description */}
              <p className="text-sm sm:text-base text-[#dedae9] leading-relaxed mb-8">
                {language === 'fr' ? stage.description : stage.descriptionEn}
              </p>

              {/* Concrete Outputs & Deliverables */}
              <div className="mb-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#9890a8] mb-3">
                  {t('Livrables concrets de cette étape :', 'Concrete deliverables at this stage:')}
                </h4>
                <div className="space-y-2.5">
                  {(language === 'fr' ? stage.outputs : stage.outputsEn).map((out, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#dedae9]">
                      <div className="w-4 h-4 rounded-full bg-[#8a2be2]/30 border border-[#8a2be2] flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-[#e9d5ff]" />
                      </div>
                      <span>{out}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <button
                type="button"
                onClick={onOpenContactModal}
                className="btn-primary text-xs sm:text-sm py-3 px-6 cursor-pointer"
              >
                <span>{t('Démarrer cette étape', 'Start this stage')}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <span className="text-xs text-[#9890a8] font-mono">
                {language === 'fr' ? `Phase ${stage.step}` : `Stage ${stage.step}`}
              </span>
            </div>
          </div>

          {/* Right Column: Live Visual Screen Transformation Simulator (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-[#090510] border border-[#8a2be2]/30 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            {/* Visual Header bar */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ef4444]" />
                <div className="w-3 h-3 rounded-full bg-[#f59e0b]" />
                <div className="w-3 h-3 rounded-full bg-[#10b981]" />
                <span className="ml-2 text-xs font-mono text-[#9890a8]">
                  zetos://product-forge/{stage.visualType}.app
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#a855f7] animate-pulse" />
                <span className="text-xs font-mono font-bold text-[#c084fc] uppercase">
                  {stage.title}
                </span>
              </div>
            </div>

            {/* Dynamic Stage Render */}
            <div className="flex-1 flex items-center justify-center min-h-[340px]">
              {/* Stage 1: CONCEPT / IDEA */}
              {activeStageIndex === 0 && (
                <div className="w-full space-y-4 animate-fade-in">
                  <div className="p-5 rounded-2xl bg-[#140b24] border border-[#8a2be2]/40 shadow-lg">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-[#c084fc] uppercase tracking-wider">
                        01 / CADRAGE VISION & PROBLÈME
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#8a2be2]/20 text-[10px] font-mono text-[#e9d5ff]">
                        PRIORITÉ CRITIQUE
                      </span>
                    </div>
                    <h5 className="text-lg font-bold text-white mb-2">
                      “Quelle est la friction N°1 de vos futurs clients ?”
                    </h5>
                    <p className="text-xs text-[#9890a8] leading-relaxed">
                      Identification de la valeur essentielle, analyse des alternatives concurrentes et définition des indicateurs de succès (CAC, LTV, Activation).
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-4 rounded-xl bg-[#0e0819] border border-white/5">
                      <span className="text-[10px] text-[#9890a8] uppercase font-bold block mb-1">Cible prioritaire</span>
                      <span className="text-xs font-bold text-white">Fondateurs & Dirigeants B2B</span>
                    </div>
                    <div className="p-4 rounded-xl bg-[#0e0819] border border-white/5">
                      <span className="text-[10px] text-[#9890a8] uppercase font-bold block mb-1">Dérisquage</span>
                      <span className="text-xs font-bold text-[#34d399]">100% Validé en amont</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Stage 2: WIREFRAME & VALIDATION */}
              {activeStageIndex === 1 && (
                <div className="w-full space-y-4 animate-fade-in">
                  <div className="p-5 rounded-2xl bg-[#140b24] border border-[#8a2be2]/40 shadow-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Layers className="w-4 h-4 text-[#c084fc]" />
                        <span className="text-xs font-bold text-white">PROTOTYPE INTERACTIF FIGMA</span>
                      </div>
                      <span className="text-[10px] font-mono text-[#34d399] bg-[#10b981]/15 px-2 py-0.5 rounded-full">
                        TESTS UTILISATEURS : 94% SUCCÈS
                      </span>
                    </div>

                    <div className="p-4 rounded-xl bg-[#0b0614] border border-white/5 space-y-2 mb-3">
                      <div className="h-4 w-3/4 bg-white/15 rounded-md" />
                      <div className="h-3 w-1/2 bg-white/10 rounded-md" />
                      <div className="grid grid-cols-3 gap-2 pt-2">
                        <div className="h-14 bg-[#8a2be2]/20 border border-[#8a2be2]/30 rounded-lg flex items-center justify-center text-[10px] font-bold text-[#c084fc]">
                          Action 01
                        </div>
                        <div className="h-14 bg-white/5 rounded-lg flex items-center justify-center text-[10px] text-[#9890a8]">
                          Action 02
                        </div>
                        <div className="h-14 bg-white/5 rounded-lg flex items-center justify-center text-[10px] text-[#9890a8]">
                          Action 03
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs text-[#dedae9]">
                      <span>Interviews cibles : 12 fondateurs testés</span>
                      <span className="text-[#c084fc] font-bold">Feedback : Go Build immédiat</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Stage 3: DESIGN SYSTEM */}
              {activeStageIndex === 2 && (
                <div className="w-full space-y-4 animate-fade-in">
                  <div className="p-5 rounded-2xl bg-[#140b24] border border-[#8a2be2]/40 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold text-white font-heading">
                        DESIGN SYSTEM · TOKENS & ATOMES
                      </span>
                      <div className="flex items-center gap-1.5">
                        <div className="w-3.5 h-3.5 rounded-full bg-[#8a2be2]" />
                        <div className="w-3.5 h-3.5 rounded-full bg-[#a855f7]" />
                        <div className="w-3.5 h-3.5 rounded-full bg-[#c084fc]" />
                        <div className="w-3.5 h-3.5 rounded-full bg-[#ffffff]" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="p-3 rounded-xl bg-[#0d0718] border border-white/5">
                        <span className="text-[10px] text-[#9890a8] font-mono block mb-1">Typographie Display</span>
                        <span className="text-base font-black font-heading text-white">Plus Jakarta Sans 800</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#0d0718] border border-white/5">
                        <span className="text-[10px] text-[#9890a8] font-mono block mb-1">Micro-Interactions</span>
                        <span className="text-xs font-bold text-[#c084fc]">Spring 60fps Physics</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-gradient-to-r from-[#8a2be2]/30 to-[#6d1bb5]/30 border border-[#8a2be2]/50 flex items-center justify-between">
                      <span className="text-xs font-bold text-white">Bouton CTA Specular Glow</span>
                      <span className="px-3 py-1 rounded-full bg-[#8a2be2] text-[11px] font-bold text-white shadow-[0_0_15px_#8a2be2]">
                        Lancer le MVP →
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Stage 4: CODE & ARCHITECTURE */}
              {activeStageIndex === 3 && (
                <div className="w-full space-y-3 font-mono text-xs animate-fade-in">
                  <div className="p-4 rounded-2xl bg-[#090510] border border-[#8a2be2]/40 text-left overflow-x-auto">
                    <div className="flex items-center justify-between text-[#9890a8] text-[11px] mb-3 pb-2 border-b border-white/10">
                      <span>src/services/productEngine.ts</span>
                      <span className="text-[#34d399]">● TESTS: 48/48 PASSING</span>
                    </div>
                    <p className="text-[#c084fc]">import <span className="text-white">&#123; createProductEngine, authMiddleware &#125;</span> from <span className="text-[#34d399]">'@zetos/core'</span>;</p>
                    <p className="text-[#dedae9] mt-2"><span className="text-[#8a2be2]">export async function</span> <span className="text-[#e9d5ff]">shipProduct</span>(brief: ProjectBrief) &#123;</p>
                    <p className="text-[#9890a8] pl-4"><span className="text-[#c084fc]">const</span> stack = await buildNextjsEngine(&#123; db: 'PostgreSQL', vector: true &#125;);</p>
                    <p className="text-[#9890a8] pl-4"><span className="text-[#c084fc]">const</span> auth = await setupStripeSubscriptions(brief.tier);</p>
                    <p className="text-[#dedae9] pl-4"><span className="text-[#8a2be2]">return</span> &#123; status: <span className="text-[#34d399]">'PRODUCTION_READY'</span>, velocity: <span className="text-[#c084fc]">'2_WEEKS'</span> &#125;;</p>
                    <p className="text-[#dedae9]">&#125;</p>
                  </div>
                </div>
              )}

              {/* Stage 5: LIVE LAUNCH */}
              {activeStageIndex === 4 && (
                <div className="w-full space-y-4 animate-fade-in">
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-[#180c2e] to-[#0c0617] border border-[#10b981]/50 shadow-2xl text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10b981]/20 border border-[#10b981]/50 text-xs font-mono font-bold text-[#34d399] mb-4">
                      <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping" />
                      <span>PRODUIT EN PRODUCTION LIVE</span>
                    </div>

                    <h5 className="text-xl font-black font-heading text-white mb-2">
                      Déploiement Cloud & Stores Réussi
                    </h5>
                    <p className="text-xs text-[#dedae9] max-w-md mx-auto mb-6">
                      App Store (iOS) · Google Play (Android) · Domaine Web HTTPS · Zéro temps d’arrêt
                    </p>

                    <div className="grid grid-cols-3 gap-2">
                      <div className="p-3 rounded-xl bg-[#090510] border border-white/10">
                        <span className="text-[10px] text-[#9890a8] block">Latence Edge</span>
                        <span className="text-sm font-bold text-white font-mono">&lt; 45ms</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#090510] border border-white/10">
                        <span className="text-[10px] text-[#9890a8] block">Disponibilité</span>
                        <span className="text-sm font-bold text-[#34d399] font-mono">99.99%</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#090510] border border-white/10">
                        <span className="text-[10px] text-[#9890a8] block">Paiements Stripe</span>
                        <span className="text-sm font-bold text-white font-mono">Actifs</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Stage 6: SCALE & AI */}
              {activeStageIndex === 5 && (
                <div className="w-full space-y-4 animate-fade-in">
                  <div className="p-5 rounded-2xl bg-[#140b24] border border-[#8a2be2]/40 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Activity className="w-4 h-4 text-[#c084fc]" />
                        <span className="text-xs font-bold text-white">METRICS DE CROISSANCE & AGENTS IA</span>
                      </div>
                      <span className="text-xs font-mono font-bold text-[#34d399]">+240% MRR</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="p-3 rounded-xl bg-[#0d0718] border border-white/5">
                        <span className="text-[10px] text-[#9890a8] block">Agents IA Actifs</span>
                        <span className="text-base font-black text-white">4 Workflows Autonomes</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#0d0718] border border-white/5">
                        <span className="text-[10px] text-[#9890a8] block">Rétention M3</span>
                        <span className="text-base font-black text-[#c084fc]">68% (Benchmark top 5%)</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-[#0b0614] border border-white/5 flex items-center justify-between text-xs text-[#dedae9]">
                      <span>Automatisation opérationnelle</span>
                      <span className="text-[#34d399] font-bold">14h économisées / semaine</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Timeline Stepper Bar */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#9890a8]">
              <span className="font-mono">
                {language === 'fr' ? 'Progression Zero to One' : 'Zero to One Progression'}
              </span>
              <div className="flex items-center gap-1.5">
                {JOURNEY_STAGES.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveStageIndex(i)}
                    className={`h-2.5 rounded-full transition-all cursor-pointer ${
                      activeStageIndex === i ? 'bg-[#c084fc] w-6' : 'bg-white/20 hover:bg-white/40 w-2.5'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
