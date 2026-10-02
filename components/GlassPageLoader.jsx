'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function GlassPageLoader() {
  const pathname = usePathname();
  const [isNavigating, setIsNavigating] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [progress, setProgress] = useState(0);
  const prevPathnameRef = useRef(pathname);

  // When pathname changes (navigation completes), smoothly dismiss the transition curtain
  useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      prevPathnameRef.current = pathname;
      if (isNavigating) {
        setProgress(100);
        const exitTimer = setTimeout(() => {
          setIsExiting(true);
          const finishTimer = setTimeout(() => {
            setIsNavigating(false);
            setIsExiting(false);
            setProgress(0);
          }, 450);
          return () => clearTimeout(finishTimer);
        }, 150);
        return () => clearTimeout(exitTimer);
      }
    }
  }, [pathname, isNavigating]);

  // Intercept internal link clicks to trigger the architectural wipe
  useEffect(() => {
    const handleDocumentClick = (e) => {
      const anchor = e.target.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      const target = anchor.getAttribute('target');

      // Ignore external links, downloads, new tabs, hash-only anchors, or mailto/tel
      if (
        !href ||
        target === '_blank' ||
        href.startsWith('#') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        href.startsWith('http://') ||
        href.startsWith('https://')
      ) {
        return;
      }

      const currentPath = window.location.pathname;
      const targetPath = href.split('?')[0].split('#')[0];

      if (!targetPath || targetPath === currentPath) {
        return;
      }

      // Trigger architectural transition
      setIsExiting(false);
      setIsNavigating(true);
      setProgress(35);

      setTimeout(() => setProgress(75), 180);
    };

    const handlePopState = () => {
      if (window.location.pathname === prevPathnameRef.current) return;
      setIsExiting(false);
      setIsNavigating(true);
      setProgress(50);
    };

    document.addEventListener('click', handleDocumentClick, { capture: true });
    window.addEventListener('popstate', handlePopState);

    return () => {
      document.removeEventListener('click', handleDocumentClick, { capture: true });
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // Safety fallback to prevent any stuck state
  useEffect(() => {
    if (isNavigating) {
      const timer = setTimeout(() => {
        setIsExiting(true);
        setTimeout(() => {
          setIsNavigating(false);
          setIsExiting(false);
          setProgress(0);
        }, 400);
      }, 1800);
      return () => clearTimeout(timer);
    }
  }, [isNavigating]);

  if (!isNavigating) return null;

  return (
    <>
      {/* 1. Top Precision Champagne Gold Laser Progress Beam */}
      <div
        className="fixed top-0 left-0 h-[2.5px] z-[99999] pointer-events-none transition-all duration-300 ease-out"
        style={{
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #C5A880 0%, #DFC294 60%, #FFFFFF 100%)',
          boxShadow: '0 0 16px rgba(223, 194, 148, 0.9), 0 0 6px rgba(255, 255, 255, 0.8)',
          opacity: isExiting ? 0 : 1,
        }}
      />

      {/* 2. Architectural Obsidian Shutter Curtain (Smooth Screen Wipe with Curved Bottom Lip) */}
      <div
        aria-hidden="true"
        className={`fixed inset-x-0 top-0 h-[105vh] z-[99998] bg-[#141210] border-b border-[#DFC294]/35 rounded-b-[2.5rem] shadow-[0_30px_80px_rgba(0,0,0,0.8)] pointer-events-none transition-transform duration-[420ms] ease-[cubic-bezier(0.77,0,0.175,1)] will-change-transform ${
          isExiting ? '-translate-y-full' : 'translate-y-0'
        }`}
        style={{
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9), 0 0 25px rgba(223, 194, 148, 0.15)',
        }}
      >
        {/* Subtle Ambient Radial Gold Glow at the center of the curtain */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#DFC294]/[0.02] to-[#DFC294]/[0.06] pointer-events-none" />

        {/* Bottom Leading Gold Trim */}
        <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#DFC294]/80 to-transparent shadow-[0_0_12px_rgba(223,194,148,0.6)]" />
      </div>
    </>
  );
}



