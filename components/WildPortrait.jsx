'use client';

import Image from 'next/image';
import Link from 'next/link';
import { images } from '@/lib/images';

const VALUES = [
  {
    title: 'Precision',
    desc: 'We design and construct with exacting rigor, structural accuracy, and profound dedication to architectural detail.',
  },
  {
    title: 'Reliability',
    desc: 'As an enduring partner, we stand for strict adherence to delivery schedules, material excellence, and agreed budgets.',
  },
  {
    title: 'Individuality',
    desc: 'We formulate tailor-made, unmistakable spatial concepts calibrated specifically for each unique site and patron.',
  },
  {
    title: 'Sustainability',
    desc: 'We design and build responsibly for generations to come, balancing natural materials, human comfort, and environmental care.',
  },
];

export default function WildPortrait() {
  return (
    <section
      id="portrait"
      className="scroll-mt-28 pt-28 pb-24 sm:py-32 md:py-40 bg-[#FAF9F4] text-[#181614] select-none relative"
    >
      {/* Anchor aliases */}
      <span id="about-us" className="scroll-mt-28 absolute -top-28 left-0 pointer-events-none" />
      <span id="ueber-uns" className="scroll-mt-28 absolute -top-28 left-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 space-y-24 md:space-y-32">
        
        {/* 1. Portrait Header & Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <h2 className="heading-2--serif text-4xl sm:text-6xl md:text-7xl font-normal gradient-color">
              Portrait.
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-6 text-sm sm:text-base md:text-lg text-[#181614]/80 font-light leading-relaxed">
            <p>
              Our focus lies on properties and estates with unrealized architectural potential — particularly where intrinsic value is not visible at first glance. We analyze, appraise, and optimize spaces to systematically elevate both their lived experience and enduring value.
            </p>
            <p>
              Many owners possess prime land or existing residences with untapped possibilities. That is precisely where our atelier steps in: with comprehensive feasibility studies, architectural foresight, and strategic advisory, we chart clear avenues from concept to turnkey execution.
            </p>
            <p className="text-[#A48A7A] font-normal">
              Our initial potential studies, feasibility analyses, and advisory consultations are complimentary and without obligation.
            </p>

            <div className="pt-2">
              <Link
                href="/about_us"
                className="inline-flex items-center gap-3 font-technical-label text-xs tracking-widest uppercase px-6 py-3 rounded-full border border-[#181614] hover:bg-[#181614] hover:text-white transition-all duration-300 group cursor-pointer"
              >
                <span>Explore Studio &amp; Leadership</span>
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>

        {/* 2. Dual Architectural Image Collage */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
          <div className="md:col-span-7 relative h-[340px] sm:h-[460px] rounded-2xl overflow-hidden shadow-lg group bg-[#ECE8DF]">
            <Image
              src={images.workTravertinePavilion}
              alt="Design Ark atelier discussion and architectural study"
              fill
              sizes="(min-width: 768px) 60vw, 100vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
          <div className="md:col-span-5 relative h-[280px] sm:h-[380px] rounded-2xl overflow-hidden shadow-lg group bg-[#ECE8DF]">
            <Image
              src={images.detailCoffeeTable}
              alt="Design Ark tactile craftsmanship and details"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
        </div>

        {/* 3. Values Section with Expanding Animated Dividers */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pt-8">
          <div className="lg:col-span-5">
            <h2 className="heading-2--serif text-4xl sm:text-6xl md:text-7xl font-normal gradient-color">
              Values.
            </h2>
          </div>

          <div className="lg:col-span-7 flex flex-col divide-y divide-[#E5DFD7]">
            {VALUES.map((val, idx) => (
              <div key={idx} className="py-8 first:pt-0 last:pb-0 space-y-2 group">
                <h3 className="heading-2--serif text-2xl sm:text-3xl text-[#181614] group-hover:text-[#A48A7A] transition-colors duration-300">
                  {val.title}
                </h3>
                <p className="text-sm sm:text-base text-[#181614]/75 font-light leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
