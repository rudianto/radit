import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { audioManager } from '../utils/audioPlayer';

export const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Poll or sync status with audioManager
    const checkState = setInterval(() => {
      setIsPlaying(audioManager.isPlaying);
    }, 400);
    return () => clearInterval(checkState);
  }, []);

  const toggleMusic = () => {
    const nextState = audioManager.toggle();
    setIsPlaying(nextState);
  };

  return (
    <div className="fixed top-5 right-5 z-40">
      <button
        onClick={toggleMusic}
        aria-label="Toggle Music"
        className={`relative flex items-center gap-2 p-2.5 sm:px-3.5 sm:py-2 rounded-full backdrop-blur-md border shadow-lg transition-all duration-300 ${
          isPlaying 
            ? 'bg-royal-900/80 border-gold-400 text-gold-300 shadow-gold-500/20' 
            : 'bg-slate-900/70 border-slate-700 text-slate-400'
        }`}
      >
        {/* Disc Icon / Animation */}
        <div className={`relative flex items-center justify-center ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '4s' }}>
          <Music className={`w-4 h-4 ${isPlaying ? 'text-gold-400' : 'text-slate-400'}`} />
        </div>

        {/* Equalizer Bars (only on larger screens or when active) */}
        {isPlaying ? (
          <div className="flex items-end gap-0.5 h-3.5 px-0.5">
            <span className="w-0.5 bg-gold-400 rounded-full animate-pulse h-full" style={{ animationDuration: '0.6s' }}></span>
            <span className="w-0.5 bg-gold-400 rounded-full animate-pulse h-2/3" style={{ animationDuration: '0.9s' }}></span>
            <span className="w-0.5 bg-gold-400 rounded-full animate-pulse h-4/5" style={{ animationDuration: '0.7s' }}></span>
          </div>
        ) : (
          <VolumeX className="w-3.5 h-3.5 text-slate-400" />
        )}

        <span className="hidden sm:inline text-xs font-medium">
          {isPlaying ? 'Musik Aktif' : 'Musik Mati'}
        </span>
      </button>
    </div>
  );
};
