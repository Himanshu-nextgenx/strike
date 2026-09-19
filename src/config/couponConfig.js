export const REWARD_TIERS = [
  { discountType: 'percent', discountValue: 5, label: '5% OFF', weight: 40, codePrefix: 'STRIKE5' },
  { discountType: 'percent', discountValue: 10, label: '10% OFF', weight: 30, codePrefix: 'STRIKE10' },
  { discountType: 'percent', discountValue: 15, label: '15% OFF', weight: 15, codePrefix: 'STRIKE15' },
  { discountType: 'percent', discountValue: 20, label: '20% OFF', weight: 10, codePrefix: 'STRIKE20' },
  { discountType: 'percent', discountValue: 25, label: '25% OFF', weight: 4, codePrefix: 'STRIKE25' },
  { discountType: 'flat', discountValue: 500, label: '₹500 OFF', weight: 1, codePrefix: 'STRIKE500' }
];

export const COUPON_CONFIG = {
  cardWidth: 440,
  cardHeight: 190,
  notchRadius: 14,
  revealThreshold: 0.70, // 70% cleared before reveal
  brushSize: 16,
  progressCheckMs: 120,
  revealFadeMs: 250,
  ticketDelayMs: 450,
  expiryHours: 24,
  particleCount: 60,
  particleColors: ['#22c55e', '#4ade80', '#86efac', '#16a34a', '#bbf7d0', '#ffe14d'],
  couponStartColor: '#22c55e',
  couponEndColor: '#15803d'
};
