import React from 'react';

interface ZetosLogoProps {
  className?: string;
  showSubtitle?: boolean;
}

export const ZetosLogo: React.FC<ZetosLogoProps> = ({ className = 'h-8 w-auto', showSubtitle = false }) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Geometric Z Icon */}
      <div className="relative flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-xl bg-gradient-to-br from-[#1b0a2e] to-[#0a0512] border border-[#8a2be2]/40 shadow-[0_0_20px_rgba(138,43,226,0.35)] group-hover:border-[#8a2be2] transition-colors">
        <svg viewBox="0 0 40 40" className="w-5 h-5 md:w-6 md:h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Top Bar */}
          <path d="M10 12H30" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" />
          {/* Diagonal Slash with Purple glow */}
          <path d="M28 13L12 27" stroke="url(#purpleGrad)" strokeWidth="3.5" strokeLinecap="round" />
          {/* Bottom Bar */}
          <path d="M10 28H30" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" />
          {/* Accent dot */}
          <circle cx="28" cy="12" r="2" fill="#c084fc" />
          <defs>
            <linearGradient id="purpleGrad" x1="12" y1="27" x2="28" y2="13" gradientUnits="userSpaceOnUse">
              <stop stopColor="#8a2be2" />
              <stop offset="1" stopColor="#c084fc" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Typography ZETOS */}
      <div className="flex flex-col">
        <div className="flex items-center tracking-[0.18em] font-black text-xl md:text-2xl text-white font-heading">
          <span>ZETOS</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#8a2be2] ml-1 shadow-[0_0_8px_#8a2be2]"></span>
        </div>
        {showSubtitle && (
          <span className="text-[9px] uppercase tracking-[0.25em] text-[#9890a8] font-semibold -mt-1">
            Studio Produit · Paris
          </span>
        )}
      </div>
    </div>
  );
};
