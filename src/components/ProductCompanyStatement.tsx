import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, ArrowRight } from 'lucide-react';

interface ProductCompanyStatementProps {
  onOpenContactModal: () => void;
}

export const ProductCompanyStatement: React.FC<ProductCompanyStatementProps> = ({
  onOpenContactModal
}) => {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 md:py-32 bg-[#050308] border-b border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#8a2be2]/12 blur-[170px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#160c28] border border-[#8a2be2]/40 text-xs font-black uppercase tracking-[0.25em] text-[#e9d5ff] mb-8 shadow-[0_0_25px_rgba(138,43,226,0.3)]">
          <Sparkles className="w-3.5 h-3.5 text-[#c084fc]" />
          <span>{t('Positionnement & Vision', 'Brand Positioning & Vision')}</span>
        </div>

        {/* Majestic Display Headline */}
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black font-heading tracking-tight leading-[0.92] mb-8">
          <span className="block text-white">The Product</span>
          <span className="block text-gradient-purple">Company.</span>
        </h2>

        {/* Statement Description */}
        <p className="text-base sm:text-xl md:text-2xl text-[#dedae9] max-w-3xl mx-auto mb-12 leading-relaxed font-normal">
          {t(
            'De l’idée au scale, une seule équipe d’entrepreneurs conçoit, code, déploie et fait grandir votre produit.',
            'From idea to scale, one single senior team architects, engineers, launches, and scales your digital product.'
          )}
        </p>

        {/* Section 27: Live Product Pipeline Indicator */}
        <div className="max-w-3xl mx-auto p-4 sm:p-6 rounded-2xl bg-[#0e081c]/80 border border-[#8a2be2]/30 backdrop-blur-md shadow-2xl mb-12">
          <div className="flex items-center justify-between gap-2 overflow-x-auto text-xs font-mono">
            <span className="text-[#9890a8] font-bold">IDEA</span>
            <span className="text-[#8a2be2]">→</span>
            <span className="text-[#9890a8] font-bold">DESIGN</span>
            <span className="text-[#8a2be2]">→</span>
            <span className="text-[#9890a8] font-bold">BUILD</span>
            <span className="text-[#8a2be2]">→</span>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#10b981]/20 border border-[#10b981]/50 text-[#34d399] font-bold shadow-[0_0_15px_rgba(16,185,129,0.3)] shrink-0">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping" />
              <span>● LIVE</span>
            </div>
            <span className="text-[#8a2be2]">→</span>
            <span className="text-[#c084fc] font-bold">SCALE</span>
          </div>
        </div>

        {/* Action Button */}
        <button
          type="button"
          onClick={onOpenContactModal}
          className="btn-primary text-sm md:text-base py-4 px-10 shadow-[0_0_35px_rgba(138,43,226,0.6)] group cursor-pointer"
        >
          <span>{t('Lancer votre produit avec Zetos', 'Build your product with Zetos')}</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
};
