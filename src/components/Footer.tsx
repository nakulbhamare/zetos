import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ZetosLogo } from './ZetosLogo';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Mail, MapPin, ShieldCheck, ArrowUp } from 'lucide-react';

export const Footer: React.FC<{ onOpenContactModal?: () => void }> = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050308] border-t border-white/10 pt-20 pb-12 overflow-hidden text-xs sm:text-sm">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#8a2be2]/10 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-white/10">
          {/* Col 1: Brand & Statement (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <ZetosLogo />
            <p className="text-xs sm:text-sm text-[#9890a8] leading-relaxed max-w-sm">
              {t(
                'Studio digital d’entrepreneurs passionnés. Nous concevons, développons et lançons des produits numériques de rupture : SaaS, applications mobiles et agents IA.',
                'Paris-based digital product studio founded by serial entrepreneurs. We architect, design, and ship web, mobile, SaaS, and AI platforms.'
              )}
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/zetos"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#dedae9] hover:text-white hover:border-[#8a2be2]/50 hover:bg-[#8a2be2]/20 transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current text-[#0077b5]" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
                </svg>
              </a>

              <a
                href="mailto:dev@zetos.fr"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#dedae9] hover:text-white hover:border-[#8a2be2]/50 hover:bg-[#8a2be2]/20 transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href="https://enjyn.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs text-[#dedae9] hover:text-white hover:border-[#8a2be2]/40 transition-all"
              >
                <span>{t('Enjyn (GTM) ↗', 'Enjyn (GTM) ↗')}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Services Taxonomy (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-extrabold text-white">
              {t('Services', 'Services')}
            </h4>
            <ul className="space-y-2 text-[#9890a8]">
              <li>
                <a
                  href="#offres"
                  className="hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>{t('Développement Produit', 'Product Engineering')}</span>
                </a>
              </li>
              <li>
                <a
                  href="#offres"
                  className="hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>{t('Applications Mobiles (iOS/Android)', 'Mobile Apps (iOS/Android)')}</span>
                </a>
              </li>
              <li>
                <a
                  href="#offres"
                  className="hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>{t('Plateformes SaaS B2B', 'B2B SaaS Platforms')}</span>
                </a>
              </li>
              <li>
                <a
                  href="#offres"
                  className="hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>{t('Agents IA & Intégration LLM', 'AI Agents & LLM Pipelines')}</span>
                </a>
              </li>
              <li>
                <a
                  href="#offres"
                  className="hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>{t('Test Marché & Mockup 60fps', 'Market Scoping & Prototype')}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Découvrir / Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-extrabold text-white">
              {t('Découvrir', 'Explore')}
            </h4>
            <ul className="space-y-2 text-[#9890a8]">
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">
                  {t('Portfolio & Cas Clients', 'Case Studies')}
                </a>
              </li>
              <li>
                <a href="#offres" className="hover:text-white transition-colors">
                  {t('Nos Offres au Forfait', 'Fixed-Price Scopes')}
                </a>
              </li>
              <li>
                <a href="#simulateur" className="hover:text-white transition-colors">
                  {t('Simulateur de Budget & Délais', 'Scope & Budget Calculator')}
                </a>
              </li>
              <li>
                <a href="#philosophie" className="hover:text-white transition-colors">
                  {t('Philosophie & Fondateurs', 'Philosophy & Founders')}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  {t('FAQ & Agrément CII', 'FAQ & CII Credit')}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Studio Paris (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-extrabold text-white">
              {t('Studio Paris', 'Paris Studio')}
            </h4>
            <div className="text-xs text-[#9890a8] space-y-2">
              <div className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#c084fc] shrink-0 mt-0.5" />
                <span>Paris, France</span>
              </div>
              <div>
                <span className="text-[#dedae9] font-medium block">THE PRODUCT COMPANY</span>
                <span className="text-[10px] text-[#6b627d]">SAS · FR57930880497</span>
              </div>
              <div className="pt-2">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#8a2be2]/15 text-[10px] font-bold text-[#c084fc] border border-[#8a2be2]/30">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Agréé CII</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6b627d]">
          <div>
            Copyright © 2026 ZETOS — THE PRODUCT COMPANY SAS. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <LanguageSwitcher />

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#dedae9] hover:text-white transition-colors"
            >
              <span>{t('Haut de page', 'Back to top')}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
