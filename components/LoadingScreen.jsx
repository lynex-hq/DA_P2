'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { usePathname } from 'next/navigation';

let hasInitialLoaded = false;

export default function LoadingScreen() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [shouldRender, setShouldRender] = useState(!hasInitialLoaded && isHome);
  const [isExiting, setIsExiting] = useState(false);
  const exitStartedRef = useRef(false);

  const triggerExit = useCallback(() => {
    if (exitStartedRef.current) return;
    exitStartedRef.current = true;
    hasInitialLoaded = true;

    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
    if (typeof window !== 'undefined' && window.__lenis) {
      window.__lenis.start();
    }

    setIsExiting(true);
    setTimeout(() => {
      setShouldRender(false);
    }, 500);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Clean up any legacy sessionStorage key so it never blocks the splash screen
    try {
      sessionStorage.removeItem('design_ark_splash_viewed');
    } catch (_) {}

    // Only display on root homepage and only on initial page load / refresh
    if (!isHome || hasInitialLoaded) {
      setShouldRender(false);
      if (typeof document !== 'undefined') {
        document.body.style.overflow = '';
      }
      return;
    }

    setShouldRender(true);
    document.body.style.overflow = 'hidden';
    if (window.__lenis) {
      window.__lenis.stop();
    }
    exitStartedRef.current = false;

    // Allow skipping via Escape or Space
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
        triggerExit();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    // Balanced auto-exit after 1080ms (luxurious without being slow)
    const autoExitTimer = setTimeout(() => {
      triggerExit();
    }, 1080);

    return () => {
      clearTimeout(autoExitTimer);
      window.removeEventListener('keydown', handleKeyDown);
      if (typeof document !== 'undefined') {
        document.body.style.overflow = '';
      }
      if (typeof window !== 'undefined' && window.__lenis) {
        window.__lenis.start();
      }
    };
  }, [isHome, triggerExit]);

  if (!shouldRender) return null;

  return (
    <div
      id="design-ark-welcome-screen"
      onClick={triggerExit}
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#0E0D0B] text-[#FAF9F4] p-8 select-none overflow-hidden cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] will-change-transform ${
        isExiting ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
      }`}
      aria-label="Welcome to Design Ark (Click to enter)"
      title="Click to enter"
    >
      <style jsx>{`
        @keyframes strokeDrawFrame {
          0% {
            stroke-dashoffset: 700;
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
        }
        @keyframes strokeDrawD {
          0% {
            stroke-dashoffset: 700;
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
        }
        @keyframes strokeDrawA {
          0% {
            stroke-dashoffset: 700;
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
        }
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(12px);
            filter: blur(4px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        .anim-frame {
          stroke-dasharray: 700;
          stroke-dashoffset: 700;
          animation: strokeDrawFrame 0.68s cubic-bezier(0.65, 0, 0.35, 1) 0.04s forwards;
        }

        .anim-d {
          stroke-dasharray: 700;
          stroke-dashoffset: 700;
          animation: strokeDrawD 0.68s cubic-bezier(0.65, 0, 0.35, 1) 0.15s forwards;
        }

        .anim-a {
          stroke-dasharray: 700;
          stroke-dashoffset: 700;
          animation: strokeDrawA 0.68s cubic-bezier(0.65, 0, 0.35, 1) 0.26s forwards;
        }

        .loader-brand-title {
          animation: fadeInUp 0.42s ease-out 0.22s both;
        }

        .loader-brand-sub {
          animation: fadeInUp 0.42s ease-out 0.34s both;
        }
      `}</style>

      {/* Center Stage: Architectural Monogram & Brand Typography */}
      <div className="flex flex-col items-center justify-center space-y-7 text-center pointer-events-none">
        {/* SVG Vector Monogram Mark with Native GPU Stroke Animation */}
        <div className="relative w-32 h-32 sm:w-36 sm:h-36 flex items-center justify-center">
          <svg
            viewBox="0 0 205 186"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full drop-shadow-[0_4px_25px_rgba(223,194,148,0.4)]"
          >
            <defs>
              <linearGradient id="welcomeGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="35%" stopColor="#DFC294" />
                <stop offset="70%" stopColor="#C5A880" />
                <stop offset="100%" stopColor="#9C7E54" />
              </linearGradient>
            </defs>

            {/* 1. Outer Architectural Boundary Frame */}
            <path
              className="anim-frame"
              d="M 4 180 L 4 4 L 201 4 L 201 180"
              stroke="url(#welcomeGoldGrad)"
              strokeWidth="5.5"
              strokeLinecap="round"
            />
            {/* 2. D Letterform */}
            <path
              className="anim-d"
              d="M 21 180 L 21 24 L 48 24 C 120 24, 120 180, 48 180 L 21 180"
              stroke="url(#welcomeGoldGrad)"
              strokeWidth="5.5"
              strokeLinecap="round"
            />
            {/* 3. A Letterform */}
            <path
              className="anim-a"
              d="M 21 180 L 184 24 L 184 180"
              stroke="url(#welcomeGoldGrad)"
              strokeWidth="5.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Brand Name & Tagline */}
        <div className="flex flex-col items-center space-y-2">
          <h1 className="loader-brand-title font-display-lg text-2xl sm:text-3xl uppercase font-light text-white tracking-[0.35em] pl-[0.35em]">
            DESIGN ARK
          </h1>
          <span className="loader-brand-sub font-technical-label text-[9px] sm:text-[10px] tracking-[0.35em] uppercase text-[#DFC294]">
            ATELIER &amp; ARCHITECTURE
          </span>
        </div>
      </div>

      {/* Bottom Golden Luminous Curtain Edge Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#DFC294] to-transparent shadow-[0_0_20px_rgba(223,194,148,0.8)] pointer-events-none" />
    </div>
  );
}
