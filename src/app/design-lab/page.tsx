import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { services, testimonials } from "@/lib/site";

export const metadata: Metadata = {
  title: "Design Lab — سیستم طراحی آرمان",
  description:
    "مکاپ نسخه دوم سیستم طراحی کلینیک آرمان؛ تایپوگرافی، پالت، کارت‌ها و اجزای رابط.",
  robots: { index: false, follow: false },
};

const palette = [
  { name: "Green 600", hex: "#356047", className: "bg-brand-600", text: "text-white" },
  { name: "Green 900", hex: "#173026", className: "bg-brand-900", text: "text-white" },
  { name: "Gold 500", hex: "#C9A45A", className: "bg-mint-500", text: "text-white" },
  { name: "Paper", hex: "#F4EFE4", className: "bg-paper", text: "text-ink" },
  { name: "Ink", hex: "#1B3A2F", className: "bg-ink", text: "text-white" },
  { name: "Line", hex: "#E6DBC7", className: "bg-line", text: "text-ink" },
];

const upgrades = [
  {
    title: "هدر شیشه‌ای با حالت اسکرول",
    text: "پس‌زمینهٔ محو، پیل‌های ناوبری و سایهٔ نرم هنگام اسکرول.",
    icon: "scan" as const,
  },
  {
    title: "تایپوگرافی نمایشی",
    text: "وزن ۹۰۰، تراکم حروف بازتر و سلسله‌مراتب واضح‌تر در تیترها.",
    icon: "sparkles" as const,
  },
  {
    title: "لایه‌بندی و بافت",
    text: "گرید محو، نورهای نرم و دانهٔ ظریف برای عمق بیشتر بدون شلوغی.",
    icon: "award" as const,
  },
  {
    title: "کارت‌های تعاملی",
    text: "حاشیهٔ گرادیانی، درخشش هاور و زوم آرام تصویر درمان‌ها.",
    icon: "sparkle" as const,
  },
  {
    title: "بخش‌های شماره‌دار",
    text: "شماره‌گذاری ۰۱ تا ۰۵ برای ریتم خواندن و حس مجله‌ای.",
    icon: "checkCircle" as const,
  },
  {
    title: "حرکت کنترل‌شده",
    text: "مارکی خدمات، شناوری آرام کارت‌ها و احترام به کاهش حرکت.",
    icon: "heart" as const,
  },
];

export default function DesignLabPage() {
  return (
    <div className="bg-paper">
      <section className="relative isolate overflow-hidden border-b border-line/70 bg-hero">
        <div className="pointer-events-none absolute inset-0 bg-grid-soft opacity-70" />
        <div className="pointer-events-none absolute -left-24 top-8 h-64 w-64 rounded-full bg-brand-200/35 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-mint-200/40 blur-3xl" />

        <div className="container-x relative pb-14 pt-12 sm:pb-16 sm:pt-16">
          <span className="eyebrow">Design Lab / Version 3</span>
          <h1 className="mt-5 max-w-3xl text-[clamp(2.4rem,5.4vw,4.3rem)] font-black leading-[1.06] tracking-[-0.055em] text-ink">
            سیستم طراحی
            <span className="text-gradient block">آرمان.</span>
          </h1>
          <p className="mt-5 max-w-xl text-[13px] leading-8 text-muted">
            پالت کرم، سبز تیره و طلایی مرجع، با لایه‌بندی دقیق‌تر، تایپوگرافی
            بزرگ‌تر و جزئیات نرم. این صفحه مرجع بصری نسخهٔ سوم است؛ همهٔ اجزا از
            کامپوننت‌های واقعی سایت استفاده می‌کنند.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="chip">پالت مرجع</span>
            <span className="chip">RTL و فارسی</span>
            <span className="chip">Lighthouse 100</span>
            <span className="chip">Next.js + Tailwind</span>
          </div>
        </div>
      </section>

      <section className="container-x py-14 sm:py-16">
        <div className="grid gap-4 lg:grid-cols-12">
          <div className="rounded-[1.75rem] border border-line/80 bg-surface/90 p-6 shadow-card backdrop-blur-sm lg:col-span-7">
            <span className="eyebrow">۰۱ / پالت رنگ</span>
            <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
              {palette.map((color) => (
                <div
                  key={color.name}
                  className={`flex h-24 flex-col justify-between rounded-2xl border border-black/5 p-3 ${color.className} ${color.text}`}
                >
                  <span className="text-[9px] font-semibold opacity-80">
                    {color.name}
                  </span>
                  <span className="text-[10px] font-bold tracking-wide" dir="ltr">
                    {color.hex}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[10px] leading-6 text-muted">
              کرم گرم، سبز تیره و طلایی؛ سه لایهٔ رنگی که عمق، گرما و اعتماد را
              هم‌زمان منتقل می‌کنند.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-line/80 bg-surface/90 p-6 shadow-card backdrop-blur-sm lg:col-span-5">
            <span className="eyebrow">۰۲ / تایپوگرافی</span>
            <p className="mt-5 text-[clamp(1.8rem,3.6vw,2.6rem)] font-black leading-[1.12] tracking-[-0.05em] text-ink">
              لبخندی که
              <span className="text-gradient block">می‌ماند.</span>
            </p>
            <div className="mt-5 space-y-2 border-t border-line/80 pt-4">
              <p className="text-[13px] font-bold text-ink">H3 — عنوان کارت / ۱۵px</p>
              <p className="text-[12px] leading-7 text-muted">
                متن بدنه با فاصلهٔ خط ۷ و اندازهٔ ۱۲ تا ۱۳ پیکسل؛ خوانا و آرام.
              </p>
              <p className="text-[9px] tracking-[0.24em] text-muted/70">
                LABEL / 9PX / 0.24EM
              </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="chip">Estedad Variable</span>
              <span className="chip">وزن ۱۰۰ تا ۹۰۰</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x pb-14 sm:pb-16">
        <div className="rounded-[1.75rem] border border-line/80 bg-surface/90 p-6 shadow-card backdrop-blur-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="eyebrow">۰۳ / اجزای رابط</span>
              <h2 className="mt-3 text-2xl font-black tracking-[-0.04em] text-ink">
                دکمه‌ها، فیلدها و چیپ‌ها.
              </h2>
            </div>
            <p className="max-w-xs text-[10px] leading-6 text-muted">
              حالت‌های اصلی و هاور؛ گوشه‌های نرم‌تر، سایهٔ لایه‌ای و بازخورد
              حرکتی ملایم.
            </p>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <button type="button" className="btn btn-primary btn-sm">
                  دکمه اصلی
                  <Icon name="arrowLeft" className="h-3.5 w-3.5" />
                </button>
                <button type="button" className="btn btn-outline btn-sm">
                  دکمه ثانویه
                </button>
                <button type="button" className="btn btn-soft btn-sm">
                  دکمه نرم
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="chip">چیپ پیش‌فرض</span>
                <span className="chip">
                  <span className="h-1 w-1 rounded-full bg-mint-500" />
                  وضعیت فعال
                </span>
                <span className="chip">ایمپلنت</span>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="label">نام</label>
                  <input className="field" placeholder="مثلاً سارا" />
                </div>
                <div>
                  <label className="label">شماره موبایل</label>
                  <input className="field" placeholder="09123456789" dir="ltr" />
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/70 bg-page-soft p-4">
              <div className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-100 to-white text-brand-600 ring-1 ring-brand-200/70">
                  <Icon name="shield" className="h-5 w-5" />
                </span>
                <div>
                  <b className="block text-[12px] font-bold text-ink">
                    کارت اطلاعات
                  </b>
                  <span className="mt-1 block text-[10px] leading-6 text-muted">
                    سطح شیشه‌ای، حاشیهٔ روشن و سایهٔ دولایه؛ همان الگویی که در
                    کارت‌های درمان و نظرات استفاده شده است.
                  </span>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 border-t border-line/80 pt-3">
                <span className="flex h-6 items-center gap-1 rounded-full bg-amber-50 px-2 text-[9px] font-semibold text-amber-600">
                  <Icon name="star" className="h-3 w-3" />
                  ۴.۹
                </span>
                <span className="text-[9px] text-muted">
                  ۱٬۲۰۰ نظر ثبت‌شده
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x pb-14 sm:pb-16">
        <div className="grid gap-4 lg:grid-cols-12">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/75 bg-hero p-5 shadow-card sm:p-7 lg:col-span-8">
            <div className="pointer-events-none absolute inset-0 bg-grid-soft opacity-60" />
            <div className="relative">
              <span className="eyebrow">۰۴ / پیش‌نمایش هیرو</span>
              <div className="mt-5 grid items-center gap-5 sm:grid-cols-[1.05fr_0.95fr]">
                <div>
                  <div className="flex flex-wrap gap-2">
                    <span className="glass rounded-full px-2.5 py-1 text-[8px] font-medium text-ink-soft">
                      سعادت‌آباد، تهران
                    </span>
                    <span className="rounded-full border border-mint-200 bg-mint-50 px-2.5 py-1 text-[8px] font-semibold text-mint-700">
                      پذیرش باز است
                    </span>
                  </div>
                  <p className="mt-3 text-[clamp(1.5rem,3vw,2.3rem)] font-black leading-[1.08] tracking-[-0.05em] text-ink">
                    دندانپزشکی،
                    <span className="text-gradient block">بدون نگرانی.</span>
                  </p>
                  <p className="mt-3 max-w-xs text-[9.5px] leading-6 text-muted">
                    درمان تخصصی با آرامش، شفافیت و تجهیزات دیجیتال؛ از مشاوره تا
                    لبخند نهایی.
                  </p>
                  <div className="mt-4 flex gap-2">
                    <span className="btn btn-primary btn-sm !px-3 !py-2 !text-[10px]">
                      رزرو نوبت
                    </span>
                    <span className="btn btn-outline btn-sm !px-3 !py-2 !text-[10px]">
                      خدمات
                    </span>
                  </div>
                </div>
                <div className="relative">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/80 bg-sky shadow-card">
                    <Image
                      src="/images/hero-green.jpg"
                      alt="پیش‌نمایش تصویر هیرو"
                      fill
                      sizes="(min-width: 1024px) 260px, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <span className="glass absolute -right-2 top-4 rounded-xl px-2.5 py-1.5 text-[8px] font-semibold text-ink">
                    نوبت آزاد ۱۷:۳۰
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-line/80 bg-surface/90 p-6 shadow-card backdrop-blur-sm lg:col-span-4">
            <span className="eyebrow">۰۵ / حرکت</span>
            <ul className="mt-5 space-y-4">
              {[
                "مارکی آرام خدمات با توقف روی هاور",
                "شنای نرم نورهای پس‌زمینه",
                "زوم ۱.۰۵ تصویر کارت در هاور",
                "احترام کامل به prefers-reduced-motion",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-[10px] leading-6 text-muted"
                >
                  <Icon
                    name="check"
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-mint-600"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-x pb-14 sm:pb-16">
        <span className="eyebrow">۰۶ / کارت‌های واقعی</span>
        <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          <ServiceCard service={services[0]} index={1} detailed />
          <ServiceCard service={services[1]} index={2} detailed />
          <TestimonialCard testimonial={testimonials[0]} />
        </div>
      </section>

      <section className="border-y border-line/70 bg-surface/60">
        <div className="container-x py-14 sm:py-16">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="eyebrow">۰۷ / چه چیزی تغییر کرد</span>
              <h2 className="mt-3 text-[clamp(1.8rem,3.5vw,2.6rem)] font-black tracking-[-0.045em] text-ink">
                پیشرفت در جزئیات، نه در رنگ.
              </h2>
            </div>
            <Link href="/" className="btn btn-outline btn-sm shrink-0">
              بازگشت به سایت
              <Icon name="arrowLeft" className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {upgrades.map((item, index) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-white/75 bg-white/80 p-5 shadow-card backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-brand-200/80"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-100 to-white text-brand-600 ring-1 ring-brand-200/60">
                    <Icon name={item.icon} className="h-4 w-4" />
                  </span>
                  <span
                className={`text-[9px] tabular-nums text-muted`}
              >
                    ۰{index + 1}
                  </span>
                </div>
                <h3 className="mt-3 text-[12px] font-bold text-ink">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-[10px] leading-6 text-muted">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 rounded-2xl border border-brand-100 bg-brand-50/60 p-4 text-[10px] leading-6 text-brand-800">
            این صفحه یک مکاپ مرجع است و در منو، سایت‌مپ یا نتایج جستجو قرار
            نمی‌گیرد. طراحی جدید روی صفحات اصلی سایت اعمال شده است.
          </p>
        </div>
      </section>
    </div>
  );
}
