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
    <section className="relative isolate overflow-hidden border-b border-line/70 bg-page-soft">
      <div className="pointer-events-none absolute inset-0 bg-grid-soft opacity-50" />
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 1440 460"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M960 -60C1040 80 1180 130 1440 120"
          stroke="#c9a45a"
          strokeOpacity="0.32"
        />
        <path
          d="M1000 500C1080 390 1210 350 1440 340"
          stroke="#c9a45a"
          strokeOpacity="0.24"
        />
        <path
          d="M640 10C700 110 800 160 960 170"
          stroke="#356047"
          strokeOpacity="0.1"
        />
      </svg>
      <Icon
        name="tooth"
        className="pointer-events-none absolute -left-8 top-10 h-44 w-44 text-brand-900/[0.035]"
      />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-mint-200/20 blur-3xl" />

      <span className="pointer-events-none absolute left-8 top-9 hidden text-[9px] font-medium tracking-[0.34em] text-muted/70 lg:block">
        ARMAN DENTAL
      </span>

      <div className="container-x relative pb-12 pt-8 sm:pb-16 sm:pt-10">
        <nav
          aria-label="مسیر صفحه"
          className="inline-flex items-center gap-2 rounded-full border border-line/80 bg-white/40 px-3.5 py-1.5 text-[10px] text-muted shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 transition hover:text-mint-700"
          >
            <Icon name="home" className="h-3 w-3 text-mint-600" />
            خانه
          </Link>
          <Icon name="chevronLeft" className="h-3 w-3 text-line-strong" />
          <span className="font-medium text-ink-soft">{crumb}</span>
        </nav>

        <div className="mt-8 grid gap-8 md:mt-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <span className="eyebrow">{eyebrow}</span>
            <h1 className="mt-4 text-[2.15rem] font-black leading-[1.12] tracking-[-0.05em] text-brand-900 sm:text-[clamp(2.4rem,5.4vw,4.2rem)] sm:leading-[1.08] sm:tracking-[-0.055em]">
              {title}
            </h1>
          </div>

          <div className="md:col-span-4 md:pb-2">
            <p className="max-w-md border-r-2 border-mint-400/70 pr-4 text-xs leading-7 text-muted sm:text-[13px]">
              {description}
            </p>
            {children ? <div className="mt-6">{children}</div> : null}
          </div>
        </div>
      </div>
    </section>
  );
}
