type MarkProps = {
  className?: string;
  light?: boolean;
};

export function Mark({ className, light = false }: MarkProps) {
  const accent = light ? "currentColor" : "#0F766E";

  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" fill="none">
      <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16" cy="16" r="5.5" stroke={accent} strokeWidth="1.5" />
      <path
        d="M16 2.25v3M16 26.75v3M2.25 16h3M26.75 16h3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

const CX = 260;
const CY = 260;

const ticks = Array.from({ length: 60 }, (_, index) => {
  const angle = (index / 60) * Math.PI * 2 - Math.PI / 2;
  const major = index % 6 === 0;
  const inner = major ? 188 : 200;
  const outer = 214;
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return {
    x1: CX + cos * inner,
    y1: CY + sin * inner,
    x2: CX + cos * outer,
    y2: CY + sin * outer,
    major,
  };
});

function hexagonPoints(radius: number) {
  return Array.from({ length: 6 }, (_, index) => {
    const angle = (index / 6) * Math.PI * 2 - Math.PI / 2;
    const x = CX + Math.cos(angle) * radius;
    const y = CY + Math.sin(angle) * radius;
    return `${x.toFixed(2)},${y.toFixed(2)}`;
  }).join(" ");
}

const brackets = [
  { x: 152, y: 152, h: 1, v: 1 },
  { x: 368, y: 152, h: -1, v: 1 },
  { x: 152, y: 368, h: 1, v: -1 },
  { x: 368, y: 368, h: -1, v: -1 },
];

type FocusFieldProps = {
  className?: string;
};

export function FocusField({ className }: FocusFieldProps) {
  return (
    <svg viewBox="0 0 520 520" className={className} aria-hidden="true" fill="none">
      <circle cx={CX} cy={CY} r="230" stroke="#E6E4DF" strokeWidth="1" />
      <g strokeLinecap="butt">
        {ticks.map((tick) => (
          <line
            key={`${tick.x1}-${tick.y1}`}
            x1={tick.x1}
            y1={tick.y1}
            x2={tick.x2}
            y2={tick.y2}
            stroke={tick.major ? "#0C1222" : "#5C6570"}
            strokeWidth={tick.major ? 1.6 : 1}
          />
        ))}
      </g>
      <circle cx={CX} cy={CY} r="176" stroke="#0C1222" strokeWidth="1.25" />
      <g stroke="#0C1222" strokeWidth="1.25">
        {brackets.map((bracket) => (
          <path
            key={`${bracket.x}-${bracket.y}`}
            d={`M ${bracket.x + bracket.h * 18} ${bracket.y} H ${bracket.x} V ${bracket.y + bracket.v * 18}`}
          />
        ))}
      </g>
      <circle cx={CX} cy={CY} r="108" stroke="#0F766E" strokeWidth="1.75" />
      <g stroke="#5C6570" strokeWidth="1.15">
        <line x1={CX - 164} y1={CY} x2={CX - 122} y2={CY} />
        <line x1={CX + 122} y1={CY} x2={CX + 164} y2={CY} />
        <line x1={CX} y1={CY - 164} x2={CX} y2={CY - 122} />
        <line x1={CX} y1={CY + 122} x2={CX} y2={CY + 164} />
      </g>
      <polygon points={hexagonPoints(72)} stroke="#0C1222" strokeWidth="1.25" />
    </svg>
  );
}
