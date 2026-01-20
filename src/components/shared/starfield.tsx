"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface ShootingStar {
  id: number;
  x: number;
  y: number;
  duration: number;
  angle: number;
  dx: number;
  dy: number;
}

export function Starfield() {
  const containerRef = useRef<HTMLDivElement>(null);
  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);
  const layer3Ref = useRef<HTMLDivElement>(null);
  const nebulaLayerRef = useRef<HTMLDivElement>(null);
  const galaxyLayerRef = useRef<HTMLDivElement>(null);
  const clusterLayerRef = useRef<HTMLDivElement>(null);
  const milkyWayRef = useRef<HTMLDivElement>(null);
  const cosmicDustRef = useRef<HTMLDivElement>(null);
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);

  // Parallax mouse movement - optimized with requestAnimationFrame
  useEffect(() => {
    let rafId: number | null = null;
    let mouseX = 0;
    let mouseY = 0;

    const updateParallax = () => {
      const x = mouseX;
      const y = mouseY;

      // Use translate3d for GPU acceleration
      if (milkyWayRef.current) {
        milkyWayRef.current.style.transform = `translate3d(${x * 2}px, ${y * 2}px, 0)`;
      }
      if (nebulaLayerRef.current) {
        nebulaLayerRef.current.style.transform = `translate3d(${x * 3}px, ${y * 3}px, 0)`;
      }
      if (cosmicDustRef.current) {
        cosmicDustRef.current.style.transform = `translate3d(${x * 3.5}px, ${y * 3.5}px, 0)`;
      }
      if (galaxyLayerRef.current) {
        galaxyLayerRef.current.style.transform = `translate3d(${x * 4}px, ${y * 4}px, 0)`;
      }
      if (layer1Ref.current) {
        layer1Ref.current.style.transform = `translate3d(${x * 6}px, ${y * 6}px, 0)`;
      }
      if (clusterLayerRef.current) {
        clusterLayerRef.current.style.transform = `translate3d(${x * 10}px, ${y * 10}px, 0)`;
      }
      if (layer2Ref.current) {
        layer2Ref.current.style.transform = `translate3d(${x * 20}px, ${y * 20}px, 0)`;
      }
      if (layer3Ref.current) {
        layer3Ref.current.style.transform = `translate3d(${x * 40}px, ${y * 40}px, 0)`;
      }

      rafId = null;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      mouseX = (clientX / innerWidth - 0.5) * 2;
      mouseY = (clientY / innerHeight - 0.5) * 2;

      if (rafId === null) {
        rafId = requestAnimationFrame(updateParallax);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  // Shooting stars spawner
  const spawnShootingStar = useCallback(() => {
    const id = Date.now();
    const x = Math.random() * 100; // 0-100% from left
    const y = Math.random() * 60; // 0-60% from top
    const duration = Math.random() * 0.3 + 0.3; // 0.3-0.6s (faster)
    const angle = Math.random() * 60 - 60; // -60 to 0 degrees (various downward angles)
    const distance = 250;
    const radians = (angle * Math.PI) / 180;
    const dx = Math.cos(radians) * distance;
    const dy = Math.sin(radians) * distance;

    setShootingStars((prev) => [...prev, { id, x, y, duration, angle, dx, dy }]);

    // Remove after animation
    setTimeout(() => {
      setShootingStars((prev) => prev.filter((star) => star.id !== id));
    }, duration * 1000 + 100);
  }, []);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // Spawn shooting stars randomly every 1.5-4 seconds (more frequent for immersion)
    const scheduleNext = () => {
      const delay = Math.random() * 2500 + 1500; // 1.5-4 seconds
      return setTimeout(() => {
        spawnShootingStar();
        timeoutId = scheduleNext();
      }, delay);
    };

    let timeoutId = scheduleNext();

    return () => clearTimeout(timeoutId);
  }, [spawnShootingStar]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden opacity-0 dark:opacity-100"
      style={{ contain: 'layout style paint' }}
    >
      {/* Subtle vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, transparent 60%, rgba(0,0,0,0.2) 100%)',
        }}
      />

      {/* Milky Way band - subtle diagonal stripe of dense stars/glow */}
      <div
        ref={milkyWayRef}
        className="absolute -inset-20 transition-transform duration-700 ease-out"
        style={{ willChange: 'transform' }}
      >
        <div className="milky-way-band absolute inset-0" />
      </div>

      {/* Cosmic dust - faint wispy patches */}
      <div
        ref={cosmicDustRef}
        className="absolute -inset-10 transition-transform duration-600 ease-out"
        style={{ willChange: 'transform' }}
      >
        <div className="cosmic-dust-1 absolute w-[300px] h-[150px]" style={{ top: '20%', left: '15%' }} />
        <div className="cosmic-dust-2 absolute w-[250px] h-[120px]" style={{ top: '60%', right: '20%' }} />
        <div className="cosmic-dust-3 absolute w-[200px] h-[100px]" style={{ top: '40%', left: '55%' }} />
        <div className="cosmic-dust-4 absolute w-[180px] h-[80px]" style={{ top: '75%', left: '30%' }} />
      </div>

      {/* Nebula clouds - with parallax, more visible for immersive deep space */}
      <div
        ref={nebulaLayerRef}
        className="absolute -inset-10 transition-transform duration-500 ease-out"
        style={{ willChange: 'transform' }}
      >
        <div className="nebula-1 absolute -top-20 -right-20 w-[600px] h-[600px] opacity-[0.20] blur-[100px] rounded-full" />
        <div className="nebula-2 absolute -bottom-40 -left-20 w-[500px] h-[500px] opacity-[0.18] blur-[100px] rounded-full" />
        <div className="nebula-3 absolute top-1/3 right-1/4 w-[400px] h-[400px] opacity-[0.15] blur-[90px] rounded-full" />
        {/* Additional nebula for richer space feel */}
        <div className="nebula-4 absolute top-1/2 left-1/3 w-[350px] h-[350px] opacity-[0.12] blur-[80px] rounded-full" />
      </div>

      {/* Distant galaxies - with parallax, varied sizes */}
      <div
        ref={galaxyLayerRef}
        className="absolute -inset-10 transition-transform duration-400 ease-out"
        style={{ willChange: 'transform' }}
      >
        {/* Large spiral galaxy */}
        <div
          className="absolute w-[45px] h-[18px] opacity-[0.22] blur-[2px] rounded-full galaxy-drift"
          style={{
            top: '15%',
            left: '12%',
            background: 'radial-gradient(ellipse, rgba(200,180,255,0.8) 0%, rgba(150,130,200,0.3) 50%, transparent 70%)',
            transform: 'rotate(-25deg)',
          }}
        />
        {/* Tiny distant galaxy */}
        <div
          className="absolute w-[12px] h-[5px] opacity-[0.12] blur-[1px] rounded-full galaxy-drift"
          style={{
            top: '28%',
            right: '22%',
            background: 'radial-gradient(ellipse, rgba(220,210,255,0.7) 0%, rgba(170,160,200,0.3) 50%, transparent 70%)',
            transform: 'rotate(60deg)',
            animationDelay: '-3s',
          }}
        />
        {/* Medium galaxy */}
        <div
          className="absolute w-[28px] h-[11px] opacity-[0.18] blur-[2px] rounded-full galaxy-drift"
          style={{
            top: '65%',
            right: '8%',
            background: 'radial-gradient(ellipse, rgba(180,200,255,0.8) 0%, rgba(130,150,200,0.3) 50%, transparent 70%)',
            transform: 'rotate(15deg)',
            animationDelay: '-5s',
          }}
        />
        {/* Small galaxy */}
        <div
          className="absolute w-[16px] h-[6px] opacity-[0.14] blur-[1px] rounded-full galaxy-drift"
          style={{
            top: '35%',
            left: '75%',
            background: 'radial-gradient(ellipse, rgba(255,200,180,0.7) 0%, rgba(200,150,130,0.3) 50%, transparent 70%)',
            transform: 'rotate(40deg)',
            animationDelay: '-10s',
          }}
        />
        {/* Very tiny galaxy */}
        <div
          className="absolute w-[8px] h-[3px] opacity-[0.10] blur-[0.5px] rounded-full galaxy-drift"
          style={{
            top: '48%',
            left: '25%',
            background: 'radial-gradient(ellipse, rgba(200,200,255,0.6) 0%, rgba(150,150,200,0.2) 50%, transparent 70%)',
            transform: 'rotate(-15deg)',
            animationDelay: '-8s',
          }}
        />
        {/* Medium-large galaxy */}
        <div
          className="absolute w-[35px] h-[14px] opacity-[0.19] blur-[2px] rounded-full galaxy-drift"
          style={{
            top: '80%',
            left: '45%',
            background: 'radial-gradient(ellipse, rgba(180,220,255,0.8) 0%, rgba(130,170,200,0.3) 50%, transparent 70%)',
            transform: 'rotate(-10deg)',
            animationDelay: '-15s',
          }}
        />
        {/* Tiny faint galaxy */}
        <div
          className="absolute w-[10px] h-[4px] opacity-[0.08] blur-[0.5px] rounded-full galaxy-drift"
          style={{
            top: '12%',
            right: '35%',
            background: 'radial-gradient(ellipse, rgba(190,180,220,0.5) 0%, rgba(140,130,170,0.2) 50%, transparent 70%)',
            transform: 'rotate(75deg)',
            animationDelay: '-20s',
          }}
        />
      </div>

      {/* Far stars - smallest, slowest movement */}
      <div
        ref={layer1Ref}
        className="absolute -inset-10 transition-transform duration-300 ease-out stars-far"
      />
      {/* Mid stars - medium size, medium movement */}
      <div
        ref={layer2Ref}
        className="absolute -inset-10 transition-transform duration-200 ease-out stars-mid"
      />
      {/* Near stars - largest, fastest movement */}
      <div
        ref={layer3Ref}
        className="absolute -inset-10 transition-transform duration-150 ease-out stars-near"
      />

      {/* Star clusters - with parallax, dense pockets like Pleiades */}
      <div
        ref={clusterLayerRef}
        className="absolute -inset-10 transition-transform duration-250 ease-out"
        style={{ willChange: 'transform' }}
      >
        <div
          className="star-cluster-1 w-[70px] h-[70px]"
          style={{ top: '18%', left: '6%' }}
        />
        <div
          className="star-cluster-2 w-[120px] h-[120px]"
          style={{ top: '55%', right: '12%', animationDelay: '-3s' }}
        />
        <div
          className="star-cluster-3 w-[50px] h-[50px]"
          style={{ top: '35%', left: '60%', animationDelay: '-5s' }}
        />
      </div>

      {/* Shooting stars */}
      {shootingStars.map((star) => (
        <div
          key={star.id}
          className="shooting-star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            animationDuration: `${star.duration}s`,
            "--angle": `${star.angle}deg`,
            "--dx": `${star.dx}px`,
            "--dy": `${star.dy}px`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
