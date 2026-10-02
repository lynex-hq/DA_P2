'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { gsap } from 'gsap';
import BrandLogo from '@/components/BrandLogo';

const MENU_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About Us', href: '/about_us' },
  { label: 'Disciplines', href: '/services' },
  { label: 'Contact', href: '/contact_us' },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [burgerHovered, setBurgerHovered] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const menuOverlayRef = useRef(null);
  const menuDividerRef = useRef(null);
  const linksContainerRef = useRef(null);
  const socialsRef = useRef(null);

  const isSubpage = pathname !== '/' && pathname !== '/home';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GSAP Choreographed Menu Opening Animation
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-opened');
      document.body.style.overflow = 'hidden';
      if (typeof window !== 'undefined' && window.__lenis) {
        window.__lenis.stop();
      }

      const ctx = gsap.context(() => {
        // Initial setup
        gsap.set(menuOverlayRef.current, {
          clipPath: 'inset(0% 0% 100% 0%)',
          opacity: 1,
        });

        if (menuDividerRef.current) {
          gsap.set(menuDividerRef.current, { width: '0%', opacity: 0 });
        }

        const linkItems = linksContainerRef.current?.querySelectorAll('.menu-link-text');
        if (linkItems) {
          gsap.set(linkItems, { yPercent: 110, opacity: 0 });
        }

        if (socialsRef.current) {
          gsap.set(socialsRef.current, { opacity: 0, y: 15 });
        }

        // Opening Timeline
        const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });

        // 1. Unfurl dark overlay from top
        tl.to(menuOverlayRef.current, {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 0.65,
          ease: 'power4.inOut',
        })
        // 2. Expand divider line smoothly
        .to(
          menuDividerRef.current,
          {
            width: '100%',
            opacity: 1,
            duration: 0.6,
            ease: 'power3.out',
          },
          '-=0.3'
        );

        // 3. Staggered reveal of large serif menu links from mask
        if (linkItems) {
          tl.to(
            linkItems,
            {
              yPercent: 0,
              opacity: 1,
              stagger: 0.07,
              duration: 0.65,
              ease: 'power3.out',
            },
            '-=0.4'
          );
        }

        // 4. Reveal socials footer
        if (socialsRef.current) {
          tl.to(
            socialsRef.current,
            {
              opacity: 1,
              y: 0,
              duration: 0.45,
              ease: 'power2.out',
            },
            '-=0.3'
          );
        }
      });

      return () => {
        ctx.revert();
        document.body.style.overflow = '';
        if (typeof window !== 'undefined' && window.__lenis) {
          window.__lenis.start();
        }
      };
    } else {
      document.body.classList.remove('menu-opened');
      document.body.style.overflow = '';
      if (typeof window !== 'undefined' && window.__lenis) {
        window.__lenis.start();
      }
    }
  }, [menuOpen]);

  const handleCloseMenu = (targetHref) => {
    if (!menuOverlayRef.current) {
      setMenuOpen(false);
      document.body.style.overflow = '';
      if (typeof window !== 'undefined' && window.__lenis) {
        window.__lenis.start();
      }
      if (targetHref) router.push(targetHref);
      return;
    }

    const linkItems = linksContainerRef.current?.querySelectorAll('.menu-link-text');

    const closeTl = gsap.timeline({
      onComplete: () => {
        setMenuOpen(false);
        document.body.classList.remove('menu-opened');
        document.body.style.overflow = '';
        if (typeof window !== 'undefined' && window.__lenis) {
          window.__lenis.start();
        }

        if (targetHref) {
          if (targetHref.startsWith('#')) {
            const el = document.querySelector(targetHref);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          } else {
            router.push(targetHref);
          }
        }
      },
    });

    closeTl
      .to(linkItems, {
        yPercent: -100,
        opacity: 0,
        stagger: 0.03,
        duration: 0.3,
        ease: 'power2.in',
      })
      .to(
        menuOverlayRef.current,
        {
          clipPath: 'inset(0% 0% 100% 0%)',
          duration: 0.45,
          ease: 'power3.inOut',
        },
        '-=0.15'
      );
  };

  const isDarkBar = scrolled || isSubpage;

  return (
    <>
      {/* Permanent Unified Site Header with Layered Backgrounds for Zero-Glitch Scroll Transitions */}
      <header
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ease-out px-4 sm:px-12 md:px-16 flex items-center justify-between select-none ${
          isDarkBar
            ? 'py-3.5 sm:py-4 text-[#181614]'
            : 'py-5 sm:py-6 md:py-8 text-white'
        }`}
      >
        {/* Layer 1: Top Gradient Vignette (Active when at top of page) */}
        <div
          className={`absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/25 to-transparent transition-opacity duration-500 ease-out pointer-events-none ${
            isDarkBar ? 'opacity-0' : 'opacity-100'
          }`}
        />

        {/* Layer 2: Scrolled Luxury Cream Backdrop (Smoothly fades in on scroll) */}
        <div
          className={`absolute inset-0 -z-10 bg-[#FAF9F4]/95 backdrop-blur-md transition-opacity duration-500 ease-out pointer-events-none shadow-[0_4px_30px_rgba(24,22,20,0.06)] ${
            isDarkBar ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Layer 3: Delicate Bottom Hairline Border (FADES OUT 100% when at top - ZERO line glitch!) */}
        <div
          className={`absolute bottom-0 inset-x-0 h-px bg-[#E5DFD7] transition-opacity duration-500 ease-out pointer-events-none ${
            isDarkBar ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Brand Logo */}
        <Link
          href="/"
          onClick={(e) => {
            if (pathname === '/') {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="group relative z-10 cursor-pointer"
          aria-label="Design Ark Home"
        >
          <BrandLogo variant={isDarkBar ? 'dark' : 'gold'} size={isDarkBar ? 'sm' : 'md'} />
        </Link>

        {/* Right Menu Controls: Clean Contact Pill + 3-Bar Burger Button */}
        <div className="flex items-center gap-2 sm:gap-4 relative z-10">
          <Link
            href="/contact_us"
            className={`shrink-0 inline-flex items-center justify-center font-technical-label text-[10px] sm:text-xs tracking-widest uppercase px-3.5 sm:px-6 py-1.5 sm:py-2 rounded-full border transition-all duration-300 font-medium cursor-pointer ${
              isDarkBar
                ? 'border-[#181614] text-[#181614] hover:bg-[#181614] hover:text-white'
                : 'border-white/50 text-white bg-black/25 backdrop-blur-sm hover:bg-white hover:text-[#181614] hover:border-white shadow-[0_2px_12px_rgba(0,0,0,0.3)]'
            }`}
          >
            Contact
          </Link>

          {/* 3-Bar Burger Button with Wild AG Micro-Interaction */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            onMouseEnter={() => setBurgerHovered(true)}
            onMouseLeave={() => setBurgerHovered(false)}
            className="shrink-0 w-10 h-10 flex flex-col items-center justify-center gap-1.5 p-2 cursor-pointer group focus:outline-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
            aria-label="Open Navigation Menu"
          >
            <span
              className={`w-6 h-[2px] rounded-full transition-all duration-300 group-hover:scale-x-110 ${
                isDarkBar ? 'bg-[#A48A7A]' : 'bg-white'
              }`}
            />
            <span
              className={`h-[2px] rounded-full transition-all duration-300 ${
                isDarkBar ? 'bg-[#A48A7A]' : 'bg-white'
              } ${burgerHovered ? 'w-3.5' : 'w-6'}`}
            />
            <span
              className={`w-6 h-[2px] rounded-full transition-all duration-300 group-hover:scale-x-110 ${
                isDarkBar ? 'bg-[#A48A7A]' : 'bg-white'
              }`}
            />
          </button>
        </div>
      </header>

      {/* Full-Screen Animated Drawer Menu with Staggered Clip-Path Reveals */}
      {menuOpen && (
        <div
          ref={menuOverlayRef}
          data-lenis-prevent="true"
          className="fixed inset-0 z-[9999] bg-[#141210] text-[#FAF9F4] flex flex-col justify-between p-5 sm:p-12 md:px-16 md:py-12 select-none overflow-y-auto"
        >
          {/* Menu Header with BrandLogo & Animated Close Button */}
          <div className="flex items-center justify-between pb-6">
            <Link
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleCloseMenu('/');
              }}
              className="group cursor-pointer"
              aria-label="Design Ark Home"
            >
              <BrandLogo variant="gold" size="md" />
            </Link>

            <button
              type="button"
              onClick={() => handleCloseMenu()}
              className="w-11 h-11 rounded-full border border-white/20 hover:border-white flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 cursor-pointer group text-2xl font-light"
              aria-label="Close Menu"
            >
              <span className="transition-transform duration-300 group-hover:rotate-90 block">
                &times;
              </span>
            </button>
          </div>

          {/* Animated Expanding Divider Line */}
          <div className="w-full relative py-1">
            <div
              ref={menuDividerRef}
              className="h-px bg-white/15 w-full origin-left"
            />
          </div>

          {/* Menu Navigation Links with Masked Staggered Slide-In */}
          <nav
            ref={linksContainerRef}
            className="my-auto py-6 sm:py-12 flex flex-col gap-1.5 sm:gap-3 max-w-2xl"
          >
            {MENU_LINKS.map((item, idx) => (
              <div key={idx} className="overflow-hidden py-1">
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleCloseMenu(item.href);
                  }}
                  className="menu-link-text block heading-2--serif text-3xl sm:text-5xl md:text-6xl lg:text-[72px] font-normal text-white/85 hover:text-[#DFC294] transition-colors duration-300 group"
                >
                  <div className="flex items-center justify-between cursor-pointer">
                    <span className="transition-transform duration-300 ease-out sm:group-hover:translate-x-4">
                      {item.label}
                    </span>
                    <span className="opacity-75 sm:opacity-0 translate-x-0 sm:-translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-2xl sm:text-4xl text-[#DFC294]">
                      &rarr;
                    </span>
                  </div>
                </a>
              </div>
            ))}
          </nav>

          {/* Menu Footer with Social Vector Marks & Studio Copyright */}
          <div
            ref={socialsRef}
            className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 border-t border-white/10 pt-4 sm:pt-6 font-technical-label text-[10px] sm:text-xs text-white/50 tracking-widest uppercase"
          >
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4">
              {/* LinkedIn Icon Mark */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/20 hover:border-[#DFC294] text-white/70 hover:text-[#DFC294] hover:bg-white/5 flex items-center justify-center transition-all duration-300 group cursor-pointer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.95 0-1.72.78-1.72 1.73s.77 1.73 1.72 1.73 1.73-.78 1.73-1.73-.78-1.73-1.73-1.73Z"/>
                </svg>
              </a>

              {/* Instagram Icon Mark */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/20 hover:border-[#DFC294] text-white/70 hover:text-[#DFC294] hover:bg-white/5 flex items-center justify-center transition-all duration-300 group cursor-pointer"
                aria-label="Instagram"
                title="Instagram"
              >
                <svg className="w-4 h-4 fill-current transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </a>

              {/* WhatsApp Icon Mark */}
              <a
                href="https://wa.me/94112345678"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/20 hover:border-[#DFC294] text-white/70 hover:text-[#DFC294] hover:bg-white/5 flex items-center justify-center transition-all duration-300 group cursor-pointer"
                aria-label="WhatsApp"
                title="WhatsApp"
              >
                <svg className="w-4 h-4 fill-current transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>

              {/* Email Icon Pill with text */}
              <a
                href="mailto:inquiry@designark.com"
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/20 hover:border-[#DFC294] text-white/70 hover:text-[#DFC294] hover:bg-white/5 transition-all duration-300 group cursor-pointer"
                title="inquiry@designark.com"
              >
                <svg className="w-3.5 h-3.5 fill-none stroke-current transition-transform duration-300 group-hover:scale-110" strokeWidth="1.75" viewBox="0 0 24 24">
                  <rect x="3" y="5" width="18" height="14" rx="2"/>
                  <polyline points="3 7 12 13 21 7"/>
                </svg>
                <span className="font-technical-label text-[9px] sm:text-[10px] tracking-widest uppercase">
                  inquiry@designark.com
                </span>
              </a>
            </div>
            <span className="text-center text-[9px] sm:text-[10px] text-white/40 tracking-wider">&copy; {new Date().getFullYear()} DESIGN ARK (PVT) LTD &bull; ALL RIGHTS RESERVED</span>
          </div>

        </div>
      )}
    </>
  );
}
