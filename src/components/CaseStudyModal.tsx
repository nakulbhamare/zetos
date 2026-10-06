import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import type { CaseStudy } from '../types';
import { X, ArrowUpRight, CheckCircle2, Code2, AlertCircle, Check, Quote } from 'lucide-react';

interface CaseStudyModalProps {
  project: CaseStudy | null;
  onClose: () => void;
  onOpenContact: (projectTitle: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onOpenContact
}) => {
  const { language, t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-xl animate-fade-in">
      <div
        className="relative w-full max-w-3xl rounded-3xl bg-[#0c0816] border border-[#8a2be2]/40 shadow-[0_25px_80px_rgba(0,0,0,0.95)] overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top ambient glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#8a2be2]/20 blur-[100px] pointer-events-none" />

        {/* Modal Header */}
        <div className="relative p-6 sm:p-8 border-b border-white/10 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-[#8a2be2]/20 border border-[#8a2be2]/40 text-xs font-mono font-bold text-[#c084fc] uppercase">
                {project.badge}
              </span>
              <span className="text-xs text-[#9890a8] font-semibold">
                {language === 'fr' ? project.category : project.categoryEn}
              </span>
              {project.isInternalProduct && (
                <span className="px-2.5 py-0.5 rounded-full bg-[#10b981]/15 border border-[#10b981]/30 text-[10px] font-mono font-bold text-[#34d399]">
                  PRODUIT ZETOS
                </span>
              )}
            </div>
            <h2 className="text-2xl sm:text-4xl font-black font-heading text-white">
              {project.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/5 border border-white/10 text-[#dedae9] hover:text-white hover:bg-white/10 hover:border-[#8a2be2]/50 transition-colors cursor-pointer"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Key Metrics Row */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 p-4 rounded-2xl bg-[#140b24] border border-white/5">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="text-center">
                <span className="block text-xl sm:text-3xl font-black font-heading text-white">
                  {m.value}
                </span>
                <span className="block text-[11px] sm:text-xs text-[#9890a8] font-medium mt-1">
                  {language === 'fr' ? m.label : m.labelEn}
                </span>
              </div>
            ))}
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-[#12081c] border border-white/5">
              <div className="flex items-center gap-2 text-xs font-bold text-[#f87171] uppercase tracking-wider mb-2">
                <AlertCircle className="w-4 h-4" />
                <span>{t('Problème critique', 'Core Problem')}</span>
              </div>
              <p className="text-xs sm:text-sm text-[#dedae9] leading-relaxed">
                {language === 'fr' ? project.problem : project.problemEn}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#12081c] border border-white/5">
              <div className="flex items-center gap-2 text-xs font-bold text-[#34d399] uppercase tracking-wider mb-2">
                <Check className="w-4 h-4" />
                <span>{t('Solution Zetos', 'Zetos Solution')}</span>
              </div>
              <p className="text-xs sm:text-sm text-[#dedae9] leading-relaxed">
                {language === 'fr' ? project.solution : project.solutionEn}
              </p>
            </div>
          </div>

          {/* Client Quote if present */}
          {project.quote && (
            <div className="p-5 rounded-2xl bg-gradient-to-r from-[#180c2e] to-[#0e071a] border border-[#8a2be2]/40 relative">
              <Quote className="w-6 h-6 text-[#c084fc]/30 absolute top-4 right-4" />
              <p className="text-xs sm:text-sm text-white italic mb-2 leading-relaxed">
                “{language === 'fr' ? project.quote : project.quoteEn || project.quote}”
              </p>
              <span className="text-[11px] text-[#c084fc] font-bold">
                — {project.clientRole ? `${project.clientRole}, ` : ''}{project.client}
              </span>
            </div>
          )}

          {/* Key Deliverables */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#c084fc] mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>{t('Livrables techniques Zetos', 'Delivered by Zetos')}</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {(language === 'fr' ? project.deliverables : project.deliverablesEn).map((d, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5 text-xs sm:text-sm text-[#dedae9]"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8a2be2] shrink-0" />
                  <span>{d}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#9890a8] mb-3 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-[#8a2be2]" />
              <span>{t('Stack Technique', 'Technology Stack')}</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-lg bg-[#160c28] border border-[#8a2be2]/30 text-xs font-mono font-semibold text-[#e9d5ff]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 sm:p-8 bg-[#090510] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#9890a8] text-center sm:text-left">
            {t(
              'Prêt à concevoir un produit similaire avec notre équipe ?',
              'Ready to build a similar product with our Paris team?'
            )}
          </div>

          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenContact(project.title);
            }}
            className="btn-primary w-full sm:w-auto text-sm py-3 px-6 shadow-[0_0_20px_rgba(138,43,226,0.4)]"
          >
            <span>{t('Lancer un projet similaire', 'Build a similar product')}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
