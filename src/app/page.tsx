import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BeforeAfter } from "@/components/BeforeAfter";
import { CtaBand } from "@/components/CtaBand";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Flourish } from "@/components/Flourish";
import { Hero } from "@/components/Hero";
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

export default function HomePage() {
  const featured = services.filter((service) => service.featured);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero
        image="/images/hero-d-portrait.jpg"
        mobileImage="/images/hero-options/d.jpg"
        alt="بیمار خندان با آینه در کلینیک دندانپزشکی آرمان"
        position="50% 30%"
        mobilePosition="78% 40%"
        priority
      />

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
