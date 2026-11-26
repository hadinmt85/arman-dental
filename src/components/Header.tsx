"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Icon } from "./Icon";
import { site } from "@/lib/site";

const navItems = [
  { href: "/", label: "خانه" },
  { href: "/services", label: "خدمات" },
  { href: "/about", label: "درباره پزشک" },
  { href: "/gallery", label: "نتایج" },
  { href: "/contact", label: "تماس با ما" },
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50">
      <div className="relative hidden overflow-hidden bg-brand-900 text-white/70 md:block">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_120px_at_80%_-40%,rgba(59,110,232,0.5),transparent_70%)]" />
        <div className="noise pointer-events-none absolute inset-0 opacity-[0.05]" />
        <div className="container-x relative flex h-9 items-center justify-between gap-4 text-[10px]">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2 font-medium text-white/85">
              <span className="relative flex h-1.5 w-1.5 text-emerald-400">
                <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              پذیرش آنلاین فعال است
            </span>
            <span className="hidden items-center gap-2 lg:flex">
              <Icon name="clock" className="h-3.5 w-3.5 text-brand-300" />
              شنبه تا چهارشنبه ۹ تا ۲۰ — پنجشنبه ۹ تا ۱۴
            </span>
          </div>

          <a
            href={`tel:${site.phoneHref}`}
            dir="ltr"
            className="inline-flex items-center gap-2 font-semibold tracking-wide text-white transition hover:text-brand-200"
          >
            <Icon name="phone" className="h-3.5 w-3.5 text-brand-300" />
            {site.phone}
          </a>
        </div>
      </div>

      <div
        data-scrolled={scrolled}
        className="border-b border-white/60 bg-white/70 backdrop-blur-2xl transition-shadow duration-500 data-[scrolled=true]:border-line/80 data-[scrolled=true]:bg-white/85 data-[scrolled=true]:shadow-[0_18px_40px_-34px_rgba(11,42,69,0.55)]"
      >
        <div className="container-x flex h-[76px] items-center justify-between gap-6">
          <Link href="/" className="group flex shrink-0 items-center gap-2.5">
            <span className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-[0.95rem] bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 text-white shadow-[0_14px_26px_-14px_rgba(30,79,216,0.9)] ring-1 ring-white/25 transition duration-500 group-hover:scale-[1.04]">
              <span className="absolute inset-x-2 top-1 h-px bg-white/40" />
              <Icon name="tooth" className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-lg font-extrabold leading-tight tracking-[-0.03em] text-ink">
                آرمان
              </span>
              <span className="mt-0.5 flex items-center gap-1.5 text-[9px] text-muted">
                <span className="h-1 w-1 rounded-full bg-mint-500" />
                کلینیک دندانپزشکی
              </span>
            </span>
          </Link>

          <nav
            className="hidden items-center gap-1 rounded-full border border-white/70 bg-white/55 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur md:flex"
            aria-label="ناوبری اصلی"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link"
                data-active={isActive(item.href)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${site.phoneHref}`}
              dir="ltr"
              className="hidden text-[11px] font-semibold text-ink transition hover:text-brand-600 xl:block"
            >
              {site.phone}
            </a>

            <Link
              href="/appointment"
              className="btn btn-primary btn-sm hidden shadow-glow sm:inline-flex"
            >
              رزرو نوبت
              <Icon name="arrowLeft" className="h-3.5 w-3.5" />
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen((value) => !value)}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? "بستن منو" : "باز کردن منو"}
              className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-white/80 text-ink transition hover:border-brand-200 hover:bg-brand-50 md:hidden"
            >
              <Icon name={menuOpen ? "close" : "menu"} className="h-5 w-5" />
            </button>
          </div>
        </div>

        {menuOpen ? (
          <div
            id="mobile-nav"
            className="border-t border-line/80 bg-white/95 shadow-soft backdrop-blur-xl md:hidden"
          >
            <div className="container-x py-4">
              <nav aria-label="ناوبری موبایل" className="space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-sm font-semibold transition ${
                      isActive(item.href)
                        ? "bg-brand-50 text-brand-700"
                        : "text-ink-soft hover:bg-sky-soft"
                    }`}
                  >
                    {item.label}
                    <Icon
                      name="chevronLeft"
                      className="h-4 w-4 text-brand-500"
                    />
                  </Link>
                ))}
              </nav>

              <div className="mt-4 flex flex-col gap-2.5 border-t border-line/80 pt-4">
                <Link
                  href="/appointment"
                  onClick={() => setMenuOpen(false)}
                  className="btn btn-primary w-full"
                >
                  رزرو نوبت
                  <Icon name="arrowLeft" className="h-4 w-4" />
                </Link>
                <a
                  href={`tel:${site.phoneHref}`}
                  dir="ltr"
                  className="text-center text-sm font-semibold text-muted"
                >
                  {site.phone}
                </a>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
