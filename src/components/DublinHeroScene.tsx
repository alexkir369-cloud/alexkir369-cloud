export function DublinHeroScene() {
  return (
    <svg
      className="hero-scene"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Illustrated Dublin waterfront with an Aera autonomous taxi on the quay"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0.2" y2="1">
          <stop offset="0%" stopColor="#7eb8b2" />
          <stop offset="42%" stopColor="#b7d0cb" />
          <stop offset="72%" stopColor="#d9c4a8" />
          <stop offset="100%" stopColor="#e8ddd0" />
        </linearGradient>
        <linearGradient id="liffey" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1f5c66" />
          <stop offset="55%" stopColor="#0f3d47" />
          <stop offset="100%" stopColor="#0a2c34" />
        </linearGradient>
        <linearGradient id="building" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d7cdc0" />
          <stop offset="100%" stopColor="#9f9283" />
        </linearGradient>
        <linearGradient id="carBody" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f7fbfa" />
          <stop offset="100%" stopColor="#c5d5d2" />
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1fb39e" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#1fb39e" stopOpacity="0" />
        </radialGradient>
        <filter id="softBlur" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="8" />
        </filter>
      </defs>

      <rect width="1440" height="900" fill="url(#sky)" />

      {/* distant hills / Howth suggestion */}
      <path
        d="M0 390 C180 340 320 360 480 330 C640 300 780 280 960 310 C1120 336 1280 300 1440 320 L1440 420 L0 420 Z"
        fill="#8aa39b"
        opacity="0.45"
      />

      {/* mist band */}
      <ellipse cx="720" cy="420" rx="780" ry="70" fill="#f4f7f5" opacity="0.35" filter="url(#softBlur)" />

      {/* Georgian skyline */}
      <g fill="url(#building)">
        <rect x="80" y="250" width="90" height="220" />
        <rect x="180" y="210" width="110" height="260" />
        <rect x="300" y="235" width="80" height="235" />
        <rect x="390" y="190" width="130" height="280" />
        <rect x="980" y="220" width="100" height="250" />
        <rect x="1090" y="195" width="120" height="275" />
        <rect x="1220" y="240" width="90" height="230" />
        <rect x="1320" y="215" width="80" height="255" />
      </g>

      {/* warm windows */}
      <g fill="#f0d9a8" opacity="0.85">
        {Array.from({ length: 8 }).map((_, i) => (
          <rect key={`w1-${i}`} x={95 + (i % 3) * 22} y={270 + Math.floor(i / 3) * 40} width="10" height="16" rx="1" />
        ))}
        {Array.from({ length: 10 }).map((_, i) => (
          <rect key={`w2-${i}`} x={200 + (i % 4) * 22} y={230 + Math.floor(i / 4) * 42} width="10" height="16" rx="1" />
        ))}
        {Array.from({ length: 12 }).map((_, i) => (
          <rect key={`w3-${i}`} x={410 + (i % 4) * 24} y={210 + Math.floor(i / 4) * 40} width="10" height="16" rx="1" />
        ))}
        {Array.from({ length: 9 }).map((_, i) => (
          <rect key={`w4-${i}`} x={1105 + (i % 3) * 24} y={220 + Math.floor(i / 3) * 42} width="10" height="16" rx="1" />
        ))}
      </g>

      {/* Custom House / dome cue */}
      <g transform="translate(620 180)">
        <rect x="20" y="80" width="220" height="160" fill="#b7aea0" />
        <rect x="0" y="120" width="260" height="120" fill="#c8bfb1" />
        <path d="M90 80 L130 20 L170 80 Z" fill="#8f877b" />
        <circle cx="130" cy="48" r="18" fill="#a59c8f" />
        <g fill="#efe0b8" opacity="0.9">
          {Array.from({ length: 14 }).map((_, i) => (
            <rect key={`dome-w-${i}`} x={30 + (i % 7) * 28} y={100 + Math.floor(i / 7) * 45} width="12" height="20" rx="1" />
          ))}
        </g>
      </g>

      {/* Ha'penny-inspired bridge */}
      <g transform="translate(420 390)">
        <path
          d="M40 90 C140 10 300 10 400 90"
          fill="none"
          stroke="#5d6d72"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M55 90 C150 28 290 28 385 90"
          fill="none"
          stroke="#8ea0a4"
          strokeWidth="4"
        />
        {[80, 140, 200, 260, 320].map((x) => (
          <line key={x} x1={x} y1={88} x2={x} y2={40 + Math.abs(200 - x) * 0.12} stroke="#6d7d82" strokeWidth="3" />
        ))}
        <rect x="20" y="88" width="400" height="10" rx="3" fill="#6a787c" />
      </g>

      {/* Quay / road */}
      <path d="M0 520 L1440 500 L1440 900 L0 900 Z" fill="#2a3538" />
      <path d="M0 520 L1440 500 L1440 560 L0 590 Z" fill="#3d4a4e" />
      <path d="M0 590 Q720 540 1440 560 L1440 900 L0 900 Z" fill="url(#liffey)" />

      {/* water shimmer */}
      <g opacity="0.25" stroke="#9fd8cf" strokeWidth="2">
        <path d="M80 680 C200 660 280 700 400 675" fill="none" />
        <path d="M500 720 C640 690 760 740 920 710" fill="none" />
        <path d="M980 760 C1120 730 1240 770 1380 745" fill="none" />
      </g>

      {/* rain streaks */}
      <g stroke="#ffffff" strokeOpacity="0.18" strokeWidth="1.2">
        {Array.from({ length: 28 }).map((_, i) => {
          const x = 40 + i * 50
          const y = 40 + (i % 5) * 30
          return <line key={`rain-${i}`} x1={x} y1={y} x2={x - 12} y2={y + 70} />
        })}
      </g>

      {/* sensor glow under taxi */}
      <ellipse cx="980" cy="545" rx="120" ry="18" fill="url(#glow)" />

      {/* Aera autonomous taxi */}
      <g transform="translate(860 470)">
        <ellipse cx="120" cy="78" rx="110" ry="12" fill="#0a1c20" opacity="0.45" />
        <path
          d="M28 58 C40 28 70 16 120 16 C170 16 200 28 214 58 L230 58 C238 58 242 64 240 72 L20 72 C18 64 22 58 28 58 Z"
          fill="url(#carBody)"
        />
        <path
          d="M55 58 C66 36 90 28 120 28 C150 28 174 36 185 58 Z"
          fill="#0a3d4a"
          opacity="0.88"
        />
        <path
          d="M70 58 C78 42 96 36 120 36 C144 36 162 42 170 58 Z"
          fill="#7ec8c0"
          opacity="0.35"
        />
        <rect x="108" y="20" width="24" height="6" rx="3" fill="#1fb39e" />
        <circle cx="70" cy="72" r="14" fill="#1a2427" />
        <circle cx="70" cy="72" r="7" fill="#6b7a7e" />
        <circle cx="172" cy="72" r="14" fill="#1a2427" />
        <circle cx="172" cy="72" r="7" fill="#6b7a7e" />
        <rect x="34" y="60" width="14" height="5" rx="2" fill="#f6e7b2" />
        <rect x="194" y="60" width="14" height="5" rx="2" fill="#f6e7b2" />
        <text
          x="120"
          y="54"
          textAnchor="middle"
          fill="#f5f8f7"
          fontFamily="Bricolage Grotesque, sans-serif"
          fontSize="13"
          fontWeight="700"
          letterSpacing="1"
        >
          AERA
        </text>
      </g>

      {/* quay lamps */}
      <g fill="#d7cdc0">
        <rect x="250" y="430" width="6" height="90" />
        <circle cx="253" cy="426" r="10" fill="#f0d9a8" />
        <rect x="1180" y="415" width="6" height="90" />
        <circle cx="1183" cy="411" r="10" fill="#f0d9a8" />
      </g>
    </svg>
  )
}
