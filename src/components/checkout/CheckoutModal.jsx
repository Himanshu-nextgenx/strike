import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Tag, Sparkles, Lock, ArrowRight, PartyPopper } from 'lucide-react';
import { validateCoupon, markCouponUsed } from '../../services/couponService';
import { useSessionCoupon } from '../../context/SessionCouponContext';

export const CheckoutModal = ({ isOpen, onClose, course }) => {
  const [couponCodeInput, setCouponCodeInput] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [validating, setValidating] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const { sessionCoupons } = useSessionCoupon();
  const sessionCoupon = course ? sessionCoupons[course.id] : null;

  useEffect(() => {
    if (isOpen) {
      setCouponCodeInput('');
      setAppliedCoupon(null);
      setErrorMsg('');
      setIsSuccess(false);

      if (sessionCoupon) {
        setCouponCodeInput(sessionCoupon.code);
      }
    }
  }, [isOpen, course, sessionCoupon]);

  if (!isOpen || !course) return null;

  const originalPrice = course.originalPrice;
  const courseDiscount = originalPrice - course.price;
  let couponDiscount = 0;

  if (appliedCoupon) {
    if (appliedCoupon.discountType === 'percent') {
      couponDiscount = Math.round((course.price * appliedCoupon.discountValue) / 100);
    } else if (appliedCoupon.discountType === 'flat') {
      couponDiscount = appliedCoupon.discountValue;
    }
  }

  const finalTotal = Math.max(0, course.price - couponDiscount);

  const handleApplyCoupon = async (e) => {
    if (e) e.preventDefault();
    setErrorMsg('');
    if (!couponCodeInput.trim()) return;

    setValidating(true);
    try {
      const res = await validateCoupon(couponCodeInput, course.id);
      setValidating(false);

      if (res.valid) {
        setAppliedCoupon(res.coupon);
        setErrorMsg('');
      } else {
        setAppliedCoupon(null);
        setErrorMsg(res.error || 'Invalid coupon code.');
      }
    } catch (err) {
      setValidating(false);
      setErrorMsg('Failed to validate coupon.');
    }
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    setErrorMsg('');
  };

  const handleTapSessionCoupon = () => {
    if (sessionCoupon) {
      setCouponCodeInput(sessionCoupon.code);
      validateCoupon(sessionCoupon.code, course.id).then((res) => {
        if (res.valid) {
          setAppliedCoupon(res.coupon);
          setErrorMsg('');
        }
      });
    }
  };

  const handlePayNow = async () => {
    if (appliedCoupon) {
      await markCouponUsed(appliedCoupon.code);
    }
    setIsSuccess(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-y-auto bg-black/70 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-lg bg-paper border-4 border-ink rounded-3xl shadow-brutal-lg overflow-hidden select-none"
        >
          <div className="bg-yellow border-b-4 border-ink px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-black" />
              <span className="font-heading text-2xl uppercase tracking-wider text-black">
                ENROLLMENT CHECKOUT
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 bg-paper border-2 border-ink rounded-full shadow-brutal-sm hover:bg-white cursor-pointer"
            >
              <X className="w-5 h-5 text-ink" />
            </button>
          </div>

          {!isSuccess ? (
            <div className="p-6">
              <div className="bg-white border-3 border-ink rounded-2xl p-4 shadow-brutal-sm mb-5 flex items-center gap-4">
                <div
                  className="w-16 h-16 rounded-xl border-2 border-ink flex items-center justify-center font-heading text-2xl text-black shrink-0"
                  style={{ backgroundColor: course.accent }}
                >
                  ⚡
                </div>
                <div>
                  <h4 className="font-heading text-xl text-ink uppercase tracking-wide">
                    {course.title}
                  </h4>
                  <div className="flex items-center gap-2 font-mono text-xs text-gray-600 mt-1">
                    <span>{course.duration}</span>
                    <span>•</span>
                    <span>{course.validity} Access</span>
                  </div>
                </div>
              </div>

              {sessionCoupon && !appliedCoupon && (
                <div
                  onClick={handleTapSessionCoupon}
                  className="bg-emerald-100 border-2 border-emerald-600 p-3 rounded-xl mb-4 flex items-center justify-between cursor-pointer hover:bg-emerald-200 transition-colors shadow-brutal-sm"
                >
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4 text-emerald-700" />
                    <div>
                      <div className="text-xs font-mono font-bold text-emerald-900">
                        You unlocked code <span className="underline">{sessionCoupon.code}</span>!
                      </div>
                      <div className="text-[10px] font-sans text-emerald-800">
                        Tap here to auto-apply your {sessionCoupon.label} scratch reward.
                      </div>
                    </div>
                  </div>
                  <span className="bg-emerald-600 text-white font-mono text-xs px-2 py-1 rounded font-bold">
                    APPLY
                  </span>
                </div>
              )}

              <form onSubmit={handleApplyCoupon} className="mb-5">
                <label className="block font-mono text-xs font-bold text-ink mb-1.5 uppercase">
                  HAVE A COUPON CODE?
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={couponCodeInput}
                    onChange={(e) => setCouponCodeInput(e.target.value)}
                    placeholder="Enter STRIKE code..."
                    disabled={!!appliedCoupon}
                    className="flex-1 bg-white border-3 border-ink px-3 py-2 rounded-xl font-mono text-sm uppercase text-ink focus:outline-none focus:bg-yellow/20"
                  />
                  {appliedCoupon ? (
                    <button
                      type="button"
                      onClick={handleRemoveCoupon}
                      className="bg-red-500 text-white border-3 border-ink px-4 py-2 rounded-xl font-mono text-xs font-bold shadow-brutal-sm hover:bg-red-600 cursor-pointer"
                    >
                      REMOVE
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={validating || !couponCodeInput.trim()}
                      className="btn-brutal bg-purple text-black border-3 border-ink px-5 py-2 rounded-xl font-mono text-xs font-bold shadow-brutal-sm hover:bg-purple-300 cursor-pointer disabled:opacity-50"
                    >
                      {validating ? 'APPLYING...' : 'APPLY'}
                    </button>
                  )}
                </div>

                {errorMsg && (
                  <p className="font-mono text-xs text-red-600 mt-1.5 font-bold flex items-center gap-1">
                    ⚠ {errorMsg}
                  </p>
                )}

                {appliedCoupon && (
                  <div className="mt-2 text-xs font-mono text-emerald-700 font-bold bg-emerald-50 border border-emerald-300 p-2 rounded-lg flex items-center justify-between">
                    <span>✓ Coupon {appliedCoupon.code} applied ({appliedCoupon.label})</span>
                    <span className="text-emerald-800 font-extrabold">-₹{couponDiscount.toLocaleString('en-IN')}</span>
                  </div>
                )}
              </form>

              <div className="bg-paper-dark text-white p-4 rounded-2xl border-3 border-ink font-mono text-xs space-y-2 mb-6">
                <div className="flex justify-between text-gray-300">
                  <span>Original Course Fee:</span>
                  <span>₹{originalPrice.toLocaleString('en-IN')}</span>
                </div>

                <div className="flex justify-between text-emerald-400">
                  <span>Direct Course Savings:</span>
                  <span>-₹{courseDiscount.toLocaleString('en-IN')}</span>
                </div>

                {appliedCoupon && (
                  <div className="flex justify-between text-yellow font-bold border-t border-gray-800 pt-1">
                    <span>Scratch Coupon Discount:</span>
                    <span>-₹{couponDiscount.toLocaleString('en-IN')}</span>
                  </div>
                )}

                <div className="border-t-2 border-dashed border-gray-700 pt-2 flex justify-between items-baseline font-heading text-xl text-yellow">
                  <span>TOTAL AMOUNT PAYABLE:</span>
                  <span className="text-2xl text-emerald-400">
                    ₹{finalTotal.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              <button
                onClick={handlePayNow}
                className="btn-brutal w-full bg-green text-black border-4 border-ink py-3.5 rounded-2xl font-heading text-2xl tracking-wider shadow-brutal flex items-center justify-center gap-2 hover:bg-emerald-400 cursor-pointer"
              >
                <Lock className="w-5 h-5" />
                <span>PAY NOW — ₹{finalTotal.toLocaleString('en-IN')}</span>
              </button>
            </div>
          ) : (
            <div className="p-8 text-center">
              <div className="w-20 h-20 bg-yellow border-4 border-ink rounded-full flex items-center justify-center mx-auto mb-4 shadow-brutal animate-bounce">
                <PartyPopper className="w-10 h-10 text-black" />
              </div>

              <h3 className="font-heading text-4xl text-ink uppercase tracking-wider mb-2">
                WELCOME TO STRIKE! 🎉
              </h3>
              <p className="font-sans text-sm text-gray-700 mb-6 font-medium">
                You have successfully enrolled in <strong className="text-ink">{course.title}</strong>. Check your email for instant dashboard access details.
              </p>

              <div className="bg-white border-3 border-ink p-4 rounded-2xl shadow-brutal-sm font-mono text-xs text-left mb-6 space-y-1">
                <div className="flex justify-between">
                  <span className="text-gray-500">Transaction Ref:</span>
                  <span className="font-bold text-ink">STRK-{Math.random().toString(36).substring(2, 9).toUpperCase()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Amount Paid:</span>
                  <span className="font-bold text-emerald-700">₹{finalTotal.toLocaleString('en-IN')}</span>
                </div>
                {appliedCoupon && (
                  <div className="flex justify-between">
                    <span className="text-gray-500">Coupon Used:</span>
                    <span className="font-bold text-purple">{appliedCoupon.code}</span>
                  </div>
                )}
              </div>

              <button
                onClick={onClose}
                className="btn-brutal bg-yellow text-black border-3 border-ink px-8 py-3 rounded-2xl font-heading text-lg shadow-brutal-sm hover:bg-yellow-300 cursor-pointer"
              >
                GO TO DASHBOARD
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
