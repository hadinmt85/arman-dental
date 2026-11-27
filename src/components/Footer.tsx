import Link from "next/link";
import { Icon, type IconName } from "./Icon";
import { services, site } from "@/lib/site";

const quickLinks = [
  { href: "/services", label: "خدمات درمانی" },
  { href: "/about", label: "درباره پزشک" },
  { href: "/gallery", label: "نتایج درمان" },
  { href: "/appointment", label: "رزرو نوبت" },
  { href: "/contact", label: "تماس و آدرس" },
];

const socialLinks: { href: string; label: string; icon: IconName }[] = [
  { href: site.instagram, label: "اینستاگرام", icon: "instagram" },
  { href: site.telegram, label: "تلگرام", icon: "telegram" },
  { href: site.whatsapp, label: "واتساپ", icon: "whatsapp" },
];

export function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden border-t border-line/70 bg-paper">
      <div className="pointer-events-none absolute inset-0 bg-grid-soft opacity-40" />
      <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-mint-200/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-brand-200/25 blur-3xl" />

      <div className="container-x relative pb-24 pt-16 sm:pb-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="group flex items-center gap-2.5">
              <span className="grid h-11 w-11 place-items-center rounded-full border border-mint-300/80 bg-white/50 text-mint-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] transition duration-500 group-hover:rotate-6">
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

            <p className="mt-5 max-w-sm text-xs leading-7 text-muted">
              کلینیک تخصصی دندانپزشکی در سعادت‌آباد تهران؛ درمان دیجیتال، تیم
              متخصص و مسیری شفاف تا لبخند نهایی.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-3 py-1.5 text-[10px] font-medium text-muted backdrop-blur transition hover:border-brand-200 hover:bg-white hover:text-brand-700"
                >
                  <Icon name={social.icon} className="h-3.5 w-3.5" />
                  {social.label}
                </a>
              ))}
            </div>

            <p className="mt-6 text-[8px] font-medium tracking-[0.32em] text-muted">
              ARMAN DENTAL CLINIC
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="flex items-center gap-2 text-[10px] font-bold tracking-[0.08em] text-ink">
              <span className="h-1 w-1 rounded-full bg-brand-500" />
              دسترسی سریع
            </h3>
            <ul className="mt-5 space-y-1.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex min-h-8 items-center gap-2 text-xs text-ink-soft transition hover:text-brand-600"
                  >
                    <Icon
                      name="chevronLeft"
                      className="h-3 w-3 text-brand-300 transition group-hover:-translate-x-0.5 group-hover:text-brand-500"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="rounded-[1.5rem] border border-white/70 bg-white/70 p-5 shadow-card backdrop-blur">
              <h3 className="flex items-center gap-2 text-[10px] font-bold tracking-[0.08em] text-ink">
                <span className="h-1 w-1 rounded-full bg-mint-500" />
                اطلاعات تماس
              </h3>
              <div className="mt-4 space-y-3.5 text-xs text-ink-soft">
                <p className="flex items-start gap-2.5 leading-6">
                  <Icon
                    name="pin"
                    className="mt-0.5 h-4 w-4 shrink-0 text-brand-500"
                  />
                  {site.address}
                </p>
                <a
                  href={`tel:${site.phoneHref}`}
                  dir="ltr"
                  className="flex w-fit items-center gap-2.5 font-medium transition hover:text-brand-600"
                >
                  <Icon name="phone" className="h-4 w-4 text-brand-500" />
                  {site.phone}
                </a>
                <p className="flex items-start gap-2.5 leading-6 text-muted">
                  <Icon
                    name="clock"
                    className="mt-0.5 h-4 w-4 shrink-0 text-brand-500"
                  />
                  شنبه تا چهارشنبه ۹ تا ۲۰
                  <br />
                  پنجشنبه ۹ تا ۱۴ — جمعه تعطیل
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5 border-t border-line/80 pt-4">
                {services.slice(0, 3).map((service) => (
                  <Link
                    key={service.id}
                    href={`/services#${service.id}`}
                    className="inline-flex items-center rounded-full bg-sky-soft px-2.5 py-1 text-[9px] text-muted transition hover:bg-brand-50 hover:text-brand-700"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line/80 pt-6 text-[10px] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© ۱۴۰۵ کلینیک دندانپزشکی آرمان — تمامی حقوق محفوظ است.</p>
          <div className="flex items-center gap-4">
            <span className="hidden text-[8px] tracking-[0.24em] text-muted sm:block">
              ۱۸ YEARS OF CARE
            </span>
            <a
              href="/appointment"
              className="inline-flex min-h-6 items-center gap-1 font-semibold text-brand-600 transition hover:text-brand-700"
            >
              رزرو نوبت آنلاین
              <Icon name="arrowLeft" className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
