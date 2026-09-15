import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Crown, Sparkle, RoyalDivider } from './Ornaments';
import { MailOpen, Sparkles, Heart } from 'lucide-react';
import { audioManager } from '../utils/audioPlayer';

export const CoverEnvelope = ({ isOpen, onOpen, guestName }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isUnmounted, setIsUnmounted] = useState(false);

  const handleOpenInvitation = () => {
    // 1. Panggil onOpen dan mulai animasi fade-out
    onOpen();
    setIsClosing(true);

    // 2. Mainkan musik latar secara aman
    try {
      audioManager.play();
    } catch (err) {
      console.warn("Audio play warning:", err);
    }

    // 3. Ledakkan confetti perayaan
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#38bdf8', '#f59e0b', '#3b82f6', '#fef08a', '#ffffff']
      });

      setTimeout(() => {
        try {
          confetti({
            particleCount: 50,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#60a5fa', '#f59e0b', '#38bdf8']
          });
          confetti({
            particleCount: 50,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#60a5fa', '#f59e0b', '#38bdf8']
          });
        } catch (e) {
          // ignore
        }
      }, 250);
    } catch (err) {
      console.warn("Confetti warning:", err);
    }

    // 4. Unmount cover setelah animasi selesai
    setTimeout(() => {
      setIsUnmounted(true);
    }, 800);
  };

  if (isUnmounted) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-700 bg-gradient-to-b from-royal-950 via-slate-900 to-royal-900 ${
        isClosing ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background Animated Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-cerulean-500/15 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gold-500/15 rounded-full blur-3xl"></div>
        <Sparkle className="w-5 h-5 text-gold-300 absolute top-12 left-10" />
        <Sparkle className="w-4 h-4 text-sky-300 absolute top-28 right-12" style={{ animationDelay: '0.7s' }} />
        <Sparkle className="w-6 h-6 text-gold-400 absolute bottom-24 left-16" style={{ animationDelay: '1.2s' }} />
        <Sparkle className="w-5 h-5 text-sky-400 absolute bottom-16 right-16" style={{ animationDelay: '1.8s' }} />
      </div>

      {/* Envelope Card Container */}
      <div className="relative w-full max-w-md bg-gradient-to-b from-slate-900/90 via-royal-950/95 to-slate-950/95 backdrop-blur-xl rounded-3xl p-6 sm:p-8 text-center text-white border-2 border-gold-400/40 shadow-2xl shadow-royal-950/80">
        
        {/* Top Boyish Crown & Emblem */}
        <div className="flex justify-center mb-3">
          <div className="relative p-3 rounded-full bg-gradient-to-b from-royal-800 to-royal-950 border border-gold-400/60 shadow-lg shadow-gold-500/20">
            <Crown className="w-10 h-10" />
          </div>
        </div>

        {/* Title & Tagline */}
        <div className="space-y-1">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-gold-500/10 text-gold-300 border border-gold-400/30">
            Walimatul Khitan
          </span>
          <h2 className="text-xs sm:text-sm uppercase tracking-widest text-cerulean-300 font-medium">
            Undangan Tasyakuran
          </h2>
        </div>

        {/* Celebrant Child's Name */}
        <div className="my-5">
          <h1 className="font-heading text-2xl sm:text-3xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-300 drop-shadow-md">
            Raditya Putra Mulyana
          </h1>
          <p className="text-xs text-sky-200/80 font-light mt-1">
            (Ananda Radit)
          </p>
        </div>

        <RoyalDivider className="my-4" />

        {/* Recipient Box */}
        <div className="bg-slate-900/80 border border-royal-700/60 rounded-2xl p-4 my-5 shadow-inner">
          <p className="text-xs text-slate-300 mb-1">Kepada Yth. Bapak/Ibu/Saudara/i:</p>
          <div className="font-heading text-lg sm:text-xl font-bold text-sky-200 tracking-wide">
            {guestName && guestName.trim() !== '' ? guestName.trim() : "Tamu Undangan"}
          </div>
          <p className="text-[11px] text-slate-400 mt-1 italic">
            Mohon maaf bila ada kesalahan penulisan nama / gelar
          </p>
        </div>

        {/* Open Invitation Button */}
        <button
          onClick={handleOpenInvitation}
          className="group relative inline-flex items-center justify-center gap-3 w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-gold-500 via-amber-400 to-gold-600 text-royal-950 font-bold text-sm sm:text-base tracking-wide shadow-lg shadow-gold-500/30 hover:shadow-gold-400/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
        >
          <MailOpen className="w-5 h-5 text-royal-950 group-hover:rotate-12 transition-transform duration-300" />
          <span>Buka Undangan</span>
          <Sparkles className="w-4 h-4 text-royal-900 animate-pulse" />
        </button>

        <p className="text-[11px] text-slate-400 mt-4 flex items-center justify-center gap-1">
          <Heart className="w-3 h-3 text-rose-400 fill-rose-400" /> Sentuh tombol untuk membuka & memutar musik
        </p>
      </div>
    </div>
  );
};
