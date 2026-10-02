import AnimatedLogoMark from '@/components/AnimatedLogoMark';

export default function Loading() {
  return (
    <aside
      aria-label="Loading Page"
      aria-live="polite"
      className="fixed inset-0 z-[99998] flex items-center justify-center bg-black/40 backdrop-blur-md text-[#FAF9F4] select-none pointer-events-none"
    >
      {/* Top Precision Gold Progress Line */}
      <div className="fixed top-0 inset-x-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#DFC294] to-transparent shadow-[0_0_15px_rgba(223,194,148,0.9)] animate-pulse" />

      {/* Center Stage: Floating Frosted Luxury Glass Capsule (High Contrast & Visible) */}
      <div className="flex flex-col items-center justify-center p-6 sm:p-8 rounded-3xl bg-[#141210]/90 backdrop-blur-2xl border border-[#DFC294]/40 shadow-[0_25px_60px_rgba(0,0,0,0.6)] space-y-4 animate-in zoom-in-95 duration-200">
        <AnimatedLogoMark size="w-20 h-20 sm:w-24 sm:h-24" loop={true} />
        
        <div className="text-center space-y-1">
          <h2 className="font-display-lg text-base sm:text-lg uppercase tracking-[0.35em] text-white font-light pl-[0.35em]">
            DESIGN ARK
          </h2>
          <span className="font-technical-label text-[8px] sm:text-[9px] tracking-[0.3em] uppercase text-[#DFC294] block font-medium">
            ATELIER &amp; ARCHITECTURE
          </span>
        </div>
      </div>
    </aside>
  );
}


