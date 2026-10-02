// One illustration per inner page, each a different idea. Pure SVG on a 360 x 200
// canvas with CSS-driven motion (see "Decorative illustrations" in globals.css),
// so the same drawing scales cleanly from the phone layout up to desktop.

import {
  BarChart3,
  BadgeCheck,
  Building2,
  Code2,
  Filter,
  Handshake,
  IndianRupee,
  Landmark,
  Layers,
  Mail,
  MapPin,
  Megaphone,
  MessageCircle,
  MousePointerClick,
  Palette,
  Phone,
  PhoneCall,
  Plane,
  Rocket,
  Search,
  Send,
  Share2,
  ShoppingBag,
  Star,
  Target,
  TrendingUp,
  Users,
  Vote,
  type LucideIcon,
} from "lucide-react";
import { BLUE, ORANGE, INK, SKY, Chip, Ring, Track } from "@/components/art-kit";
import { serviceDrawings } from "@/components/service-art";

export type ArtVariant =
  | "about"
  | "services"
  | "service"
  | "industries"
  | "clients"
  | "contact"
  | "political"
  | "locations";


/* --------------------------------- drawings --------------------------------- */

/** About: a revenue curve climbing to launch. */
function GrowthArt({ id }: { id: string }) {
  const curve = "M 30 160 C 70 152 92 118 126 124 S 182 150 206 106 S 262 70 300 46";
  return (
    <>
      <defs>
        <linearGradient id={`${id}-area`} x1="0" y1="40" x2="0" y2="172" gradientUnits="userSpaceOnUse">
          <stop stopColor={BLUE} stopOpacity={0.22} />
          <stop offset="1" stopColor={BLUE} stopOpacity={0} />
        </linearGradient>
      </defs>
      {[52, 92, 132, 172].map((y) => (
        <path key={y} d={`M 30 ${y} H 330`} stroke={INK} strokeOpacity={0.07} strokeDasharray="2 6" />
      ))}
      <path d={`${curve} L 300 172 L 30 172 Z`} fill={`url(#${id}-area)`} />
      <path d={curve} stroke={BLUE} strokeWidth={2.5} strokeLinecap="round" />
      <path d={curve} pathLength={1000} stroke={ORANGE} strokeWidth={3} strokeLinecap="round" className="beam-pulse" style={{ animationDuration: "3.4s" }} />
      {[
        [126, 124],
        [206, 106],
      ].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r={4.5} fill="#fff" stroke={BLUE} strokeWidth={2} />
      ))}
      <Ring x={300} y={46} r={19} />
      <Chip x={300} y={46} r={19} icon={Rocket} solid />
      <Chip x={64} y={62} r={14} icon={Target} float />
      <Chip x={252} y={152} r={14} icon={Users} tone="orange" float delay={-2} />
    </>
  );
}

/** Services: a console of practice modules lighting up in turn. */
function ModulesArt() {
  const tiles: { icon: LucideIcon; x: number; y: number }[] = [
    { icon: Search, x: 58, y: 66 },
    { icon: Megaphone, x: 144, y: 66 },
    { icon: Code2, x: 230, y: 66 },
    { icon: Palette, x: 58, y: 120 },
    { icon: Share2, x: 144, y: 120 },
    { icon: Filter, x: 230, y: 120 },
  ];
  return (
    <>
      <rect x={40} y={26} width={280} height={156} rx={18} fill={INK} opacity={0.05} />
      <rect x={40} y={22} width={280} height={156} rx={18} fill="#fff" stroke={INK} strokeOpacity={0.08} />
      <circle cx={60} cy={40} r={3.5} fill={ORANGE} opacity={0.8} />
      <circle cx={73} cy={40} r={3.5} fill="#F59E0B" opacity={0.8} />
      <circle cx={86} cy={40} r={3.5} fill={BLUE} opacity={0.8} />
      <rect x={200} y={36} width={100} height={8} rx={4} fill={INK} opacity={0.06} />
      <path d="M 40 54 H 320" stroke={INK} strokeOpacity={0.07} />
      {tiles.map((t, i) => (
        <g key={i}>
          <rect x={t.x} y={t.y} width={72} height={44} rx={11} fill="#F1F5F9" />
          <rect
            x={t.x}
            y={t.y}
            width={72}
            height={44}
            rx={11}
            fill={SKY}
            stroke={BLUE}
            strokeOpacity={0.5}
            className="seq-pulse"
            style={{ animationDelay: `${i * 0.6}s` }}
          />
          <t.icon x={t.x + 27} y={t.y + 13} width={18} height={18} color={BLUE} strokeWidth={1.9} />
        </g>
      ))}
      <Ring x={320} y={26} r={17} color={ORANGE} />
      <Chip x={320} y={26} r={17} icon={Layers} tone="orange" solid />
    </>
  );
}

/** Service detail: traffic narrowing through a funnel into revenue. */
function FunnelArt() {
  const levels: { w: number; y: number; fill: string; icon: LucideIcon; dark?: boolean }[] = [
    { w: 216, y: 22, fill: "#E0F2FE", icon: Search },
    { w: 168, y: 58, fill: "#BAE6FD", icon: MousePointerClick },
    { w: 120, y: 94, fill: "#7DD3FC", icon: Filter },
    { w: 76, y: 130, fill: BLUE, icon: MessageCircle, dark: true },
  ];
  const cx = 160;
  return (
    <>
      {levels.map((l, i) => (
        <g key={i}>
          <rect x={cx - l.w / 2} y={l.y} width={l.w} height={28} rx={14} fill={l.fill} />
          <l.icon x={cx - l.w / 2 + 12} y={l.y + 6} width={16} height={16} color={l.dark ? "#fff" : "#0369A1"} strokeWidth={2} />
        </g>
      ))}
      <path d={`M ${cx} 14 V 166`} pathLength={1000} stroke={ORANGE} strokeWidth={3} strokeLinecap="round" className="beam-pulse" style={{ animationDuration: "2.6s" }} />
      <path d={`M ${cx + 26} 14 V 130`} pathLength={1000} stroke="#fff" strokeWidth={2.5} strokeLinecap="round" className="beam-pulse" style={{ animationDuration: "3.1s", animationDelay: "-1.2s" }} />
      <Ring x={cx} y={178} r={16} color={ORANGE} />
      <Chip x={cx} y={178} r={16} icon={IndianRupee} tone="orange" solid />
      <Chip x={308} y={52} r={15} icon={Target} float />
      <Chip x={316} y={136} r={15} icon={TrendingUp} tone="orange" float delay={-2.5} />
      <Chip x={30} y={150} r={13} icon={Users} float delay={-1.2} />
    </>
  );
}

/** Industries: four sectors as rising pillars. */
function PillarsArt() {
  const pillars: { x: number; h: number; icon: LucideIcon; tone: "blue" | "orange" }[] = [
    { x: 74, h: 72, icon: Building2, tone: "blue" },
    { x: 144, h: 108, icon: Plane, tone: "orange" },
    { x: 216, h: 56, icon: Landmark, tone: "blue" },
    { x: 286, h: 90, icon: ShoppingBag, tone: "orange" },
  ];
  const base = 172;
  return (
    <>
      {pillars.map((p, i) => {
        const color = p.tone === "blue" ? BLUE : ORANGE;
        return (
          <g key={i}>
            <rect x={p.x - 22} y={base - p.h} width={44} height={p.h} rx={12} fill={p.tone === "blue" ? "#D6EDFB" : "#FFE4CC"} />
            <path
              d={`M ${p.x} ${base - 6} V ${base - p.h + 8}`}
              pathLength={1000}
              stroke={color}
              strokeWidth={3}
              strokeLinecap="round"
              className="beam-pulse"
              style={{ animationDuration: `${2.6 + i * 0.3}s`, animationDelay: `${-i * 0.7}s` }}
            />
            <Chip x={p.x} y={base - p.h - 20} r={15} icon={p.icon} tone={p.tone} float delay={-i * 1.3} />
          </g>
        );
      })}
      <path d={`M 30 ${base} H 330`} stroke={INK} strokeOpacity={0.14} strokeWidth={1.5} strokeLinecap="round" />
    </>
  );
}

/** Clients: a verified five-star review card. */
function TrustArt() {
  return (
    <>
      <rect x={104} y={22} width={204} height={112} rx={18} fill="#EEF2F7" />
      <rect x={52} y={50} width={212} height={118} rx={18} fill={INK} opacity={0.05} />
      <rect x={52} y={46} width={212} height={118} rx={18} fill="#fff" stroke={INK} strokeOpacity={0.08} />
      <Chip x={86} y={82} r={18} icon={Handshake} solid />
      <rect x={116} y={70} width={118} height={9} rx={4.5} fill={INK} opacity={0.14} />
      <rect x={116} y={86} width={78} height={8} rx={4} fill={INK} opacity={0.07} />
      {[0, 1, 2, 3, 4].map((i) => (
        <Star
          key={i}
          x={72 + i * 27}
          y={122}
          width={20}
          height={20}
          color={ORANGE}
          fill={ORANGE}
          strokeWidth={1.5}
          className="star-pop"
          style={{ animationDelay: `${i * 0.28}s` }}
        />
      ))}
      <Ring x={266} y={160} r={18} color={ORANGE} />
      <Chip x={266} y={160} r={18} icon={BadgeCheck} tone="orange" solid />
      <Chip x={326} y={68} r={14} icon={Landmark} float />
      <Chip x={24} y={128} r={13} icon={Building2} float delay={-2} />
    </>
  );
}

/** Contact: a message leaving the chat and landing in the inbox. */
function SendArt() {
  const route = "M 128 118 C 168 58 222 140 284 70";
  return (
    <>
      <rect x={30} y={102} width={100} height={58} rx={18} fill={INK} opacity={0.05} />
      <path d="M 48 98 h 64 a 18 18 0 0 1 18 18 v 22 a 18 18 0 0 1 -18 18 h -46 l -18 14 v -14 a 18 18 0 0 1 -18 -18 v -22 a 18 18 0 0 1 18 -18 z" fill="#fff" stroke={INK} strokeOpacity={0.09} />
      {[0, 1, 2].map((i) => (
        <circle key={i} cx={62 + i * 18} cy={128} r={4.5} fill={BLUE} className="dot-bounce" style={{ animationDelay: `${i * 0.18}s` }} />
      ))}
      <path d={route} stroke={INK} strokeOpacity={0.18} strokeWidth={1.5} strokeDasharray="3 7" strokeLinecap="round" />
      <g className="motion-only">
        <circle r={13} fill="#fff" stroke={ORANGE} strokeOpacity={0.3} />
        <Send x={-8} y={-8} width={16} height={16} color={ORANGE} strokeWidth={2} />
        <animateMotion dur="3.6s" repeatCount="indefinite" path={route} />
      </g>
      <Ring x={300} y={58} r={22} />
      <Chip x={300} y={58} r={22} icon={Mail} solid />
      <Chip x={64} y={46} r={15} icon={Phone} float />
      <Chip x={206} y={160} r={14} icon={MapPin} tone="orange" float delay={-2} />
      <Chip x={322} y={150} r={14} icon={MessageCircle} float delay={-1} />
    </>
  );
}

/** Political: a message broadcast outward and a crowd lighting up as it lands. */
function BroadcastArt() {
  const origin = { x: 60, y: 100 };
  const arc = (r: number) => {
    const a = (36 * Math.PI) / 180;
    const x = origin.x + r * Math.cos(a);
    const dy = r * Math.sin(a);
    return `M ${x.toFixed(1)} ${(origin.y - dy).toFixed(1)} A ${r} ${r} 0 0 1 ${x.toFixed(1)} ${(origin.y + dy).toFixed(1)}`;
  };
  const cols = [202, 232, 262, 292, 322];
  const rows = [44, 82, 120, 158];
  return (
    <>
      {[46, 70, 94].map((r, i) => (
        <path
          key={r}
          d={arc(r)}
          stroke={ORANGE}
          strokeWidth={3}
          strokeLinecap="round"
          className="seq-pulse"
          style={{ animationDuration: "2.4s", animationDelay: `${i * 0.3}s` }}
        />
      ))}
      <Ring x={origin.x} y={origin.y} r={24} />
      <Chip x={origin.x} y={origin.y} r={24} icon={Megaphone} solid />
      {rows.map((y) =>
        cols.map((x, c) => (
          <g key={`${x}-${y}`}>
            <circle cx={x} cy={y - 7} r={5} fill="#CBD5E1" />
            <rect x={x - 8} y={y} width={16} height={11} rx={5.5} fill="#CBD5E1" />
            <g className="seq-pulse" style={{ animationDuration: "2.4s", animationDelay: `${0.9 + c * 0.16}s` }}>
              <circle cx={x} cy={y - 7} r={5} fill={BLUE} />
              <rect x={x - 8} y={y} width={16} height={11} rx={5.5} fill={BLUE} />
            </g>
          </g>
        )),
      )}
      <Chip x={150} y={30} r={14} icon={Vote} float />
      <Chip x={150} y={172} r={14} icon={BarChart3} tone="orange" float delay={-2} />
    </>
  );
}

/** Locations: regional hubs joined by a live route out of the Karnal HQ. */
function RouteArt() {
  const route = "M 42 152 C 88 152 94 86 150 86 S 214 142 250 114 S 296 52 324 54";
  return (
    <>
      <path d="M 10 60 C 80 40 130 150 210 170 S 320 150 356 176" stroke={INK} strokeOpacity={0.06} strokeWidth={10} strokeLinecap="round" />
      <path d="M 96 10 C 110 70 220 60 236 20" stroke={INK} strokeOpacity={0.05} strokeWidth={8} strokeLinecap="round" />
      <Track d={route} color={ORANGE} dur={3.8} dashed />
      <Chip x={42} y={152} r={14} icon={MapPin} tone="orange" />
      <Chip x={250} y={114} r={14} icon={MapPin} tone="orange" />
      <Chip x={324} y={54} r={14} icon={MapPin} tone="orange" />
      <Ring x={150} y={86} r={21} />
      <Chip x={150} y={86} r={21} icon={Building2} solid />
      <text x={150} y={124} textAnchor="middle" fontSize={8.5} fontWeight={700} letterSpacing={1.4} fill={BLUE}>
        KARNAL HQ
      </text>
      <Chip x={82} y={40} r={13} icon={Users} float />
      <Chip x={304} y={160} r={13} icon={PhoneCall} float delay={-2} />
    </>
  );
}

function Drawing({ variant, service, id }: { variant: ArtVariant; service?: string; id: string }) {
  const ServiceDrawing = variant === "service" && service ? serviceDrawings[service] : undefined;
  if (ServiceDrawing) return <ServiceDrawing />;

  switch (variant) {
    case "about":
      return <GrowthArt id={id} />;
    case "services":
      return <ModulesArt />;
    case "service":
      return <FunnelArt />;
    case "industries":
      return <PillarsArt />;
    case "clients":
      return <TrustArt />;
    case "contact":
      return <SendArt />;
    case "political":
      return <BroadcastArt />;
    case "locations":
      return <RouteArt />;
  }
}

/* --------------------------------- placement --------------------------------- */

/** Desktop: sits in the free space to the right of the hero copy (xl and up). */
export function PageArt({
  variant,
  service,
  right = "right-[max(2rem,calc(50%-592px))]",
  className = "",
}: {
  variant: ArtVariant;
  /** Service slug: picks that service's own drawing when variant is "service" */
  service?: string;
  /** Horizontal anchor. The default lines up with the content column inside a full-width section. */
  right?: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 360 200"
      fill="none"
      aria-hidden="true"
      className={`pointer-events-none absolute hidden h-[228px] w-[410px] xl:block ${right} ${className}`}
    >
      <Drawing variant={variant} service={service} id={`${variant}-d`} />
    </svg>
  );
}

/** Phones and tablets: the same drawing, in the flow under the hero copy. */
export function PageArtInline({
  variant,
  service,
  className = "",
}: {
  variant: ArtVariant;
  service?: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 360 200"
      fill="none"
      aria-hidden="true"
      className={`block h-auto w-full max-w-[400px] xl:hidden ${className}`}
    >
      <Drawing variant={variant} service={service} id={`${variant}-m`} />
    </svg>
  );
}
