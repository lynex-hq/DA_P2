'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function AnimatedLogoMark({
  size = 'w-20 h-20',
  loop = true,
  className = '',
}) {
  const svgRef = useRef(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const ctx = gsap.context(() => {
      // Set initial stroke dasharray & offset
      gsap.set('.anim-logo-path', {
        strokeDasharray: '600 600',
        strokeDashoffset: 600,
        opacity: 0,
      });

      const tl = gsap.timeline({
        repeat: loop ? -1 : 0,
        repeatDelay: 0.4,
        defaults: { ease: 'power2.inOut' },
      });

      // 1. Draw outer frame
      tl.to('.anim-path-frame', {
        strokeDashoffset: 0,
        opacity: 1,
        duration: 0.6,
      })
      // 2. Draw D curve
      .to('.anim-path-d', {
        strokeDashoffset: 0,
        opacity: 1,
        duration: 0.65,
      }, '-=0.4')
      // 3. Draw A diagonals
      .to('.anim-path-a', {
        strokeDashoffset: 0,
        opacity: 1,
        duration: 0.65,
      }, '-=0.45')
      // 4. Subtle Gold Pulse
      .to(svgRef.current, {
        scale: 1.05,
        duration: 0.4,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: 1,
      }, '-=0.2');

      if (loop) {
        // Fade out slightly before repeating
        tl.to('.anim-logo-path', {
          opacity: 0,
          strokeDashoffset: -600,
          duration: 0.45,
          ease: 'power2.in',
        }, '+=0.3');
      }
    }, svgRef);

    return () => ctx.revert();
  }, [loop]);

  return (
    <div className={`relative flex items-center justify-center ${size} ${className}`}>
      {/* Ambient Radial Halo */}
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(197, 168, 128, 0.25) 0%, rgba(197, 168, 128, 0.08) 40%, rgba(0, 0, 0, 0) 70%)',
        }}
      />

      <svg
        ref={svgRef}
        viewBox="0 0 205 186"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_4px_20px_rgba(197,168,128,0.45)] will-change-transform"
      >
        <defs>
          <linearGradient id="animLogoGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="30%" stopColor="#F5E6CC" />
            <stop offset="65%" stopColor="#DFC294" />
            <stop offset="85%" stopColor="#C5A880" />
            <stop offset="100%" stopColor="#96784D" />
          </linearGradient>

          <linearGradient id="animLogoFrameGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#96784D" />
            <stop offset="35%" stopColor="#C5A880" />
            <stop offset="70%" stopColor="#DFC294" />
            <stop offset="100%" stopColor="#FFFFFF" />
          </linearGradient>
        </defs>

        {/* 1. Outer Frame */}
        <path
          className="anim-logo-path anim-path-frame"
          d="M 4 180 L 4 4 L 201 4 L 201 180"
          stroke="url(#animLogoFrameGrad)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="miter"
        />

        {/* 2. D shape */}
        <path
          className="anim-logo-path anim-path-d"
          d="M 21 180 L 21 24 L 48 24 C 120 24, 120 180, 48 180 L 21 180"
          stroke="url(#animLogoGoldGrad)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* 3. A shape */}
        <path
          className="anim-logo-path anim-path-a"
          d="M 21 180 L 184 24 L 184 180"
          stroke="url(#animLogoGoldGrad)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
