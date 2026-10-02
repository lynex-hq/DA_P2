'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = 'solid', // 'solid' | 'outline' | 'custom'
  className = '',
  target,
  rel,
  ...props
}) {
  const buttonRef = useRef(null);

  useEffect(() => {
    const el = buttonRef.current;
    if (!el || window.innerWidth < 1024) return; // Desktop only

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const xTo = gsap.quickTo(el, 'x', { duration: 0.35, ease: 'power3.out' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.35, ease: 'power3.out' });

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;

      // Magnetic pull within 40px bounding radius
      xTo(distanceX * 0.28);
      yTo(distanceY * 0.28);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const baseClasses =
    variant === 'solid'
      ? 'btn-brass-solid text-xs px-7 py-3.5 tracking-widest uppercase'
      : variant === 'outline'
      ? 'btn-brass-outline text-xs px-7 py-3.5 tracking-widest uppercase'
      : '';

  const combinedClass = `${baseClasses} ${className}`.trim();

  if (href) {
    return (
      <Link
        ref={buttonRef}
        href={href}
        className={combinedClass}
        target={target}
        rel={rel}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      className={combinedClass}
      {...props}
    >
      {children}
    </button>
  );
}
