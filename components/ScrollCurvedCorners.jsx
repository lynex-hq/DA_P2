'use client';

import { useState, useEffect } from 'react';

/**
 * Reusable scroll-linked inverted bottom corner cutouts (Wild AG signature aesthetic)
 * 100% straight edge at top of page (scrollY = 0), then smoothly morphs into organic
 * curved corner fillets as the user scrolls.
 */
export default function ScrollCurvedCorners({
  fillColor = '#FAF9F4',
  threshold = 100,
  className = '',
}) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const p = Math.min(Math.max(y / threshold, 0), 1);
      setScrollProgress(p);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  // At scrollProgress = 0: Completely straight bottom edge (opacity 0, translated down)
  // On scroll: Smoothly slides up and scales into view to form the curved corners
  const cutoutTransform = `translate3d(0, ${(1 - scrollProgress) * 105}%, 0) scale(${0.8 + scrollProgress * 0.2})`;
  const cutoutOpacity = scrollProgress;

  return (
    <div className={`pointer-events-none select-none ${className}`}>
      {/* Left Inverted Corner Cutout */}
      <div
        className="absolute bottom-0 left-0 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 z-20 pointer-events-none origin-bottom-left transition-all duration-150 ease-out will-change-transform"
        style={{
          transform: cutoutTransform,
          opacity: cutoutOpacity,
        }}
      >
        <svg width="100%" height="100%" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision">
          <path d="M1 0C1 35.8985 30.1015 65 66 65V66H0V0H1Z" fill={fillColor} />
        </svg>
      </div>

      {/* Right Inverted Corner Cutout */}
      <div
        className="absolute bottom-0 right-0 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 z-20 pointer-events-none origin-bottom-right transition-all duration-150 ease-out will-change-transform"
        style={{
          transform: cutoutTransform,
          opacity: cutoutOpacity,
        }}
      >
        <svg width="100%" height="100%" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision">
          <path d="M65 0C65 35.8985 35.8985 65 0 65V66H66V0H65Z" fill={fillColor} />
        </svg>
      </div>
    </div>
  );
}
