import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Crown, Radio, Clock, Award, BookOpen } from 'lucide-react';

export const CourseCard = ({ course, rotation = '0deg' }) => {
  const discountPercent = Math.round(
    ((course.originalPrice - course.price) / course.originalPrice) * 100
  );

  return (
    <div
      className="relative flex flex-col justify-between rounded-[20px] border-4 border-ink shadow-brutal transition-all duration-200 hover:-translate-y-1 hover:shadow-brutal-lg group overflow-hidden"
      style={{
        backgroundColor: course.cardBg || 'var(--card-bg)',
        transform: `rotate(${rotation})`
      }}
    >
      <div className="tape-piece -top-2 -right-2 transform rotate-12"></div>

      <div>
        <div
          className="relative h-44 p-4 flex flex-col justify-between border-b-4 border-ink overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${course.accent} 0%, #ffffff 100%)`
          }}
        >
          <div className="absolute inset-0 opacity-15 bg-grid-paper pointer-events-none"></div>

          <div className="relative z-10 flex items-center justify-between gap-2">
            {course.badge === 'LIVE' && (
              <span className="bg-red-500 text-white border-2 border-ink px-2.5 py-0.5 rounded-full font-mono text-xs font-bold flex items-center gap-1 shadow-brutal-sm animate-pulse">
                <Radio className="w-3.5 h-3.5" /> LIVE
              </span>
            )}
            {course.badge === 'POPULAR' && (
              <span className="bg-yellow text-ink border-2 border-ink px-2.5 py-0.5 rounded-full font-mono text-xs font-bold flex items-center gap-1 shadow-brutal-sm">
                <Crown className="w-3.5 h-3.5 text-amber-600 fill-amber-500" /> POPULAR
              </span>
            )}
            {course.badge === 'NEW' && (
              <span className="bg-pink-500 text-white border-2 border-ink px-2.5 py-0.5 rounded-full font-mono text-xs font-bold shadow-brutal-sm">
                NEW
              </span>
            )}

            <span className="bg-ink text-white px-2.5 py-0.5 rounded-full font-mono text-[10px] font-bold tracking-wide">
              {course.level}
            </span>
          </div>

          <div className="relative z-10 my-auto text-center">
            <span className="font-heading text-4xl sm:text-5xl uppercase tracking-wider text-ink drop-shadow-sm opacity-90 group-hover:scale-105 transition-transform inline-block">
              {course.title.split(':')[0]}
            </span>
          </div>

          <div className="relative z-10 flex items-center justify-between font-mono text-xs text-ink font-bold">
            <span className="bg-white/90 border-2 border-ink px-2 py-0.5 rounded-md flex items-center gap-1">
              <Clock className="w-3 h-3" /> {course.duration}
            </span>
            <span className="bg-white/90 border-2 border-ink px-2 py-0.5 rounded-md flex items-center gap-1">
              <BookOpen className="w-3 h-3" /> {course.modules}
            </span>
          </div>
        </div>

        <div className="p-5">
          <h3 className="font-heading text-2xl uppercase tracking-wide text-ink mb-1 group-hover:text-pink-600 transition-colors">
            {course.title}
          </h3>
          <p className="font-sans text-xs font-bold text-gray-700 mb-3 line-clamp-1">
            {course.subtitle}
          </p>
          <p className="font-sans text-xs text-gray-600 mb-4 line-clamp-2 leading-relaxed">
            {course.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {course.highlights.slice(0, 3).map((h, i) => (
              <span key={i} className="bg-white border border-ink/40 px-2 py-0.5 rounded text-[11px] font-mono text-ink">
                ✓ {h}
              </span>
            ))}
            {course.highlights.length > 3 && (
              <span className="text-[11px] font-mono text-gray-500 font-bold self-center">
                +{course.highlights.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="p-5 pt-0 border-t border-ink/10 flex items-center justify-between gap-2 mt-auto">
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="font-heading text-2xl text-emerald-600">
              ₹{course.price.toLocaleString('en-IN')}
            </span>
            <span className="font-mono text-xs text-gray-400 line-through">
              ₹{course.originalPrice.toLocaleString('en-IN')}
            </span>
          </div>
          <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-100 border border-emerald-300 px-1.5 py-0.2 rounded w-max">
            SAVE {discountPercent}%
          </span>
        </div>

        <Link
          to={`/course/${course.slug}`}
          className="btn-brutal bg-yellow text-ink border-3 border-ink px-4 py-2 rounded-xl font-heading tracking-wide text-sm flex items-center gap-1.5 shadow-brutal-sm hover:bg-yellow-300 cursor-pointer"
        >
          <span>EXPLORE</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
