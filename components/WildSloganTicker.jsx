'use client';

import Image from 'next/image';
import { images } from '@/lib/images';

export default function WildSloganTicker() {
  return (
    <section className="relative w-full py-20 sm:py-28 overflow-hidden bg-[#181614] text-[#FAF9F4] select-none">
      {/* Background Atmosphere Image Layer */}
      <div className="absolute inset-0 z-0 opacity-20 overflow-hidden">
        <Image
          src={images.mahmoudAzmy}
          alt="Design Ark Architecture"
          fill
          sizes="100vw"
          className="object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#181614] via-transparent to-[#181614]" />
      </div>

      {/* Infinite Looping Ticker Track in English */}
      <div className="relative z-10 flex overflow-hidden whitespace-nowrap">
        <div className="flex animate-ticker shrink-0 items-center">
          <span className="heading-1 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight px-4 text-white/90">
            <span className="italic font-normal text-[#DFC294]">DESIGN ARK</span> in Vision —{' '}
            <span className="italic font-normal text-[#DFC294]">Precise</span> in Execution.
          </span>
          <span className="text-[#A48A7A] text-2xl sm:text-4xl px-8">✦</span>
          <span className="heading-1 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight px-4 text-white/90">
            <span className="italic font-normal text-[#DFC294]">DESIGN ARK</span> in Vision —{' '}
            <span className="italic font-normal text-[#DFC294]">Precise</span> in Execution.
          </span>
          <span className="text-[#A48A7A] text-2xl sm:text-4xl px-8">✦</span>
        </div>
        <div className="flex animate-ticker shrink-0 items-center" aria-hidden="true">
          <span className="heading-1 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight px-4 text-white/90">
            <span className="italic font-normal text-[#DFC294]">DESIGN ARK</span> in Vision —{' '}
            <span className="italic font-normal text-[#DFC294]">Precise</span> in Execution.
          </span>
          <span className="text-[#A48A7A] text-2xl sm:text-4xl px-8">✦</span>
          <span className="heading-1 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight px-4 text-white/90">
            <span className="italic font-normal text-[#DFC294]">DESIGN ARK</span> in Vision —{' '}
            <span className="italic font-normal text-[#DFC294]">Precise</span> in Execution.
          </span>
          <span className="text-[#A48A7A] text-2xl sm:text-4xl px-8">✦</span>
        </div>
      </div>
    </section>
  );
}
