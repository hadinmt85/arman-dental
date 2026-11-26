import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  index?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "start";
  light?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  index,
  title,
  description,
  align = "start",
  light = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`${
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"
      } ${className}`}
    >
      {eyebrow ? (
        index ? (
          <span
            className={`inline-flex items-center gap-2.5 text-[10px] font-bold tracking-[0.08em] ${
              light ? "text-white/70" : "text-brand-600"
            }`}
          >
            <span className="tabular-nums text-brand-400">{index}</span>
            <span
              className={`h-px w-7 ${
                light
                  ? "bg-gradient-to-r from-white/70 to-white/10"
                  : "bg-gradient-to-r from-brand-600 to-brand-300"
              }`}
            />
            {eyebrow}
          </span>
        ) : (
          <span className={`eyebrow ${light ? "eyebrow-light" : ""}`}>
            {eyebrow}
          </span>
        )
      ) : null}
      <h2
        className={`mt-4 text-[clamp(1.9rem,3.8vw,2.9rem)] font-black leading-[1.16] tracking-[-0.05em] ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 max-w-lg text-xs leading-7 sm:text-[13px] ${
            light ? "text-white/70" : "text-muted"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
