import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ZetosLogo } from './ZetosLogo';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Menu, X, ArrowUpRight, Sparkles, MessageSquare } from 'lucide-react';

interface NavbarProps {
  onOpenContactModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContactModal }) => {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('top');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['top', 'offres', 'portfolio', 'simulateur', 'philosophie', 'faq'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'top', label: t('Accueil', 'Home') },
    { id: 'offres', label: t('Nos Offres', 'Our Offers') },
    { id: 'portfolio', label: t('Réalisations', 'Portfolio') },
    { id: 'simulateur', label: t('Simulateur', 'Estimator') },
    { id: 'philosophie', label: t('Philosophie', 'Philosophy') },
    { id: 'faq', label: t('FAQ', 'FAQ') }
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#050308]/85 backdrop-blur-xl border-b border-[#8a2be2]/20 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.7)]'
            : 'bg-transparent py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('top');
            }}
            className="group focus:outline-none"
            aria-label="Zetos Studio Home"
          >
            <ZetosLogo showSubtitle={!scrolled} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-4 py-1.5 rounded-full bg-[#0d0915]/60 border border-white/5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.id);
                  }}
                  className={`relative px-3.5 py-1.5 text-xs lg:text-sm font-medium transition-all duration-300 rounded-full ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-[#9890a8] hover:text-white'
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-[#8a2be2]/20 border border-[#8a2be2]/40 -z-10 shadow-[0_0_12px_rgba(138,43,226,0.3)]" />
                  )}
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Bar */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* CII Badge Pill */}
            <div className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8a2be2]/10 border border-[#8a2be2]/30 text-[11px] font-bold text-[#c084fc]">
              <Sparkles className="w-3.5 h-3.5 text-[#a855f7]" />
              <span>{t('Agréé CII (-20%)', 'CII Accredited (-20%)')}</span>
            </div>

            {/* Primary CTA */}
            <button
              type="button"
              onClick={onOpenContactModal}
              className="btn-primary text-xs lg:text-sm py-2 px-5 group"
            >
              <span>{t('Parlons de votre projet', "Let's talk")}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <LanguageSwitcher />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-[#120a20] border border-white/10 text-[#dedae9] hover:text-white hover:border-[#8a2be2]/50 transition-colors"
              aria-label={mobileMenuOpen ? 'Fermer menu' : 'Ouvrir menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#050308]/95 backdrop-blur-2xl md:hidden flex flex-col justify-between pt-24 pb-8 px-6 animate-fade-in">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="text-xs uppercase tracking-widest text-[#9890a8] font-bold">
                {t('Navigation', 'Menu')}
              </span>
              <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#8a2be2]/20 text-[10px] font-semibold text-[#c084fc]">
                <span>{t('Studio Paris', 'Paris Studio')}</span>
              </div>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.id);
                }}
                className={`flex items-center justify-between py-3 px-4 rounded-xl text-base font-semibold transition-all ${
                  activeSection === link.id
                    ? 'bg-[#8a2be2]/20 border border-[#8a2be2]/40 text-white'
                    : 'text-[#dedae9] hover:bg-white/5'
                }`}
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-[#8a2be2]" />
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContactModal();
              }}
              className="btn-primary w-full py-3.5 text-sm justify-center"
            >
              <MessageSquare className="w-4 h-4 mr-1" />
              <span>{t('Lancer votre projet', 'Start your project')}</span>
            </button>
            <div className="text-center">
              <span className="text-xs text-[#9890a8]">
                {t('Agréé Crédit Impôt Innovation (CII)', 'French Innovation Tax Credit Accredited')}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
