import React from 'react';
import { Crown, Sparkle, RoyalDivider } from './Ornaments';
import { invitationData } from '../data/invitationData';
import { Sparkles, ArrowUp, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

export const FooterSection = () => {
  const { child } = invitationData;

  const handleCelebrate = () => {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.7 },
      colors: ['#38bdf8', '#f59e0b', '#3b82f6', '#fef08a', '#ffffff']
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-16 pb-28 px-4 relative text-center text-white overflow-hidden">
      <div className="max-w-xl mx-auto relative z-10">
        
        {/* Crown emblem */}
        <div className="flex justify-center mb-4">
          <Crown className="w-10 h-10 text-gold-400 animate-bounce" style={{ animationDuration: '3s' }} />
        </div>

        <h3 className="font-heading text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400 mb-3">
          Terima Kasih
        </h3>

        <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-6">
          Merupakan suatu kebahagiaan dan kehormatan bagi kami sekeluarga apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu kepada ananda kami tercinta:
        </p>

        <div className="font-heading text-lg sm:text-xl font-extrabold text-sky-200 tracking-wide mb-1">
          {child.fullName}
        </div>
        <p className="text-xs text-gold-400 italic mb-6">
          Semoga menjadi anak yang sholeh, berbakti, cerdas, dan membanggakan keluarga.
        </p>

        <RoyalDivider className="my-6" />

        <p className="text-xs text-slate-400 font-light mb-2">Kami yang berbahagia,</p>
        <p className="font-heading text-sm sm:text-base font-bold text-amber-200">
          Keluarga Besar {child.parents.father} & {child.parents.mother}
        </p>

        {/* Fun interactive celebration button */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={handleCelebrate}
            className="inline-flex items-center gap-2 py-2.5 px-5 rounded-full bg-gradient-to-r from-gold-500 via-amber-400 to-gold-600 text-royal-950 text-xs font-bold shadow-lg shadow-gold-500/20 hover:scale-105 active:scale-95 transition-all"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tabur Bintang Perayaan</span>
          </button>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 py-2.5 px-4 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-medium border border-slate-700 transition-all active:scale-95"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Ke Atas</span>
          </button>
        </div>

        <p className="text-[11px] text-slate-500 mt-10 flex items-center justify-center gap-1">
          Dibuat dengan penuh cinta untuk khitanan {child.nickname}
        </p>

      </div>
    </footer>
  );
};
