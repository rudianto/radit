import React, { useState, useEffect } from 'react';
import { invitationData } from '../data/invitationData';
import { CalendarPlus, Clock } from 'lucide-react';
import { RoyalDivider } from './Ornaments';

export const EventCountdown = () => {
  const { event, child } = invitationData;
  const targetTime = new Date(event.targetDate).getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetTime]);

  const handleAddToCalendar = () => {
    // Generate Google Calendar Link
    const startTime = "20261025T013000Z"; // 08:30 WIB (UTC+7) = 01:30 UTC
    const endTime = "20261025T070000Z";   // 14:00 WIB (UTC+7) = 07:00 UTC
    const title = encodeURIComponent(`Tasyakuran Khitanan ${child.fullName}`);
    const details = encodeURIComponent(
      `Tasyakuran & Walimatul Khitan ananda ${child.fullName}. Bertempat di ${event.location.venue}, ${event.location.subVenue}, ${event.location.city}.`
    );
    const location = encodeURIComponent(`${event.location.venue}, ${event.location.city}`);

    const gCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startTime}/${endTime}&details=${details}&location=${location}`;
    window.open(gCalUrl, '_blank');
  };

  const timeUnits = [
    { label: 'Hari', value: timeLeft.days },
    { label: 'Jam', value: timeLeft.hours },
    { label: 'Menit', value: timeLeft.minutes },
    { label: 'Detik', value: timeLeft.seconds },
  ];

  return (
    <section className="py-12 px-4 relative">
      <div className="max-w-md mx-auto bg-gradient-to-b from-royal-900/90 to-slate-900/90 border border-gold-400/30 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl text-center">
        
        <div className="flex items-center justify-center gap-2 text-gold-300 mb-2">
          <Clock className="w-4 h-4 animate-spin" style={{ animationDuration: '10s' }} />
          <span className="text-xs font-semibold uppercase tracking-widest text-sky-200">
            Menuju Hari Bahagia
          </span>
        </div>

        <h3 className="font-heading text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400">
          Hitung Mundur Acara
        </h3>

        <RoyalDivider className="my-4" />

        {/* Countdown Grid */}
        <div className="grid grid-cols-4 gap-2.5 sm:gap-3 my-6">
          {timeUnits.map((unit, idx) => (
            <div
              key={idx}
              className="bg-royal-950/80 border border-gold-400/40 rounded-2xl p-3 flex flex-col items-center justify-center shadow-lg relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-gold-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="font-heading text-2xl sm:text-3xl font-extrabold text-gold-300 tracking-wider">
                {String(unit.value).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs text-sky-200 uppercase font-medium mt-1">
                {unit.label}
              </span>
            </div>
          ))}
        </div>

        {/* Add To Calendar Button */}
        <button
          onClick={handleAddToCalendar}
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-sky-600 via-royal-600 to-sky-700 hover:from-sky-500 hover:to-royal-500 text-white text-xs sm:text-sm font-semibold tracking-wide shadow-md hover:shadow-sky-500/30 transition-all active:scale-95 border border-sky-400/40 w-full sm:w-auto"
        >
          <CalendarPlus className="w-4 h-4 text-gold-300" />
          <span>Simpan Tanggal ke Google Calendar</span>
        </button>

      </div>
    </section>
  );
};
