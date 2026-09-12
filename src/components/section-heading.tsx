import Reveal from "@/components/reveal";

interface Props {
  eyebrow: string;
  title: string;
  description?: string;
  dark?: boolean;
  align?: "left" | "center";
}

export default function SectionHeading({ eyebrow, title, description, dark = false, align = "left" }: Props) {
  return (
    <Reveal className={align === "center" ? "text-center" : ""}>
      <p className={`text-xs font-semibold uppercase tracking-[0.22em] ${dark ? "text-brand-orange" : "text-accent"}`}>
        {eyebrow}
      </p>
      <h2
        className={`text-balance mt-4 font-display text-4xl font-semibold tracking-tightest sm:text-5xl ${
          dark ? "text-white" : "text-ink"
        } ${align === "center" ? "mx-auto max-w-3xl" : "max-w-3xl"}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 max-w-2xl text-lg leading-relaxed ${dark ? "text-white/55" : "text-ink/60"} ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
