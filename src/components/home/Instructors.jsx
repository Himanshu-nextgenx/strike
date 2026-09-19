import React from 'react';
import { Linkedin, Award, GraduationCap, Briefcase, Sparkles, ExternalLink } from 'lucide-react';

export const Instructors = () => {
  const instructors = [
    {
      name: 'Rohit Negi',
      role: 'Founder & Lead Instructor',
      bio: 'Heartfelt Problem Solver, Instructor, and Visionary Leader. Got Highest Placement in India of 2 Cr +. Post Graduate from IIT Guwahati, GATE-CSE\'20 AIR - 202.',
      linkedin: 'https://www.linkedin.com/in/rohit-negi9/',
      accent: '#ffe14d', // yellow
      image: '/rohit negi.jpeg',
      tags: [
        { label: '🔥 2 Cr+ Package', bg: 'bg-pink-500 text-white' },
        { label: '🎓 IIT Graduate', bg: 'bg-yellow text-black' },
        { label: '⚡ GATE AIR - 202', bg: 'bg-purple text-black' },
        { label: '🚗 Ex-@Uber', bg: 'bg-black text-yellow' }
      ]
    },
    {
      name: 'Aditya Tandon',
      role: 'Co-Founder & Senior Instructor',
      bio: 'Senior Software Engineer passionate about scalable systems and elegant algorithms. Dedicated mentor committed to teaching, learning, and inspiring future developers.',
      linkedin: 'https://www.linkedin.com/in/adityatandon2/',
      accent: '#56b4ff', // blue
      image: '/aditya tandon.jpg',
      tags: [
        { label: '🏛️ IIT Guwahati', bg: 'bg-yellow text-black' },
        { label: '🚖 Ex-Ola', bg: 'bg-green text-black' },
        { label: '💼 Currently @Oxyzo', bg: 'bg-blue text-black' },
        { label: '⚙️ System Architect', bg: 'bg-pink-500 text-white' }
      ]
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto my-12">
      {/* Section Header */}
      <div className="text-center mb-12 relative">
        <div className="tape-piece -top-4 left-1/4 transform -rotate-6 hidden sm:block"></div>

        <span className="bg-pink-500 text-white border-2 border-ink px-3.5 py-1 rounded-full font-mono text-xs font-bold uppercase tracking-wider shadow-brutal-sm mb-3 inline-block">
          WORLD-CLASS MENTORSHIP
        </span>

        <h2 className="font-heading text-4xl sm:text-6xl text-ink uppercase tracking-wider mb-3">
          MEET WITH OUR <span className="marker-highlight px-3">INSTRUCTORS</span>
        </h2>
        <p className="font-sans text-base sm:text-lg text-gray-700 max-w-2xl mx-auto font-medium">
          Learn directly from IIT graduates and industry software leaders with proven track records at Uber, Ola, and Oxyzo.
        </p>
      </div>

      {/* Two Big Instructor Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 max-w-5xl mx-auto">
        {instructors.map((inst, idx) => (
          <div
            key={inst.name}
            className={`bg-white border-4 border-ink rounded-3xl p-6 sm:p-8 shadow-brutal-lg flex flex-col justify-between relative transform ${
              idx === 0 ? '-rotate-1' : 'rotate-1'
            } hover:rotate-0 transition-transform group`}
          >
            {/* Corner Tape Decor */}
            <div className={`tape-piece -top-3 ${idx === 0 ? '-left-2' : '-right-2'} transform ${idx === 0 ? '-rotate-12' : 'rotate-12'}`}></div>

            <div>
              {/* Avatar Header */}
              <div className="flex flex-col items-center text-center mb-6">
                <div className="relative mb-4">
                  {/* Outer Avatar Frame */}
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-ink shadow-brutal bg-yellow flex items-center justify-center overflow-hidden transform transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1 group-hover:shadow-brutal-lg animate-[float_4s_ease-in-out_infinite]">
                    <img
                      src={inst.image}
                      alt={inst.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <h3 className="font-heading text-3xl sm:text-4xl text-ink uppercase tracking-wide mb-1">
                  {inst.name}
                </h3>
                <span className="font-mono text-xs font-bold text-gray-500 uppercase bg-paper border border-ink/30 px-3 py-1 rounded-full">
                  {inst.role}
                </span>
              </div>

              {/* Bio Paragraph */}
              <p className="font-sans text-xs sm:text-sm text-gray-700 leading-relaxed text-center mb-6 font-semibold">
                {inst.bio}
              </p>

              {/* Achievement Sticker Tags */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {inst.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className={`font-mono text-xs font-bold px-2.5 py-1 rounded-xl border-2 border-ink shadow-brutal-sm ${tag.bg}`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>

            {/* LinkedIn Profile CTA Button */}
            <a
              href={inst.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brutal w-full bg-blue text-black border-3 border-ink py-3 rounded-2xl font-mono text-xs font-bold flex items-center justify-center gap-2 shadow-brutal-sm hover:bg-blue-300 cursor-pointer"
            >
              <Linkedin className="w-4 h-4 fill-black text-black" />
              <span>CONNECT ON LINKEDIN</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
