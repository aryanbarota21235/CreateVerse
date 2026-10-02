// One drawing per service detail page, keyed by service slug (see src/lib/services.ts).
// Lead generation keeps the generic funnel in page-art.tsx; political management has
// its own page and drawing. Same 360 x 200 canvas and CSS motion as the other art.

import {
  BadgeCheck,
  CalendarCheck,
  Check,
  Crosshair,
  Eye,
  FileCheck,
  Gauge,
  GraduationCap,
  Hash,
  Heart,
  IndianRupee,
  Key,
  Link2,
  Mail,
  MapPin,
  Megaphone,
  MessageCircle,
  MousePointerClick,
  Newspaper,
  Palette,
  PenLine,
  PenTool,
  Plane,
  Play,
  Search,
  Share2,
  Smartphone,
  Sparkles,
  Star,
  Target,
  ThumbsUp,
  TrendingUp,
  UserCheck,
  Users,
  Zap,
  Code2,
} from "lucide-react";
import { BLUE, ORANGE, INK, SKY, Bar, Card, Chip, Lit, Person, Ring, Track } from "@/components/art-kit";

const SUN = "#FFE4CC";
const MIST = "#F1F5F9";

/** Real estate: a skyline whose windows light up as buyers come in. */
function RealEstateArt() {
  const towers = [
    { x: 70, y: 84, w: 54, h: 92, cols: 2, rows: 4, fill: "#D6EDFB", lit: BLUE },
    { x: 136, y: 42, w: 64, h: 134, cols: 3, rows: 6, fill: "#BAE6FD", lit: ORANGE },
    { x: 212, y: 102, w: 50, h: 74, cols: 2, rows: 3, fill: SUN, lit: BLUE },
  ];
  return (
    <>
      {towers.map((t, ti) => {
        const gap = (t.w - t.cols * 10) / (t.cols + 1);
        return (
          <g key={ti}>
            <rect x={t.x} y={t.y} width={t.w} height={t.h + 8} rx={8} fill={t.fill} />
            {Array.from({ length: t.rows * t.cols }, (_, i) => {
              const c = i % t.cols;
              const r = Math.floor(i / t.cols);
              const x = t.x + gap + c * (10 + gap);
              const y = t.y + 12 + r * 19;
              return (
                <g key={i}>
                  <rect x={x} y={y} width={10} height={10} rx={3} fill="#fff" opacity={0.9} />
                  {(i + ti) % 2 === 0 && (
                    <Lit delay={((c * 3 + r * 5 + ti * 2) % 7) * 0.5}>
                      <rect x={x} y={y} width={10} height={10} rx={3} fill={t.lit} />
                    </Lit>
                  )}
                </g>
              );
            })}
          </g>
        );
      })}
      <Track d="M 24 178 H 336" color={ORANGE} dur={3.6} />
      <Ring x={168} y={22} r={16} color={ORANGE} />
      <Chip x={168} y={22} r={16} icon={MapPin} tone="orange" solid />
      <Chip x={302} y={66} r={15} icon={Key} float />
      <Chip x={310} y={136} r={14} icon={IndianRupee} tone="orange" float delay={-2} />
      <Chip x={34} y={110} r={13} icon={Users} float delay={-1} />
    </>
  );
}

/** Immigration: a flight path from home to destination and a visa being stamped. */
function ImmigrationArt() {
  const route = "M 46 150 C 104 30 224 22 312 60";
  return (
    <>
      <Track d={route} color={BLUE} dur={4} dashed />
      <Chip x={46} y={150} r={14} icon={MapPin} tone="orange" />
      <Ring x={312} y={60} r={18} />
      <Chip x={312} y={60} r={18} icon={GraduationCap} solid />
      <g className="motion-only">
        <circle r={13} fill="#fff" stroke={ORANGE} strokeOpacity={0.3} />
        <g transform="rotate(45)">
          <Plane x={-8} y={-8} width={16} height={16} color={ORANGE} strokeWidth={2} />
        </g>
        <animateMotion dur="5s" repeatCount="indefinite" rotate="auto" path={route} />
      </g>

      {/* Visa card */}
      <Card x={118} y={98} w={132} h={82} r={14} />
      <path d="M 118 112 a 14 14 0 0 1 14 -14 h 104 a 14 14 0 0 1 14 14 v 8 h -132 z" fill={BLUE} />
      <Bar x={130} y={106} w={44} h={6} o={0.9} fill="#fff" />
      <rect x={130} y={130} width={28} height={34} rx={7} fill={SKY} />
      <Bar x={168} y={134} w={40} />
      <Bar x={168} y={148} w={28} o={0.06} />
      <Lit dur={3} delay={0.4}>
        <circle cx={224} cy={150} r={15} fill="#FFF3E6" stroke={ORANGE} strokeWidth={2} strokeDasharray="3 3" />
        <Check x={215} y={141} width={18} height={18} color={ORANGE} strokeWidth={3} />
      </Lit>
      <Chip x={70} y={58} r={14} icon={FileCheck} float />
      <Chip x={306} y={150} r={13} icon={Users} tone="orange" float delay={-2} />
    </>
  );
}

/** Google Ads: a search being typed and the ad winning the top result. */
function GoogleAdsArt() {
  return (
    <>
      <Card x={40} y={20} w={250} h={38} r={19} />
      <Search x={54} y={30} width={18} height={18} color={BLUE} strokeWidth={2} />
      <Bar x={82} y={35} w={108} h={8} o={0.14} />
      <rect x={196} y={30} width={2.5} height={18} rx={1.25} fill={BLUE} className="seq-pulse" style={{ animationDuration: "1.1s" }} />

      {[74, 112, 150].map((y, i) => (
        <g key={y}>
          <Card x={40} y={y} w={250} h={30} r={11} />
          {i === 0 && (
            <>
              <Lit dur={2.8}>
                <rect x={40} y={y} width={250} height={30} rx={11} fill={SKY} stroke={BLUE} strokeOpacity={0.6} />
              </Lit>
              <rect x={50} y={y + 8} width={24} height={14} rx={7} fill={ORANGE} />
              <text x={62} y={y + 18.2} textAnchor="middle" fontSize={8.5} fontWeight={800} fill="#fff">
                Ad
              </text>
            </>
          )}
          <Bar x={i === 0 ? 82 : 52} y={y + 11.5} w={i === 0 ? 120 : 130 - i * 14} o={i === 0 ? 0.2 : 0.09} />
          <Bar x={222} y={y + 11.5} w={50} o={0.06} />
        </g>
      ))}
      <Ring x={318} y={36} r={18} />
      <Chip x={318} y={36} r={18} icon={Target} solid />
      <Chip x={304} y={96} r={15} icon={MousePointerClick} tone="orange" float />
      <Chip x={320} y={160} r={14} icon={TrendingUp} float delay={-2} />
    </>
  );
}

/** Social media paid ads: a sponsored post in the feed collecting reactions. */
function SocialPaidAdsArt() {
  return (
    <>
      <rect x={112} y={8} width={112} height={186} rx={24} fill={INK} />
      <rect x={118} y={14} width={100} height={174} rx={18} fill="#fff" />
      <rect x={152} y={19} width={32} height={6} rx={3} fill={INK} opacity={0.85} />
      <circle cx={133} cy={42} r={7} fill={SKY} stroke={BLUE} strokeOpacity={0.4} />
      <Bar x={146} y={36} w={42} h={5} o={0.16} />
      <Bar x={146} y={45} w={30} h={4} o={0.7} fill={ORANGE} />
      <rect x={124} y={56} width={88} height={70} rx={11} fill="#BAE6FD" />
      <Megaphone x={155} y={78} width={26} height={26} color="#fff" strokeWidth={1.9} />
      <rect x={124} y={134} width={88} height={22} rx={11} fill={BLUE} />
      <Lit dur={2.6}>
        <rect x={124} y={134} width={88} height={22} rx={11} fill={ORANGE} />
      </Lit>
      <Bar x={148} y={142.5} w={40} h={5} o={0.95} fill="#fff" />
      <Bar x={124} y={166} w={60} h={5} />
      <Bar x={124} y={176} w={40} h={5} o={0.06} />

      <Track d="M 80 64 C 96 70 100 86 112 90" color={ORANGE} dur={2.4} />
      <Ring x={62} y={60} r={20} color={ORANGE} />
      <Chip x={62} y={60} r={20} icon={Zap} tone="orange" solid />
      <Chip x={56} y={142} r={14} icon={Target} float />
      <Chip x={264} y={56} r={15} icon={Heart} tone="orange" float />
      <Chip x={292} y={108} r={15} icon={ThumbsUp} float delay={-1.5} />
      <Chip x={260} y={158} r={14} icon={MessageCircle} float delay={-3} />
    </>
  );
}

/** Paid social: an audience segment being targeted out of the crowd. */
function PaidSocialArt() {
  const inside = [
    [178, 86],
    [210, 80],
    [242, 90],
    [192, 126],
    [228, 128],
  ];
  const outside = [
    [100, 46],
    [118, 152],
    [304, 60],
    [326, 106],
    [72, 162],
    [296, 152],
  ];
  return (
    <>
      {outside.map(([x, y]) => (
        <Person key={`${x}-${y}`} x={x} y={y} />
      ))}
      <rect x={150} y={48} width={122} height={106} rx={20} fill={SKY} opacity={0.6} />
      <rect x={150} y={48} width={122} height={106} rx={20} stroke={BLUE} strokeWidth={1.75} strokeDasharray="6 7" className="flow-dash" />
      {inside.map(([x, y], i) => (
        <g key={`${x}-${y}`}>
          <Person x={x} y={y} fill="#93C5FD" />
          <Lit dur={3} delay={i * 0.25}>
            <Person x={x} y={y} fill={BLUE} />
          </Lit>
        </g>
      ))}
      <Track d="M 62 100 H 150" color={ORANGE} dur={2.2} />
      <Chip x={44} y={100} r={18} icon={Megaphone} tone="orange" solid />
      <Ring x={272} y={48} r={17} />
      <Chip x={272} y={48} r={17} icon={Crosshair} solid />
      <Chip x={220} y={180} r={13} icon={TrendingUp} tone="orange" float />
    </>
  );
}

/** Web development: code on the left compiling into a fast page on the right. */
function WebDevArt() {
  const lines = [
    { x: 52, w: 60, c: BLUE },
    { x: 64, w: 78, c: INK },
    { x: 64, w: 56, c: ORANGE },
    { x: 76, w: 64, c: INK },
    { x: 64, w: 44, c: BLUE },
    { x: 52, w: 70, c: INK },
  ];
  return (
    <>
      <Card x={36} y={20} w={236} h={160} r={16} />
      <circle cx={54} cy={38} r={3.5} fill={ORANGE} opacity={0.8} />
      <circle cx={66} cy={38} r={3.5} fill="#F59E0B" opacity={0.8} />
      <circle cx={78} cy={38} r={3.5} fill={BLUE} opacity={0.8} />
      <rect x={104} y={32} width={120} height={12} rx={6} fill={INK} opacity={0.05} />
      <path d="M 36 54 H 272 M 160 54 V 180" stroke={INK} strokeOpacity={0.07} />
      {lines.map((l, i) => (
        <g key={i}>
          <Bar x={l.x} y={68 + i * 17} w={l.w} h={7} o={0.08} />
          <Lit delay={i * 0.4} dur={3.6}>
            <Bar x={l.x} y={68 + i * 17} w={l.w} h={7} o={0.75} fill={l.c} />
          </Lit>
        </g>
      ))}
      <rect x={172} y={64} width={88} height={44} rx={9} fill={SKY} />
      <rect x={172} y={114} width={41} height={28} rx={8} fill={MIST} />
      <rect x={219} y={114} width={41} height={28} rx={8} fill={MIST} />
      <rect x={172} y={150} width={52} height={16} rx={8} fill={BLUE} />
      <Ring x={306} y={54} r={20} />
      <Chip x={306} y={54} r={20} icon={Gauge} solid />
      <Chip x={316} y={124} r={15} icon={Smartphone} tone="orange" float />
      <Chip x={296} y={176} r={13} icon={Code2} float delay={-2} />
    </>
  );
}

function PostCard({ tint }: { tint: string }) {
  return (
    <>
      <Card x={-42} y={-52} w={84} h={104} r={14} />
      <rect x={-34} y={-44} width={68} height={54} rx={9} fill={tint} />
      <Bar x={-34} y={20} w={52} h={6} o={0.14} />
      <Bar x={-34} y={32} w={34} h={5} o={0.07} />
    </>
  );
}

/** Social media marketing: a fan of posts earning likes, shares and comments. */
function SocialMarketingArt() {
  return (
    <>
      <g transform="translate(118 106) rotate(-10)">
        <PostCard tint={SUN} />
      </g>
      <g transform="translate(242 106) rotate(10)">
        <PostCard tint="#D6EDFB" />
      </g>
      <g transform="translate(180 92)">
        <PostCard tint="#BAE6FD" />
        <Lit dur={2.4}>
          <Heart x={-13} y={-30} width={26} height={26} color="#fff" fill="#fff" strokeWidth={1.5} />
        </Lit>
      </g>
      <Ring x={180} y={168} r={16} color={ORANGE} />
      <Chip x={180} y={168} r={16} icon={ThumbsUp} tone="orange" solid />
      <Chip x={52} y={50} r={14} icon={Hash} float />
      <Chip x={46} y={150} r={13} icon={MessageCircle} tone="orange" float delay={-2} />
      <Chip x={310} y={46} r={14} icon={Heart} tone="orange" float delay={-1} />
      <Chip x={318} y={152} r={14} icon={Share2} float delay={-3} />
    </>
  );
}

/** Social media optimization: a profile tuned so visitors hit follow. */
function ProfileArt() {
  return (
    <>
      <Card x={70} y={16} w={220} h={168} r={18} />
      <Ring x={116} y={60} r={24} />
      <circle cx={116} cy={60} r={24} fill={SKY} stroke={BLUE} strokeWidth={2} />
      <UserCheck x={104} y={48} width={24} height={24} color={BLUE} strokeWidth={1.9} />
      <Bar x={154} y={42} w={92} h={9} o={0.16} />
      <Bar x={154} y={58} w={60} />
      <rect x={154} y={74} width={74} height={20} rx={10} fill={BLUE} />
      <Lit dur={2.6}>
        <rect x={154} y={74} width={74} height={20} rx={10} fill={ORANGE} />
      </Lit>
      <Bar x={173} y={81.5} w={36} h={5} o={0.95} fill="#fff" />
      <Bar x={92} y={108} w={176} h={6} />
      <Bar x={92} y={120} w={128} h={6} o={0.06} />
      {[108, 154, 200, 246].map((x, i) => (
        <g key={x}>
          <circle cx={x} cy={156} r={13} fill={MIST} stroke={INK} strokeOpacity={0.08} />
          <Lit delay={i * 0.5} dur={3.2}>
            <circle cx={x} cy={156} r={15.5} stroke={i % 2 ? ORANGE : BLUE} strokeWidth={2} />
            <circle cx={x} cy={156} r={11} fill={i % 2 ? SUN : SKY} />
          </Lit>
        </g>
      ))}
      <Chip x={290} y={22} r={15} icon={BadgeCheck} tone="orange" solid />
      <Chip x={328} y={100} r={14} icon={Link2} float />
      <Chip x={34} y={116} r={14} icon={Search} tone="orange" float delay={-2} />
    </>
  );
}

/** Content marketing: an article being written and climbing to rank one. */
function ContentArt() {
  const lines = [128, 118, 128, 96, 124, 110, 70];
  return (
    <>
      <Card x={40} y={18} w={164} h={166} r={14} />
      <Bar x={56} y={34} w={92} h={11} o={0.18} />
      {lines.map((w, i) => (
        <g key={i}>
          <Bar x={56} y={58 + i * 15} w={w} h={6} o={0.07} />
          <Lit delay={i * 0.35} dur={3.8}>
            <Bar x={56} y={58 + i * 15} w={w} h={6} o={0.5} fill={BLUE} />
          </Lit>
        </g>
      ))}
      <Ring x={204} y={160} r={18} color={ORANGE} />
      <Chip x={204} y={160} r={18} icon={PenLine} tone="orange" solid />

      {[28, 66, 104].map((y, i) => (
        <g key={y}>
          <Card x={232} y={y} w={104} h={30} r={10} />
          {i === 0 && (
            <Lit dur={3}>
              <rect x={232} y={y} width={104} height={30} rx={10} fill={SKY} stroke={BLUE} strokeOpacity={0.6} />
            </Lit>
          )}
          <text x={246} y={y + 19.5} textAnchor="middle" fontSize={11} fontWeight={800} fill={i === 0 ? BLUE : INK} opacity={i === 0 ? 1 : 0.35}>
            {i + 1}
          </text>
          <Bar x={258} y={y + 11.5} w={62 - i * 10} o={i === 0 ? 0.2 : 0.09} />
        </g>
      ))}
      <Chip x={256} y={166} r={14} icon={Search} float />
      <Chip x={314} y={164} r={13} icon={Mail} tone="orange" float delay={-2} />
    </>
  );
}

/** Influencer marketing: a creator's video carrying trust out to their audiences. */
function InfluencerArt() {
  const clusters = [
    { x: 240, y: 44 },
    { x: 262, y: 104 },
    { x: 240, y: 164 },
  ];
  return (
    <>
      <Card x={28} y={38} w={112} h={126} r={16} />
      <rect x={38} y={48} width={92} height={76} rx={11} fill="#BAE6FD" />
      <circle cx={84} cy={86} r={16} fill="#fff" />
      <Play x={77} y={78} width={16} height={16} color={BLUE} fill={BLUE} strokeWidth={2} />
      <circle cx={48} cy={143} r={7} fill={SUN} stroke={ORANGE} strokeOpacity={0.4} />
      <Bar x={62} y={136} w={56} h={6} o={0.14} />
      <Bar x={62} y={147} w={36} h={5} o={0.07} />
      <Ring x={140} y={38} r={15} color={ORANGE} />
      <Chip x={140} y={38} r={15} icon={Star} tone="orange" solid />
      {clusters.map((c, i) => (
        <g key={i}>
          <Track d={`M 140 100 C 184 100 186 ${c.y} ${c.x - 20} ${c.y}`} color={ORANGE} dur={2.6 + i * 0.4} delay={-i * 0.8} />
          {[0, 1, 2].map((k) => (
            <g key={k}>
              <Person x={c.x + k * 25} y={c.y} />
              <Lit dur={3} delay={0.5 + i * 0.3 + k * 0.15}>
                <Person x={c.x + k * 25} y={c.y} fill={BLUE} />
              </Lit>
            </g>
          ))}
        </g>
      ))}
      <Chip x={334} y={66} r={12} icon={Heart} tone="orange" float />
      <Chip x={336} y={142} r={12} icon={ThumbsUp} float delay={-2} />
    </>
  );
}

/** Native advertising: a sponsored story sitting naturally inside an article. */
function NativeArt() {
  return (
    <>
      <Card x={48} y={12} w={232} h={176} r={14} />
      <Bar x={64} y={26} w={84} h={10} o={0.2} />
      <path d="M 64 44 H 264" stroke={INK} strokeOpacity={0.08} />
      {[0, 1, 2, 3, 4].map((i) => (
        <Bar key={i} x={64} y={54 + i * 10} w={i === 4 ? 60 : 92} h={5} o={0.08} />
      ))}
      <rect x={170} y={54} width={94} height={46} rx={8} fill={MIST} />
      <rect x={64} y={110} width={200} height={42} rx={10} fill="#fff" stroke={INK} strokeOpacity={0.08} />
      <Lit dur={3.2}>
        <rect x={64} y={110} width={200} height={42} rx={10} fill="#FFF3E6" stroke={ORANGE} strokeOpacity={0.7} />
      </Lit>
      <rect x={72} y={117} width={28} height={28} rx={7} fill={SUN} />
      <text x={110} y={124.5} fontSize={6.5} fontWeight={800} letterSpacing={1} fill={ORANGE}>
        SPONSORED
      </text>
      <Bar x={110} y={129} w={120} h={6} o={0.16} />
      <Bar x={110} y={140} w={80} h={5} o={0.08} />
      <Bar x={64} y={162} w={200} h={5} o={0.08} />
      <Bar x={64} y={172} w={150} h={5} o={0.06} />
      <Ring x={280} y={22} r={17} />
      <Chip x={280} y={22} r={17} icon={Newspaper} solid />
      <Chip x={324} y={96} r={14} icon={Eye} float />
      <Chip x={318} y={160} r={14} icon={MousePointerClick} tone="orange" float delay={-2} />
    </>
  );
}

/** Graphic design: an artboard with shapes, a bezier path and a colour palette. */
function GraphicDesignArt() {
  const path = "M 62 152 C 104 108 150 172 236 128";
  const swatches = [BLUE, ORANGE, "#F59E0B", INK];
  return (
    <>
      <Card x={40} y={18} w={224} h={164} r={14} />
      <circle cx={96} cy={74} r={26} fill="#BAE6FD" />
      <path d="M 148 104 L 188 104 L 168 68 Z" fill="#FED7AA" strokeLinejoin="round" stroke="#FED7AA" strokeWidth={6} />
      <rect x={204} y={52} width={38} height={38} rx={10} fill={BLUE} opacity={0.9} />
      <path d="M 62 152 L 104 108 M 236 128 L 150 172" stroke={BLUE} strokeOpacity={0.35} strokeDasharray="2 4" />
      <circle cx={104} cy={108} r={3} fill={BLUE} />
      <circle cx={150} cy={172} r={3} fill={BLUE} />
      <Track d={path} color={ORANGE} dur={3} />
      <rect x={58} y={148} width={8} height={8} rx={2} fill="#fff" stroke={BLUE} strokeWidth={1.75} />
      <Ring x={236} y={128} r={16} color={ORANGE} />
      <Chip x={236} y={128} r={16} icon={PenTool} tone="orange" solid />
      {swatches.map((c, i) => (
        <g key={c}>
          <circle cx={306} cy={40 + i * 38} r={12} fill={c} />
          <Lit delay={i * 0.6} dur={3.2}>
            <circle cx={306} cy={40 + i * 38} r={16} stroke={c} strokeWidth={2} />
          </Lit>
        </g>
      ))}
    </>
  );
}

/** Creative services: a brand kit — logo, type, palette and a finished creative. */
function BrandKitArt() {
  const swatches = [BLUE, "#38BDF8", ORANGE, INK];
  return (
    <>
      <g className="float-soft">
        <rect x={44} y={30} width={96} height={96} rx={22} fill={INK} opacity={0.08} />
        <rect x={44} y={26} width={96} height={96} rx={22} fill={BLUE} />
        <path d="M 108 58 A 23 23 0 1 0 108 90" stroke="#fff" strokeWidth={9} strokeLinecap="round" />
        <circle cx={112} cy={74} r={6} fill={ORANGE} />
      </g>
      <g className="float-soft" style={{ animationDelay: "-2s" }}>
        <Card x={156} y={20} w={92} h={72} r={16} />
        <text x={202} y={70} textAnchor="middle" fontSize={36} fontWeight={800} fill={INK} letterSpacing={-1.5}>
          Aa
        </text>
      </g>
      <g className="float-soft" style={{ animationDelay: "-4s" }}>
        <rect x={262} y={28} width={62} height={62} rx={16} fill={SUN} />
        <Sparkles x={280} y={46} width={26} height={26} color={ORANGE} strokeWidth={1.9} />
      </g>
      <Card x={156} y={106} w={152} h={40} r={14} />
      {swatches.map((c, i) => (
        <g key={c}>
          <circle cx={182 + i * 33} cy={126} r={10} fill={c} />
          <Lit delay={i * 0.5} dur={3}>
            <circle cx={182 + i * 33} cy={126} r={13.5} stroke={c} strokeWidth={2} />
          </Lit>
        </g>
      ))}
      <Card x={44} y={138} w={96} h={46} r={12} />
      <rect x={52} y={146} width={30} height={30} rx={7} fill="#BAE6FD" />
      <Bar x={90} y={152} w={40} h={6} o={0.16} />
      <Bar x={90} y={164} w={26} h={5} o={0.08} />
      <Ring x={318} y={164} r={17} />
      <Chip x={318} y={164} r={17} icon={Palette} solid />
    </>
  );
}

/** Social media management: a content calendar with posts going out on schedule. */
function CalendarArt() {
  const scheduled = new Map<number, string>([
    [1, BLUE],
    [3, ORANGE],
    [5, BLUE],
    [7, ORANGE],
    [9, BLUE],
    [11, BLUE],
    [13, ORANGE],
    [15, BLUE],
    [17, ORANGE],
    [19, BLUE],
  ]);
  return (
    <>
      <Card x={40} y={16} w={236} h={168} r={16} />
      <Bar x={56} y={30} w={72} h={10} o={0.18} />
      <Bar x={228} y={31} w={32} h={8} o={0.07} />
      {Array.from({ length: 7 }, (_, c) => (
        <Bar key={c} x={60 + c * 31} y={52} w={14} h={4} o={0.12} />
      ))}
      {Array.from({ length: 21 }, (_, i) => {
        const x = 54 + (i % 7) * 31;
        const y = 64 + Math.floor(i / 7) * 38;
        const color = scheduled.get(i);
        return (
          <g key={i}>
            <rect x={x} y={y} width={26} height={30} rx={7} fill={MIST} />
            {color && (
              <>
                <rect x={x + 5} y={y + 19} width={16} height={5} rx={2.5} fill={color} opacity={0.35} />
                <Lit delay={[...scheduled.keys()].indexOf(i) * 0.32} dur={3.6}>
                  <rect x={x} y={y} width={26} height={30} rx={7} fill={color === BLUE ? SKY : SUN} stroke={color} strokeOpacity={0.6} />
                  <rect x={x + 5} y={y + 19} width={16} height={5} rx={2.5} fill={color} />
                </Lit>
              </>
            )}
          </g>
        );
      })}
      <Ring x={276} y={22} r={17} />
      <Chip x={276} y={22} r={17} icon={CalendarCheck} solid />
      <Chip x={322} y={92} r={14} icon={MessageCircle} tone="orange" float />
      <Chip x={316} y={156} r={14} icon={Share2} float delay={-2} />
    </>
  );
}

/** Performance marketing: a live dashboard — KPIs up, spend bars and a rising return line. */
function DashboardArt() {
  const bars = [26, 38, 32, 50, 44, 62, 76];
  const base = 168;
  const tops = bars.map((h, i) => `${66 + i * 30} ${base - h - 8}`);
  const line = `M ${tops.join(" L ")}`;
  return (
    <>
      <Card x={36} y={16} w={252} h={168} r={16} />
      {[52, 158].map((x, i) => (
        <g key={x}>
          <rect x={x} y={30} width={96} height={34} rx={10} fill={MIST} />
          <Bar x={x + 10} y={38} w={34} h={5} o={0.14} />
          <Bar x={x + 10} y={49} w={50} h={8} o={0.75} fill={i === 0 ? BLUE : INK} />
          <TrendingUp x={x + 72} y={39} width={16} height={16} color={i === 0 ? ORANGE : BLUE} strokeWidth={2.2} />
        </g>
      ))}
      {bars.map((h, i) => (
        <rect key={i} x={58 + i * 30} y={base - h} width={16} height={h} rx={5} fill={i >= 5 ? BLUE : "#BAE6FD"} />
      ))}
      <path d={`M 52 ${base} H 272`} stroke={INK} strokeOpacity={0.1} />
      <path d={line} stroke={ORANGE} strokeOpacity={0.45} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      <path d={line} pathLength={1000} stroke={ORANGE} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className="beam-pulse" style={{ animationDuration: "3s" }} />
      <Ring x={288} y={26} r={18} color={ORANGE} />
      <Chip x={288} y={26} r={18} icon={TrendingUp} tone="orange" solid />
      <Chip x={326} y={98} r={14} icon={Target} float />
      <Chip x={322} y={160} r={14} icon={IndianRupee} tone="orange" float delay={-2} />
    </>
  );
}

export const serviceDrawings: Record<string, () => React.JSX.Element> = {
  "real-estate-lead-generation": RealEstateArt,
  "immigration-lead-generation": ImmigrationArt,
  "google-ads": GoogleAdsArt,
  "social-media-paid-ads": SocialPaidAdsArt,
  "paid-social": PaidSocialArt,
  "web-development": WebDevArt,
  "social-media-marketing": SocialMarketingArt,
  "social-media-optimization": ProfileArt,
  "content-marketing": ContentArt,
  "influencer-marketing": InfluencerArt,
  "native-advertising": NativeArt,
  "graphic-design": GraphicDesignArt,
  "creative-services": BrandKitArt,
  "social-media-management": CalendarArt,
  "performance-marketing": DashboardArt,
};
