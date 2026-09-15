import React, { useState, useEffect } from 'react';
import { CoverEnvelope } from './components/CoverEnvelope';
import { AudioPlayer } from './components/AudioPlayer';
import { HeroSection } from './components/HeroSection';
import { EventCountdown } from './components/EventCountdown';
import { EventSchedule } from './components/EventSchedule';
import { GallerySection } from './components/GallerySection';
import { RsvpAndWishes } from './components/RsvpAndWishes';
import { DigitalEnvelope } from './components/DigitalEnvelope';
import { FloatingNav } from './components/FloatingNav';
import { FooterSection } from './components/FooterSection';
import { Sparkle } from './components/Ornaments';

export default function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [guestName, setGuestName] = useState('Tamu Undangan');

  useEffect(() => {
    // Ambil nama tamu dari parameter URL: prioritas '?nama=...', lalu '?to=...', '?tamu=...', '?u=...'
    const parseGuestName = () => {
      // 1. Cek parameter di window.location.search
      const searchParams = new URLSearchParams(window.location.search);
      let rawName = searchParams.get('nama') ?? searchParams.get('to') ?? searchParams.get('tamu') ?? searchParams.get('u');

      // 2. Cek juga pada hash URL jika ada format seperti /#/?nama=...
      if (!rawName && window.location.hash.includes('?')) {
        const hashQuery = window.location.hash.split('?')[1];
        const hashParams = new URLSearchParams(hashQuery);
        rawName = hashParams.get('nama') ?? hashParams.get('to') ?? hashParams.get('tamu') ?? hashParams.get('u');
      }

      // Validasi: ganti hanya jika parameter tidak kosong
      if (rawName !== null && rawName.trim() !== '') {
        try {
          return decodeURIComponent(rawName).trim();
        } catch {
          return rawName.trim();
        }
      }
      return 'Tamu Undangan';
    };

    setGuestName(parseGuestName());
  }, []);

  useEffect(() => {
    // Lock background scroll when cover envelope is showing
    if (!isOpened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      window.scrollTo(0, 0);
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpened]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans relative overflow-x-hidden selection:bg-gold-500 selection:text-royal-950">
      
      {/* Dynamic Cover Envelope Screen */}
      <CoverEnvelope 
        isOpen={isOpened} 
        onOpen={() => setIsOpened(true)} 
        guestName={guestName} 
      />

      {/* Floating Audio Player */}
      <AudioPlayer />

      {/* Floating Bottom Navigation */}
      {isOpened && <FloatingNav />}

      {/* Background Decorative Ambient Lighting */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-royal-700/10 rounded-full blur-[140px]"></div>
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-cerulean-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-gold-500/10 rounded-full blur-[130px]"></div>

        {/* Ambient subtle sparkles */}
        <Sparkle className="w-3 h-3 text-gold-300 absolute top-32 left-16" />
        <Sparkle className="w-3.5 h-3.5 text-sky-300 absolute top-80 right-20" style={{ animationDelay: '1.2s' }} />
        <Sparkle className="w-4 h-4 text-gold-400 absolute top-[60%] left-24" style={{ animationDelay: '2s' }} />
      </div>

      {/* Main Content Container (Mobile-first centered column with max-w-3xl for optimal readability) */}
      <main className={`relative z-10 mx-auto max-w-3xl transition-opacity duration-1000 ${isOpened ? 'opacity-100' : 'opacity-0'}`}>
        <HeroSection />
        <EventCountdown />
        <EventSchedule />
        <GallerySection />
        <RsvpAndWishes defaultGuestName={guestName} />
        <DigitalEnvelope />
        <FooterSection />
      </main>

    </div>
  );
}
