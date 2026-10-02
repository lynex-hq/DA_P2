'use client';

export default function BrandLogo({
  variant = 'gold', // 'gold' | 'dark' | 'white'
  size = 'md',      // 'sm' | 'md' | 'lg'
  showText = true,
  className = '',
}) {
  const isDark = variant === 'dark';
  const isWhite = variant === 'white';

  const markSizes = {
    sm: 'w-7 h-7',
    md: 'w-8 h-8 sm:w-9 sm:h-9',
    lg: 'w-12 h-12 sm:w-14 sm:h-14',
  };

  const titleSizes = {
    sm: 'text-xs sm:text-[13px] tracking-[0.24em]',
    md: 'text-sm sm:text-[15px] tracking-[0.26em]',
    lg: 'text-xl sm:text-2xl tracking-[0.3em]',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Precision Vector Monogram Mark */}
      <div className={`relative shrink-0 ${markSizes[size] || markSizes.md}`}>
        <svg
          viewBox="0 0 205 186"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_2px_12px_rgba(197,168,128,0.35)]"
        >
          <defs>
            <linearGradient id={`daLogoGoldGrad-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
              {isDark ? (
                <>
                  <stop offset="0%" stopColor="#181614" />
                  <stop offset="50%" stopColor="#7A624A" />
                  <stop offset="100%" stopColor="#A48A7A" />
                </>
              ) : isWhite ? (
                <>
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="100%" stopColor="#FFFFFF" />
                </>
              ) : (
                <>
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="35%" stopColor="#DFC294" />
                  <stop offset="70%" stopColor="#C5A880" />
                  <stop offset="100%" stopColor="#9C7E54" />
                </>
              )}
            </linearGradient>
          </defs>

          {/* Frame */}
          <path
            d="M 4 180 L 4 4 L 201 4 L 201 180"
            stroke={`url(#daLogoGoldGrad-${variant})`}
            strokeWidth="8"
            strokeLinecap="round"
          />
          {/* D */}
          <path
            d="M 21 180 L 21 24 L 48 24 C 120 24, 120 180, 48 180 L 21 180"
            stroke={`url(#daLogoGoldGrad-${variant})`}
            strokeWidth="8"
            strokeLinecap="round"
          />
          {/* A */}
          <path
            d="M 21 180 L 184 24 L 184 180"
            stroke={`url(#daLogoGoldGrad-${variant})`}
            strokeWidth="8"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Brand Name (Refined, perfectly matched with monogram mark, tagline removed) */}
      {showText && (
        <span
          className={`font-display-lg font-normal uppercase transition-colors leading-none ${
            titleSizes[size] || titleSizes.md
          } ${
            isDark
              ? 'text-[#181614]'
              : isWhite
              ? 'text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.75)]'
              : 'text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.75)]'
          }`}
        >
          DESIGN ARK
        </span>
      )}
    </div>
  );
}
