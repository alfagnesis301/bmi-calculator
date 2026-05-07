type LogoProps = {
  className?: string;
  showWordmark?: boolean;
  showTagline?: boolean;
  label?: string;
};

export function Logo({
  className,
  showWordmark = true,
  showTagline = false,
  label = "BMI Checks"
}: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`} aria-label={label}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        className="h-9 w-9 shrink-0"
        role="img"
        aria-hidden={showWordmark ? "true" : "false"}
      >
        <defs>
          <linearGradient id="logo-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
        </defs>
        <rect width="200" height="200" rx="44" fill="url(#logo-bg)" />
        <g stroke="#ffffff" strokeWidth="4" strokeLinecap="round">
          <line x1="34" y1="74" x2="50" y2="74" />
          <line x1="34" y1="94" x2="46" y2="94" />
          <line x1="34" y1="114" x2="50" y2="114" />
          <line x1="34" y1="134" x2="46" y2="134" />
          <line x1="34" y1="154" x2="50" y2="154" />
        </g>
        <g fill="#ffffff">
          <circle cx="105" cy="58" r="13" />
          <path d="M55 100 C 65 80 85 78 105 90 C 125 78 145 80 155 100 C 152 106 146 107 142 103 C 132 95 122 96 116 104 L 116 152 C 116 161 112 166 105 166 C 98 166 94 161 94 152 L 94 104 C 88 96 78 95 68 103 C 64 107 58 106 55 100 Z" />
        </g>
        <circle cx="135" cy="140" r="24" fill="#ffffff" />
        <path
          d="M124 140 L132 149 L147 131"
          stroke="#5b2bd9"
          strokeWidth="5.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      {showWordmark ? (
        <span className="flex flex-col leading-none">
          <span className="text-lg font-black tracking-tight">
            <span className="text-ink">BMI </span>
            <span className="bg-gradient-to-r from-[#7c3aed] to-[#2563eb] bg-clip-text text-transparent">
              Checks
            </span>
          </span>
          {showTagline ? (
            <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              Check your body mass index
            </span>
          ) : null}
        </span>
      ) : null}
    </span>
  );
}
