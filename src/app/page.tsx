import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BeforeAfter } from "@/components/BeforeAfter";
import { CtaBand } from "@/components/CtaBand";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Flourish } from "@/components/Flourish";
import { Icon } from "@/components/Icon";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceTile } from "@/components/ServiceTile";
import { TestimonialCard } from "@/components/TestimonialCard";
import { doctors, faqs, services, site, testimonials } from "@/lib/site";

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

const trustItems = [
  {
    icon: "shield" as const,
    value: "تضمین",
    label: "کیفیت درمان",
  },
  {
    icon: "award" as const,
    value: "۱۸ سال",
    label: "تجربه بالینی",
  },
  {
    icon: "user" as const,
    value: "+۱۲٬۰۰۰",
    label: "بیمار درمان‌شده",
  },
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
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
          viewBox="0 0 1440 760"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M1000 -40C1080 120 1260 190 1500 170"
            stroke="#c9a45a"
            strokeOpacity="0.35"
          />
          <path
            d="M1040 800C1120 660 1260 600 1500 590"
            stroke="#c9a45a"
            strokeOpacity="0.28"
          />
          <path
            d="M660 20C720 160 840 220 1010 235"
            stroke="#356047"
            strokeOpacity="0.12"
          />
          <path
            d="M20 640C220 570 420 590 660 690"
            stroke="#f4efe4"
            strokeOpacity="0.55"
          />
          <circle cx="1170" cy="126" r="5" fill="#c9a45a" opacity="0.5" />
        </svg>

        {/* Desktop photo */}
        <div className="absolute inset-y-0 left-0 hidden w-[53%] lg:block">
          <Image
            src="/images/hero-green-portrait.jpg"
            alt="بیمار خندان روی صندلی دندانپزشکی در کلینیک آرمان"
            fill
            priority
            sizes="53vw"
            className="object-cover object-[50%_32%]"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-paper/40" />
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-paper to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-paper/80 to-transparent" />
          <Icon
            name="tooth"
            className="absolute left-[54%] top-[20%] h-28 w-28 text-white/10"
          />
        </div>

        <Icon
          name="tooth"
          className="pointer-events-none absolute right-[5%] top-16 hidden h-40 w-40 text-brand-900/[0.035] lg:block"
        />

        <div className="container-x relative pb-24 pt-10 sm:pt-14 lg:min-h-[660px] lg:pb-36 lg:pt-16">
          <div className="animate-fade lg:w-[45%]">
            <div className="flex items-center gap-3 text-[10px] font-medium text-ink-soft">
              <span className="h-px w-8 bg-mint-500/70" />
              کلینیک دندانپزشکی آرمان در سعادت‌آباد، تهران
              <span className="h-px w-8 bg-mint-500/70" />
            </div>

            <h1 className="mt-6 text-[clamp(2.7rem,5.4vw,4.7rem)] font-black leading-[1.14] tracking-[-0.055em] text-brand-900">
              دندانپزشکی،
              <span className="mt-1 block text-brand-800">بدون نگرانی</span>
            </h1>

            <p className="mt-6 max-w-md text-[13.5px] leading-8 text-muted sm:text-[14px]">
              درمان تخصصی با تجهیزات دیجیتال و همراهی تیمی باتجربه؛ از مشاورهٔ
              اولیه تا لبخند نهایی، مسیری روشن و بدون استرس.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/appointment"
                className="btn btn-primary w-full sm:w-auto"
              >
                <Icon name="calendar" className="h-4 w-4" />
                رزرو نوبت مشاوره
              </Link>
              <Link
                href="/services"
                className="btn btn-outline w-full sm:w-auto"
              >
                <span className="grid h-5 w-5 place-items-center rounded-full bg-mint-500 text-white">
                  <Icon name="arrowLeft" className="h-3 w-3" />
                </span>
                مشاهده خدمات
              </Link>
            </div>
          </div>

          {/* Mobile photo */}
          <div className="animate-fade fade-2 relative mt-10 lg:hidden">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-line/70 bg-sky shadow-soft">
              <Image
                src="/images/hero-green.jpg"
                alt="بیمار خندان روی صندلی دندانپزشکی در کلینیک آرمان"
                fill
                priority
                sizes="(min-width: 640px) 90vw, 100vw"
                className="object-cover object-[28%_center]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/25 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-5 right-4 flex items-center gap-3 rounded-2xl border border-line/70 bg-surface/95 px-3.5 py-2.5 shadow-float backdrop-blur">
              <Icon name="star" className="h-7 w-7 fill-mint-500 text-mint-500" />
              <div>
                <div className="text-[15px] font-black leading-none text-brand-900">
                  ۴.۹{" "}
                  <span className="text-[9px] font-medium text-muted">از ۵</span>
                </div>
                <div className="mt-1 text-[9px] text-muted">۱٬۲۰۰ نظر مثبت</div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop rating card */}
        <div className="animate-fade fade-3 absolute bottom-36 left-[5%] z-10 hidden items-center gap-3 rounded-2xl border border-line/70 bg-surface/95 px-4 py-3 shadow-float backdrop-blur lg:flex">
          <Icon name="star" className="h-9 w-9 fill-mint-500 text-mint-500" />
          <div>
            <div className="text-[17px] font-black leading-none text-brand-900">
              ۴.۹ <span className="text-[10px] font-medium text-muted">از ۵</span>
            </div>
            <div className="mt-1.5 text-[9px] text-muted">۱٬۲۰۰ نظر مثبت</div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="container-x relative z-20 -mt-14 sm:-mt-16">
        <div className="grid divide-y divide-line/70 overflow-hidden rounded-[1.25rem] border border-line/80 bg-surface/95 shadow-soft backdrop-blur md:grid-cols-3 md:divide-x md:divide-y-0 md:rtl:divide-x-reverse">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-center gap-3.5 px-5 py-5"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-mint-300/80 bg-mint-50/60 text-mint-600">
                <Icon name={item.icon} className="h-5 w-5" />
              </span>
              <span>
                <b className="block text-[17px] font-black leading-tight text-brand-900">
                  {item.value}
                </b>
                <span className="mt-1 block text-[11px] text-muted">
                  {item.label}
                </span>
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="section" id="services">
        <div className="container-x">
          <div className="text-center">
            <Flourish />
            <h2 className="mt-4 text-[clamp(1.9rem,3.6vw,2.8rem)] font-black leading-[1.18] tracking-[-0.045em] text-brand-900">
              خدمات تخصصی ما
            </h2>
            <p className="mx-auto mt-3 max-w-md text-[12px] leading-7 text-muted">
              از ایمپلنت دیجیتال تا طراحی لبخند؛ هر درمان با معاینه دقیق و پلنی
              شفاف شروع می‌شود.
            </p>
          </div>

          <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {featured.map((service) => (
              <ServiceTile key={service.id} service={service} />
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/services" className="link-underline text-xs">
              مشاهده همه خدمات
              <Icon name="arrowLeft" className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Results + Doctor */}
      <section className="border-y border-line/70 bg-[#f8f2e6]">
        <div className="container-x py-12 sm:py-14">
          <h2 className="sr-only">نتایج درمان و تیم درمان</h2>

          <div className="grid gap-4 lg:grid-cols-[1fr_1.04fr]">
            <div className="lg:order-2">
              <div className="h-full rounded-[1.5rem] border border-line/80 bg-surface/95 p-2.5 shadow-card">
                <BeforeAfter
                  src="/images/smile.jpg"
                  alt="مقایسه قبل و بعد بلیچینگ دندان در کلینیک آرمان"
                  className="aspect-[16/10] w-full rounded-[1.2rem]"
                  sizes="(min-width: 1280px) 560px, 100vw"
                />
                <div className="flex flex-wrap items-center justify-between gap-2 px-3 pb-1.5 pt-3 text-[9px] text-muted">
                  <span>بلیچینگ حرفه‌ای · ۱ جلسه</span>
                  <Link
                    href="/gallery"
                    className="font-semibold text-brand-700 transition hover:text-mint-700"
                  >
                    نمونه‌های بیشتر ←
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:order-1">
              <div className="relative h-full overflow-hidden rounded-[1.5rem] border border-line/80 bg-surface/95 p-4 shadow-card sm:p-6">
                <div className="grid items-center gap-5 sm:grid-cols-[0.78fr_1fr]">
                  <div className="relative order-1 overflow-hidden rounded-[1.15rem] bg-sky">
                    <div className="relative aspect-[4/3] sm:aspect-[4/5]">
                      <Image
                        src="/images/doctor.jpg"
                        alt="دکتر آرمان رضایی، بنیان‌گذار کلینیک آرمان"
                        fill
                        sizes="(min-width: 1024px) 260px, 60vw"
                        className="object-cover object-[50%_18%]"
                      />
                    </div>
                    <span className="absolute bottom-3 right-3 rounded-full border border-line/70 bg-surface/90 px-3 py-1 text-[9px] font-semibold text-brand-800 backdrop-blur">
                      ۱۸ سال تجربه
                    </span>
                  </div>

                  <div className="order-2">
                    <span className="inline-flex items-center gap-2 text-[10px] font-bold text-mint-700">
                      <span className="h-1 w-1 rounded-full bg-mint-500" />
                      {doctors[0].name}
                    </span>
                    <h3 className="mt-2 text-[clamp(1.35rem,2.4vw,1.8rem)] font-black leading-[1.28] tracking-[-0.04em] text-brand-900">
                      متخصص دندانپزشکی زیبایی و ترمیمی
                    </h3>
                    <p className="mt-3 text-[11px] leading-6 text-muted">
                      بیش از ۱۸ سال تجربه با تمرکز بر ایمپلنت و طراحی لبخند؛
                      همراهی‌ات از مشاوره تا پیگیری درمان.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {doctors[0].tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="chip">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href="/about"
                      className="btn btn-primary btn-sm mt-5"
                    >
                      بیشتر درباره دکتر
                      <Icon name="arrowLeft" className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container-x">
          <div className="text-center">
            <Flourish />
            <h2 className="mt-4 text-[clamp(1.9rem,3.6vw,2.8rem)] font-black leading-[1.18] tracking-[-0.045em] text-brand-900">
              نظرات بیماران
            </h2>
            <p className="mx-auto mt-3 flex items-center justify-center gap-2 text-[11px] text-muted">
              <Icon name="star" className="h-3.5 w-3.5 fill-mint-500 text-mint-500" />
              ۴.۹ از ۵ — بر اساس نظرسنجی داخلی
            </p>
          </div>

          <div className="mt-9 grid gap-3 md:grid-cols-3">
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
      <section className="border-t border-line/70">
        <div className="container-x section grid gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <SectionHeading
              eyebrow="سؤالات متداول"
              title="هر چیزی که باید بدانی."
              description="اگر پاسخ سوالت را پیدا نکردی، تیم پذیرش آمادهٔ کمک است."
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
