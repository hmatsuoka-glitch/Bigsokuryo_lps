export default function HeroIllustration({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      role="img"
      aria-label="測量現場のイラスト"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#073018" />
          <stop offset="40%" stopColor="#0a4221" />
          <stop offset="100%" stopColor="#00a040" />
        </linearGradient>
        <linearGradient id="ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#063018" />
          <stop offset="100%" stopColor="#020a05" />
        </linearGradient>
        <linearGradient id="sun" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <pattern
          id="grid"
          x="0"
          y="0"
          width="80"
          height="80"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 80 0 L 0 0 0 80"
            fill="none"
            stroke="#ffffff"
            strokeOpacity="0.06"
            strokeWidth="1"
          />
        </pattern>
      </defs>

      {/* sky */}
      <rect width="1600" height="900" fill="url(#sky)" />
      {/* sun glow */}
      <circle cx="1180" cy="280" r="240" fill="url(#sun)" />
      {/* grid */}
      <rect width="1600" height="900" fill="url(#grid)" />

      {/* distant city silhouette */}
      <g fill="#020a05" opacity="0.8">
        <rect x="60" y="500" width="60" height="220" />
        <rect x="120" y="460" width="80" height="260" />
        <rect x="200" y="520" width="50" height="200" />
        <rect x="250" y="430" width="120" height="290" />
        <rect x="370" y="490" width="60" height="230" />
        <rect x="430" y="450" width="100" height="270" />
        <rect x="530" y="510" width="70" height="210" />
        <rect x="600" y="470" width="90" height="250" />
        <rect x="690" y="520" width="60" height="200" />
        <rect x="750" y="440" width="110" height="280" />
        <rect x="860" y="490" width="80" height="230" />
        <rect x="940" y="460" width="100" height="260" />
        <rect x="1040" y="510" width="60" height="210" />
        <rect x="1100" y="430" width="140" height="290" />
        <rect x="1240" y="490" width="70" height="230" />
        <rect x="1310" y="460" width="100" height="260" />
        <rect x="1410" y="510" width="60" height="210" />
        <rect x="1470" y="470" width="90" height="250" />
      </g>

      {/* tower antennas */}
      <g stroke="#020a05" strokeWidth="3" opacity="0.75">
        <line x1="310" y1="430" x2="310" y2="380" />
        <line x1="480" y1="450" x2="480" y2="400" />
        <line x1="800" y1="440" x2="800" y2="390" />
        <line x1="1170" y1="430" x2="1170" y2="380" />
      </g>

      {/* ground */}
      <path d="M 0 720 L 1600 720 L 1600 900 L 0 900 Z" fill="url(#ground)" />

      {/* surveying lines (geometric measurement marks) */}
      <g stroke="#00a040" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.55">
        <line x1="200" y1="780" x2="1400" y2="780" />
        <line x1="200" y1="780" x2="200" y2="600" />
        <line x1="1400" y1="780" x2="1400" y2="600" />
        <line x1="200" y1="600" x2="1400" y2="600" />
      </g>

      {/* angle arc from tripod */}
      <path
        d="M 700 740 Q 850 620 1000 740"
        fill="none"
        stroke="#00a040"
        strokeWidth="2"
        strokeDasharray="4 4"
        opacity="0.7"
      />

      {/* tripod + total station (centered) */}
      <g transform="translate(800 740)">
        {/* tripod legs */}
        <g stroke="#f6f4ee" strokeWidth="6" strokeLinecap="round">
          <line x1="0" y1="-160" x2="-90" y2="40" />
          <line x1="0" y1="-160" x2="90" y2="40" />
          <line x1="0" y1="-160" x2="0" y2="50" />
        </g>
        {/* tripod head */}
        <rect x="-26" y="-180" width="52" height="22" fill="#1f2937" />
        {/* total station body */}
        <rect x="-30" y="-220" width="60" height="40" fill="#00a040" rx="3" />
        <rect x="-22" y="-228" width="44" height="12" fill="#f6f4ee" rx="2" />
        {/* scope */}
        <rect x="-46" y="-218" width="20" height="14" fill="#1f2937" rx="1" />
        <rect x="26" y="-218" width="20" height="14" fill="#1f2937" rx="1" />
        {/* top accent */}
        <circle cx="0" cy="-232" r="3" fill="#fff" />
      </g>

      {/* simplified surveyor figure (right) */}
      <g transform="translate(1080 720)" fill="#f6f4ee">
        {/* head */}
        <circle cx="0" cy="-120" r="18" />
        {/* helmet brim */}
        <path d="M -22 -126 L 22 -126 L 18 -136 L -18 -136 Z" fill="#00a040" />
        <rect x="-22" y="-128" width="44" height="6" fill="#00a040" />
        {/* body */}
        <path d="M -22 -100 L 22 -100 L 28 -10 L -28 -10 Z" fill="#1f2937" />
        {/* vest stripes */}
        <rect x="-22" y="-72" width="44" height="6" fill="#00a040" />
        <rect x="-22" y="-44" width="44" height="6" fill="#00a040" />
        {/* legs */}
        <rect x="-24" y="-10" width="20" height="80" fill="#1f2937" />
        <rect x="6" y="-10" width="20" height="80" fill="#1f2937" />
        {/* boots */}
        <rect x="-26" y="68" width="22" height="6" fill="#020a05" />
        <rect x="4" y="68" width="22" height="6" fill="#020a05" />
        {/* arm holding clipboard */}
        <rect
          x="20"
          y="-90"
          width="10"
          height="60"
          fill="#1f2937"
          transform="rotate(-15 25 -60)"
        />
        <rect
          x="38"
          y="-50"
          width="22"
          height="30"
          fill="#f6f4ee"
          stroke="#1f2937"
          strokeWidth="1"
        />
      </g>

      {/* faint horizontal layer marks */}
      <g stroke="#00a040" strokeWidth="1" opacity="0.4">
        <line x1="0" y1="720" x2="1600" y2="720" />
      </g>

      {/* label tags (subtle) */}
      <g
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fontSize="14"
        fill="#ffffff"
        opacity="0.55"
      >
        <text x="200" y="595" letterSpacing="2">
          BM-1
        </text>
        <text x="1370" y="595" letterSpacing="2">
          BM-2
        </text>
        <text x="850" y="615" letterSpacing="2">
          ∠ 1.2 mm
        </text>
      </g>
    </svg>
  );
}
