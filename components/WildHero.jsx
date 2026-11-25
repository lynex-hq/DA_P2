'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HERO_SLIDES = [
  {
    id: 'pavilion-boardroom',
    image: '/images/hero/hero-pavilion-boardroom.jpeg',
    titleLine1: 'Quiet Luxury Spaces,',
    titleLine2: 'Formulated to Endure.',
    tagline: 'The Pavilion Boardroom: monolithic Calacatta marble table, brass detailing, and tropical reflection pool courtyard.',
    ctaText: 'Explore Commissions',
    ctaHref: '/works',
    alt: 'Design Ark bespoke Pavilion Boardroom with gold insignia and tropical pool reflection',
    objectPosition: 'center center',
  },
  {
    id: 'corporate-workspace',
    image: '/images/hero/hero-corporate-workspace.jpeg',
    titleLine1: 'Modern Workspaces,',
    titleLine2: 'Biophilic Precision.',
    tagline: 'EGUARDIAN Corporate Headquarters: expansive open-plan studio calibrated with living snake-plant acoustic dividers.',
    ctaText: 'Discover Disciplines',
    ctaHref: '/services',
    alt: 'EGUARDIAN corporate headquarters fit-out by Design Ark',
    objectPosition: 'center 40%',
  },
  {
    id: 'kirsche-boutique',
    image: '/images/hero/hero-kirsche-boutique.jpeg',
    titleLine1: 'Haute Retail Flagships,',
    titleLine2: 'Atmospheric Architecture.',
    tagline: 'Kirsche commercial retail flagship: illuminated 3D golden facade and bespoke exhibition vitrines.',
    ctaText: 'View Works Archive',
    ctaHref: '/works',
    alt: 'Kirsche retail flagship designed and built by Design Ark',
    objectPosition: 'center center',
  },
  {
    id: 'luxury-penthouse',
    image: '/images/hero/hero-luxury-penthouse.jpeg',
    titleLine1: 'Master Sanctuaries,',
    titleLine2: 'Artisanal Joinery.',
    tagline: 'The Aurelia Master Residence: illuminated gold geometric headboard, backlit marble vanity, and fluted joinery.',
    ctaText: 'Explore Portfolio',
    ctaHref: '/works',
    alt: 'Design Ark Aurelia Master Residence bedroom with illuminated geometric headboard',
    objectPosition: 'center center',
  },
  {
    id: 'executive-cube',
    image: '/images/hero/hero-executive-cube.jpeg',
    titleLine1: 'Executive Enclaves,',
    titleLine2: 'Spatial Serenity.',
    tagline: 'Glass cube executive suites with suspended geometric halo luminaires and acoustic ribbed timber walls.',
    ctaText: 'Discover Disciplines',
    ctaHref: '/services',
    alt: 'Design Ark executive glass cube suites with circular halo lighting',
    objectPosition: 'center 50%',
  },
];

const SLIDE_DURATION = 6500; // 6.5s per auto slide

export default function WildHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const timerRef = useRef(null);

  // Scroll-linked bottom curve progression & center content fade
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, SLIDE_DURATION);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  // Automatic slideshow loop
  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      nextSlide();
    }, SLIDE_DURATION);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [nextSlide]);

  const scrollProgress = Math.min(Math.max(scrollY / 100, 0), 1);
  const cutoutTransform = `translate3d(0, ${(1 - scrollProgress) * 105}%, 0) scale(${0.8 + scrollProgress * 0.2})`;
  const cutoutOpacity = scrollProgress;
  const arrowOpacity = Math.max(1 - scrollY / 50, 0);

  // Smooth graceful fade-out and lift for center headline and buttons as user scrolls down
  const heroContentOpacity = Math.max(1 - scrollY / 280, 0);
  const heroContentTransform = `translate3d(0, ${-Math.min(scrollY * 0.25, 60)}px, 0)`;

  const activeSlide = HERO_SLIDES[currentSlide];

  return (
    <section
      id="hero"
      className="hero-container relative w-full h-screen h-[100dvh] max-h-[100dvh] flex flex-col justify-between bg-[#141210] text-[#FAF9F4] overflow-hidden select-none pt-20 sm:pt-24 md:pt-28 pb-3 sm:pb-5"
    >
      {/* 1. Full-Bleed Auto-Looping Luxury Photography Stack with calibrated focal positioning */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={idx === 0}
                sizes="100vw"
                style={{ objectPosition: slide.objectPosition || 'center center' }}
                className={`object-cover brightness-[0.95] contrast-[1.05] transition-transform duration-[7000ms] ease-out ${
                  isActive ? 'scale-105 opacity-100 animate-ken-burns' : 'scale-100 opacity-0'
                }`}
              />
            </div>
          );
        })}

        {/* Unified Balanced Cinematic Scrim & Atmospheric Vignette */}
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/60 via-black/25 to-[#141210]/90 pointer-events-none" />
        <div className="absolute inset-0 z-20 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.2)_0%,_rgba(0,0,0,0.08)_45%,_rgba(0,0,0,0.5)_100%)] pointer-events-none" />
      </div>

      <style jsx>{`
        @keyframes heroTitleBloom {
          0% {
            opacity: 0;
            filter: blur(16px);
            transform: translateY(28px) scale(0.97);
            letter-spacing: 0.01em;
          }
          45% {
            opacity: 0.75;
            filter: blur(4px);
          }
          100% {
            opacity: 1;
            filter: blur(0px);
            transform: translateY(0px) scale(1);
            letter-spacing: -0.02em;
          }
        }

        @keyframes heroItalicGlow {
          0% {
            opacity: 0;
            filter: blur(18px);
            transform: translateY(24px) scale(0.96);
          }
          40% {
            opacity: 0.7;
            filter: blur(5px);
          }
          100% {
            opacity: 1;
            filter: blur(0px);
            transform: translateY(0px) scale(1);
          }
        }

        @keyframes heroNarrativeFade {
          0% {
            opacity: 0;
            filter: blur(8px);
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            filter: blur(0px);
            transform: translateY(0px);
          }
        }

        @keyframes heroButtonsFloat {
          0% {
            opacity: 0;
            transform: translateY(14px) scale(0.98);
          }
          100% {
            opacity: 1;
            transform: translateY(0px) scale(1);
          }
        }

        .anim-hero-line-1 {
          animation: heroTitleBloom 1.05s cubic-bezier(0.16, 1, 0.3, 1) 0.05s both;
          will-change: transform, opacity, filter, letter-spacing;
        }

        .anim-hero-line-2 {
          animation: heroItalicGlow 1.15s cubic-bezier(0.16, 1, 0.3, 1) 0.18s both;
          will-change: transform, opacity, filter;
        }

        .anim-hero-narrative {
          animation: heroNarrativeFade 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.28s both;
          will-change: transform, opacity, filter;
        }

        .anim-hero-buttons {
          animation: heroButtonsFloat 0.95s cubic-bezier(0.16, 1, 0.3, 1) 0.42s both;
          will-change: transform, opacity;
        }

        @media (max-height: 680px) {
          .anim-hero-narrative {
            font-size: 11px !important;
            margin-top: 0.35rem !important;
            line-height: 1.3 !important;
          }
          .hero-container {
            padding-top: 4.5rem !important;
            padding-bottom: 0.5rem !important;
          }
          .hero-headline-title,
          .hero-headline-italic {
            font-size: clamp(1.85rem, 5.5vh, 3.25rem) !important;
            line-height: 1.02 !important;
          }
          .hero-button-row {
            margin-top: 0.75rem !important;
            gap: 0.5rem !important;
          }
          .hero-button-row a {
            padding: 0.5rem 1.25rem !important;
            font-size: 10px !important;
          }
        }

        @media (max-height: 540px) {
          .hero-container {
            padding-top: 3.5rem !important;
            padding-bottom: 0.35rem !important;
          }
          .hero-headline-title,
          .hero-headline-italic {
            font-size: clamp(1.5rem, 4.8vh, 2.25rem) !important;
            line-height: 1.0 !important;
          }
          .hero-button-row {
            margin-top: 0.5rem !important;
            gap: 0.4rem !important;
          }
          .hero-button-row a {
            padding: 0.4rem 1rem !important;
            font-size: 9px !important;
          }
        }
      `}</style>

      {/* 2. Center Stage Hero Content: Smooth Scroll-Linked Graceful Fade & Lift */}
      <div
        className="relative z-30 my-auto py-2 sm:py-4 px-4 sm:px-8 md:px-12 max-w-5xl mx-auto text-center flex flex-col items-center justify-center w-full transition-opacity duration-150 ease-out will-change-transform"
        style={{
          opacity: heroContentOpacity,
          transform: heroContentTransform,
          pointerEvents: heroContentOpacity <= 0.05 ? 'none' : 'auto',
        }}
      >
        <div
          key={`headline-${currentSlide}`}
          className="space-y-0.5 sm:space-y-1"
        >
          <div>
            <h1 className="anim-hero-line-1 hero-headline-title heading-2--serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#FAF9F4] font-normal leading-[1.02] tracking-tight max-w-5xl">
              {activeSlide.titleLine1}
            </h1>
          </div>
          <div>
            <span className="anim-hero-line-2 hero-headline-italic block font-serif italic font-normal text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#DFC294] leading-[1.02] tracking-tight">
              {activeSlide.titleLine2}
            </span>
          </div>
        </div>

        {/* Supporting Narrative Paragraph (Concise & Poetic) */}
        {activeSlide.tagline && (
          <p
            key={`tagline-${currentSlide}`}
            className="anim-hero-narrative font-light text-xs sm:text-sm md:text-[15px] text-[#FAF9F4]/85 max-w-xl mx-auto leading-relaxed mt-3 sm:mt-4 px-4"
          >
            {activeSlide.tagline}
          </p>
        )}

        {/* Hero Dynamic CTA Buttons - calibrated compact line-spacing & height responsiveness */}
        <div
          key={`cta-${currentSlide}`}
          className="anim-hero-buttons hero-button-row mt-4 sm:mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <Link
            href={activeSlide.ctaHref || '/works'}
            className="group inline-flex items-center justify-center px-6 py-2.5 sm:px-7 sm:py-3 rounded-full bg-[#DFC294] text-[#141210] font-technical-label text-[10px] sm:text-xs tracking-widest uppercase font-semibold transition-all duration-300 hover:bg-white hover:shadow-[0_0_30px_rgba(223,194,148,0.5)] active:scale-95"
          >
            <span>{activeSlide.ctaText || 'Explore Commissions'}</span>
            <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
          </Link>

          <Link
            href="/contact_us"
            className="inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 rounded-full border border-white/30 bg-black/20 backdrop-blur-sm text-white font-technical-label text-[10px] sm:text-xs tracking-widest uppercase font-medium transition-all duration-300 hover:border-white hover:bg-white/10 active:scale-95"
          >
            Request Consultation
          </Link>
        </div>
      </div>

      {/* 3. Bottom Controls: Minimalist Slide Progress Segments & Down Arrow Indicator */}
      <div
        className="relative z-30 pb-6 flex flex-col items-center justify-center space-y-4 transition-opacity duration-300"
        style={{ opacity: arrowOpacity, pointerEvents: arrowOpacity <= 0.1 ? 'none' : 'auto' }}
      >
        {/* Minimalist Luxury Auto-Advancing Progress Bars */}
        <div className="flex items-center justify-center gap-2.5">
          {HERO_SLIDES.map((slide, idx) => {
            const isActive = idx === currentSlide;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => goToSlide(idx)}
                aria-label={`Jump to slide ${idx + 1}: ${slide.titleLine1} ${slide.titleLine2}`}
                className="group py-2 px-1 cursor-pointer transition-all duration-300"
              >
                <div
                  className={`relative h-[2.5px] rounded-full overflow-hidden transition-all duration-500 ${
                    isActive
                      ? 'w-12 sm:w-16 bg-white/30 shadow-[0_0_12px_rgba(223,194,148,0.4)]'
                      : 'w-6 sm:w-8 bg-white/20 hover:bg-white/40'
                  }`}
                >
                  <div
                    className={`h-full bg-[#DFC294] rounded-full transition-all ${
                      isActive ? 'w-full duration-[6500ms] ease-linear' : 'w-0 duration-300'
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Bottom Down Arrow Indicator */}
        <Link
          href="#portrait"
          className="flex flex-col items-center gap-1.5 text-white/75 hover:text-[#DFC294] transition-colors cursor-pointer group"
          aria-label="Scroll to Portrait section"
        >
          <span className="font-technical-label text-[9px] tracking-[0.25em] uppercase text-white/50 group-hover:text-[#DFC294]">
            SCROLL TO EXPLORE
          </span>
          <div className="w-4 h-6 overflow-hidden flex items-center justify-center">
            <svg
              className="w-3.5 h-6 animate-arrow-loop stroke-white/80 group-hover:stroke-[#DFC294] transition-colors"
              viewBox="0 0 10 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 1V28M5 28L9 24M5 28L1 24"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </Link>
      </div>

      {/* 4. Symmetrical Inverted SVG Bottom Corner Cutouts:
          - Flat bottom at scrollY == 0
          - Slides up and scales into view on scroll into #portrait
      */}
      <div
        className="absolute bottom-0 left-0 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 z-30 pointer-events-none origin-bottom-left transition-all duration-150 ease-out will-change-transform"
        style={{
          transform: cutoutTransform,
          opacity: cutoutOpacity,
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 66 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          shapeRendering="geometricPrecision"
        >
          <path d="M1 0C1 35.8985 30.1015 65 66 65V66H0V0H1Z" fill="#FAF9F4" />
        </svg>
      </div>

      <div
        className="absolute bottom-0 right-0 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 z-30 pointer-events-none origin-bottom-right transition-all duration-150 ease-out will-change-transform"
        style={{
          transform: cutoutTransform,
          opacity: cutoutOpacity,
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 66 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          shapeRendering="geometricPrecision"
        >
          <path d="M65 0C65 35.8985 35.8985 65 0 65V66H66V0H65Z" fill="#FAF9F4" />
        </svg>
      </div>
    </section>
  );
}
