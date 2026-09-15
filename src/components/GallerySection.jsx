import React, { useState } from 'react';
import { invitationData } from '../data/invitationData';
import { RoyalDivider } from './Ornaments';
import { Camera, X, Sparkles, Smile, Star, Heart } from 'lucide-react';

export const GallerySection = () => {
  const { gallery, child } = invitationData;
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section id="gallery" className="py-16 px-4 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-gold-500/10 text-gold-300 border border-gold-400/30 mb-2">
            <Camera className="w-3.5 h-3.5 text-gold-400" />
            <span>Momen Ceria</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400">
            Galeri Ananda Raditya
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 font-light">
            Senyuman hangat dan keceriaan sang jagoan cilik
          </p>
          <RoyalDivider className="my-4" />
        </div>

        {/* Gallery Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {gallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="cursor-pointer group relative bg-slate-900/90 rounded-3xl overflow-hidden border border-royal-700/60 hover:border-gold-400/80 transition-all duration-300 hover:-translate-y-1.5 shadow-xl"
            >
              {/* Card visual illustration / photo */}
              <div className={`h-48 bg-gradient-to-br ${item.color} p-6 flex flex-col justify-between relative overflow-hidden`}>
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover object-[center_15%] group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                {item.image && (
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/30 to-black/20"></div>
                )}
                
                {/* Background artistic pattern */}
                {!item.image && (
                  <div className="absolute -right-6 -bottom-6 w-28 h-28 bg-white/10 rounded-full blur-xl group-hover:scale-125 transition-transform duration-500"></div>
                )}
                <div className="absolute top-2 right-3 text-white/40 z-10">
                  <Sparkles className="w-8 h-8" />
                </div>

                {/* Top Badge */}
                <div className="flex justify-between items-center relative z-10">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-slate-900/40 text-white backdrop-blur-sm border border-white/20">
                    {item.tag}
                  </span>
                  <Smile className="w-5 h-5 text-white/90" />
                </div>

                {/* Bottom Title on Card */}
                <div className="relative z-10 text-white">
                  <p className="text-xs font-semibold tracking-wide text-amber-200">
                    {item.category}
                  </p>
                  <h4 className="font-heading font-bold text-base line-clamp-1 drop-shadow-sm">
                    {item.title}
                  </h4>
                </div>
              </div>

              {/* Caption Footer */}
              <div className="p-4 bg-slate-900/95">
                <p className="text-xs text-slate-300 line-clamp-2 font-light">
                  {item.caption}
                </p>
                <div className="mt-3 flex items-center justify-between text-[11px] text-sky-400 font-medium group-hover:text-gold-300 transition-colors">
                  <span>Lihat Detail</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedPhoto && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
            onClick={() => setSelectedPhoto(null)}
          >
            <div 
              className="relative max-w-md w-full bg-slate-900 border-2 border-gold-400/50 rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Graphic / Photo */}
              {selectedPhoto.image ? (
                <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-slate-950 flex items-center justify-center">
                  <img
                    src={selectedPhoto.image}
                    alt={selectedPhoto.title}
                    className="w-full h-full object-cover object-[center_15%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                  <div className="absolute bottom-3 left-4 right-4 z-10">
                    <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-slate-900/80 text-gold-300 border border-gold-400/30 inline-block mb-1">
                      {selectedPhoto.tag}
                    </span>
                    <h3 className="font-heading text-xl font-extrabold text-white drop-shadow-md">
                      {selectedPhoto.title}
                    </h3>
                  </div>
                </div>
              ) : (
                <div className={`h-60 bg-gradient-to-br ${selectedPhoto.color} p-6 flex flex-col items-center justify-center text-center relative`}>
                  <div className="p-4 rounded-full bg-white/10 backdrop-blur-md mb-3 border border-white/30 shadow-inner">
                    <Star className="w-10 h-10 text-gold-300 animate-spin" style={{ animationDuration: '12s' }} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-black/30 text-sky-200 border border-white/20 mb-2">
                    {selectedPhoto.tag}
                  </span>
                  <h3 className="font-heading text-xl font-extrabold text-white">
                    {selectedPhoto.title}
                  </h3>
                </div>
              )}

              {/* Modal Content */}
              <div className="p-6">
                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedPhoto.caption}
                </p>
                <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1 text-gold-400 font-semibold">
                    <Heart className="w-3.5 h-3.5 fill-gold-400" /> Jagoan {child.nickname}
                  </span>
                  <button
                    onClick={() => setSelectedPhoto(null)}
                    className="px-4 py-2 rounded-xl bg-royal-800 hover:bg-royal-700 text-sky-200 font-semibold transition-colors"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
