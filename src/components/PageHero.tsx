import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "./Icon";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  crumb: string;
  children?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  crumb,
  children,
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/70 bg-page-soft">
      <div className="pointer-events-none absolute inset-0 bg-grid-soft opacity-60" />
      <div className="pointer-events-none absolute -left-28 top-2 h-72 w-72 rounded-full bg-brand-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 right-1/4 h-72 w-72 rounded-full bg-mint-200/40 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-200/40 lg:block" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[540px] w-[540px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-200/25 lg:block" />

      <span className="pointer-events-none absolute left-8 top-9 hidden text-[9px] font-medium tracking-[0.34em] text-muted/60 lg:block">
        ARMAN DENTAL
      </span>

      <div className="container-x relative pb-12 pt-8 sm:pb-20 sm:pt-10">
        <nav
          aria-label="مسیر صفحه"
          className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/65 px-3.5 py-1.5 text-[10px] text-muted shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 transition hover:text-brand-600"
          >
            <Icon name="home" className="h-3 w-3" />
            خانه
          </Link>
          <Icon name="chevronLeft" className="h-3 w-3 text-line-strong" />
          <span className="font-medium text-ink-soft">{crumb}</span>
        </nav>

        <div className="mt-8 grid gap-8 md:mt-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <span className="eyebrow">{eyebrow}</span>
            <h1 className="mt-5 text-[2.15rem] font-black leading-[1.1] tracking-[-0.05em] text-ink sm:text-[clamp(2.4rem,5.4vw,4.3rem)] sm:leading-[1.06] sm:tracking-[-0.055em]">
              {title}
            </h1>
          </div>

          <div className="md:col-span-4 md:pb-2">
            <p className="max-w-md border-r-2 border-brand-200 pr-4 text-xs leading-7 text-muted sm:text-[13px]">
              {description}
            </p>
            {children ? <div className="mt-6">{children}</div> : null}
          </div>
        </div>
      </div>
    </section>
  );
}
