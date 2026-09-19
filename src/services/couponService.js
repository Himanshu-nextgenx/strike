/**
 * COUPON SERVICE LAYER
 * 
 * NOTE FOR PRODUCTION:
 * In a real production deployment, this entire module must be executed on a secure backend server.
 * Coupon codes and secret discount mappings should NEVER be exposed in client bundles or evaluated client-side.
 * The get-or-create logic must be keyed securely by authenticated user ID and course ID on the server database.
 */

import { REWARD_TIERS, COUPON_CONFIG } from '../config/couponConfig';

const STORAGE_KEY = 'strike_coupons';

function getStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (err) {
    console.error('Error reading coupon storage:', err);
    return {};
  }
}

function setStorage(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (err) {
    console.error('Error writing coupon storage:', err);
  }
}

function selectWeightedReward() {
  const totalWeight = REWARD_TIERS.reduce((acc, item) => acc + item.weight, 0);
  let random = Math.random() * totalWeight;

  for (const tier of REWARD_TIERS) {
    if (random < tier.weight) {
      return tier;
    }
    random -= tier.weight;
  }
  return REWARD_TIERS[0];
}

function generateCouponCode(prefix) {
  const randomSuffix = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `${prefix}-${randomSuffix}`;
}

export async function getOrCreateCoupon(courseId) {
  await new Promise((resolve) => setTimeout(resolve, 80));

  const storage = getStorage();

  if (storage[courseId]) {
    const existing = storage[courseId];
    return {
      code: existing.code,
      label: existing.label,
      discountType: existing.discountType,
      discountValue: existing.discountValue,
      expiresText: existing.expiresText
    };
  }

  const reward = selectWeightedReward();
  const code = generateCouponCode(reward.codePrefix);
  const now = Date.now();
  const expiresAt = now + COUPON_CONFIG.expiryHours * 60 * 60 * 1000;

  const newCoupon = {
    courseId,
    code,
    label: reward.label,
    discountType: reward.discountType,
    discountValue: reward.discountValue,
    expiresText: `Valid ${COUPON_CONFIG.expiryHours}h`,
    createdAt: now,
    expiresAt,
    used: false
  };

  storage[courseId] = newCoupon;
  setStorage(storage);

  return {
    code: newCoupon.code,
    label: newCoupon.label,
    discountType: newCoupon.discountType,
    discountValue: newCoupon.discountValue,
    expiresText: newCoupon.expiresText
  };
}

export async function validateCoupon(code, courseId) {
  await new Promise((resolve) => setTimeout(resolve, 100));

  const cleanCode = (code || '').trim().toUpperCase();
  if (!cleanCode) {
    return { valid: false, error: 'Please enter a coupon code.' };
  }

  const storage = getStorage();
  let matched = null;

  for (const cid in storage) {
    if (storage[cid].code === cleanCode) {
      matched = storage[cid];
      break;
    }
  }

  if (!matched) {
    return { valid: false, error: 'Invalid coupon code.' };
  }

  if (matched.courseId !== courseId) {
    return { valid: false, error: 'This coupon is for a different course.' };
  }

  if (matched.used) {
    return { valid: false, error: 'This coupon has already been used.' };
  }

  if (Date.now() > matched.expiresAt) {
    return { valid: false, error: 'This coupon has expired.' };
  }

  return {
    valid: true,
    coupon: {
      code: matched.code,
      label: matched.label,
      discountType: matched.discountType,
      discountValue: matched.discountValue
    }
  };
}

export async function markCouponUsed(code) {
  await new Promise((resolve) => setTimeout(resolve, 50));
  const storage = getStorage();

  for (const cid in storage) {
    if (storage[cid].code === code) {
      storage[cid].used = true;
      break;
    }
  }

  setStorage(storage);
}
