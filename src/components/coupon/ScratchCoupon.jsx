import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScratchCanvas } from '../../hooks/useScratchCanvas';
import { MysteryLayer } from './MysteryLayer';
import { CouponTicket } from './CouponTicket';
import { CouponPopIcon } from './CouponPopIcon';
import { ParticleBurst } from './ParticleBurst';
import { useSessionCoupon } from '../../context/SessionCouponContext';
import { COUPON_CONFIG } from '../../config/couponConfig';

export const ScratchCoupon = ({ fetchCoupon, courseId, width = 440, height = 190 }) => {
  const [fetchStarted, setFetchStarted] = useState(false);
  const [couponData, setCouponData] = useState(null);
  const [fetchLoading, setFetchLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);

  const [revealState, setRevealState] = useState('idle');
  const [foilFaded, setFoilFaded] = useState(false);
  const [showTicket, setShowTicket] = useState(false);
  const [particleActive, setParticleActive] = useState(false);

  const wrapperRef = useRef(null);
  const [cardRect, setCardRect] = useState(null);

  const { saveSessionCoupon } = useSessionCoupon();

  const triggerFetch = async () => {
    if (fetchStarted) return;
    setFetchStarted(true);
    setFetchLoading(true);

    try {
      const data = await fetchCoupon();
      setCouponData(data);
      setFetchLoading(false);
    } catch (err) {
      console.error('Failed to fetch coupon:', err);
      setFetchError(true);
      setFetchLoading(false);
    }
  };

  const runRevealSequence = async () => {
    if (revealState !== 'idle') return;

    // Capture exact bounding rect coordinates for particle burst
    if (wrapperRef.current) {
      const r = wrapperRef.current.getBoundingClientRect();
      setCardRect({ left: r.left, top: r.top, width: r.width, height: r.height });
    }

    setRevealState('fading_foil');
    triggerFetch();

    setTimeout(() => {
      setFoilFaded(true);
      setRevealState('bursting');
      setParticleActive(true); // Firing green particle burst!

      setTimeout(() => {
        setShowTicket(true);
        setRevealState('revealed');

        if (couponData && courseId) {
          saveSessionCoupon(courseId, couponData);
        }
      }, COUPON_CONFIG.ticketDelayMs || 450);
    }, COUPON_CONFIG.revealFadeMs || 250);
  };

  const { canvasRef, pointerHandlers } = useScratchCanvas({
    onPointerStart: () => {
      triggerFetch();
    },
    onRevealThreshold: () => {
      runRevealSequence();
    },
    disabled: revealState !== 'idle'
  });

  React.useEffect(() => {
    if (showTicket && couponData && courseId) {
      saveSessionCoupon(courseId, couponData);
    }
  }, [showTicket, couponData, courseId, saveSessionCoupon]);

  const handleAccessibilityReveal = (e) => {
    e.preventDefault();
    runRevealSequence();
  };

  return (
    <div className="relative my-4 select-none" style={{ maxWidth: '100%' }}>
      {/* Handwritten "scratch me!" Sticker + SVG Doodle Arrow */}
      <motion.div
        animate={{ rotate: [-12, -7, -12], scale: [1, 1.04, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-7 -left-4 z-30 pointer-events-none flex items-center gap-1"
      >
        <span className="bg-yellow text-ink border-2 border-ink px-2.5 py-0.5 rounded-full font-handwriting text-lg font-bold shadow-brutal-sm flex items-center gap-1">
          scratch me! <motion.span animate={{ scale: [1, 1.3, 1] }} transition={{ repeat: Infinity, duration: 1 }}>⚡</motion.span>
        </span>
        <svg
          className="w-6 h-6 text-pink-500 transform rotate-45"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>

      {/* Main Scratch Card Outer Container */}
      <div className="relative inline-block w-full max-w-full" style={{ width: `${width}px` }}>
        <CouponPopIcon show={showTicket} />

        <div
          ref={wrapperRef}
          className="relative w-full border-4 border-ink rounded-2xl shadow-brutal bg-ink overflow-hidden transition-transform duration-200 hover:-translate-y-0.5"
          style={{ aspectRatio: `${width}/${height}` }}
        >
          <MysteryLayer />

          <AnimatePresence>
            {showTicket && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="absolute inset-0 w-full h-full z-10"
              >
                <CouponTicket coupon={couponData} loading={fetchLoading} error={fetchError} />
              </motion.div>
            )}
          </AnimatePresence>

          {!foilFaded && (
            <canvas
              ref={canvasRef}
              {...pointerHandlers}
              className={`absolute inset-0 w-full h-full z-20 touch-none cursor-crosshair transition-opacity duration-250 ${
                revealState === 'fading_foil' ? 'opacity-0' : 'opacity-100'
              }`}
            />
          )}
        </div>
      </div>

      <div className="mt-2 text-center sm:text-left">
        <button
          onClick={handleAccessibilityReveal}
          disabled={revealState !== 'idle'}
          className="text-xs font-mono text-gray-700 underline hover:text-ink cursor-pointer disabled:opacity-30 disabled:no-underline"
        >
          Can't scratch? Reveal coupon code
        </button>
      </div>

      <ParticleBurst
        active={particleActive}
        originRect={cardRect}
        onComplete={() => setParticleActive(false)}
      />
    </div>
  );
};
