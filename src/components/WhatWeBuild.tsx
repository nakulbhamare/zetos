import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SERVICE_CATEGORIES } from '../data/content';
import {
  Sparkles,
  ArrowRight,
  Layers,
  Bot,
  ShieldCheck,
  CheckCircle2,
  Zap
} from 'lucide-react';

interface WhatWeBuildProps {
  onOpenContactModal: () => void;
}

export const WhatWeBuild: React.FC<WhatWeBuildProps> = ({ onOpenContactModal }) => {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<'product' | 'intelligence' | 'experience' | 'longterm'>('product');
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  const category = SERVICE_CATEGORIES.find((c) => c.id === activeCategory) || SERVICE_CATEGORIES[0];
  const activeItem = category.items[activeItemIndex] || category.items[0];

  const categoryIcons: Record<string, any> = {
    product: Layers,
    intelligence: Bot,
    experience: Sparkles,
    longterm: ShieldCheck
  };

  return (
    <section id="services" className="relative py-24 md:py-32 bg-[#050308] border-b border-white/5 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#8a2be2]/10 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#a855f7]/8 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#160c28] border border-[#8a2be2]/30 text-xs font-bold uppercase tracking-widest text-[#c084fc] mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>{t('Expertise & Savoir-Faire Produit', 'Capabilities & Product Craft')}</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-heading text-white tracking-tight mb-5">
            {t('Ce qu’on construit.', 'What we build.')}
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-[#dedae9] leading-relaxed">
            {t(
              'Des solutions techniques complètes orientées résultat : développement fullstack, architectures SaaS, intelligence artificielle et design d’expérience.',
              'Outcome-driven engineering and product capabilities: fullstack development, SaaS architectures, autonomous AI systems, and conversion-focused UX.'
            )}
          </p>
        </div>

        {/* 4 Main Category Switcher Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12">
          {SERVICE_CATEGORIES.map((cat) => {
            const Icon = categoryIcons[cat.id] || Layers;
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setActiveCategory(cat.id);
                  setActiveItemIndex(0);
                }}
                className={`p-5 sm:p-6 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[120px] ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#190c30] to-[#0c0617] border-[#8a2be2] shadow-[0_10px_30px_rgba(138,43,226,0.3)] -translate-y-1'
                    : 'bg-[#0d0915] border-white/5 hover:border-white/20 hover:bg-[#120a1d]'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <Icon className={`w-5 h-5 ${isSelected ? 'text-[#c084fc]' : 'text-[#9890a8]'}`} />
                  <span
                    className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full ${
                      isSelected ? 'bg-[#8a2be2]/30 text-[#e9d5ff]' : 'text-[#605970]'
                    }`}
                  >
                    0{SERVICE_CATEGORIES.indexOf(cat) + 1}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-black font-heading text-white">
                    {language === 'fr' ? cat.title : cat.titleEn}
                  </h3>
                  <p className="text-[11px] text-[#9890a8] truncate">
                    {language === 'fr' ? cat.tagline : cat.taglineEn}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Category Interactive Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Sub-services list (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            {category.items.map((item, idx) => {
              const isItemActive = activeItemIndex === idx;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveItemIndex(idx)}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer text-left ${
                    isItemActive
                      ? 'bg-[#150b28] border-[#8a2be2] shadow-[0_0_20px_rgba(138,43,226,0.25)]'
                      : 'bg-[#0d0915] border-white/5 hover:border-white/15 hover:bg-[#11081c]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-base font-bold text-white">
                      {language === 'fr' ? item.title : item.titleEn}
                    </h4>
                    <span className="text-[10px] font-mono text-[#c084fc] bg-[#8a2be2]/20 px-2 py-0.5 rounded-md">
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-xs text-[#dedae9] leading-relaxed">
                    {language === 'fr' ? item.description : item.descriptionEn}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Interactive Visual Representation Mockup (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-gradient-to-br from-[#120a22] to-[#07040d] border border-[#8a2be2]/40 p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            {/* Top Device / Window Header */}
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ef4444]" />
                  <div className="w-3 h-3 rounded-full bg-[#f59e0b]" />
                  <div className="w-3 h-3 rounded-full bg-[#10b981]" />
                  <span className="ml-2 text-xs font-mono text-[#9890a8]">
                    zetos://engine/{activeItem.id}
                  </span>
                </div>
                <span className="text-xs font-mono font-bold text-[#c084fc]">
                  {activeItem.tag}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl sm:text-3xl font-black font-heading text-white mb-3">
                {language === 'fr' ? activeItem.title : activeItem.titleEn}
              </h3>
              <p className="text-sm text-[#dedae9] leading-relaxed mb-6">
                {language === 'fr' ? activeItem.description : activeItem.descriptionEn}
              </p>

              {/* Deliverables Checklist Grid */}
              <div className="mb-8">
                <h5 className="text-xs font-bold uppercase tracking-wider text-[#9890a8] mb-3">
                  {t('Inclus dans cette expertise :', 'Included in this capability:')}
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {(language === 'fr' ? activeItem.deliverables : activeItem.deliverablesEn).map(
                    (del, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/5 text-xs text-[#dedae9]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#a855f7] shrink-0" />
                        <span>{del}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Bottom CTA bar */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#9890a8]">
                {t('Livraison au forfait avec engagement qualité Zetos', 'Fixed-price delivery with Zetos quality guarantee')}
              </span>
              <button
                type="button"
                onClick={onOpenContactModal}
                className="btn-primary text-xs sm:text-sm py-3 px-6 w-full sm:w-auto cursor-pointer"
              >
                <span>{t('Discuter de votre besoin', 'Discuss this requirement')}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
