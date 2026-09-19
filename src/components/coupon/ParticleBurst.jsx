import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { COUPON_CONFIG } from '../../config/couponConfig';

/**
 * Bulletproof Canvas Particle Burst system rendered via React Portal on document.body.
 * Uses requestAnimationFrame delay to guarantee canvas element is attached to DOM before physics loop starts.
 */
export const ParticleBurst = ({ active, originRect, onComplete }) => {
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!active || !originRect) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      if (onComplete) onComplete();
      return;
    }

    let animationFrameId;

    // Use requestAnimationFrame to ensure canvas portal is mounted in document.body
    const startTimer = requestAnimationFrame(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width;
      canvas.height = height;

      const originX = originRect.left + originRect.width / 2;
      const originY = originRect.top + originRect.height / 2;

      const colors = COUPON_CONFIG.particleColors || ['#22c55e', '#4ade80', '#86efac', '#16a34a', '#bbf7d0', '#ffe14d'];
      const particleCount = COUPON_CONFIG.particleCount || 75;
      const particles = [];

      for (let i = 0; i < particleCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 5 + Math.random() * 10;
        const shapeType = Math.floor(Math.random() * 4);

        particles.push({
          x: originX,
          y: originY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 4,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: 6 + Math.random() * 10,
          rotation: Math.random() * Math.PI * 2,
          vRot: (Math.random() - 0.5) * 0.3,
          opacity: 1,
          life: 0,
          maxLife: 60 + Math.random() * 40,
          shapeType
        });
      }

      const render = () => {
        ctx.clearRect(0, 0, width, height);
        let aliveCount = 0;

        for (const p of particles) {
          p.life++;
          if (p.life >= p.maxLife) continue;

          aliveCount++;
          p.vx *= 0.97;
          p.vy *= 0.97;
          p.vy += 0.25; // gravity
          p.x += p.vx;
          p.y += p.vy;
          p.rotation += p.vRot;
          p.opacity = Math.max(0, 1 - p.life / p.maxLife);

          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rotation);
          ctx.globalAlpha = p.opacity;
          ctx.fillStyle = p.color;
          ctx.strokeStyle = p.color;

          if (p.shapeType === 0) {
            ctx.beginPath();
            ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
            ctx.fill();
          } else if (p.shapeType === 1) {
            ctx.beginPath();
            const s = p.size;
            ctx.moveTo(0, -s);
            ctx.quadraticCurveTo(0, 0, s, 0);
            ctx.quadraticCurveTo(0, 0, 0, s);
            ctx.quadraticCurveTo(0, 0, -s, 0);
            ctx.quadraticCurveTo(0, 0, 0, -s);
            ctx.fill();
          } else if (p.shapeType === 2) {
            const w = p.size * 1.8;
            const h = p.size * 1.1;
            ctx.fillRect(-w / 2, -h / 2, w, h);
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 1.5;
            ctx.strokeRect(-w / 2 + 1, -h / 2 + 1, w - 2, h - 2);
          } else {
            ctx.font = `bold ${Math.round(p.size * 1.6)}px Space Mono, monospace`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('%', 0, 0);
          }

          ctx.restore();
        }

        if (aliveCount > 0) {
          animationFrameId = requestAnimationFrame(render);
        } else {
          if (onComplete) onComplete();
        }
      };

      animationFrameId = requestAnimationFrame(render);
    });

    return () => {
      cancelAnimationFrame(startTimer);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [active, originRect, onComplete]);

  if (!active || !mounted) return null;

  return ReactDOM.createPortal(
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      style={{ width: '100vw', height: '100vh', top: 0, left: 0 }}
    />,
    document.body
  );
};
