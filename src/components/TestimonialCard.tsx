import { Icon } from "./Icon";
import type { testimonials } from "@/lib/site";

type Testimonial = (typeof testimonials)[number];

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="card-lift relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-white/75 bg-white/85 p-5 shadow-card backdrop-blur-sm hover:border-brand-200/80">
      <Icon
        name="quote"
        className="pointer-events-none absolute -left-4 -top-4 h-24 w-24 text-brand-900/[0.05]"
      />

      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-0.5 text-amber-400">
          {Array.from({ length: testimonial.rating }).map((_, index) => (
            <Icon key={index} name="star" className="h-3.5 w-3.5" />
          ))}
        </div>
        <span className="rounded-full bg-brand-50/80 px-2 py-0.5 text-[8px] font-semibold text-brand-600">
          نظر بیمار
        </span>
      </div>

      <blockquote className="relative mt-4 flex-1 text-[12px] leading-7 text-ink-soft">
        «{testimonial.quote}»
      </blockquote>

      <figcaption className="relative mt-6 flex items-center gap-2.5 border-t border-line/80 pt-4">
        <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-brand-100 to-white text-[10px] font-bold text-brand-700 ring-1 ring-brand-200/70">
          {testimonial.name.charAt(0)}
        </span>
        <span>
          <span className="block text-[11px] font-semibold text-ink">
            {testimonial.name}
          </span>
          <span className="mt-0.5 block text-[9px] text-muted">
            {testimonial.service}
          </span>
        </span>
        <Icon
          name="checkCircle"
          className="ms-auto h-4 w-4 text-mint-500/70"
        />
      </figcaption>
    </figure>
  );
}
