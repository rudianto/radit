import React, { useState } from 'react';
import { invitationData } from '../data/invitationData';
import { RoyalDivider, IslamicStar } from './Ornaments';
import { Gift, Copy, Check, CreditCard, MapPin, Sparkles } from 'lucide-react';

export const DigitalEnvelope = () => {
  const { digitalEnvelope } = invitationData;
  const [copiedAccount, setCopiedAccount] = useState(null);
  const [copiedAddress, setCopiedAddress] = useState(false);

  const handleCopyAccount = (accountNumber) => {
    navigator.clipboard.writeText(accountNumber);
    setCopiedAccount(accountNumber);
    setTimeout(() => {
      setCopiedAccount(null);
    }, 2500);
  };

  const handleCopyAddress = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedAddress(true);
    setTimeout(() => {
      setCopiedAddress(false);
    }, 2500);
  };

  return (
    <section id="gift" className="py-16 px-4 relative">
      <div className="max-w-3xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-2">
            <IslamicStar className="w-4 h-4 text-gold-400" />
            <span className="text-xs font-semibold uppercase tracking-widest text-sky-300">
              Tanda Kasih
            </span>
            <IslamicStar className="w-4 h-4 text-gold-400" />
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400">
            Amplop Digital & Kado
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 font-light max-w-lg mx-auto leading-relaxed">
            {digitalEnvelope.note}
          </p>
          <RoyalDivider className="my-4" />
        </div>

        {/* Bank Accounts Grid */}
        <div className="grid sm:grid-cols-2 gap-5 mb-8">
          {digitalEnvelope.accounts.map((acc, idx) => (
            <div
              key={idx}
              className={`relative bg-gradient-to-br ${acc.color} p-6 rounded-3xl text-white shadow-xl border border-white/20 overflow-hidden flex flex-col justify-between`}
            >
              {/* Card Watermark */}
              <div className="absolute -right-4 -bottom-4 text-white/10 select-none pointer-events-none">
                <CreditCard className="w-28 h-28" />
              </div>

              {/* Card Header */}
              <div className="flex items-center justify-between mb-6 relative z-10">
                <span className="font-heading font-extrabold text-lg tracking-wider text-amber-200">
                  {acc.logoText}
                </span>
                <span className="text-[10px] uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-black/25 backdrop-blur-sm border border-white/20">
                  Tanda Kasih
                </span>
              </div>

              {/* Card Number & Holder */}
              <div className="relative z-10 space-y-1">
                <p className="text-[11px] text-sky-100 uppercase tracking-wider">
                  Nomor Rekening
                </p>
                <p className="font-mono text-xl sm:text-2xl font-bold tracking-wider text-white">
                  {acc.accountNumber}
                </p>
                <p className="text-xs font-medium text-amber-100">
                  a/n {acc.accountHolder}
                </p>
              </div>

              {/* Copy Button */}
              <div className="mt-5 pt-3 border-t border-white/20 relative z-10">
                <button
                  onClick={() => handleCopyAccount(acc.accountNumber)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-white/20 hover:bg-white/30 text-white text-xs font-semibold backdrop-blur-sm transition-all active:scale-95 border border-white/25"
                >
                  {copiedAccount === acc.accountNumber ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-300" />
                      <span className="text-emerald-200">Nomor Rekening Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Salin Nomor Rekening</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Physical Gift Box Card */}
        <div className="bg-slate-900/90 border border-gold-400/30 rounded-3xl p-6 sm:p-7 shadow-xl backdrop-blur-md">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-3 rounded-2xl bg-royal-800 border border-gold-400/30">
              <Gift className="w-5 h-5 text-gold-400" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-base sm:text-lg text-white">
                Kirim Kado Fisik
              </h4>
              <p className="text-xs text-sky-200">
                Penerima: {digitalEnvelope.giftAddress.recipient}
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 my-3 pl-1 border-l-2 border-gold-400/50 leading-relaxed">
            {digitalEnvelope.giftAddress.fullAddress}
          </p>

          <button
            onClick={() => handleCopyAddress(digitalEnvelope.giftAddress.fullAddress)}
            className="inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-xl bg-royal-800 hover:bg-royal-700 text-sky-200 hover:text-white text-xs font-semibold border border-royal-600 transition-all active:scale-95"
          >
            {copiedAddress ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-300">Alamat Berhasil Disalin!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Salin Alamat Pengiriman</span>
              </>
            )}
          </button>
        </div>

      </div>
    </section>
  );
};
