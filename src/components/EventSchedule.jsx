import React from 'react';
import { invitationData } from '../data/invitationData';
import { RoyalDivider, IslamicStar } from './Ornaments';
import { Calendar, Clock, MapPin, Navigation, ExternalLink, BookOpen, Utensils } from 'lucide-react';

export const EventSchedule = () => {
  const { event } = invitationData;

  const getSessionIcon = (iconName) => {
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-gold-400" />;
      case 'Utensils':
        return <Utensils className="w-5 h-5 text-gold-400" />;
      default:
        return <Clock className="w-5 h-5 text-gold-400" />;
    }
  };

  return (
    <section id="schedule" className="py-16 px-4 relative">
      <div className="max-w-3xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-2">
            <IslamicStar className="w-4 h-4 text-gold-400" />
            <span className="text-xs font-semibold uppercase tracking-widest text-sky-300">
              Waktu & Tempat
            </span>
            <IslamicStar className="w-4 h-4 text-gold-400" />
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400">
            Rangkaian Acara Khitanan
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 font-light">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila berkenan hadir pada:
          </p>
          <RoyalDivider className="my-4" />
        </div>

        {/* Big Date Display Card */}
        <div className="bg-gradient-to-r from-royal-900 via-royal-950 to-slate-900 border-2 border-gold-400/40 rounded-3xl p-6 mb-8 text-center shadow-xl backdrop-blur-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl"></div>
          <div className="flex items-center justify-center gap-2 text-gold-400 text-sm font-semibold mb-1">
            <Calendar className="w-4 h-4" />
            <span>Hari & Tanggal</span>
          </div>
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-wide">
            {event.formattedDate}
          </h3>
          <p className="text-xs text-sky-300 mt-1">
            {event.hijriDate}
          </p>
        </div>

        {/* Sessions Grid */}
        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          {event.sessions.map((session, idx) => (
            <div
              key={idx}
              className="bg-slate-900/80 border border-royal-700/60 hover:border-gold-400/60 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-royal-800/80 border border-gold-400/30 group-hover:scale-110 transition-transform">
                    {getSessionIcon(session.icon)}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-sky-500/15 text-sky-200 border border-sky-400/30">
                    Sesi {idx + 1}
                  </span>
                </div>
                <h4 className="font-heading text-lg font-bold text-sky-100 group-hover:text-gold-300 transition-colors">
                  {session.name}
                </h4>
                <div className="flex items-center gap-1.5 text-gold-400 font-semibold text-sm my-2">
                  <Clock className="w-4 h-4" />
                  <span>{session.time}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-light mt-2">
                  {session.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Location & Map Card */}
        <div className="bg-slate-900/90 border border-gold-400/30 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-md">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-2xl bg-royal-800 border border-gold-400/40">
              <MapPin className="w-6 h-6 text-gold-400" />
            </div>
            <div>
              <span className="text-xs uppercase font-semibold text-sky-300 tracking-wider">
                Lokasi Acara
              </span>
              <h4 className="font-heading text-lg sm:text-xl font-bold text-white">
                {event.location.venue}
              </h4>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 mb-6 pl-1 border-l-2 border-gold-400/50">
            {event.location.subVenue}, {event.location.city}
          </p>

          {/* Interactive Google Map Embed */}
          <div className="w-full h-64 sm:h-72 rounded-2xl overflow-hidden border border-royal-700/60 shadow-inner mb-6 relative">
            <iframe
              title="Peta Lokasi Khitanan Raditya"
              src={event.location.embedMapSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter saturate-150 contrast-105"
            ></iframe>
          </div>

          {/* Navigation Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={event.location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-2xl bg-gradient-to-r from-blue-600 to-royal-700 hover:from-blue-500 hover:to-royal-600 text-white font-semibold text-xs sm:text-sm shadow-md hover:shadow-blue-500/30 transition-all active:scale-95 border border-blue-400/30"
            >
              <Navigation className="w-4 h-4 text-gold-300" />
              <span>Buka Petunjuk Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 text-blue-200" />
            </a>

            <a
              href={event.location.wazeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-sky-200 font-semibold text-xs sm:text-sm border border-slate-600 shadow-md transition-all active:scale-95"
            >
              <span>Navigasi Waze</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
