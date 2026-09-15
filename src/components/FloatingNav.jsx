import React, { useState, useEffect } from 'react';
import { Home, Calendar, Image, MessageSquare, Gift } from 'lucide-react';

export const FloatingNav = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'schedule', 'gallery', 'rsvp', 'gift'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Beranda', icon: Home },
    { id: 'schedule', label: 'Jadwal', icon: Calendar },
    { id: 'gallery', label: 'Galeri', icon: Image },
    { id: 'rsvp', label: 'Doa', icon: MessageSquare },
    { id: 'gift', label: 'Kado', icon: Gift },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 px-3 py-2 rounded-full bg-royal-950/85 backdrop-blur-xl border border-gold-400/40 shadow-2xl shadow-royal-950/90 flex items-center gap-1 sm:gap-2">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeSection === item.id;
        return (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className={`flex flex-col items-center justify-center py-1.5 px-2.5 sm:px-3 rounded-full transition-all duration-300 ${
              isActive
                ? 'bg-gradient-to-r from-gold-500 to-amber-500 text-royal-950 font-bold scale-105 shadow-md shadow-gold-500/20'
                : 'text-slate-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <Icon className="w-4 h-4" />
            <span className="text-[10px] tracking-tight mt-0.5 hidden xs:inline sm:inline">
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};
