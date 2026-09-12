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
      <p className={`text-xs font-bold uppercase tracking-[0.22em] ${dark ? "text-brand-orange" : "text-accent"}`}>
        {eyebrow}
      </p>
      <h2
        className={`text-balance mt-3 font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tightest ${
          dark ? "text-white" : "text-ink"
        } ${align === "center" ? "mx-auto max-w-3xl" : "max-w-3xl"}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-3 sm:mt-5 max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed ${dark ? "text-white/80" : "text-ink/80 font-normal"} ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
