'use client';

const PROCESS_STEPS = [
  { id: 'analyse', num: '1', title: 'Analysis & Feasibility' },
  { id: 'projektierung', num: '2', title: 'Planning & Design' },
  { id: 'realisierung', num: '3', title: 'Turnkey Realisation' },
];

export default function WildProcess({ onOpenPopup }) {
  return (
    <section
      id="process"
      className="scroll-mt-28 py-24 sm:py-36 md:py-44 bg-[#141210] text-[#FAF9F4] select-none relative"
    >
      {/* Anchor alias */}
      <span id="prozesse" className="scroll-mt-28 absolute -top-28 left-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 space-y-20">
        
        {/* Section Header & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <h2 className="heading-2--serif text-4xl sm:text-6xl md:text-7xl font-normal text-white">
              Process.
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-6 text-sm sm:text-base md:text-lg text-white/80 font-light leading-relaxed">
            <p>
              A clearly structured process is the cornerstone of every enduring architectural achievement. From the initial spark of an idea to final key handover, we work according to disciplined, proven milestones: transparent, verifiable, and strictly anchored in quality, deadlines, and cost control.
            </p>
            <p>
              Our structured methodology provides maximum planning certainty and aesthetic fidelity across commissions of every scale and complexity.
            </p>
          </div>
        </div>

        {/* 3 Balanced Numbered Process Pills with Identical Height & Fluid Baseline */}
        <div className="flex flex-col lg:flex-row items-stretch gap-4 sm:gap-6">
          {PROCESS_STEPS.map((step) => (
            <button
              key={step.id}
              type="button"
              onClick={() => onOpenPopup && onOpenPopup(step.id)}
              className="group relative flex-1 w-full flex items-center justify-between px-5 sm:px-8 py-4 sm:py-5 min-h-[68px] sm:min-h-[82px] rounded-full border border-white/20 hover:border-white bg-white/5 hover:bg-white text-white hover:text-[#181614] transition-all duration-300 backdrop-blur-md shadow-lg cursor-pointer"
            >
              <div className="flex items-center gap-3 sm:gap-4 min-w-0 pr-2">
                <span className="w-8 h-8 rounded-full bg-white group-hover:bg-[#181614] text-[#181614] group-hover:text-white font-technical-label text-xs font-bold flex items-center justify-center transition-colors duration-300 shrink-0">
                  {step.num}
                </span>
                <span className="heading-2--serif text-base sm:text-xl lg:text-lg xl:text-2xl font-normal tracking-wide leading-snug">
                  {step.title}
                </span>
              </div>

              {/* Animated Arrow Icon */}
              <div className="w-6 flex items-center justify-end text-white/60 group-hover:text-[#181614] transition-colors duration-300 shrink-0 pl-2">
                <svg
                  width="16"
                  height="12"
                  viewBox="0 0 15 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current"
                >
                  <path
                    d="M1 5L14 5"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-300 origin-right group-hover:scale-x-125"
                  />
                  <path
                    d="M10 1L14 5L10 9"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
