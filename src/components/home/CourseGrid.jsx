import React from 'react';
import { COURSES } from '../../data/courses';
import { CourseCard } from './CourseCard';

export const CourseGrid = () => {
  const rotations = ['-1deg', '1.2deg', '-1.5deg', '0.8deg', '-0.6deg'];

  return (
    <section id="courses" className="relative py-12 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12 relative">
        <div className="hidden sm:block absolute -top-6 right-10 bg-pink-300 text-ink border-2 border-ink px-3 py-1 rounded shadow-brutal-sm transform rotate-6 font-handwriting text-lg font-bold">
          ⚡ Scratch & Save on Every Course!
        </div>

        <span className="bg-yellow text-ink border-2 border-ink px-3 py-1 rounded-full font-mono text-xs font-bold uppercase tracking-wider shadow-brutal-sm mb-3 inline-block">
          CURATED PATHWAYS
        </span>

        <h2 className="font-heading text-4xl sm:text-6xl tracking-wider text-ink uppercase mb-3">
          WHAT WE <span className="marker-highlight px-3">OFFER</span>
        </h2>
        <p className="font-sans text-base sm:text-lg text-gray-700 max-w-2xl mx-auto font-medium">
          Explore our comprehensive courses designed to elevate your skills from coding foundations to production system engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {COURSES.map((course, idx) => (
          <CourseCard
            key={course.id}
            course={course}
            rotation={rotations[idx % rotations.length]}
          />
        ))}
      </div>
    </section>
  );
};
