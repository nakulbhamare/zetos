import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CASE_STUDIES } from '../data/content';
import type { CaseStudy } from '../types';
import { CaseStudyModal } from './CaseStudyModal';
import {
  ArrowUpRight,
  Sparkles,
  Layers,
  ShieldCheck,
  GraduationCap,
  Plane,
  Trophy,
  MonitorPlay,
  Radio,
  Users,
  FileText,
  Lock,
  LineChart,
  Truck,
  HeartPulse
} from 'lucide-react';

interface PortfolioSectionProps {
  onOpenContactModal: (projectContext?: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onOpenContactModal }) => {
  const { language, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);

  const filterCategories = [
    { id: 'all', label: t('Tous les produits', 'All Products') },
    { id: 'SaaS', label: 'SaaS B2B' },
    { id: 'Mobile App', label: t('Apps Mobiles', 'Mobile Apps') },
    { id: 'AI Tool', label: t('IA & Data', 'AI & Data') },
    { id: 'FinTech', label: 'FinTech' },
    { id: 'SportsTech', label: 'SportsTech' },
    { id: 'HRTech', label: 'HRTech' }
  ];

  const filteredProjects = CASE_STUDIES.filter((p) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'SaaS' || activeFilter === 'Mobile App' || activeFilter === 'AI Tool') {
      return p.badge === activeFilter;
    }
    return p.industry === activeFilter;
  });

  const getIcon = (type: string) => {
    switch (type) {
      case 'GraduationCap': return GraduationCap;
      case 'Plane': return Plane;
      case 'Trophy': return Trophy;
      case 'MonitorPlay': return MonitorPlay;
      case 'Radio': return Radio;
      case 'Users': return Users;
      case 'FileText': return FileText;
      case 'ShieldCheck': return ShieldCheck;
      case 'Lock': return Lock;
      case 'LineChart': return LineChart;
      case 'Truck': return Truck;
      case 'HeartPulse': return HeartPulse;
      default: return Layers;
    }
  };

  return (
    <section id="portfolio" className="relative py-24 md:py-32 bg-[#050308] border-b border-white/5 overflow-hidden">
      {/* Ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#8a2be2]/10 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/3 left-0 w-[550px] h-[550px] bg-[#a855f7]/8 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#160c28] border border-[#8a2be2]/30 text-xs font-bold uppercase tracking-widest text-[#c084fc] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('Études de Cas & Produits', 'Case Studies & Products')}</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-heading text-white tracking-tight mb-5">
            {t('Des produits qu’on a construits.', 'Products we’ve built.')}
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-[#dedae9] leading-relaxed">
            {t(
              'Découvrez nos réalisations en production : SaaS B2B, applications mobiles natives, outils IA et plateformes critiques utilisées par des centaines de milliers de personnes.',
              'Explore our production work: B2B SaaS platforms, native mobile apps, AI tools, and mission-critical systems trusted by hundreds of thousands of users.'
            )}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex flex-wrap items-center justify-center p-1.5 rounded-2xl md:rounded-full bg-[#0d0915] border border-white/10 gap-1.5 shadow-xl">
            {filterCategories.map((f) => {
              const isSelected = activeFilter === f.id;
              return (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setActiveFilter(f.id)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl md:rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-[#8a2be2] text-white shadow-[0_0_20px_rgba(138,43,226,0.5)] scale-105'
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
          {filteredProjects.map((project) => {
            const Icon = getIcon(project.iconType);
            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative rounded-3xl bg-gradient-to-b from-[#11091e] to-[#07040d] border border-white/10 hover:border-[#8a2be2]/70 p-6 sm:p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(138,43,226,0.3)] cursor-pointer flex flex-col justify-between overflow-hidden"
              >
                {/* Top ambient hover glow */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-[#8a2be2]/20 blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

                <div>
                  {/* Badge & Live Status Row */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-[#8a2be2]/20 border border-[#8a2be2]/40 text-[11px] font-mono font-bold text-[#c084fc] uppercase tracking-wider">
                        {project.badge}
                      </span>
                      {project.isInternalProduct && (
                        <span className="px-2.5 py-0.5 rounded-full bg-[#10b981]/15 border border-[#10b981]/30 text-[10px] font-mono font-bold text-[#34d399]">
                          PRODUIT ZETOS
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                      <span className="text-[11px] font-mono text-[#34d399] font-bold">
                        {project.liveStatus || 'LIVE'}
                      </span>
                    </div>
                  </div>

                  {/* Project Title & Icon */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-[#160c28] border border-white/10 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-[#c084fc]" />
                      </div>
                      <h3 className="text-2xl font-black font-heading text-white group-hover:text-[#c084fc] transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#8a2be2] group-hover:border-[#c084fc] transition-colors">
                      <ArrowUpRight className="w-4 h-4 text-[#dedae9] group-hover:text-white transition-colors" />
                    </div>
                  </div>

                  {/* Category Tag */}
                  <span className="text-xs text-[#9890a8] font-medium block mb-3">
                    {language === 'fr' ? project.category : project.categoryEn}
                  </span>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-[#dedae9] leading-relaxed mb-6">
                    {language === 'fr' ? project.summary : project.summaryEn}
                  </p>

                  {/* Top Metrics Highlighting */}
                  <div className="grid grid-cols-2 gap-2 mb-6 p-3 rounded-2xl bg-[#140b24]/80 border border-white/5">
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

                {/* Tech Stack Pills Footer */}
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
            );
          })}
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
