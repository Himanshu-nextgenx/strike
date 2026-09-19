import React, { createContext, useContext, useState } from 'react';

const SessionCouponContext = createContext();

export const SessionCouponProvider = ({ children }) => {
  const [sessionCoupons, setSessionCoupons] = useState({});

  const saveSessionCoupon = (courseId, couponData) => {
    setSessionCoupons((prev) => ({
      ...prev,
      [courseId]: couponData
    }));
  };

  return (
    <SessionCouponContext.Provider value={{ sessionCoupons, saveSessionCoupon }}>
      {children}
    </SessionCouponContext.Provider>
  );
};

export const useSessionCoupon = () => {
  const context = useContext(SessionCouponContext);
  if (!context) {
    throw new Error('useSessionCoupon must be used within a SessionCouponProvider');
  }
  return context;
};
