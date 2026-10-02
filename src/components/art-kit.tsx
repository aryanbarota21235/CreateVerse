// Shared building blocks for the SVG illustrations (360 x 200 canvas).
// Motion comes from CSS classes defined under "Decorative illustrations" in globals.css.

import type { LucideIcon } from "lucide-react";

export const BLUE = "#0284C7";
export const ORANGE = "#EA580C";
export const INK = "#0B0F19";
export const SKY = "#E0F2FE";

/* ------------------------------ building blocks ------------------------------ */

export function Chip({
  x,
  y,
  r = 15,
  icon: Icon,
  tone = "blue",
  solid = false,
  float = false,
  delay = 0,
}: {
  x: number;
  y: number;
  r?: number;
  icon: LucideIcon;
  tone?: "blue" | "orange";
  solid?: boolean;
  float?: boolean;
  delay?: number;
}) {
  const color = tone === "blue" ? BLUE : ORANGE;
  const s = r * 1.05;
  return (
    <g transform={`translate(${x} ${y})`}>
      <g className={float ? "float-soft" : undefined} style={float ? { animationDelay: `${delay}s` } : undefined}>
        <circle r={r} cy={2.5} fill={INK} opacity={0.07} />
        <circle
          r={r}
          fill={solid ? color : "#fff"}
          stroke={solid ? "#fff" : color}
          strokeOpacity={solid ? 1 : 0.25}
          strokeWidth={solid ? 3 : 1}
        />
        <Icon x={-s / 2} y={-s / 2} width={s} height={s} color={solid ? "#fff" : color} strokeWidth={1.9} />
      </g>
    </g>
  );
}

export function Ring({ x, y, r, color = BLUE }: { x: number; y: number; r: number; color?: string }) {
  return <circle cx={x} cy={y} r={r} fill={color} opacity={0.3} className="ring-pulse" />;
}

/** A faint track with a light pulse travelling along it. */
export function Track({
  d,
  color,
  dur = 3.2,
  delay = 0,
  dashed = false,
}: {
  d: string;
  color: string;
  dur?: number;
  delay?: number;
  dashed?: boolean;
}) {
  return (
    <>
      <path d={d} stroke={INK} strokeOpacity={0.12} strokeWidth={1.25} strokeDasharray={dashed ? "3 6" : undefined} strokeLinecap="round" />
      <path
        d={d}
        pathLength={1000}
        stroke={color}
        strokeWidth={2.25}
        strokeLinecap="round"
        className="beam-pulse"
        style={{ animationDuration: `${dur}s`, animationDelay: `${delay}s` }}
      />
    </>
  );
}

/** White card with a soft drop shadow. */
export function Card({ x, y, w, h, r = 16 }: { x: number; y: number; w: number; h: number; r?: number }) {
  return (
    <>
      <rect x={x} y={y + 4} width={w} height={h} rx={r} fill={INK} opacity={0.05} />
      <rect x={x} y={y} width={w} height={h} rx={r} fill="#fff" stroke={INK} strokeOpacity={0.08} />
    </>
  );
}

/** Skeleton text line. */
export function Bar({ x, y, w, h = 7, o = 0.09, fill = INK }: { x: number; y: number; w: number; h?: number; o?: number; fill?: string }) {
  return <rect x={x} y={y} width={w} height={h} rx={h / 2} fill={fill} opacity={o} />;
}

/** Tiny person glyph. */
export function Person({ x, y, fill = "#CBD5E1" }: { x: number; y: number; fill?: string }) {
  return (
    <>
      <circle cx={x} cy={y - 7} r={5} fill={fill} />
      <rect x={x - 8} y={y} width={16} height={11} rx={5.5} fill={fill} />
    </>
  );
}

/** Children fade in and out on a loop; stagger with `delay` to make sequences. */
export function Lit({ delay = 0, dur = 3.6, children }: { delay?: number; dur?: number; children: React.ReactNode }) {
  return (
    <g className="seq-pulse" style={{ animationDuration: `${dur}s`, animationDelay: `${delay}s` }}>
      {children}
    </g>
  );
}
