import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TRUST_STATS } from '../data/content';
import { ShieldCheck, Award, CheckCircle2 } from 'lucide-react';

export const TrustStats: React.FC = () => {
  const { language, t } = useLanguage();
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 1800; // ms
          const startTime = performance.now();

          const animateCounts = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);

            const newCounts = TRUST_STATS.map((stat) => Math.floor(stat.value * easeProgress));
            setCounts(newCounts);

            if (progress < 1) {
              requestAnimationFrame(animateCounts);
            } else {
              setCounts(TRUST_STATS.map((s) => s.value));
            }
          };

          requestAnimationFrame(animateCounts);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      id="proof"
      className="relative py-20 md:py-28 bg-[#050308] border-b border-white/5 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#8a2be2]/8 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Tag */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#160c28] border border-[#8a2be2]/30 text-xs font-bold uppercase tracking-widest text-[#c084fc] mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>{t('Chiffres Vérifiés & Agrément', 'Verified Track Record & CII')}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-heading text-white tracking-tight">
            {t('Des résultats prouvés par les chiffres.', 'Real outcomes backed by verified metrics.')}
          </h2>
        </div>

        {/* Big Numbers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {TRUST_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="relative rounded-3xl bg-gradient-to-b from-[#11091e] to-[#07040d] border border-white/10 hover:border-[#8a2be2]/50 p-8 sm:p-10 text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(138,43,226,0.2)] group overflow-hidden"
            >
              {/* Subtle hover gradient */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-[#8a2be2]/15 blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

              {/* Huge Statistic Display */}
              <div className="text-5xl sm:text-6xl md:text-7xl font-black font-heading text-white tracking-tighter mb-3">
                <span className="text-gradient-purple">
                  {stat.prefix || ''}
                  {counts[idx]}
                  {stat.suffix}
                </span>
              </div>

              {/* Metric Label */}
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#c084fc] transition-colors">
                {language === 'fr' ? stat.label : stat.labelEn}
              </h3>

              {/* Verified Detail Subtext */}
              <p className="text-xs text-[#9890a8] leading-relaxed">
                {language === 'fr' ? stat.detail : stat.detailEn}
              </p>
            </div>
          ))}
        </div>

        {/* Fixed Price & French CII Guarantee Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0e081c]/80 border border-[#8a2be2]/30 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#8a2be2]/20 border border-[#8a2be2]/40 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#c084fc]" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">
                {t('Agrément Crédit d’Impôt Innovation (CII)', 'Accredited French Innovation Tax Credit (CII)')}
              </h4>
              <p className="text-xs text-[#dedae9]">
                {t(
                  'Récupérez jusqu’à 20% de vos dépenses de conception et développement sous forme de remboursement fiscal direct de l’État.',
                  'Reclaim up to 20% of your product design and engineering spend as direct government cash reimbursement.'
                )}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#10b981]/15 border border-[#10b981]/30 text-xs font-bold text-[#34d399]">
              <CheckCircle2 className="w-3.5 h-3.5" />
              {t('Agrément Actif 2026', 'Active Accreditation 2026')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
