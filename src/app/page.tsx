import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BeforeAfter } from "@/components/BeforeAfter";
import { CtaBand } from "@/components/CtaBand";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Icon } from "@/components/Icon";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import {
  doctors,
  faqs,
  services,
  site,
  testimonials,
} from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: site.name,
  description: site.description,
  telephone: site.phoneHref,
  email: site.email,
  priceRange: "$$",
  medicalSpecialty: "Dentistry",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address,
    addressLocality: "تهران",
    addressCountry: "IR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday"],
      opens: "09:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Thursday",
      opens: "09:00",
      closes: "14:00",
    },
  ],
};

const features = [
  {
    icon: "shield" as const,
    title: "استریلیزاسیون استاندارد",
    text: "پروتکل‌های کنترل عفونت مطابق استانداردهای وزارت بهداشت.",
    tone: "brand",
  },
  {
    icon: "sparkle" as const,
    title: "تعرفه شفاف",
    text: "هزینه‌ها پیش از شروع درمان به‌صورت مکتوب اعلام می‌شود.",
    tone: "mint",
  },
  {
    icon: "heart" as const,
    title: "پیگیری بعد از درمان",
    text: "تماس پیگیری و ویزیت کنترل دوره‌ای برای نتیجه پایدار.",
    tone: "brand",
  },
];

const marqueeItems = [
  "ایمپلنت دیجیتال",
  "لمینت سرامیکی",
  "ارتودنسی نامرئی",
  "بلیچینگ",
  "درمان ریشه",
  "دندانپزشکی کودکان",
  "روکش زیرکونیا",
  "جرم‌گیری و بروساژ",
];

export default function HomePage() {
  const featured = services.filter((service) => service.featured);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-hero">
        <div className="pointer-events-none absolute inset-0 bg-grid-soft opacity-70" />
        <div className="float-slower pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-brand-200/35 blur-3xl" />
        <div className="float-slow pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-mint-200/40 blur-3xl" />

        <div className="container-x relative grid gap-12 pb-24 pt-12 sm:pt-16 md:grid-cols-12 md:items-center md:gap-8 md:pb-28">
          <div className="animate-fade md:col-span-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[10px] font-medium text-ink-soft">
                <Icon name="pin" className="h-3.5 w-3.5 text-brand-600" />
                سعادت‌آباد، تهران
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-mint-200/80 bg-mint-50/80 px-3 py-1.5 text-[10px] font-semibold text-mint-700 backdrop-blur">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint-500 opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-mint-500" />
                </span>
                پذیرش امروز باز است
              </span>
            </div>

            <h1 className="mt-7 text-[clamp(2.9rem,6vw,5rem)] font-black leading-[1.04] tracking-[-0.06em] text-ink">
              دندانپزشکی،
              <span className="text-gradient relative mt-1 block w-fit">
                بدون نگرانی.
                <svg
                  viewBox="0 0 300 12"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                  className="absolute -bottom-2 right-0 h-3 w-full text-mint-400"
                >
                  <path
                    d="M2 9C70 3 180 2 298 7"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    opacity="0.7"
                  />
                </svg>
              </span>
            </h1>

            <p className="mt-7 max-w-md text-[13px] leading-8 text-muted">
              درمان تخصصی با آرامش، شفافیت و تجهیزات دیجیتال. از مشاوره تا
              لبخند نهایی، همه‌چیز روشن و بدون استرس است.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/appointment" className="btn btn-primary">
                رزرو نوبت آنلاین
                <Icon name="arrowLeft" className="h-4 w-4" />
              </Link>
              <Link href="/services" className="btn btn-outline">
                مشاهده خدمات
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-line/80 pt-6">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2.5 rtl:space-x-reverse">
                  {[
                    { initial: "م", tone: "from-brand-100 to-brand-50 text-brand-700" },
                    { initial: "س", tone: "from-mint-100 to-mint-50 text-mint-700" },
                    { initial: "ر", tone: "from-brand-200/70 to-brand-50 text-brand-800" },
                  ].map((avatar) => (
                    <span
                      key={avatar.initial}
                      className={`grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br text-[9px] font-bold ring-2 ring-white ${avatar.tone}`}
                    >
                      {avatar.initial}
                    </span>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Icon key={index} name="star" className="h-3 w-3" />
                    ))}
                    <b className="ms-1 text-[11px] font-extrabold text-ink">
                      ۴.۹
                    </b>
                  </div>
                  <span className="mt-0.5 block text-[9px] text-muted">
                    از ۱٬۲۰۰ نظر ثبت‌شده
                  </span>
                </div>
              </div>

              <span className="hidden h-9 w-px bg-line sm:block" />

              <div>
                <b className="block text-[15px] font-extrabold text-ink">
                  ۱۲٬۰۰۰+
                </b>
                <span className="block text-[9px] text-muted">
                  بیمار درمان‌شده
                </span>
              </div>
              <div>
                <b className="block text-[15px] font-extrabold text-ink">
                  ۱۸ سال
                </b>
                <span className="block text-[9px] text-muted">تجربه بالینی</span>
              </div>
            </div>
          </div>

          <div className="animate-fade fade-2 relative mx-auto w-full max-w-[470px] md:col-span-6">
            <div className="pointer-events-none absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-brand-200/40 via-white/0 to-mint-200/50 blur-2xl" />
            <div className="pointer-events-none absolute -right-5 -top-5 hidden h-28 w-28 rounded-full border border-brand-200/70 sm:block" />
            <div className="pointer-events-none absolute -bottom-6 left-6 hidden h-16 w-16 rotate-12 rounded-2xl border border-mint-300/60 sm:block" />

            <span className="absolute -left-9 top-1/2 hidden -translate-y-1/2 -rotate-90 text-[8px] font-semibold tracking-[0.34em] text-muted/60 lg:block">
              DIGITAL DENTISTRY
            </span>

            <div className="relative rounded-[2.25rem] border border-white/80 bg-white/65 p-2.5 shadow-soft backdrop-blur">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.85rem] bg-sky">
                <Image
                  src="/images/hero-mint-clean.jpg"
                  alt="کلوزآپ لب و دندان با لب صورتی ملایم، بدون چهره"
                  fill
                  priority
                  sizes="(min-width: 1024px) 450px, 90vw"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-900/45 via-transparent to-transparent" />
                <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between gap-3 rounded-2xl border border-white/25 bg-brand-900/20 px-3.5 py-2.5 text-white backdrop-blur-md">
                  <span className="inline-flex items-center gap-1.5 text-[9px] font-medium">
                    <span className="h-1 w-1 rounded-full bg-mint-300" />
                    کلینیک تخصصی لبخند
                  </span>
                  <span className="text-[8px] text-white/70">
                    لمینت · ایمپلنت
                  </span>
                </div>
              </div>
            </div>

            <div className="glass absolute -right-2 top-7 flex items-center gap-2.5 rounded-2xl px-3.5 py-2.5 sm:right-0">
              <span className="grid h-8 w-8 place-items-center rounded-xl bg-mint-100 text-mint-700">
                <Icon name="calendar" className="h-4 w-4" />
              </span>
              <span>
                <b className="block text-[10px] font-bold text-ink">
                  نوبت آزاد
                </b>
                <span className="mt-0.5 flex items-center gap-1.5 text-[8px] text-muted">
                  امروز، ۱۷:۳۰
                  <span className="h-1 w-1 rounded-full bg-mint-500" />
                </span>
              </span>
            </div>

            <div className="glass absolute -left-3 bottom-10 rounded-2xl px-4 py-3 sm:-left-6">
              <div className="flex items-center gap-2">
                <b className="text-xl font-black leading-none text-ink">
                  ۴.۹
                </b>
                <span className="text-[9px] text-amber-400">★★★★★</span>
              </div>
              <span className="mt-1.5 block text-[8px] text-muted">
                رضایت بیماران
              </span>
              <span className="mt-2 block h-1 w-full overflow-hidden rounded-full bg-line">
                <span className="block h-full w-[96%] rounded-full bg-gradient-to-l from-brand-500 to-mint-400" />
              </span>
            </div>

            <div className="absolute -bottom-5 right-6 hidden items-center gap-1.5 rounded-full border border-white/70 bg-white/80 px-3 py-1.5 text-[8px] font-medium text-muted shadow-card backdrop-blur sm:flex">
              <Icon name="shield" className="h-3 w-3 text-mint-600" />
              گارانتی ۱۰ ساله ایمپلنت
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1.5 text-muted/70 lg:flex">
          <span className="text-[8px] tracking-[0.2em]">SCROLL</span>
          <Icon name="arrowDown" className="h-3.5 w-3.5 animate-bounce" />
        </div>
      </section>

      {/* Feature strip */}
      <section className="container-x relative z-10 -mt-14 sm:-mt-16">
        <div className="glass grid overflow-hidden rounded-[1.6rem] sm:grid-cols-3 sm:divide-x sm:divide-line/70 sm:rtl:divide-x-reverse">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group flex items-start gap-3.5 p-5 transition duration-300 hover:bg-white/60 sm:p-6"
            >
              <span
                className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl ring-1 transition duration-500 group-hover:scale-105 ${
                  feature.tone === "mint"
                    ? "bg-gradient-to-br from-mint-100 to-white text-mint-700 ring-mint-200/70"
                    : "bg-gradient-to-br from-brand-100 to-white text-brand-600 ring-brand-200/70"
                }`}
              >
                <Icon name={feature.icon} className="h-5 w-5" />
              </span>
              <span>
                <span className="flex items-center gap-2">
                  <b className="block text-[12px] font-bold text-ink">
                    {feature.title}
                  </b>
                  <span className="text-[8px] font-semibold tabular-nums text-muted">
                    ۰{index + 1}
                  </span>
                </span>
                <span className="mt-1 block text-[10px] leading-6 text-muted">
                  {feature.text}
                </span>
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Marquee */}
      <div
        aria-hidden="true"
        className="mt-12 border-y border-line/70 bg-white/50 py-4 backdrop-blur-sm"
      >
        <div className="marquee-mask overflow-hidden" dir="ltr">
          <div className="marquee-track flex w-max items-center" dir="ltr">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex items-center">
                {marqueeItems.map((item) => (
                  <span
                    key={`${copy}-${item}`}
                    className="flex items-center gap-3 pe-10 text-[11px] font-semibold text-ink-soft/75"
                  >
                    <span className="h-1 w-1 rounded-full bg-brand-400" />
                    {item}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services */}
      <section className="section" id="services">
        <div className="container-x">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="خدمات"
              index="۰۱"
              title="هر درمان، یک مسیر روشن."
              description="از پیشگیری تا ایمپلنت و طراحی لبخند؛ با معاینه دقیق و پلن شفاف، مناسب شرایط شما."
            />
            <Link href="/services" className="link-underline shrink-0">
              همه خدمات
              <Icon name="arrowLeft" className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index + 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="border-y border-line bg-page-soft">
        <div className="container-x section">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="نتایج"
              index="۰۲"
              title="تفاوت را ببین."
              description="یک نمونه واقعی از تغییر رنگ دندان‌ها؛ اسلایدر را بکش و قبل و بعد را مقایسه کن."
            />
            <Link href="/gallery" className="link-underline shrink-0">
              گالری کامل نتایج
              <Icon name="arrowLeft" className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-8 rounded-[1.75rem] border border-line bg-white p-2.5 shadow-soft">
            <BeforeAfter
              src="/images/smile.jpg"
              alt="مقایسه قبل و بعد بلیچینگ دندان در کلینیک آرمان"
              className="aspect-[16/9] w-full rounded-[1.25rem]"
              sizes="(min-width: 1280px) 1160px, 100vw"
            />
            <div className="flex flex-wrap items-center justify-between gap-3 px-3 pb-2 pt-3 text-[9px] text-muted">
              <span>بلیچینگ حرفه‌ای · ۱ جلسه · تصویر واقعی با شبیه‌سازی دیجیتال رنگ</span>
              <Link
                href="/gallery"
                className="font-semibold text-brand-600 transition hover:text-brand-700"
              >
                مشاهده نمونه‌ها ←
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor */}
      <section className="section">
        <div className="container-x">
          <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/85 shadow-soft backdrop-blur-sm">
            <div className="grid md:grid-cols-[0.85fr_1.15fr]">
              <div className="relative min-h-[320px] bg-sky md:min-h-[420px]">
                <Image
                  src="/images/doctor.jpg"
                  alt="دکتر آرمان رضایی، بنیان‌گذار کلینیک آرمان"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover object-[50%_20%]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-900/45 via-brand-900/5 to-transparent" />
                <div className="absolute bottom-4 right-4 rounded-2xl border border-white/25 bg-white/85 px-3.5 py-2.5 text-[9px] shadow-card backdrop-blur">
                  <b className="block text-[13px] font-extrabold text-ink">
                    ۱۸ سال
                  </b>
                  تجربه بالینی
                </div>
                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-brand-900/25 px-3 py-1.5 text-[8px] font-medium text-white backdrop-blur-md">
                  <span className="h-1 w-1 rounded-full bg-mint-300" />
                  هیئت علمی و مدرس دوره‌های ایمپلنت
                </span>
              </div>

              <div className="relative p-6 sm:p-9">
                <span className="pointer-events-none absolute left-6 top-5 hidden text-[5rem] font-black leading-none text-brand-900/[0.04] lg:block">
                  ۰۳
                </span>
                <span className="inline-flex items-center gap-2.5 text-[10px] font-bold tracking-[0.08em] text-brand-600">
                  <span className="tabular-nums text-brand-600">۰۳</span>
                  <span className="h-px w-7 bg-gradient-to-r from-brand-600 to-brand-300" />
                  تیم درمان
                </span>
                <h2 className="mt-4 text-[clamp(1.8rem,3.2vw,2.5rem)] font-black leading-[1.18] tracking-[-0.045em] text-ink">
                  {doctors[0].name}
                </h2>
                <p className="mt-2 text-[11px] font-semibold text-brand-600">
                  {doctors[0].role}
                </p>
                <p className="mt-4 max-w-lg text-[12px] leading-7 text-muted">
                  {doctors[0].bio}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {doctors[0].tags.map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>

                <ul className="mt-5 grid gap-2.5 border-t border-line/80 pt-4">
                  {[
                    "دکترای دندانپزشکی — دانشگاه علوم پزشکی تهران",
                    "فلوشیپ ایمپلنتولوژی — دانشگاه فرایبورگ آلمان",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-[10px] leading-5 text-muted"
                    >
                      <Icon
                        name="check"
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-mint-600"
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link href="/about" className="btn btn-primary btn-sm">
                    درباره دکتر
                    <Icon name="arrowLeft" className="h-3.5 w-3.5" />
                  </Link>
                  <Link href="/appointment" className="link-underline text-xs">
                    رزرو مشاوره
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-y border-line bg-white">
        <div className="container-x section">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="تجربه بیماران"
              index="۰۴"
              title="چیزی که بیماران می‌گویند."
            />
            <p className="flex items-center gap-2 text-[10px] text-muted">
              <Icon name="star" className="h-4 w-4 text-amber-400" />
              ۴.۹ از ۵ — بر اساس نظرسنجی داخلی
            </p>
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {testimonials.slice(0, 3).map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container-x grid gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <SectionHeading
              eyebrow="سؤالات"
              index="۰۵"
              title="هر چیزی که باید بدانی."
              description="اگر پاسخ سوالت را پیدا نکردی، تیم پذیرش آماده کمک است."
            />
            <Link href="/contact" className="btn btn-outline btn-sm mt-5">
              پرسیدن سؤال
              <Icon name="arrowLeft" className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="md:col-span-8">
            <FaqAccordion items={faqs.slice(0, 5)} />
          </div>
        </div>
      </section>

      <div className="pb-16 sm:pb-20">
        <CtaBand />
      </div>
    </>
  );
}
