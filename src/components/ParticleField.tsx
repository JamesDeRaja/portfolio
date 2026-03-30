import { useEffect, useRef } from 'react';

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  hue: number;
};

const MAX_DPR = 1.75;
const CONNECTION_DISTANCE = 150;
const CONNECTION_DISTANCE_SQ = CONNECTION_DISTANCE * CONNECTION_DISTANCE;

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let isDisposed = false;
    let isTabVisible = document.visibilityState === 'visible';
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const getDpr = () => Math.min(window.devicePixelRatio || 1, MAX_DPR);

    const resize = () => {
      const dpr = getDpr();
      const width = Math.floor(window.innerWidth);
      const height = Math.floor(window.innerHeight);

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);

      // Reset transform each resize so drawing coordinates stay in CSS pixels.
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const createParticles = () => {
      const count = Math.min(70, Math.floor(window.innerWidth / 24));
      particlesRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.45 + 0.12,
        hue: Math.random() > 0.72 ? 270 : 185,
      }));
    };

    let resizeRaf = 0;
    const handleResize = () => {
      cancelAnimationFrame(resizeRaf);
      resizeRaf = requestAnimationFrame(() => {
        resize();
        createParticles();
      });
    };

    resize();
    createParticles();

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleVisibility = () => {
      isTabVisible = document.visibilityState === 'visible';
      if (isTabVisible && !animationRef.current) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    let previousTime = performance.now();

    const animate = (time: number) => {
      animationRef.current = 0;
      if (isDisposed || !isTabVisible) return;

      const dt = Math.min((time - previousTime) / 16.6667, 1.6);
      previousTime = time;

      const width = window.innerWidth;
      const height = window.innerHeight;

      ctx.clearRect(0, 0, width, height);
      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx * dt;
        p.y += p.vy * dt;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 100%, 70%, ${p.opacity})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < CONNECTION_DISTANCE_SQ) {
            const dist = Math.sqrt(distSq);
            const alpha = 0.055 * (1 - dist / CONNECTION_DISTANCE);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `hsla(185, 100%, 70%, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }

        const mdx = p.x - mouse.x;
        const mdy = p.y - mouse.y;
        const mDistSq = mdx * mdx + mdy * mdy;

        if (mDistSq < 40_000 && mDistSq > 0) {
          const mDist = Math.sqrt(mDistSq);
          const force = ((200 - mDist) / 200) * 0.018;
          p.vx += (mdx / mDist) * force * dt;
          p.vy += (mdy / mDist) * force * dt;
        }

        const damping = reduceMotion ? 0.994 : 0.9985;
        p.vx *= damping;
        p.vy *= damping;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('mousemove', handleMouse, { passive: true });
    document.addEventListener('visibilitychange', handleVisibility);

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      isDisposed = true;
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouse);
      document.removeEventListener('visibilitychange', handleVisibility);
      cancelAnimationFrame(animationRef.current);
      cancelAnimationFrame(resizeRaf);
      animationRef.current = 0;
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 particle-canvas"
      style={{ opacity: 0.55 }}
      aria-hidden="true"
    />
  );
}
