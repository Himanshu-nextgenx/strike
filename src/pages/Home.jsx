import React, { useState } from 'react';
import { FakeEditor } from '../components/home/FakeEditor';
import { MarqueeStrip } from '../components/common/MarqueeStrip';
import { CourseGrid } from '../components/home/CourseGrid';
import { Instructors } from '../components/home/Instructors';
import { Memberships } from '../components/home/Memberships';
import { Footer } from '../components/common/Footer';
import { CheckoutModal } from '../components/checkout/CheckoutModal';
import { getCourseById } from '../data/courses';
import { Sparkles, Users, Youtube, Instagram, Linkedin, ArrowRight } from 'lucide-react';

export const Home = () => {
  const [selectedCourseForModal, setSelectedCourseForModal] = useState(null);

  const handleOpenGetStarted = () => {
    setSelectedCourseForModal(getCourseById('thunder-web'));
  };

  return (
    <div className="min-h-screen bg-grid-paper flex flex-col justify-between">
      <div>
        <section className="relative pt-12 pb-16 px-4 sm:px-8 max-w-7xl mx-auto">
          <div className="hidden lg:block absolute top-10 left-10 bg-yellow text-black border-3 border-ink px-4 py-2 rounded-2xl shadow-brutal transform -rotate-12 font-handwriting text-xl font-bold">
            ⚡ 100 Days of Code!
          </div>
          <div className="hidden lg:block absolute top-16 right-12 bg-pink-400 text-white border-3 border-ink px-4 py-2 rounded-2xl shadow-brutal transform rotate-12 font-handwriting text-xl font-bold">
            🔥 Industry Ready!
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-yellow border-3 border-ink px-4 py-1.5 rounded-full shadow-brutal-sm font-mono text-xs sm:text-sm font-bold uppercase tracking-wider mb-6 text-black">
              <Sparkles className="w-4 h-4 text-black" />
              <span>THE ULTIMATE TECH ACADEMY — 2026 EDITION</span>
            </div>

            <h1 className="font-heading text-5xl sm:text-7xl lg:text-8xl tracking-wider text-ink uppercase leading-none mb-6">
              TAKE CONTROL OF YOUR <br />
              <span className="text-transparent border-text stroke-ink text-stroke-2 hover:text-yellow transition-colors">
                FUTURE
              </span>{' '}
              WITH <span className="marker-highlight px-4">STRIKE</span>
            </h1>

            <p className="font-sans text-lg sm:text-2xl text-gray-800 font-semibold max-w-2xl mx-auto mb-8 leading-relaxed">
              Master DSA, System Design & AI with interactive coding environments, production capstones, and live scratch discounts.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <button
                onClick={handleOpenGetStarted}
                className="btn-brutal bg-yellow text-black border-4 border-ink px-8 py-4 rounded-2xl font-heading text-2xl tracking-wider shadow-brutal flex items-center gap-3 hover:bg-yellow-300 cursor-pointer"
              >
                <span>JOIN US NOW</span>
                <ArrowRight className="w-6 h-6" />
              </button>

              <a
                href="#courses"
                className="btn-brutal bg-white text-ink border-4 border-ink px-8 py-4 rounded-2xl font-heading text-2xl tracking-wider shadow-brutal hover:bg-gray-100 cursor-pointer"
              >
                VIEW COURSES
              </a>
            </div>
          </div>

          <FakeEditor />
        </section>

        <MarqueeStrip />
        <CourseGrid />
        <Instructors />
        <Memberships />

        <section className="py-12 px-4 sm:px-8 max-w-7xl mx-auto my-8">
          <div className="bg-paper-dark text-white border-4 border-ink rounded-3xl p-8 shadow-brutal-lg grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 border-r-2 border-gray-800 last:border-r-0">
              <div className="w-12 h-12 bg-yellow text-black border-2 border-white rounded-2xl flex items-center justify-center mx-auto mb-3 font-heading text-2xl shadow-brutal-sm">
                <Users className="w-6 h-6" />
              </div>
              <div className="font-heading text-4xl text-yellow">30K+</div>
              <div className="font-mono text-xs text-gray-300 mt-1">ACTIVE USERS</div>
            </div>

            <div className="p-4 border-r-2 border-gray-800 last:border-r-0">
              <div className="w-12 h-12 bg-red-500 text-white border-2 border-white rounded-2xl flex items-center justify-center mx-auto mb-3 font-heading text-2xl shadow-brutal-sm">
                <Youtube className="w-6 h-6" />
              </div>
              <div className="font-heading text-4xl text-yellow">253K+</div>
              <div className="font-mono text-xs text-gray-300 mt-1">YOUTUBE SUBSCRIBERS</div>
            </div>

            <div className="p-4 border-r-2 border-gray-800 last:border-r-0">
              <div className="w-12 h-12 bg-pink-500 text-white border-2 border-white rounded-2xl flex items-center justify-center mx-auto mb-3 font-heading text-2xl shadow-brutal-sm">
                <Instagram className="w-6 h-6" />
              </div>
              <div className="font-heading text-4xl text-yellow">22K+</div>
              <div className="font-mono text-xs text-gray-300 mt-1">INSTAGRAM FOLLOWERS</div>
            </div>

            <div className="p-4">
              <div className="w-12 h-12 bg-blue text-black border-2 border-white rounded-2xl flex items-center justify-center mx-auto mb-3 font-heading text-2xl shadow-brutal-sm">
                <Linkedin className="w-6 h-6" />
              </div>
              <div className="font-heading text-4xl text-yellow">170K+</div>
              <div className="font-mono text-xs text-gray-300 mt-1">LINKEDIN FOLLOWERS</div>
            </div>
          </div>
        </section>
      </div>

      <Footer />

      <CheckoutModal
        isOpen={!!selectedCourseForModal}
        onClose={() => setSelectedCourseForModal(null)}
        course={selectedCourseForModal}
      />
    </div>
  );
};
