import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Calculator, Check, ArrowRight, ShieldCheck, Clock, FileSpreadsheet } from 'lucide-react';

interface ProjectEstimatorProps {
  onPreloadBrief: (briefData: {
    service: string;
    stage: string;
    budget: string;
    timeline: string;
  }) => void;
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({ onPreloadBrief }) => {
  const { t } = useLanguage();

  // Selected State
  const [stage, setStage] = useState<'validation' | 'mvp' | 'scale' | 'ai'>('mvp');
  const [platform, setPlatform] = useState<'web' | 'mobile' | 'both' | 'saas'>('web');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'auth',
    'stripe',
    'dashboard'
  ]);
  const [timelineSpeed, setTimelineSpeed] = useState<'standard' | 'express'>('standard');

  const stageOptions = [
    {
      id: 'validation',
      label: t('💡 Test Marché / Cadrage', '💡 Market Test / Scoping'),
      basePrice: 995,
      baseWeeks: 1
    },
    {
      id: 'mvp',
      label: t('🚀 Nouveau Produit / MVP', '🚀 New MVP Product'),
      basePrice: 6500,
      baseWeeks: 4
    },
    {
      id: 'scale',
      label: t('⚡ Refonte & Scalabilité', '⚡ Scale & Refactor'),
      basePrice: 8500,
      baseWeeks: 6
    },
    {
      id: 'ai',
      label: t('🤖 Agents IA & LLM', '🤖 AI Agents & Workflows'),
      basePrice: 4800,
      baseWeeks: 3
    }
  ];

  const platformOptions = [
    { id: 'web', label: t('Application Web (Next.js)', 'Web App (Next.js)'), price: 0 },
    { id: 'mobile', label: t('App Mobile iOS & Android', 'iOS & Android Native App'), price: 1500 },
    { id: 'both', label: t('Web + Mobile synchronisés', 'Web + Mobile Combined'), price: 2800 },
    { id: 'saas', label: t('Plateforme SaaS Multi-tenant', 'Multi-tenant B2B SaaS'), price: 2200 }
  ];

  const featureOptions = [
    {
      id: 'auth',
      label: t('Auth, SSO & Rôles avancés', 'Auth, SSO & Granular Roles'),
      price: 600
    },
    {
      id: 'stripe',
      label: t('Paiements Stripe & Abonnements', 'Stripe Billing & Subscriptions'),
      price: 900
    },
    {
      id: 'ai',
      label: t('Pipeline IA / RAG / Assistant', 'AI Assistant & RAG Pipeline'),
      price: 1800
    },
    {
      id: 'dashboard',
      label: t('Dashboard Analytics temps-réel', 'Real-time Analytics Dashboard'),
      price: 800
    },
    {
      id: 'api',
      label: t('Intégrations API tierces (CRM/ERP)', 'Third-Party API Integrations'),
      price: 700
    },
    {
      id: 'offline',
      label: t('Mode Hors-ligne & Push Notifs', 'Offline Sync & Push Notifications'),
      price: 950
    }
  ];

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  // Calculate pricing
  const currentStageObj = stageOptions.find((s) => s.id === stage) || stageOptions[1];
  const currentPlatformObj = platformOptions.find((p) => p.id === platform) || platformOptions[0];

  const featuresPrice = selectedFeatures.reduce((acc, fId) => {
    const f = featureOptions.find((item) => item.id === fId);
    return acc + (f ? f.price : 0);
  }, 0);

  const speedMultiplier = timelineSpeed === 'express' ? 1.25 : 1;
  const rawTotal = Math.round((currentStageObj.basePrice + currentPlatformObj.price + featuresPrice) * speedMultiplier);
  const ciiSavings = Math.round(rawTotal * 0.2);
  const netTotal = rawTotal - ciiSavings;

  const totalWeeks = Math.max(
    1,
    Math.round(
      currentStageObj.baseWeeks +
        (platform === 'both' ? 2 : platform === 'mobile' ? 1 : 0) +
        (selectedFeatures.length > 3 ? 1 : 0) -
        (timelineSpeed === 'express' ? 1 : 0)
    )
  );

  const handleCreateBrief = () => {
    onPreloadBrief({
      service: currentStageObj.label,
      stage: `${currentPlatformObj.label} (${selectedFeatures.length} options)`,
      budget: `${rawTotal.toLocaleString('fr-FR')} € (Net CII: ${netTotal.toLocaleString('fr-FR')} €)`,
      timeline: `${totalWeeks} ${t('semaines', 'weeks')}`
    });
  };

  return (
    <section id="simulateur" className="relative py-24 md:py-32 bg-[#080510] border-t border-white/5">
      {/* Radial purple lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#8a2be2]/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#160c28] border border-[#8a2be2]/30 text-xs font-bold uppercase tracking-widest text-[#c084fc] mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>{t('Simulateur Forfait en direct', 'Live Scope & Cost Estimator')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-heading text-white tracking-tight mb-5">
            {t('Estimez votre projet en 30 secondes', 'Estimate your project in 30 seconds')}
          </h2>

          <p className="text-base md:text-lg text-[#9890a8] leading-relaxed">
            {t(
              'Transparence totale. Configurez vos briques fonctionnelles et visualisez l’estimation de budget forfaitaire et l’économie Crédit Impôt Innovation (CII).',
              'Total transparency. Configure your functional stack and calculate your estimated fixed scope plus your French CII tax credit savings in real time.'
            )}
          </p>
        </div>

        {/* Interactive Estimator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Configuration Column (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* 1. Stage */}
            <div className="rounded-2xl bg-[#0e0a19] border border-white/10 p-6 shadow-xl">
              <label className="block text-xs uppercase tracking-wider font-extrabold text-[#c084fc] mb-4">
                1. {t('Type de mission & maturité', 'Project Stage & Objective')}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {stageOptions.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setStage(s.id as any)}
                    className={`p-3.5 rounded-xl text-left text-xs sm:text-sm font-semibold transition-all border ${
                      stage === s.id
                        ? 'bg-[#8a2be2]/20 border-[#8a2be2] text-white shadow-[0_0_15px_rgba(138,43,226,0.3)]'
                        : 'bg-white/5 border-white/5 text-[#dedae9] hover:border-white/20'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Platform */}
            <div className="rounded-2xl bg-[#0e0a19] border border-white/10 p-6 shadow-xl">
              <label className="block text-xs uppercase tracking-wider font-extrabold text-[#c084fc] mb-4">
                2. {t('Plateforme ciblée', 'Target Platform')}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {platformOptions.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setPlatform(p.id as any)}
                    className={`p-3.5 rounded-xl text-left text-xs sm:text-sm font-semibold transition-all border ${
                      platform === p.id
                        ? 'bg-[#8a2be2]/20 border-[#8a2be2] text-white shadow-[0_0_15px_rgba(138,43,226,0.3)]'
                        : 'bg-white/5 border-white/5 text-[#dedae9] hover:border-white/20'
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Features Checkboxes */}
            <div className="rounded-2xl bg-[#0e0a19] border border-white/10 p-6 shadow-xl">
              <label className="block text-xs uppercase tracking-wider font-extrabold text-[#c084fc] mb-4">
                3. {t('Modules & briques fonctionnelles', 'Key Features & Integrations')}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {featureOptions.map((f) => {
                  const isChecked = selectedFeatures.includes(f.id);
                  return (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => toggleFeature(f.id)}
                      className={`flex items-center gap-3 p-3.5 rounded-xl text-left text-xs sm:text-sm font-medium transition-all border ${
                        isChecked
                          ? 'bg-[#8a2be2]/20 border-[#8a2be2] text-white'
                          : 'bg-white/5 border-white/5 text-[#9890a8] hover:text-[#dedae9]'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border ${
                          isChecked
                            ? 'bg-[#8a2be2] border-[#c084fc]'
                            : 'border-white/20 bg-black/40'
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3 text-white" />}
                      </div>
                      <span className="truncate">{f.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Timeline Velocity */}
            <div className="rounded-2xl bg-[#0e0a19] border border-white/10 p-6 shadow-xl">
              <label className="block text-xs uppercase tracking-wider font-extrabold text-[#c084fc] mb-3">
                4. {t('Rythme de livraison', 'Delivery Velocity')}
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setTimelineSpeed('standard')}
                  className={`p-3.5 rounded-xl text-center text-xs sm:text-sm font-semibold transition-all border ${
                    timelineSpeed === 'standard'
                      ? 'bg-[#8a2be2]/20 border-[#8a2be2] text-white'
                      : 'bg-white/5 border-white/5 text-[#9890a8]'
                  }`}
                >
                  {t('Standard (Cycles normaux)', 'Standard Sprint Cadence')}
                </button>
                <button
                  type="button"
                  onClick={() => setTimelineSpeed('express')}
                  className={`p-3.5 rounded-xl text-center text-xs sm:text-sm font-semibold transition-all border ${
                    timelineSpeed === 'express'
                      ? 'bg-[#8a2be2]/20 border-[#8a2be2] text-white shadow-[0_0_15px_rgba(138,43,226,0.3)]'
                      : 'bg-white/5 border-white/5 text-[#9890a8]'
                  }`}
                >
                  ⚡ {t('Sprint Express Accéléré (+25%)', '⚡ Express Rush Sprint (+25%)')}
                </button>
              </div>
            </div>
          </div>

          {/* Right Live Summary Box (5 cols) */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="rounded-3xl bg-gradient-to-b from-[#180e2b] via-[#10091d] to-[#0a0512] border border-[#8a2be2]/40 p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.8)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#8a2be2]/20 blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <FileSpreadsheet className="w-5 h-5 text-[#c084fc]" />
                  <h3 className="text-lg font-bold font-heading text-white">
                    {t('Synthèse de votre forfait', 'Scope Breakdown')}
                  </h3>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-green-500/20 text-green-400 text-xs font-bold">
                  FORFAIT FERME
                </span>
              </div>

              {/* Items Breakdown */}
              <div className="space-y-3 mb-6 text-xs sm:text-sm">
                <div className="flex justify-between text-[#dedae9]">
                  <span>{t('Socle Produit', 'Core Base Architecture')}</span>
                  <span className="font-semibold text-white">
                    {currentStageObj.basePrice.toLocaleString('fr-FR')} €
                  </span>
                </div>

                <div className="flex justify-between text-[#dedae9]">
                  <span>{t('Plateforme ciblée', 'Platform Scope')}</span>
                  <span className="font-semibold text-white">
                    +{currentPlatformObj.price.toLocaleString('fr-FR')} €
                  </span>
                </div>

                <div className="flex justify-between text-[#dedae9]">
                  <span>{t('Modules sélectionnés', 'Selected Modules')} ({selectedFeatures.length})</span>
                  <span className="font-semibold text-white">
                    +{featuresPrice.toLocaleString('fr-FR')} €
                  </span>
                </div>

                {timelineSpeed === 'express' && (
                  <div className="flex justify-between text-[#c084fc]">
                    <span>{t('Option Sprint Express', 'Express Rush Sprint')}</span>
                    <span className="font-semibold">+25%</span>
                  </div>
                )}
              </div>

              {/* Total Raw Price */}
              <div className="p-4 rounded-2xl bg-black/40 border border-white/5 mb-4">
                <div className="flex justify-between items-baseline mb-1">
                  <span className="text-xs uppercase tracking-wider text-[#9890a8] font-bold">
                    {t('Montant Forfait Estimé', 'Estimated Fixed Price')}
                  </span>
                  <span className="text-2xl sm:text-3xl font-black font-heading text-white">
                    {rawTotal.toLocaleString('fr-FR')} €
                  </span>
                </div>
                <span className="text-[11px] text-[#9890a8]">
                  {t('Prix HT · Livrables et engagement garantis', 'Excl. VAT · Guaranteed delivery milestones')}
                </span>
              </div>

              {/* French CII Tax Credit Calculation */}
              <div className="p-4 rounded-2xl bg-[#8a2be2]/15 border border-[#8a2be2]/40 mb-6 space-y-1.5">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <div className="flex items-center gap-1.5 text-[#e9d5ff] font-bold">
                    <ShieldCheck className="w-4 h-4 text-[#c084fc]" />
                    <span>{t('Déduction Crédit Impôt Innovation (CII)', 'CII Tax Credit (20% Cash Back)')}</span>
                  </div>
                  <span className="font-black text-green-400">
                    -{ciiSavings.toLocaleString('fr-FR')} €
                  </span>
                </div>

                <div className="flex items-baseline justify-between pt-2 border-t border-[#8a2be2]/30">
                  <span className="text-xs font-bold uppercase text-[#dedae9]">
                    {t('Coût Réel Net après CII', 'Net Real Cost after CII')}
                  </span>
                  <span className="text-xl font-black text-green-400 font-heading">
                    {netTotal.toLocaleString('fr-FR')} €
                  </span>
                </div>
              </div>

              {/* Delivery Timeline Indicator */}
              <div className="flex items-center gap-2 text-xs text-[#dedae9] mb-6 bg-white/5 p-3 rounded-xl">
                <Clock className="w-4 h-4 text-[#c084fc] shrink-0" />
                <span>
                  {t('Délai de livraison estimé :', 'Estimated delivery timeline:')}{' '}
                  <strong className="text-white">{totalWeeks} {t('semaines', 'weeks')}</strong>
                </span>
              </div>

              {/* CTA Button */}
              <button
                type="button"
                onClick={handleCreateBrief}
                className="btn-primary w-full py-4 text-sm justify-center shadow-[0_0_30px_rgba(138,43,226,0.5)] group"
              >
                <span>{t('Valider mon brief avec Zetos', 'Confirm scope with Zetos')}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
