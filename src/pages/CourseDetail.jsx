import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCourseBySlug } from '../data/courses';
import { getOrCreateCoupon } from '../services/couponService';
import { ScratchCoupon } from '../components/coupon/ScratchCoupon';
import { Instructors } from '../components/home/Instructors';
import { CheckoutModal } from '../components/checkout/CheckoutModal';
import { Footer } from '../components/common/Footer';
import { 
  Check, Clock, BookOpen, ShieldCheck, ChevronDown, ChevronUp, 
  Sparkles, Zap, ArrowRight, Users, Youtube, Instagram, Linkedin, Star
} from 'lucide-react';

export const CourseDetail = () => {
  const { slug } = useParams();
  const course = getCourseBySlug(slug);

  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [openPhases, setOpenPhases] = useState({ 0: true });

  const discountPercent = Math.round(
    ((course.originalPrice - course.price) / course.originalPrice) * 100
  );

  const togglePhase = (idx) => {
    setOpenPhases((prev) => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const handleExpandAll = () => {
    const allOpened = {};
    course.syllabus.forEach((_, idx) => {
      allOpened[idx] = true;
    });
    setOpenPhases(allOpened);
  };

  const handleCollapseAll = () => {
    setOpenPhases({});
  };

  return (
    <div className="min-h-screen bg-grid-paper flex flex-col justify-between">
      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-4">
          <Link
            to="/#courses"
            className="inline-flex items-center gap-1 font-mono text-xs font-bold text-gray-700 hover:text-ink cursor-pointer bg-transparent border-0 p-0"
          >
            ← BACK TO ALL COURSES
          </Link>
        </div>

        <section className="py-8 px-4 sm:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 flex flex-col">
              <div className="mb-3">
                <span className="bg-yellow text-black border-3 border-ink px-3 py-1 rounded-full font-mono text-xs font-bold uppercase shadow-brutal-sm inline-block">
                  ⚡ {course.level}
                </span>
              </div>

              <h1 className="font-heading text-4xl sm:text-6xl text-ink uppercase tracking-wider leading-none mb-3">
                {course.title}
              </h1>

              <p className="font-sans text-base sm:text-xl font-semibold text-gray-700 mb-6 leading-snug">
                {course.subtitle}
              </p>

              <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 font-mono text-xs font-bold">
                <span className="bg-white border-2 border-ink px-3 py-1.5 rounded-xl shadow-brutal-sm flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" /> Validity: {course.validity}
                </span>
                <span className="bg-white border-2 border-ink px-3 py-1.5 rounded-xl shadow-brutal-sm flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-blue-600" /> {course.hours}
                </span>
                <span className="bg-white border-2 border-ink px-3 py-1.5 rounded-xl shadow-brutal-sm flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-purple-600" /> {course.modules}
                </span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="font-heading text-4xl sm:text-5xl text-emerald-600">
                    ₹{course.price.toLocaleString('en-IN')}
                  </span>
                  <span className="font-mono text-lg text-gray-400 line-through">
                    ₹{course.originalPrice.toLocaleString('en-IN')}
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
                  <span>ENROLL NOW — ₹{course.price.toLocaleString('en-IN')}</span>
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>

              <div className="pt-2 border-t-2 border-dashed border-ink/20">
                <ScratchCoupon
                  fetchCoupon={() => getOrCreateCoupon(course.id)}
                  courseId={course.id}
                  width={440}
                  height={190}
                />
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="tape-piece -top-3 -right-2 transform rotate-12"></div>
              <div className="tape-piece -bottom-3 -left-3 transform -rotate-6"></div>

              <div
                className="w-full border-4 border-ink rounded-3xl p-8 shadow-brutal-lg flex flex-col justify-between min-h-[420px] relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${course.accent} 0%, #ffffff 100%)`
                }}
              >
                <div className="absolute inset-0 opacity-15 bg-grid-paper pointer-events-none"></div>

                <div className="flex justify-between items-start z-10">
                  <span className="bg-ink text-yellow border-2 border-ink px-3 py-1 rounded-full font-mono text-xs font-bold uppercase">
                    STRIKE BENTO
                  </span>
                  <span className="bg-white text-ink border-2 border-ink px-3 py-1 rounded-full font-mono text-xs font-bold">
                    {course.duration}
                  </span>
                </div>

                <div className="my-auto text-center z-10">
                  <div className="w-24 h-24 bg-white border-4 border-ink rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-brutal transform -rotate-6">
                    <span className="font-heading text-5xl text-black">⚡</span>
                  </div>
                  <h3 className="font-heading text-4xl sm:text-5xl uppercase tracking-wider text-black">
                    {course.title}
                  </h3>
                  <p className="font-sans text-xs font-bold text-gray-700 mt-2 uppercase tracking-wide">
                    {course.subtitle}
                  </p>
                </div>

                <div className="bg-white/90 border-3 border-ink rounded-2xl p-4 shadow-brutal-sm z-10 flex items-center justify-between text-xs font-mono font-bold text-black">
                  <span>72+ MODULES</span>
                  <span>100% INTERACTIVE</span>
                  <span>CERTIFIED</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 px-4 sm:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <span className="bg-green text-black border-2 border-ink px-3 py-1 rounded-full font-mono text-xs font-bold uppercase tracking-wider shadow-brutal-sm mb-2 inline-block">
              CURRICULUM HIGHLIGHTS
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl text-ink uppercase tracking-wider">
              WHAT YOU WILL <span className="marker-highlight px-3">MASTER</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {course.highlights.map((item, idx) => {
              const bgColors = ['bg-yellow/30', 'bg-purple/30', 'bg-green/30', 'bg-blue/30', 'bg-pink/30', 'bg-orange/30'];
              const rotations = ['-rotate-1', 'rotate-1', '-rotate-2', 'rotate-2'];
              const bg = bgColors[idx % bgColors.length];
              const rot = rotations[idx % rotations.length];

              return (
                <div
                  key={idx}
                  className={`${bg} ${rot} border-3 border-ink rounded-2xl p-5 shadow-brutal flex flex-col justify-between hover:rotate-0 transition-transform`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-white border-2 border-ink rounded-xl flex items-center justify-center text-emerald-700 font-bold shadow-brutal-sm">
                      <Check className="w-5 h-5 stroke-[3]" />
                    </div>
                    <span className="font-mono text-[10px] font-bold text-gray-500 uppercase">
                      MODULE 0{idx + 1}
                    </span>
                  </div>
                  <h4 className="font-heading text-xl text-ink uppercase leading-snug">
                    {item}
                  </h4>
                </div>
              );
            })}
          </div>
        </section>

        <section className="py-12 px-4 sm:px-8 max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
            <div>
              <span className="bg-purple text-black border-2 border-ink px-3 py-1 rounded-full font-mono text-xs font-bold uppercase shadow-brutal-sm mb-2 inline-block">
                PHASE-BY-PHASE CURRICULUM
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl text-ink uppercase tracking-wider">
                DETAILED <span className="marker-highlight-pink text-white px-3">SYLLABUS</span>
              </h2>
            </div>

            <div className="flex gap-2 font-mono text-xs font-bold">
              <button
                onClick={handleExpandAll}
                className="bg-white text-ink border-2 border-ink px-3 py-1.5 rounded-xl shadow-brutal-sm hover:bg-yellow cursor-pointer"
              >
                Expand All
              </button>
              <button
                onClick={handleCollapseAll}
                className="bg-white text-ink border-2 border-ink px-3 py-1.5 rounded-xl shadow-brutal-sm hover:bg-gray-100 cursor-pointer"
              >
                Collapse All
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {course.syllabus.map((phase, idx) => {
              const isOpen = !!openPhases[idx];
              return (
                <div
                  key={idx}
                  className="bg-white border-3 border-ink rounded-2xl shadow-brutal overflow-hidden"
                >
                  <button
                    onClick={() => togglePhase(idx)}
                    className="w-full p-5 flex items-center justify-between gap-4 text-left hover:bg-yellow/10 cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <span className="bg-ink text-yellow font-heading text-xl px-3 py-1 rounded-xl border border-ink">
                        {phase.phaseNumber}
                      </span>
                      <div>
                        <h3 className="font-heading text-2xl text-ink uppercase tracking-wide">
                          {phase.title}
                        </h3>
                        <span className="font-mono text-xs font-bold text-gray-500">
                          {phase.moduleCount}
                        </span>
                      </div>
                    </div>
                    {isOpen ? <ChevronUp className="w-6 h-6 text-ink" /> : <ChevronDown className="w-6 h-6 text-ink" />}
                  </button>

                  {isOpen && (
                    <div className="border-t-2 border-dashed border-ink/20 p-5 bg-paper/50">
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 font-sans text-xs font-semibold text-gray-800">
                        {phase.modules.map((mod, mIdx) => (
                          <li key={mIdx} className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-ink/30 shadow-brutal-sm text-ink">
                            <span className="text-pink-500 font-bold">•</span>
                            <span>{mod}</span>
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
            <span className="bg-ink text-white border-2 border-ink px-3 py-1 rounded-full font-mono text-xs font-bold uppercase tracking-wider mb-4 inline-block">
              LIMITED TIME OFFER
            </span>

            <h2 className="font-heading text-4xl sm:text-6xl text-black uppercase tracking-wider mb-4">
              READY TO START YOUR JOURNEY?
            </h2>

            <p className="font-sans text-base sm:text-xl font-bold text-gray-900 max-w-2xl mx-auto mb-8">
              Join thousands of students already learning with us. Transform your career today.
            </p>

            <button
              onClick={() => setCheckoutOpen(true)}
              className="btn-brutal bg-ink text-yellow border-4 border-ink px-10 py-4 rounded-2xl font-heading text-2xl tracking-wider shadow-brutal inline-flex items-center gap-3 hover:bg-gray-900 cursor-pointer"
            >
              <Sparkles className="w-6 h-6 text-yellow" />
              <span>ENROLL NOW — ₹{course.price.toLocaleString('en-IN')}</span>
            </button>
          </div>
        </section>
      </div>

      <Footer />

      <CheckoutModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        course={course}
      />
    </div>
  );
};
