import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import confetti from 'canvas-confetti';
import { X, ArrowRight, ArrowLeft, Sparkles, CheckCircle2, Send } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialBrief?: {
    service?: string;
    stage?: string;
    budget?: string;
    timeline?: string;
  } | null;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  initialBrief
}) => {
  const { t } = useLanguage();
  const [step, setStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Form State
  const [serviceType, setServiceType] = useState<string>('MVP Web & Mobile');
  const [budgetRange, setBudgetRange] = useState<string>('5 000€ - 10 000€');
  const [timelineChoice, setTimelineChoice] = useState<string>('1 à 2 mois');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (initialBrief) {
      if (initialBrief.service) setServiceType(initialBrief.service);
      if (initialBrief.budget) setBudgetRange(initialBrief.budget);
      if (initialBrief.timeline) setTimelineChoice(initialBrief.timeline);
      setStep(2); // Jump directly to contact details
    }
  }, [initialBrief]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const services = [
    { id: 'mvp', label: t('🚀 Nouveau MVP (Web & Mobile)', '🚀 New MVP (Web & Mobile)') },
    { id: 'validation', label: t('💡 Test Marché & Maquette', '💡 Market Test & Prototype') },
    { id: 'scale', label: t('⚡ Refonte & Scalabilité SaaS', '⚡ SaaS Refactor & Scale') },
    { id: 'ai', label: t('🤖 Agents IA & Automatisation', '🤖 AI Agents & Automation') },
    { id: 'web', label: t('✨ Site Webflow / Sur-Mesure', '✨ Custom Webflow / Web') }
  ];

  const budgets = [
    '< 5 000 €',
    '5 000 € - 10 000 €',
    '10 000 € - 25 000 €',
    '25 000 € +'
  ];

  const timelines = [
    t('⚡ Immédiat / Moins d’un mois', '⚡ Immediate / Under 1 month'),
    t('1 à 2 mois', '1 to 2 months'),
    t('3 mois et plus', '3+ months')
  ];

  const validateStep = () => {
    const newErrors: Record<string, string> = {};
    if (step === 2) {
      if (!name.trim()) newErrors.name = t('Veuillez indiquer votre nom', 'Please enter your name');
      if (!email.trim() || !email.includes('@')) {
        newErrors.email = t('Veuillez indiquer un email valide', 'Please enter a valid email');
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep((prev) => prev + 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger Confetti
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#8a2be2', '#a855f7', '#c084fc', '#ffffff']
        });
      } catch (err) {
        // Confetti fallback
      }
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-2xl animate-fade-in">
      <div
        className="relative w-full max-w-2xl rounded-3xl bg-[#0d0916] border border-[#8a2be2]/40 shadow-[0_25px_90px_rgba(0,0,0,0.95)] overflow-hidden my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Background Ambient Radial Highlight */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#8a2be2]/20 blur-[100px] pointer-events-none" />

        {/* Modal Header */}
        <div className="relative p-6 sm:p-8 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#8a2be2]/20 border border-[#8a2be2]/40 flex items-center justify-center text-[#c084fc]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black font-heading text-white">
                {t('Lancer votre projet avec Zetos', 'Start your project with Zetos')}
              </h2>
              <span className="text-xs text-[#9890a8]">
                {t('Cadrage technique et chiffrage forfait sous 24h', 'Technical scoping & fixed estimate within 24h')}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/5 border border-white/10 text-[#dedae9] hover:text-white hover:bg-white/10 hover:border-[#8a2be2]/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              {/* Step Indicator */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5 text-xs font-semibold text-[#9890a8]">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold ${
                      step >= 1 ? 'bg-[#8a2be2] text-white' : 'bg-white/10 text-[#9890a8]'
                    }`}
                  >
                    1
                  </span>
                  <span className={step === 1 ? 'text-white font-bold' : ''}>
                    {t('Projet & Budget', 'Project & Scope')}
                  </span>
                </div>

                <div className="w-12 h-px bg-white/10" />

                <div className="flex items-center gap-2">
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold ${
                      step >= 2 ? 'bg-[#8a2be2] text-white' : 'bg-white/10 text-[#9890a8]'
                    }`}
                  >
                    2
                  </span>
                  <span className={step === 2 ? 'text-white font-bold' : ''}>
                    {t('Coordonnées', 'Contact Info')}
                  </span>
                </div>
              </div>

              {/* Step 1: Project Type & Budget */}
              {step === 1 && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-extrabold text-[#c084fc] mb-3">
                      {t('Quel type de produit souhaitez-vous lancer ?', 'What type of product are you launching?')}
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {services.map((s) => (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => setServiceType(s.label)}
                          className={`p-3.5 rounded-xl text-left text-xs sm:text-sm font-semibold transition-all border ${
                            serviceType === s.label
                              ? 'bg-[#8a2be2]/25 border-[#8a2be2] text-white shadow-[0_0_15px_rgba(138,43,226,0.3)]'
                              : 'bg-white/5 border-white/5 text-[#dedae9] hover:border-white/20'
                          }`}
                        >
                          {s.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-extrabold text-[#c084fc] mb-3">
                      {t('Budget estimé prévisionnel', 'Estimated Target Budget')}
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {budgets.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setBudgetRange(b)}
                          className={`p-3 rounded-xl text-center text-xs font-semibold transition-all border ${
                            budgetRange === b
                              ? 'bg-[#8a2be2]/25 border-[#8a2be2] text-white'
                              : 'bg-white/5 border-white/5 text-[#dedae9]'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-extrabold text-[#c084fc] mb-3">
                      {t('Délai cible souhaité', 'Target Delivery Timeline')}
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {timelines.map((tl) => (
                        <button
                          key={tl}
                          type="button"
                          onClick={() => setTimelineChoice(tl)}
                          className={`p-3 rounded-xl text-center text-xs font-semibold transition-all border ${
                            timelineChoice === tl
                              ? 'bg-[#8a2be2]/25 border-[#8a2be2] text-white'
                              : 'bg-white/5 border-white/5 text-[#dedae9]'
                          }`}
                        >
                          {tl}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={handleNext}
                      className="btn-primary py-3.5 px-8 text-sm group"
                    >
                      <span>{t('Continuer vers vos coordonnées', 'Continue to contact details')}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Contact Information */}
              {step === 2 && (
                <div className="space-y-4 animate-fade-in">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#dedae9] mb-1.5">
                        {t('Votre Nom & Prénom *', 'Full Name *')}
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Anthony Munoz"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[#68607a] focus:outline-none focus:border-[#8a2be2] text-sm"
                      />
                      {errors.name && (
                        <span className="text-xs text-red-400 mt-1 block">{errors.name}</span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#dedae9] mb-1.5">
                        {t('Email professionnel *', 'Work Email *')}
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="anthony@entreprise.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[#68607a] focus:outline-none focus:border-[#8a2be2] text-sm"
                      />
                      {errors.email && (
                        <span className="text-xs text-red-400 mt-1 block">{errors.email}</span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#dedae9] mb-1.5">
                        {t('Téléphone', 'Phone Number')}
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+33 6 00 00 00 00"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[#68607a] focus:outline-none focus:border-[#8a2be2] text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#dedae9] mb-1.5">
                        {t('Société / Projet', 'Company / Startup')}
                      </label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Nom de votre entreprise"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[#68607a] focus:outline-none focus:border-[#8a2be2] text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#dedae9] mb-1.5">
                      {t('Détails / Contexte de votre projet', 'Project Context & Specifics')}
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={t(
                        'Décrivez en 2 lignes vos objectifs, votre cible et vos fonctionnalités clés...',
                        'Briefly describe your objectives, target audience, and key features...'
                      )}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[#68607a] focus:outline-none focus:border-[#8a2be2] text-sm resize-none"
                    />
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="inline-flex items-center gap-1.5 text-xs text-[#9890a8] hover:text-white"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>{t('Retour', 'Back')}</span>
                    </button>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary py-3.5 px-8 text-sm shadow-[0_0_25px_rgba(138,43,226,0.5)] group disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>{t('Transmission en cours...', 'Sending brief...')}</span>
                      ) : (
                        <>
                          <span>{t('Envoyer mon brief à l’équipe', 'Send brief to Zetos')}</span>
                          <Send className="w-4 h-4 ml-1" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </form>
          ) : (
            /* Confirmation State */
            <div className="text-center py-8 space-y-6 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center mx-auto text-green-400">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-black font-heading text-white mb-2">
                  {t('Brief reçu avec succès !', 'Brief received successfully!')}
                </h3>
                <p className="text-sm text-[#dedae9] max-w-md mx-auto leading-relaxed">
                  {t(
                    'Merci pour votre confiance. Anthony et l’équipe Zetos analysent votre projet et vous recontactent sous 24h avec un premier cadrage.',
                    'Thank you for reaching out. Anthony and the Zetos team will review your project and get back to you within 24 hours with an initial scope.'
                  )}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#140c24] border border-white/5 text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="text-[#9890a8]">
                  <strong>{t('Prestation :', 'Scope :')}</strong> {serviceType}
                </div>
                <div className="text-[#9890a8]">
                  <strong>{t('Budget indicatif :', 'Target Budget :')}</strong> {budgetRange}
                </div>
                <div className="text-[#9890a8]">
                  <strong>{t('Contact :', 'Contact :')}</strong> {email}
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="btn-primary py-3 px-8 text-sm"
              >
                <span>{t('Fermer et explorer le site', 'Close & explore')}</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
