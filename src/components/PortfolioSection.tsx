import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CASE_STUDIES } from '../data/content';
import type { CaseStudy } from '../types';
import { CaseStudyModal } from './CaseStudyModal';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface PortfolioSectionProps {
  onOpenContactModal: (projectContext?: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onOpenContactModal }) => {
  const { language, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'all' | 'SaaS' | 'Mobile App' | 'Web App'>('all');
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);

  const filters = [
    { id: 'all', label: t('Tous les projets', 'All Products') },
    { id: 'SaaS', label: 'SaaS B2B' },
    { id: 'Mobile App', label: 'Applications Mobiles' },
    { id: 'Web App', label: t('Plateformes Web & IA', 'Web & AI Platforms') }
  ];

  const filteredProjects = CASE_STUDIES.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.badge === activeFilter;
  });

  return (
    <section id="portfolio" className="relative py-24 md:py-32 bg-[#050308] border-t border-white/5">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-[#8a2be2]/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-[#a855f7]/8 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#160c28] border border-[#8a2be2]/30 text-xs font-bold uppercase tracking-widest text-[#c084fc] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('Études de Cas & Portfolio', 'Case Studies & Products')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-heading text-white tracking-tight mb-5">
            {t('Des projets qui comptent', 'Products that make an impact')}
          </h2>

          <p className="text-base md:text-lg text-[#9890a8] leading-relaxed">
            {t(
              'On construit nos propres produits depuis plus de 10 ans. C’est pour cela qu’on sait exactement comment concevoir et accélérer les vôtres.',
              'We have been building and scaling our own software products for 10+ years. That is why we know exactly how to architect and ship yours.'
            )}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap items-center justify-center p-1 rounded-2xl md:rounded-full bg-[#0d0915] border border-white/10 gap-1">
            {filters.map((f) => {
              const isSelected = activeFilter === f.id;
              return (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setActiveFilter(f.id as any)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl md:rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                    isSelected
                      ? 'bg-[#8a2be2] text-white shadow-[0_0_15px_rgba(138,43,226,0.5)]'
                      : 'text-[#9890a8] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-3xl bg-gradient-to-b from-[#11091e] to-[#07040d] border border-white/10 hover:border-[#8a2be2]/60 p-6 sm:p-7 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(138,43,226,0.25)] cursor-pointer flex flex-col justify-between overflow-hidden"
            >
              {/* Top ambient hover glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#8a2be2]/20 blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

              <div>
                {/* Badge & Category Row */}
                <div className="flex items-center justify-between mb-5">
                  <span className="px-3 py-1 rounded-full bg-[#8a2be2]/20 border border-[#8a2be2]/40 text-[11px] font-bold text-[#c084fc] uppercase tracking-wider">
                    {project.badge}
                  </span>

                  <span className="text-xs text-[#9890a8] font-medium">
                    {language === 'fr' ? project.category : project.categoryEn}
                  </span>
                </div>

                {/* Project Title */}
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-black font-heading text-white group-hover:text-[#c084fc] transition-colors">
                    {project.title}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#8a2be2] group-hover:border-[#c084fc] transition-colors">
                    <ArrowUpRight className="w-4 h-4 text-[#dedae9] group-hover:text-white transition-colors" />
                  </div>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-[#dedae9] leading-relaxed mb-6">
                  {language === 'fr' ? project.summary : project.summaryEn}
                </p>

                {/* Top 2 Primary Metrics Highlight */}
                <div className="grid grid-cols-2 gap-2 mb-6 p-3 rounded-2xl bg-[#160d26]/80 border border-white/5">
                  {project.metrics.slice(0, 2).map((m, i) => (
                    <div key={i} className="text-center">
                      <span className="block text-base sm:text-lg font-black font-heading text-white">
                        {m.value}
                      </span>
                      <span className="block text-[10px] text-[#9890a8] font-medium truncate">
                        {language === 'fr' ? m.label : m.labelEn}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stack Pills Footer */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                {project.stack.slice(0, 4).map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 rounded-md bg-white/5 text-[10px] font-mono text-[#9890a8] group-hover:text-[#dedae9] transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Deep Dive Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenContact={(title) => onOpenContactModal(title)}
      />
    </section>
  );
};
