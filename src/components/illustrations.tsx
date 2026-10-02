// Decorative brand illustrations. Pure SVG + CSS animation, safe in server components.

import {
  BarChart3,
  Filter,
  Globe,
  IndianRupee,
  Laptop,
  Megaphone,
  MessageCircle,
  PhoneCall,
  Play,
  Search,
  TrendingUp,
} from "lucide-react";

const BLUE = "#0284C7";
const ORANGE = "#EA580C";

type IconType = React.ComponentType<{ className?: string; strokeWidth?: number }>;

/** A faint track with a light pulse travelling along it. */
function Beam({ d, color, dur, delay }: { d: string; color: string; dur: number; delay: number }) {
  return (
    <>
      <path d={d} stroke="#0B0F19" strokeOpacity={0.09} strokeWidth={1.25} />
      <path
        d={d}
        pathLength={1000}
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        className="beam-pulse"
        style={{ animationDuration: `${dur}s`, animationDelay: `${delay}s` }}
      />
    </>
  );
}

function Node({
  icon: Icon,
  label,
  tone,
  style,
  delay,
  small = false,
}: {
  icon: IconType;
  label: string;
  tone: "blue" | "orange";
  style: React.CSSProperties;
  delay: number;
  small?: boolean;
}) {
  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2" style={style}>
      <div className="float-soft flex flex-col items-center" style={{ animationDelay: `${delay}s` }}>
        <span
          className={`flex items-center justify-center rounded-full bg-white shadow-soft ring-1 ${
            small ? "h-9 w-9" : "h-12 w-12"
          } ${tone === "blue" ? "text-accent ring-accent/15" : "text-brand-orange ring-brand-orange/20"}`}
        >
          <Icon className={small ? "h-4 w-4" : "h-5 w-5"} strokeWidth={1.8} />
        </span>
        <span
          className={`absolute top-full whitespace-nowrap font-bold uppercase text-ink/50 ${
            small ? "mt-1 text-[8.5px] tracking-[0.08em]" : "mt-2 text-[10px] tracking-[0.14em]"
          }`}
        >
          {label}
        </span>
      </div>
    </div>
  );
}

/* --------------------------------------------------------------------------
   Desktop hero: ad channels on the left stream into the headline, outcomes
   stream out on the right. Drawn 1:1 on a fixed 1280 x 600 canvas that stays
   centred on the page, so it hugs the content column at any screen width.
   -------------------------------------------------------------------------- */

const sources: { icon: IconType; label: string; x: number; y: number }[] = [
  { icon: Search, label: "Google Ads", x: 128, y: 170 },
  { icon: Megaphone, label: "Meta Ads", x: 58, y: 310 },
  { icon: Play, label: "YouTube", x: 128, y: 450 },
];

const outcomes: { icon: IconType; label: string; x: number; y: number }[] = [
  { icon: MessageCircle, label: "WhatsApp Leads", x: 1152, y: 180 },
  { icon: PhoneCall, label: "Sales Calls", x: 1222, y: 320 },
  { icon: IndianRupee, label: "Revenue", x: 1152, y: 460 },
];

export function HeroBeams({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute left-1/2 top-0 h-[600px] w-[1280px] -translate-x-1/2 ${className}`}
    >
      <svg viewBox="0 0 1280 600" fill="none" className="beam-fade-center absolute inset-0 h-full w-full">
        {sources.map((n, i) => (
          <Beam
            key={n.label}
            d={`M ${n.x} ${n.y} C ${n.x + 180} ${n.y} 330 310 540 310`}
            color={BLUE}
            dur={3.4 + i * 0.5}
            delay={-i * 1.1}
          />
        ))}
        {outcomes.map((n, i) => (
          <Beam
            key={n.label}
            d={`M 740 320 C 950 320 ${n.x - 180} ${n.y} ${n.x} ${n.y}`}
            color={ORANGE}
            dur={3.6 + i * 0.5}
            delay={-0.6 - i * 1.2}
          />
        ))}
      </svg>

      {sources.map((n, i) => (
        <Node key={n.label} icon={n.icon} label={n.label} tone="blue" delay={-i * 1.4} style={{ left: n.x, top: n.y }} />
      ))}
      {outcomes.map((n, i) => (
        <Node key={n.label} icon={n.icon} label={n.label} tone="orange" delay={-0.7 - i * 1.4} style={{ left: n.x, top: n.y }} />
      ))}
    </div>
  );
}

/* --------------------------------------------------------------------------
   Mobile / tablet hero: the same story drawn for a narrow screen. Five
   channels across the top converge into a single revenue node. The canvas is
   360 x 200 and scales uniformly with the screen width.
   -------------------------------------------------------------------------- */

const CW = 360;
const CH = 200;

type ConvergeItem = { icon: IconType; label: string };

const channels: ConvergeItem[] = [
  { icon: Search, label: "Google" },
  { icon: Megaphone, label: "Meta" },
  { icon: Play, label: "YouTube" },
  { icon: Globe, label: "Website" },
  { icon: MessageCircle, label: "WhatsApp" },
];

/** Skills converging into a job-ready marketer (academy page). */
export const academyChannels: ConvergeItem[] = [
  { icon: Search, label: "Google" },
  { icon: Megaphone, label: "Meta" },
  { icon: Filter, label: "Funnels" },
  { icon: BarChart3, label: "Tracking" },
  { icon: Laptop, label: "Live Work" },
];

const CONVERGE_X = [32, 106, 180, 254, 328];

const pct = (v: number, of: number) => `${((v / of) * 100).toFixed(2)}%`;

export function HeroConverge({
  items = channels,
  target: TargetIcon = TrendingUp,
  targetLabel = "Verified Revenue",
  className = "",
}: {
  items?: ConvergeItem[];
  target?: IconType;
  targetLabel?: string;
  className?: string;
}) {
  return (
    <div aria-hidden="true" className={`relative mx-auto aspect-[360/200] w-full max-w-[420px] ${className}`}>
      <svg viewBox={`0 0 ${CW} ${CH}`} fill="none" className="absolute inset-0 h-full w-full">
        {items.map((c, i) => (
          <Beam
            key={c.label}
            d={`M ${CONVERGE_X[i]} 56 C ${CONVERGE_X[i]} 108 180 88 180 140`}
            color={i % 2 === 0 ? BLUE : ORANGE}
            dur={2.8 + (i % 3) * 0.5}
            delay={-i * 0.7}
          />
        ))}
      </svg>

      {items.map((c, i) => (
        <Node
          key={c.label}
          icon={c.icon}
          label={c.label}
          tone="blue"
          small
          delay={-i * 0.9}
          style={{ left: pct(CONVERGE_X[i], CW), top: pct(20, CH) }}
        />
      ))}

      {/* Destination node */}
      <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ top: pct(152, CH) }}>
        <span className="node-ring absolute inset-0 rounded-full bg-accent/30" />
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-dim text-white shadow-lift ring-4 ring-white">
          <TargetIcon className="h-6 w-6" strokeWidth={2} />
        </span>
      </div>
      <span
        className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.16em] text-accent"
        style={{ top: pct(187, CH) }}
      >
        {targetLabel}
      </span>
    </div>
  );
}

/** Vertical rail with a pulse travelling down it (mobile lead-flow timeline). */
export function PulseRail({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`overflow-hidden rounded-full bg-accent/20 ${className}`}>
      <div className="rail-pulse h-[14%] w-full rounded-full bg-gradient-to-b from-transparent via-brand-orange to-brand-orange" />
    </div>
  );
}

/** Hand-drawn underline stroke for a highlighted phrase. */
export function Swoosh({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 18" fill="none" aria-hidden="true" preserveAspectRatio="none" className={className}>
      <path
        d="M4 12.5 C 58 4.5 132 2.5 208 5.5 C 244 7 272 9.5 296 13"
        stroke="currentColor"
        strokeWidth={3.5}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
