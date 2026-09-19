import React from 'react';
import { motion } from 'framer-motion';

export const CouponPopIcon = ({ show }) => {
  if (!show) return null;

  return (
    <motion.div
      initial={{ scale: 0, rotate: -25, opacity: 0 }}
      animate={{ scale: [0, 1.3, 1], rotate: [-25, 12, 5], opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.175, 0.885, 0.32, 1.275] }}
      className="absolute -top-5 -right-5 z-30 pointer-events-none filter drop-shadow-md"
    >
      <div className="w-14 h-14 bg-emerald-500 border-3 border-ink rounded-xl flex items-center justify-center shadow-brutal-sm text-white rotate-6">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8 text-yellow"
        >
          <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2z" />
          <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="3" />
          <line x1="15" y1="15" x2="15.01" y2="15" strokeWidth="3" />
          <line x1="15" y1="9" x2="9" y2="15" />
        </svg>
      </div>
    </motion.div>
  );
};
