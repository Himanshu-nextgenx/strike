import { useEffect, useRef } from 'react';
import { COUPON_CONFIG } from '../config/couponConfig';

export function useScratchCanvas({ onProgress, onRevealThreshold, onPointerStart, disabled }) {
  const canvasRef = useRef(null);
  const isDrawingRef = useRef(false);
  const lastPointRef = useRef(null);
  const lastCheckTimeRef = useRef(0);
  const isRevealedRef = useRef(false);

  const callbacksRef = useRef({ onProgress, onRevealThreshold, onPointerStart });
  useEffect(() => {
    callbacksRef.current = { onProgress, onRevealThreshold, onPointerStart };
  }, [onProgress, onRevealThreshold, onPointerStart]);

  const initFoil = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    const width = canvas.clientWidth || rect.width || COUPON_CONFIG.cardWidth;
    const height = canvas.clientHeight || rect.height || COUPON_CONFIG.cardHeight;

    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const grad = ctx.createLinearGradient(0, 0, width, height);
    grad.addColorStop(0, '#d1d5db');
    grad.addColorStop(0.25, '#9ca3af');
    grad.addColorStop(0.5, '#e5e7eb');
    grad.addColorStop(0.75, '#9ca3af');
    grad.addColorStop(1, '#6b7280');

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
    for (let i = 0; i < 600; i++) {
      const rx = Math.random() * width;
      const ry = Math.random() * height;
      ctx.fillRect(rx, ry, 1.5, 1.5);
    }
    ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
    for (let i = 0; i < 400; i++) {
      const rx = Math.random() * width;
      const ry = Math.random() * height;
      ctx.fillRect(rx, ry, 1.5, 1.5);
    }

    ctx.strokeStyle = '#0a0a0a';
    ctx.lineWidth = 3;
    ctx.strokeRect(1.5, 1.5, width - 3, height - 3);

    ctx.fillStyle = '#111827';
    ctx.font = 'bold 22px Anton, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('✨ SCRATCH & WIN ✨', width / 2, height / 2 - 10);

    ctx.font = '500 13px Caveat, cursive';
    ctx.fillStyle = '#374151';
    ctx.fillText('rub here to reveal your course coupon', width / 2, height / 2 + 18);
  };

  useEffect(() => {
    initFoil();

    const handleResize = () => {
      if (!isRevealedRef.current) {
        initFoil();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const checkClearedProgress = () => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealedRef.current) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    const w = canvas.width;
    const h = canvas.height;

    if (w === 0 || h === 0) return;

    try {
      const imgData = ctx.getImageData(0, 0, w, h);
      const pixels = imgData.data;
      let totalSampled = 0;
      let clearedSampled = 0;

      for (let i = 3; i < pixels.length; i += 8 * 4) {
        totalSampled++;
        if (pixels[i] < 128) {
          clearedSampled++;
        }
      }

      const ratio = totalSampled > 0 ? clearedSampled / totalSampled : 0;
      
      if (callbacksRef.current.onProgress) {
        callbacksRef.current.onProgress(ratio);
      }

      if (ratio >= COUPON_CONFIG.revealThreshold && !isRevealedRef.current) {
        isRevealedRef.current = true;
        if (callbacksRef.current.onRevealThreshold) {
          callbacksRef.current.onRevealThreshold();
        }
      }
    } catch (e) {
      console.warn('Canvas pixel sampling error:', e);
    }
  };

  const getCanvasCoords = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };

    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.clientWidth / rect.width;
    const scaleY = canvas.clientHeight / rect.height;

    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY
    };
  };

  const eraseAtPoint = (start, end) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    ctx.save();
    ctx.globalCompositeOperation = 'destination-out';
    ctx.lineWidth = COUPON_CONFIG.brushSize * 2;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(end.x, end.y, COUPON_CONFIG.brushSize, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  };

  const handlePointerDown = (e) => {
    if (disabled || isRevealedRef.current) return;

    if (callbacksRef.current.onPointerStart) {
      callbacksRef.current.onPointerStart();
    }

    try {
      e.target.setPointerCapture(e.pointerId);
    } catch (err) {
      // Ignore
    }

    isDrawingRef.current = true;
    const coords = getCanvasCoords(e);
    lastPointRef.current = coords;

    eraseAtPoint(coords, coords);
    checkClearedProgress();
  };

  const handlePointerMove = (e) => {
    if (!isDrawingRef.current || disabled || isRevealedRef.current) return;

    const coords = getCanvasCoords(e);
    if (lastPointRef.current) {
      eraseAtPoint(lastPointRef.current, coords);
    }
    lastPointRef.current = coords;

    const now = Date.now();
    if (now - lastCheckTimeRef.current > COUPON_CONFIG.progressCheckMs) {
      lastCheckTimeRef.current = now;
      checkClearedProgress();
    }
  };

  const handlePointerUp = (e) => {
    if (!isDrawingRef.current) return;

    try {
      if (e.target.hasPointerCapture && e.target.hasPointerCapture(e.pointerId)) {
        e.target.releasePointerCapture(e.pointerId);
      }
    } catch (err) {
      // Ignore
    }

    isDrawingRef.current = false;
    lastPointRef.current = null;
    checkClearedProgress();
  };

  const handlePointerCancel = (e) => {
    handlePointerUp(e);
  };

  return {
    canvasRef,
    pointerHandlers: {
      onPointerDown: handlePointerDown,
      onPointerMove: handlePointerMove,
      onPointerUp: handlePointerUp,
      onPointerCancel: handlePointerCancel
    },
    initFoil
  };
}
