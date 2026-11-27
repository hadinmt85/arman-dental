"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Icon } from "./Icon";
import { site } from "@/lib/site";

const navItems = [
  { href: "/", label: "خانه" },
  { href: "/services", label: "خدمات" },
  { href: "/gallery", label: "نمونه‌کارها" },
  { href: "/about", label: "درباره ما" },
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
      <div
        data-scrolled={scrolled}
        className="border-b border-line/60 bg-paper/75 backdrop-blur-2xl transition-shadow duration-500 data-[scrolled=true]:bg-paper/90 data-[scrolled=true]:shadow-[0_18px_40px_-34px_rgba(27,58,47,0.45)]"
      >
        <div className="container-x flex h-[84px] items-center justify-between gap-5">
          <Link href="/" className="group flex shrink-0 items-center gap-2.5">
            <span className="grid h-11 w-11 place-items-center rounded-full border border-mint-300/80 bg-white/50 text-mint-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] transition duration-500 group-hover:rotate-6 group-hover:text-mint-700">
              <Icon name="tooth" className="h-6 w-6" />
            </span>
            <span>
              <span className="block text-[19px] font-black leading-tight tracking-[-0.03em] text-brand-900">
                آرمان
              </span>
              <span className="mt-0.5 block text-[9px] text-muted">
                کلینیک دندانپزشکی
              </span>
            </span>
          </Link>

          <nav
            className="hidden items-center gap-7 lg:flex"
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

          <div className="flex items-center gap-2.5">
            <a
              href={`tel:${site.phoneHref}`}
              dir="ltr"
              aria-label={`تماس با ${site.phone}`}
              className="hidden h-10 w-10 place-items-center rounded-full border border-line/80 bg-white/45 text-brand-700 transition hover:border-mint-300 hover:text-mint-700 md:grid"
            >
              <Icon name="phone" className="h-4 w-4" />
            </a>

            <Link
              href="/appointment"
              className="btn btn-primary hidden px-4 py-2.5 text-[11px] sm:inline-flex"
            >
              <Icon name="calendar" className="h-4 w-4" />
              رزرو نوبت
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen((value) => !value)}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? "بستن منو" : "باز کردن منو"}
              className="grid h-10 w-10 place-items-center rounded-full border border-line/80 bg-white/50 text-brand-900 transition hover:border-mint-300 lg:hidden"
            >
              <Icon name={menuOpen ? "close" : "menu"} className="h-5 w-5" />
            </button>
          </div>
        </div>

        {menuOpen ? (
          <div
            id="mobile-nav"
            className="border-t border-line/70 bg-paper/97 shadow-soft backdrop-blur-xl lg:hidden"
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
                        ? "bg-brand-50 text-brand-800"
                        : "text-ink-soft hover:bg-sky-soft"
                    }`}
                  >
                    {item.label}
                    <Icon
                      name="chevronLeft"
                      className="h-4 w-4 text-mint-600"
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
                  <Icon name="calendar" className="h-4 w-4" />
                  رزرو نوبت
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
