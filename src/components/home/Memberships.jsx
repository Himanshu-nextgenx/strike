import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Sparkles, Crown, Zap, ArrowRight } from 'lucide-react';

export const Memberships = () => {
  const [selectedDuration, setSelectedDuration] = useState('4 Years');

  const plusPrices = {
    '2 Years': { price: 9999, orig: 14999, off: '33% OFF' },
    '3 Years': { price: 11499, orig: 17999, off: '36% OFF' },
    '4 Years': { price: 12499, orig: 19999, off: '38% OFF' }
  };

  return (
    <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto my-12 bg-paper border-4 border-ink rounded-3xl shadow-brutal-lg relative overflow-hidden">
      <div className="absolute top-0 right-0 w-40 h-40 bg-yellow/30 rounded-full blur-2xl pointer-events-none"></div>

      <div className="text-center mb-12 relative z-10">
        <span className="bg-purple text-ink border-2 border-ink px-3 py-1 rounded-full font-mono text-xs font-bold uppercase tracking-wider shadow-brutal-sm mb-3 inline-block">
          ALL-ACCESS MEMBERSHIPS
        </span>
        <h2 className="font-heading text-4xl sm:text-6xl text-ink uppercase tracking-wider mb-3">
          UNLIMITED <span className="marker-highlight-pink px-3 text-white">LEARNING</span> PLANS
        </h2>
        <p className="font-sans text-base text-gray-700 max-w-xl mx-auto font-medium">
          Get complete access to all current and future courses with a single one-time payment. Click any plan to view full curriculum details & scratch for discounts!
        </p>
      </div>

      <div className="flex justify-center mb-10 relative z-10">
        <div className="bg-white border-3 border-ink p-1.5 rounded-2xl shadow-brutal-sm flex items-center gap-1 font-mono text-xs font-bold">
          {['2 Years', '3 Years', '4 Years'].map((dur) => (
            <button
              key={dur}
              onClick={() => setSelectedDuration(dur)}
              className={`px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer ${
                selectedDuration === dur
                  ? 'bg-yellow text-ink border-2 border-ink shadow-brutal-sm'
                  : 'text-gray-600 hover:text-ink'
              }`}
            >
              <span>{dur}</span>
              {dur === '4 Years' && (
                <span className="bg-pink-500 text-white text-[9px] px-1.5 py-0.2 rounded-full font-sans uppercase">
                  Popular
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto relative z-10">
        {/* Strike Plus Card */}
        <div className="bg-paper border-4 border-ink rounded-3xl p-6 sm:p-8 shadow-brutal flex flex-col justify-between relative transform -rotate-1 hover:rotate-0 transition-transform">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="bg-blue text-ink border-2 border-ink px-3 py-1 rounded-full font-mono text-xs font-bold">
                STRIKE PLUS
              </span>
              <span className="font-mono text-xs font-bold text-gray-500">
                {selectedDuration} ACCESS
              </span>
            </div>

            <h3 className="font-heading text-3xl sm:text-4xl text-ink uppercase mb-2">
              ALL EXISTING COURSES
            </h3>
            <p className="font-sans text-xs text-gray-600 mb-6">
              Complete access to Thunder Web, DevOps, DSA, and GenAI courses.
            </p>

            <div className="flex items-baseline gap-3 mb-6 bg-white p-4 rounded-2xl border-2 border-ink">
              <span className="font-heading text-4xl text-emerald-600">
                ₹{plusPrices[selectedDuration].price.toLocaleString('en-IN')}
              </span>
              <span className="font-mono text-sm text-gray-400 line-through">
                ₹{plusPrices[selectedDuration].orig.toLocaleString('en-IN')}
              </span>
              <span className="bg-emerald-100 text-emerald-800 border border-emerald-400 px-2 py-0.5 rounded text-xs font-mono font-bold">
                {plusPrices[selectedDuration].off}
              </span>
            </div>

            <ul className="space-y-3 font-sans text-xs font-semibold text-gray-700 mb-8">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Access to all 5 flagship courses</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Scratch card coupon eligible at checkout</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> CodeArena multiplayer access</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Certificate of completion</li>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <Link
              to="/membership/strike-plus"
              className="btn-brutal w-full bg-yellow text-ink border-3 border-ink py-3.5 rounded-2xl font-heading text-xl tracking-wide shadow-brutal-sm flex items-center justify-center gap-2 hover:bg-yellow-300 cursor-pointer text-center"
            >
              <span>EXPLORE STRIKE PLUS</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Strike Ultra Card */}
        <div className="bg-purple/20 border-4 border-ink rounded-3xl p-6 sm:p-8 shadow-brutal-lg flex flex-col justify-between relative transform rotate-1 hover:rotate-0 transition-transform">
          <div className="absolute -top-4 right-6 bg-pink-500 text-white border-2 border-ink px-3 py-1 rounded-full font-mono text-xs font-bold shadow-brutal-sm flex items-center gap-1">
            <Crown className="w-3.5 h-3.5 text-yellow fill-yellow" /> BEST VALUE
          </div>

          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="bg-purple text-ink border-2 border-ink px-3 py-1 rounded-full font-mono text-xs font-bold">
                STRIKE ULTRA
              </span>
              <span className="font-mono text-xs font-bold text-purple-900 bg-purple-200 px-2.5 py-0.5 rounded-full border border-purple-400">
                LIFETIME PASS
              </span>
            </div>

            <h3 className="font-heading text-3xl sm:text-4xl text-ink uppercase mb-2">
              EXISTING + UPCOMING
            </h3>
            <p className="font-sans text-xs text-gray-700 mb-6">
              All current courses PLUS every future course & update released on Strike.
            </p>

            <div className="flex items-baseline gap-3 mb-2 bg-white p-4 rounded-2xl border-2 border-ink shadow-brutal-sm">
              <span className="font-heading text-4xl text-emerald-600">₹13,499</span>
              <span className="font-mono text-sm text-gray-400 line-through">₹24,999</span>
              <span className="bg-emerald-100 text-emerald-800 border border-emerald-400 px-2 py-0.5 rounded text-xs font-mono font-bold">
                46% OFF
              </span>
            </div>
            <p className="font-mono text-[11px] text-gray-600 font-bold mb-6 text-center">
              ⚡ One-time payment, no renewals ever
            </p>

            <ul className="space-y-3 font-sans text-xs font-semibold text-gray-800 mb-8">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Everything in Strike Plus</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> All future courses & system design masterclasses</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Priority 1-on-1 code reviews & mentorship</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Exclusive Discord VIP role & job referrals</li>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <Link
              to="/membership/strike-ultra"
              className="btn-brutal w-full bg-pink-500 text-white border-3 border-ink py-3.5 rounded-2xl font-heading text-xl tracking-wide shadow-brutal-sm flex items-center justify-center gap-2 hover:bg-pink-600 cursor-pointer text-center"
            >
              <span>EXPLORE STRIKE ULTRA</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
