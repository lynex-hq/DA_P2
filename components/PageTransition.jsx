'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';

/**
 * Fades + slides page content in on route change (Section K: animated route
 * transitions). No framer-motion in this stack, so this is a small GSAP
 * timeline keyed off the pathname instead of AnimatePresence/View Transitions.
 * Respects prefers-reduced-motion by skipping straight to the settled state.
 */
export default function PageTransition({ children }) {
  const pathname = usePathname();
  const containerRef = useRef(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const el = containerRef.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set(el, { opacity: 1, y: 0, clearProps: 'all' });
      return;
    }

    gsap.fromTo(
      el,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out', clearProps: 'transform' }
    );
  }, [pathname]);

  return (
    <div ref={containerRef} key={pathname}>
      {children}
    </div>
  );
}
