import { Icon } from "./Icon";
import type { testimonials } from "@/lib/site";

type Testimonial = (typeof testimonials)[number];

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="card-lift relative flex h-full flex-col overflow-hidden rounded-[1.35rem] border border-line/80 bg-surface/90 p-5 shadow-card backdrop-blur-sm hover:border-mint-300/70">
      <Icon
        name="quote"
        className="pointer-events-none absolute -left-3 -top-4 h-24 w-24 text-mint-500/15"
      />

      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-0.5 text-mint-500">
          {Array.from({ length: testimonial.rating }).map((_, index) => (
            <Icon
              key={index}
              name="star"
              className="h-3.5 w-3.5 fill-mint-500"
            />
          ))}
        </div>
        <span className="rounded-full bg-mint-50 px-2 py-0.5 text-[8px] font-semibold text-mint-700">
          نظر بیمار
        </span>
      </div>

      <blockquote className="relative mt-4 flex-1 text-[12.5px] leading-7 text-ink-soft">
        «{testimonial.quote}»
      </blockquote>

      <figcaption className="relative mt-6 flex items-center gap-2.5 border-t border-line/80 pt-4">
        <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-mint-100 to-surface text-[10px] font-bold text-brand-800 ring-1 ring-mint-300/60">
          {testimonial.name.charAt(0)}
        </span>
        <span>
          <span className="block text-[11px] font-semibold text-brand-900">
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
