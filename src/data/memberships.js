export const MEMBERSHIPS = [
  {
    id: 'strike-plus',
    slug: 'strike-plus',
    title: 'Strike Plus Pass',
    subtitle: 'All Existing Courses + Continuous Updates',
    description: 'Get 100% full access to all 5 existing flagship courses (Thunder Web, DevOps, DSA, GenAI) for up to 4 years with a single one-time payment.',
    duration: '4 Years',
    price: 12499,
    originalPrice: 19999,
    discountLabel: '38% OFF',
    accent: '#ffe14d',
    badge: 'POPULAR',
    level: 'All Access Pass',
    validity: '4 Years Unlimited',
    hours: '500+ Hours',
    modules: '250+ Modules',
    highlights: [
      'Access to All 5 Flagship Courses',
      'Thunder 100 Days of Code Included',
      'DevOps Cloud & Kubernetes Infrastructure',
      'DSA & FAANG Problem Solving Bootcamp',
      'Generative AI & LLM Systems Engineering',
      'Scratch Card Coupon Eligible'
    ],
    includedCourses: [
      'Thunder: 100 Days of Code',
      'DevOps Full Course (Linux + Docker + K8s)',
      'DSA + GenAI Combo',
      'Data Structure & Algorithms Mastery',
      'Generative AI Engineering'
    ],
    features: [
      { phaseNumber: '01', title: 'Complete Course Library Access', moduleCount: '5 Full Courses', modules: ['Thunder 100 Days of Code', 'DevOps Infrastructure', 'DSA Mastery', 'GenAI Engineering'] },
      { phaseNumber: '02', title: 'Interactive Coding Environments', moduleCount: 'Unlimited Practice', modules: ['CodeArena Multiplayer Battle Pass', 'Realtime Browser IDE Labs', 'Automated Test Suite Runner'] },
      { phaseNumber: '03', title: 'Certificates & Peer Community', moduleCount: 'Verified Credential', modules: ['Shareable LinkedIn Certificates', 'Discord Community VIP Access', 'Weekly Live Q&A Sessions'] }
    ]
  },
  {
    id: 'strike-ultra',
    slug: 'strike-ultra',
    title: 'Strike Ultra Pass',
    subtitle: 'Existing + ALL Future Upcoming Courses (Lifetime)',
    description: 'The ultimate lifetime engineering pass. Complete access to every current course PLUS every future course, system design masterclass, and AI module released on Strike.',
    duration: 'Lifetime',
    price: 13499,
    originalPrice: 24999,
    discountLabel: '46% OFF',
    accent: '#c8a2f8',
    badge: 'BEST VALUE',
    level: 'Lifetime VIP Pass',
    validity: 'Lifetime Access',
    hours: '1000+ Hours',
    modules: '500+ Modules',
    highlights: [
      'Everything in Strike Plus Pass',
      'Lifetime Access — One-Time Payment, No Renewals',
      'All Future Courses & System Design Masterclasses',
      'Priority 1-on-1 Code Reviews',
      'Exclusive VIP Mentor Discord Role',
      'Direct FAANG & Top Tech Job Referrals'
    ],
    includedCourses: [
      'Thunder: 100 Days of Code',
      'DevOps Full Course',
      'DSA + GenAI Combo',
      'Data Structure & Algorithms Mastery',
      'Generative AI Engineering',
      'ALL Future 2026-2028 Courses Free'
    ],
    features: [
      { phaseNumber: '01', title: 'Lifetime Unlimited Vault', moduleCount: 'All Present & Future Courses', modules: ['All Current 5 Courses', 'Upcoming Microservices HLD Masterclass', 'Upcoming Autonomous AI Agents Course', 'All 2026-2028 Course Releases'] },
      { phaseNumber: '02', title: '1-on-1 Priority Mentorship', moduleCount: 'Direct Guidance', modules: ['Priority Resume & Portfolio Audit', 'Code Review Requests', 'Mock System Design Interview Sessions'] },
      { phaseNumber: '03', title: 'VIP Career Support Network', moduleCount: 'Job Referrals', modules: ['Direct Hiring Manager Referrals', 'FAANG Referral Network Access', 'VIP Discord Access'] }
    ]
  }
];

export function getMembershipBySlug(slug) {
  return MEMBERSHIPS.find((m) => m.slug === slug) || MEMBERSHIPS[0];
}
