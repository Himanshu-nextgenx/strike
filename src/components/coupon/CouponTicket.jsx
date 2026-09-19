import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Ticket, Flame, Sparkles } from 'lucide-react';
import { COUPON_CONFIG } from '../../config/couponConfig';

export const CouponTicket = ({ coupon, loading, error }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e) => {
    e.stopPropagation();
    if (!coupon || !coupon.code) return;

    navigator.clipboard.writeText(coupon.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const notchRadius = COUPON_CONFIG.notchRadius || 14;

  return (
    <div
      className="relative absolute inset-0 w-full h-full text-white flex flex-col justify-between p-4.5 select-none z-20 overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${COUPON_CONFIG.couponStartColor} 0%, ${COUPON_CONFIG.couponEndColor} 100%)`,
        maskImage: `radial-gradient(circle at 0px 50%, transparent ${notchRadius}px, black ${notchRadius + 0.5}px), radial-gradient(circle at 100% 50%, transparent ${notchRadius}px, black ${notchRadius + 0.5}px)`,
        maskComposite: 'intersect',
        WebkitMaskImage: `radial-gradient(circle at 0px 50%, transparent ${notchRadius}px, black ${notchRadius + 0.5}px), radial-gradient(circle at 100% 50%, transparent ${notchRadius}px, black ${notchRadius + 0.5}px)`,
        WebkitMaskComposite: 'destination-in'
      }}
    >
      {/* Animated Light Shimmer Line */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: '200%' }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut', repeatDelay: 1.5 }}
        className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none"
      />

      {/* Top Header Row */}
      <div className="flex justify-between items-center px-3 pt-1 z-10">
        <div className="flex items-center gap-2">
          <motion.div
            animate={{ scale: [1, 1.15, 1], rotate: [0, -8, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
            className="p-1 bg-yellow/20 border border-yellow/40 rounded-lg shadow-sm"
          >
            <Ticket className="w-6 h-6 text-yellow shrink-0" />
          </motion.div>

          <div className="flex items-center gap-1.5">
            <motion.span
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="font-heading text-3xl sm:text-4xl tracking-wider text-yellow drop-shadow-md"
            >
              {loading ? 'LOADING...' : error ? 'TRY AGAIN LATER' : coupon?.label || 'UNLOCKED!'}
            </motion.span>

            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
              transition={{ type: 'spring', stiffness: 300, repeat: Infinity, repeatDelay: 4 }}
              className="bg-pink-500 text-white text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-full border border-ink flex items-center gap-0.5 shadow-brutal-sm"
            >
              <Flame className="w-3 h-3 text-yellow fill-yellow" /> HOT
            </motion.span>
          </div>
        </div>

        <div className="bg-ink/40 backdrop-blur-xs px-2.5 py-1 rounded-full text-xs font-mono text-emerald-100 border border-white/20 flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span>{coupon?.expiresText || 'Valid 24h'}</span>
        </div>
      </div>

      {/* Perforation Line */}
      <div className="w-full border-b-2 border-dashed border-white/40 my-1 z-10"></div>

      {/* Bottom Code Box Row */}
      <div className="flex items-center justify-between bg-emerald-950/60 rounded-xl p-2 px-3.5 border border-white/40 backdrop-blur-xs gap-3 z-10 shadow-inner">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-200 flex items-center gap-1">
            <span>COUPON CODE</span>
            <Sparkles className="w-3 h-3 text-yellow animate-pulse" />
          </span>
          <motion.span
            animate={{ opacity: [0.9, 1, 0.9] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="font-mono font-bold text-xl sm:text-2xl tracking-widest text-white drop-shadow-md"
          >
            {loading ? '••••••••' : error ? 'ERROR' : coupon?.code || 'STRIKE2026'}
          </motion.span>
        </div>

        <motion.button
          onClick={handleCopy}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          disabled={loading || error || !coupon}
          className="btn-brutal bg-yellow text-ink border-2 border-ink px-3.5 py-1.5 rounded-lg text-xs font-bold font-mono flex items-center gap-1.5 shadow-brutal-sm hover:bg-yellow-300 cursor-pointer disabled:opacity-50"
        >
          {copied ? (
            <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="flex items-center gap-1 text-emerald-900 font-extrabold">
              <Check className="w-4 h-4 stroke-[3]" />
              <span>COPIED ✓</span>
            </motion.div>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>COPY</span>
            </>
          )}
        </motion.button>
      </div>
    </div>
  );
};
