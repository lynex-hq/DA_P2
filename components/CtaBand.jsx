'use client';

import MagneticButton from '@/components/MagneticButton';

export default function CtaBand() {
  return (
    <section className="py-24 sm:py-32 bg-[#141210] text-white text-center">
      <div className="max-w-2xl mx-auto px-margin-mobile space-y-6">
        <h2 className="font-display-lg text-3xl sm:text-5xl font-light leading-tight">
          Have a Project in Mind?
        </h2>
        <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed max-w-lg mx-auto">
          Tell us about your space and timeline — we&apos;ll get back to you within one
          business day with next steps.
        </p>
        <div className="pt-2">
          <MagneticButton href="/contact_us" variant="solid" className="rounded-full px-8 py-3.5 text-xs tracking-[0.2em]">
            START A PROJECT
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
