import React from 'react';

// Royal Crown Icon
export const Crown = ({ className = "w-8 h-8 text-gold-400" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5Z" fill="url(#crownGold)" stroke="#d97706" strokeWidth="1.2" strokeLinejoin="round"/>
    <path d="M5 18C5 17.1716 5.67157 16.5 6.5 16.5H17.5C18.3284 16.5 19 17.1716 19 18V18.5C19 19.3284 18.3284 20 17.5 20H6.5C5.67157 20 5 19.3284 5 18.5V18Z" fill="#b45309"/>
    <circle cx="3" cy="4.5" r="1.5" fill="#fef08a" />
    <circle cx="12" cy="3.2" r="1.8" fill="#fef08a" />
    <circle cx="21" cy="4.5" r="1.5" fill="#fef08a" />
    <defs>
      <linearGradient id="crownGold" x1="3" y1="4" x2="21" y2="18" gradientUnits="userSpaceOnUse">
        <stop stopColor="#fef08a"/>
        <stop offset="0.5" stopColor="#f59e0b"/>
        <stop offset="1" stopColor="#b45309"/>
      </linearGradient>
    </defs>
  </svg>
);

// Elegant Islamic Symmetrical Divider with Gold Diamond
export const RoyalDivider = ({ className = "my-6" }) => (
  <div className={`flex items-center justify-center gap-3 ${className}`}>
    <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent via-gold-400 to-gold-500 opacity-70"></div>
    <div className="relative flex items-center justify-center">
      <div className="w-2 h-2 rotate-45 bg-gold-400 border border-gold-200 shadow-sm shadow-gold-300"></div>
      <div className="w-3.5 h-3.5 rotate-45 border border-gold-400/60 absolute -inset-0.75"></div>
    </div>
    <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-l from-transparent via-gold-400 to-gold-500 opacity-70"></div>
  </div>
);

// Islamic Geometric 8-Pointed Star Motif
export const IslamicStar = ({ className = "w-6 h-6 text-gold-400" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <rect x="5" y="5" width="14" height="14" rx="1" fillOpacity="0.8" />
    <rect x="5" y="5" width="14" height="14" rx="1" transform="rotate(45 12 12)" fillOpacity="0.8" />
    <circle cx="12" cy="12" r="2.5" fill="#1e3a8a" />
  </svg>
);

// Twinkling Star
export const Sparkle = ({ className = "w-4 h-4 text-gold-300", style }) => (
  <svg className={`${className} animate-sparkle`} style={style} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
  </svg>
);

// Cute Cloud Shape for cheerful sky backdrop
export const CloudShape = ({ className = "w-24 h-14 text-white/10" }) => (
  <svg className={className} viewBox="0 0 64 36" fill="currentColor">
    <path d="M16 28h34a10 10 0 0 0 0-20 15 15 0 0 0-29-3A10 10 0 0 0 16 28z"/>
  </svg>
);

// Boy Hero Photo (Raditya Putra Mulyana)
// Replaced cartoon illustration with real photo from /radit-1.jpg
export const BoyAvatar = ({ className = "w-48 h-48 sm:w-56 sm:h-56", imageSrc = "/radit-1.jpg" }) => (
  <div className={`relative inline-flex items-center justify-center select-none ${className}`}>
    {/* Outer Glowing Rings with Royal Islamic Gold & Blue Accent */}
    <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-gold-400 via-sky-400 to-amber-300 p-[3px] animate-pulseGlow shadow-2xl shadow-gold-500/30">
      <div className="w-full h-full rounded-full bg-royal-950 p-[2px]">
        <div className="w-full h-full rounded-full border-2 border-gold-300/50 border-dashed"></div>
      </div>
    </div>

    {/* Inner Photo Container */}
    <div className="w-[92%] h-[92%] relative z-10 rounded-full overflow-hidden border-2 border-gold-400/80 shadow-2xl shadow-royal-950/90 bg-royal-950 group">
      <img
        src={imageSrc}
        alt="Raditya Putra Mulyana"
        className="w-full h-full object-cover object-[center_10%] scale-100 hover:scale-105 transition-transform duration-500"
        loading="eager"
      />
      {/* Subtle bottom gradient shadow for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-royal-950/40 via-transparent to-transparent pointer-events-none"></div>
    </div>

    {/* Subtle Inner Glow Ring */}
    <div className="absolute inset-0 rounded-full pointer-events-none z-20 ring-1 ring-inset ring-gold-300/30"></div>
  </div>
);

// Alias for semantic clarity
export const BoyPhoto = BoyAvatar;

