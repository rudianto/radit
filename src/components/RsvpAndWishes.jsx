import React, { useState, useEffect } from 'react';
import { invitationData } from '../data/invitationData';
import { RoyalDivider, IslamicStar } from './Ornaments';
import { Send, CheckCircle2, XCircle, HelpCircle, Heart, User, MessageSquare, ThumbsUp } from 'lucide-react';
import confetti from 'canvas-confetti';

const STORAGE_KEY = 'khitan_raditya_wishes';

export const RsvpAndWishes = ({ defaultGuestName = '' }) => {
  const { defaultWishes, child } = invitationData;

  const [wishes, setWishes] = useState([]);
  const [name, setName] = useState(
    defaultGuestName && defaultGuestName !== 'Tamu Undangan' ? defaultGuestName : ''
  );
  const [attendance, setAttendance] = useState('Hadir');
  const [pax, setPax] = useState('2');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync nama jika defaultGuestName berubah dari URL
  useEffect(() => {
    if (defaultGuestName && defaultGuestName !== 'Tamu Undangan') {
      setName(defaultGuestName);
    }
  }, [defaultGuestName]);

  // Load from localStorage or defaults
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setWishes(JSON.parse(stored));
      } else {
        setWishes(defaultWishes);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultWishes));
      }
    } catch (e) {
      setWishes(defaultWishes);
    }
  }, [defaultWishes]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newWish = {
      id: Date.now(),
      name: name.trim(),
      attendance,
      pax: attendance === 'Hadir' ? Number(pax) : 0,
      message: message.trim(),
      time: 'Baru saja',
      likes: 1,
    };

    const updated = [newWish, ...wishes];
    setWishes(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (err) {
      console.warn('Storage save failed:', err);
    }

    // Fire confetti on submit
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#38bdf8', '#f59e0b', '#3b82f6']
    });

    setIsSubmitted(true);
    setName('');
    setMessage('');

    setTimeout(() => {
      setIsSubmitted(false);
    }, 4000);
  };

  const handleLike = (id) => {
    const updated = wishes.map((w) => {
      if (w.id === id) {
        return { ...w, likes: (w.likes || 0) + 1 };
      }
      return w;
    });
    setWishes(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (err) {
      console.warn('Storage save failed:', err);
    }
  };

  return (
    <section id="rsvp" className="py-16 px-4 relative">
      <div className="max-w-3xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-2">
            <IslamicStar className="w-4 h-4 text-gold-400" />
            <span className="text-xs font-semibold uppercase tracking-widest text-sky-300">
              Buku Doa & Kehadiran
            </span>
            <IslamicStar className="w-4 h-4 text-gold-400" />
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400">
            Ucapan & Konfirmasi Kehadiran
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 font-light">
            Kirimkan untaian doa dan konfirmasi kehadiran Anda untuk ananda {child.nickname}
          </p>
          <RoyalDivider className="my-4" />
        </div>

        {/* RSVP Form Card */}
        <div className="bg-gradient-to-b from-royal-950 to-slate-900 border border-gold-400/30 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-md mb-12">
          
          {isSubmitted && (
            <div className="mb-6 p-4 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-200 text-xs sm:text-sm flex items-center gap-3 animate-fadeIn">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Jazakumullah khairan katsiran! Doa dan konfirmasi kehadiran Anda telah tersimpan.</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Guest Name */}
            <div>
              <label className="block text-xs uppercase font-semibold text-sky-200 tracking-wider mb-2">
                Nama Anda
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder="Contoh: Om Budi Sekeluarga"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-2xl bg-slate-900/90 border border-royal-700/80 focus:border-gold-400 text-white placeholder-slate-500 text-sm focus:outline-none transition-colors"
                />
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              </div>
            </div>

            {/* Attendance Choice */}
            <div>
              <label className="block text-xs uppercase font-semibold text-sky-200 tracking-wider mb-2">
                Konfirmasi Kehadiran
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { value: 'Hadir', icon: CheckCircle2, color: 'border-emerald-500 bg-emerald-500/10 text-emerald-300' },
                  { value: 'Ragu-ragu', icon: HelpCircle, color: 'border-amber-500 bg-amber-500/10 text-amber-300' },
                  { value: 'Tidak Hadir', icon: XCircle, color: 'border-rose-500 bg-rose-500/10 text-rose-300' },
                ].map((item) => {
                  const Icon = item.icon;
                  const isSelected = attendance === item.value;
                  return (
                    <button
                      key={item.value}
                      type="button"
                      onClick={() => setAttendance(item.value)}
                      className={`py-2.5 px-3 rounded-2xl text-xs font-semibold flex flex-col sm:flex-row items-center justify-center gap-1.5 border transition-all ${
                        isSelected 
                          ? `${item.color} shadow-lg ring-1 ring-gold-400/50` 
                          : 'border-slate-800 bg-slate-900/50 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <Icon className="w-4 h-4 shrink-0" />
                      <span>{item.value}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Pax Counter if Present */}
            {attendance === 'Hadir' && (
              <div className="animate-fadeIn">
                <label className="block text-xs uppercase font-semibold text-sky-200 tracking-wider mb-2">
                  Jumlah Orang yang Hadir
                </label>
                <select
                  value={pax}
                  onChange={(e) => setPax(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-900/90 border border-royal-700/80 focus:border-gold-400 text-white text-sm focus:outline-none transition-colors"
                >
                  <option value="1">1 Orang</option>
                  <option value="2">2 Orang</option>
                  <option value="3">3 Orang</option>
                  <option value="4">4 Orang</option>
                  <option value="5">5 Orang atau Lebih</option>
                </select>
              </div>
            )}

            {/* Prayer & Wish Text */}
            <div>
              <label className="block text-xs uppercase font-semibold text-sky-200 tracking-wider mb-2">
                Untaian Doa & Pesan Hangat
              </label>
              <div className="relative">
                <textarea
                  required
                  rows="3"
                  placeholder={`Tuliskan doa kebaikan untuk ananda ${child.fullName}...`}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-2xl bg-slate-900/90 border border-royal-700/80 focus:border-gold-400 text-white placeholder-slate-500 text-sm focus:outline-none transition-colors"
                ></textarea>
                <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-gold-500 via-amber-400 to-gold-600 hover:from-gold-400 hover:to-amber-300 text-royal-950 font-bold text-sm shadow-xl shadow-gold-500/20 hover:scale-[1.01] active:scale-[0.99] transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Kirim Ucapan & Doa</span>
            </button>
          </form>

        </div>

        {/* Wishes List Feed */}
        <div className="space-y-4">
          <div className="flex items-center justify-between px-2 mb-2">
            <h3 className="font-heading text-lg font-bold text-white flex items-center gap-2">
              <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
              Untaian Doa ({wishes.length})
            </h3>
            <span className="text-xs text-sky-300">Tersimpan secara realtime</span>
          </div>

          <div className="max-h-[480px] overflow-y-auto space-y-3.5 pr-1">
            {wishes.map((item) => (
              <div
                key={item.id}
                className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-royal-800/60 shadow-md backdrop-blur-sm"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-heading font-bold text-sm sm:text-base text-gold-300">
                      {item.name}
                    </span>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${
                      item.attendance === 'Hadir'
                        ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                        : item.attendance === 'Tidak Hadir'
                        ? 'bg-rose-500/10 text-rose-300 border-rose-500/30'
                        : 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                    }`}>
                      {item.attendance} {item.pax > 0 ? `(${item.pax} org)` : ''}
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-500">{item.time}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-light">
                  {item.message}
                </p>

                <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-end">
                  <button
                    onClick={() => handleLike(item.id)}
                    className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-rose-400 transition-colors"
                  >
                    <ThumbsUp className="w-3.5 h-3.5" />
                    <span>{item.likes || 0} Aamiin</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
