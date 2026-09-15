import React from 'react';
import { Crown, Sparkle, RoyalDivider, BoyAvatar } from './Ornaments';
import { invitationData } from '../data/invitationData';
import { Sparkles, Calendar, MapPin } from 'lucide-react';

export const HeroSection = () => {
  const { child, meta, quotes, event } = invitationData;

  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 py-16 overflow-hidden">
      
      {/* Decorative background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-royal-600/15 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] bg-gold-500/10 rounded-full blur-[80px] pointer-events-none"></div>

      {/* Floating stars */}
      <Sparkle className="w-5 h-5 text-gold-300 absolute top-8 left-8 sm:left-1/4" />
      <Sparkle className="w-4 h-4 text-sky-400 absolute top-20 right-8 sm:right-1/4" style={{ animationDelay: '1s' }} />
      <Sparkle className="w-6 h-6 text-gold-400 absolute bottom-12 left-12" style={{ animationDelay: '1.5s' }} />

      <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
        
        {/* Basmalah */}
        <div className="font-arabic text-2xl sm:text-3xl text-gold-300 font-bold mb-4 tracking-widest drop-shadow-sm select-none">
          {meta.bismillah}
        </div>

        {/* Salam */}
        <p className="text-xs sm:text-sm text-sky-200 uppercase tracking-widest font-semibold mb-2">
          Assalamu’alaikum Warahmatullahi Wabarakatuh
        </p>

        <p className="text-xs sm:text-sm text-slate-300 max-w-md font-light leading-relaxed mb-6">
          Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta'ala, kami mengundang Bapak/Ibu/Saudara/i untuk hadir dalam acara Tasyakuran Khitanan putra kami:
        </p>

        {/* Royal Crown Badge */}
        <div className="relative mb-2">
          <Crown className="w-9 h-9 text-gold-400 mx-auto" />
        </div>

        {/* Foto Ananda Raditya (radit-1.jpg) */}
        <div className="my-3">
          <BoyAvatar imageSrc="/radit-1.jpg" className="w-48 h-48 sm:w-56 sm:h-56 md:w-60 md:h-60" />
        </div>

        {/* Celebrant Name */}
        <div className="mt-4 mb-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-cerulean-500/15 text-cerulean-300 border border-cerulean-400/30 mb-2">
            <Sparkles className="w-3 h-3 text-gold-400" />
            Sang Pangeran Cilik
          </span>

          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400 drop-shadow-lg leading-tight">
            {child.fullName}
          </h1>

          <p className="text-sm sm:text-base font-script text-sky-200 text-gold-300 mt-1">
            Putra tercinta dari {child.parents.father} & {child.parents.mother}
          </p>
        </div>

        <RoyalDivider className="my-6" />

        {/* Event Quick Info Badge */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs text-sky-100 font-medium">
          <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-royal-900/60 border border-gold-400/30 backdrop-blur-md">
            <Calendar className="w-4 h-4 text-gold-400" />
            <span>{event.formattedDate}</span>
          </div>
          <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-royal-900/60 border border-gold-400/30 backdrop-blur-md">
            <MapPin className="w-4 h-4 text-sky-400" />
            <span>{event.location.city}</span>
          </div>
        </div>

        {/* Quranic Prayer Card */}
        <div className="mt-8 p-5 sm:p-6 rounded-3xl bg-slate-900/70 border border-royal-700/50 backdrop-blur-md shadow-xl text-center max-w-lg">
          <p className="font-arabic text-xl sm:text-2xl text-gold-300 leading-loose mb-3" dir="rtl">
            {quotes.arabic}
          </p>
          <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
            "{quotes.meaning}"
          </p>
          <span className="inline-block mt-3 text-[11px] font-semibold text-cerulean-400 uppercase tracking-wider">
            — {quotes.source} —
          </span>
        </div>

      </div>
    </section>
  );
};
