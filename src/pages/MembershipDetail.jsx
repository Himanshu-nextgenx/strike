import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getMembershipBySlug } from '../data/memberships';
import { getOrCreateCoupon } from '../services/couponService';
import { ScratchCoupon } from '../components/coupon/ScratchCoupon';
import { Instructors } from '../components/home/Instructors';
import { CheckoutModal } from '../components/checkout/CheckoutModal';
import { Footer } from '../components/common/Footer';
import { 
  Check, Clock, BookOpen, ShieldCheck, ChevronDown, ChevronUp, 
  Sparkles, Zap, ArrowRight, Crown
} from 'lucide-react';

export const MembershipDetail = () => {
  const { slug } = useParams();
  const membership = getMembershipBySlug(slug);

  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [openPhases, setOpenPhases] = useState({ 0: true });

  const discountPercent = Math.round(
    ((membership.originalPrice - membership.price) / membership.originalPrice) * 100
  );

  const togglePhase = (idx) => {
    setOpenPhases((prev) => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const checkoutProxyObj = {
    id: membership.id,
    title: membership.title,
    subtitle: membership.subtitle,
    price: membership.price,
    originalPrice: membership.originalPrice,
    duration: membership.duration,
    validity: membership.validity,
    accent: membership.accent
  };

  return (
    <div className="min-h-screen bg-grid-paper flex flex-col justify-between">
      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-4">
          <Link
            to="/#courses"
            className="inline-flex items-center gap-1 font-mono text-xs font-bold text-gray-700 hover:text-ink cursor-pointer bg-transparent border-0 p-0"
          >
            ← BACK TO HOME & COURSES
          </Link>
        </div>

        <section className="py-8 px-4 sm:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 flex flex-col">
              <div className="mb-3 flex items-center gap-2">
                <span className="bg-purple text-black border-3 border-ink px-3 py-1 rounded-full font-mono text-xs font-bold uppercase shadow-brutal-sm inline-block">
                  👑 {membership.level}
                </span>
                <span className="bg-yellow text-black border-2 border-ink px-2.5 py-0.5 rounded-full font-mono text-xs font-bold">
                  {membership.badge}
                </span>
              </div>

              <h1 className="font-heading text-4xl sm:text-6xl text-ink uppercase tracking-wider leading-none mb-3">
                {membership.title}
              </h1>

              <p className="font-sans text-base sm:text-xl font-semibold text-gray-700 mb-6 leading-snug">
                {membership.subtitle}
              </p>

              <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 font-mono text-xs font-bold">
                <span className="bg-white border-2 border-ink px-3 py-1.5 rounded-xl shadow-brutal-sm flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" /> Validity: {membership.validity}
                </span>
                <span className="bg-white border-2 border-ink px-3 py-1.5 rounded-xl shadow-brutal-sm flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-blue-600" /> {membership.hours}
                </span>
                <span className="bg-white border-2 border-ink px-3 py-1.5 rounded-xl shadow-brutal-sm flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-purple-600" /> {membership.modules}
                </span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="font-heading text-4xl sm:text-5xl text-emerald-600">
                    ₹{membership.price.toLocaleString('en-IN')}
                  </span>
                  <span className="font-mono text-lg text-gray-400 line-through">
                    ₹{membership.originalPrice.toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="relative transform rotate-6">
                  <div className="w-16 h-16 bg-pink-500 text-white border-3 border-ink rounded-full flex flex-col items-center justify-center font-heading shadow-brutal-sm">
                    <span className="text-xl leading-none">{discountPercent}%</span>
                    <span className="text-[9px] font-mono font-bold tracking-tight">OFF</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <button
                  onClick={() => setCheckoutOpen(true)}
                  className="btn-brutal w-full sm:w-auto bg-yellow text-black border-4 border-ink px-10 py-4 rounded-2xl font-heading text-2xl tracking-wider shadow-brutal flex items-center justify-center gap-3 hover:bg-yellow-300 cursor-pointer"
                >
                  <Sparkles className="w-6 h-6 text-black" />
                  <span>GET PASS NOW — ₹{membership.price.toLocaleString('en-IN')}</span>
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>

              <div className="pt-2 border-t-2 border-dashed border-ink/20">
                <ScratchCoupon
                  fetchCoupon={() => getOrCreateCoupon(membership.id)}
                  courseId={membership.id}
                  width={440}
                  height={190}
                />
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="tape-piece -top-3 -right-2 transform rotate-12"></div>
              <div className="tape-piece -bottom-3 -left-3 transform -rotate-6"></div>

              <div
                className="w-full border-4 border-ink rounded-3xl p-8 shadow-brutal-lg flex flex-col justify-between min-h-[440px] relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${membership.accent} 0%, #ffffff 100%)`
                }}
              >
                <div className="absolute inset-0 opacity-15 bg-grid-paper pointer-events-none"></div>

                <div className="flex justify-between items-start z-10">
                  <span className="bg-ink text-yellow border-2 border-ink px-3 py-1 rounded-full font-mono text-xs font-bold uppercase">
                    ALL ACCESS PASS
                  </span>
                  <span className="bg-white text-ink border-2 border-ink px-3 py-1 rounded-full font-mono text-xs font-bold">
                    {membership.duration}
                  </span>
                </div>

                <div className="my-auto text-center z-10">
                  <div className="w-24 h-24 bg-white border-4 border-ink rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-brutal transform rotate-6">
                    <Crown className="w-12 h-12 text-black fill-yellow" />
                  </div>
                  <h3 className="font-heading text-4xl sm:text-5xl uppercase tracking-wider text-black">
                    {membership.title}
                  </h3>
                  <p className="font-sans text-xs font-bold text-gray-700 mt-2 uppercase tracking-wide">
                    {membership.subtitle}
                  </p>
                </div>

                <div className="bg-white/90 border-3 border-ink rounded-2xl p-4 shadow-brutal-sm z-10 flex items-center justify-between text-xs font-mono font-bold text-black">
                  <span>UNLIMITED ACCESS</span>
                  <span>NO RENEWALS</span>
                  <span>VIP SUPPORT</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 px-4 sm:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <span className="bg-yellow text-black border-2 border-ink px-3 py-1 rounded-full font-mono text-xs font-bold uppercase tracking-wider shadow-brutal-sm mb-2 inline-block">
              INCLUDED COURSES
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl text-ink uppercase tracking-wider">
              COURSES YOU <span className="marker-highlight px-3">UNLOCK</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {membership.includedCourses.map((cName, i) => (
              <div key={i} className="bg-white border-3 border-ink rounded-2xl p-5 shadow-brutal flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow border-2 border-ink rounded-xl flex items-center justify-center font-heading text-xl text-black shrink-0">
                  ⚡
                </div>
                <div>
                  <h4 className="font-heading text-lg text-ink uppercase leading-snug">{cName}</h4>
                  <span className="font-mono text-[10px] text-emerald-700 font-bold">✓ Full Lifetime Access</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 px-4 sm:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <span className="bg-green text-black border-2 border-ink px-3 py-1 rounded-full font-mono text-xs font-bold uppercase tracking-wider shadow-brutal-sm mb-2 inline-block">
              MEMBERSHIP ADVANTAGES
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl text-ink uppercase tracking-wider">
              WHY CHOOSE <span className="marker-highlight-pink text-white px-3">{membership.title}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {membership.highlights.map((item, idx) => (
              <div key={idx} className="bg-purple/20 border-3 border-ink rounded-2xl p-6 shadow-brutal flex flex-col justify-between">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-white border-2 border-ink rounded-xl flex items-center justify-center text-emerald-700 font-bold shadow-brutal-sm">
                    <Check className="w-6 h-6 stroke-[3]" />
                  </div>
                  <span className="font-mono text-xs font-bold text-purple-900 uppercase">FEATURE 0{idx + 1}</span>
                </div>
                <h4 className="font-heading text-xl text-ink uppercase leading-snug">{item}</h4>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 px-4 sm:px-8 max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <span className="bg-blue text-black border-2 border-ink px-3 py-1 rounded-full font-mono text-xs font-bold uppercase shadow-brutal-sm mb-2 inline-block">
              PLAN BREAKDOWN
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl text-ink uppercase tracking-wider">
              DETAILED PLAN <span className="marker-highlight px-3">STRUCTURE</span>
            </h2>
          </div>

          <div className="space-y-4">
            {membership.features.map((feat, idx) => {
              const isOpen = !!openPhases[idx];
              return (
                <div key={idx} className="bg-white border-3 border-ink rounded-2xl shadow-brutal overflow-hidden">
                  <button
                    onClick={() => togglePhase(idx)}
                    className="w-full p-5 flex items-center justify-between gap-4 text-left hover:bg-yellow/10 cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <span className="bg-ink text-yellow font-heading text-xl px-3 py-1 rounded-xl border border-ink">
                        {feat.phaseNumber}
                      </span>
                      <div>
                        <h3 className="font-heading text-2xl text-ink uppercase tracking-wide">{feat.title}</h3>
                        <span className="font-mono text-xs font-bold text-gray-500">{feat.moduleCount}</span>
                      </div>
                    </div>
                    {isOpen ? <ChevronUp className="w-6 h-6 text-ink" /> : <ChevronDown className="w-6 h-6 text-ink" />}
                  </button>

                  {isOpen && (
                    <div className="border-t-2 border-dashed border-ink/20 p-5 bg-paper/50">
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 font-sans text-xs font-semibold text-gray-800">
                        {feat.modules.map((m, mIdx) => (
                          <li key={mIdx} className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-ink/30 shadow-brutal-sm text-ink">
                            <span className="text-pink-500 font-bold">•</span>
                            <span>{m}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* MEET OUR INSTRUCTORS */}
        <Instructors />

        <section className="py-12 px-4 sm:px-8 max-w-5xl mx-auto my-8">
          <div className="bg-yellow border-4 border-ink rounded-3xl p-8 sm:p-12 shadow-brutal-lg text-center relative overflow-hidden">
            <h2 className="font-heading text-4xl sm:text-6xl text-black uppercase tracking-wider mb-4">
              READY TO UNLOCK UNLIMITED LEARNING?
            </h2>
            <p className="font-sans text-base sm:text-xl font-bold text-gray-900 max-w-2xl mx-auto mb-8">
              Join thousands of engineers accelerating their tech careers with Strike {membership.title}.
            </p>
            <button
              onClick={() => setCheckoutOpen(true)}
              className="btn-brutal bg-ink text-yellow border-4 border-ink px-10 py-4 rounded-2xl font-heading text-2xl tracking-wider shadow-brutal inline-flex items-center gap-3 hover:bg-gray-900 cursor-pointer"
            >
              <Sparkles className="w-6 h-6 text-yellow" />
              <span>GET {membership.title.toUpperCase()} — ₹{membership.price.toLocaleString('en-IN')}</span>
            </button>
          </div>
        </section>
      </div>

      <Footer />

      <CheckoutModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        course={checkoutProxyObj}
      />
    </div>
  );
};
