import Image from "next/image";
import Link from "next/link";
import { Icon } from "./Icon";

type HeroProps = {
  image: string;
  mobileImage?: string;
  alt: string;
  position?: string;
  mobilePosition?: string;
  priority?: boolean;
};

const trustItems = [
  { icon: "shield" as const, value: "تضمین", label: "کیفیت درمان" },
  { icon: "award" as const, value: "۱۸ سال", label: "تجربه بالینی" },
  { icon: "user" as const, value: "+۱۲٬۰۰۰", label: "بیمار درمان‌شده" },
];

export function Hero({
  image,
  mobileImage,
  alt,
  position = "50% 35%",
  mobilePosition = "50% 45%",
  priority = false,
}: HeroProps) {
  const mobileSrc = mobileImage ?? image;

  return (
    <>
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

        <div className="absolute inset-y-0 left-0 hidden w-[53%] lg:block">
          <Image
            src={image}
            alt={alt}
            fill
            priority={priority}
            sizes="53vw"
            className="object-cover"
            style={{ objectPosition: position }}
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

          <div className="animate-fade fade-2 relative mt-10 lg:hidden">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-line/70 bg-sky shadow-soft">
              <Image
                src={mobileSrc}
                alt={alt}
                fill
                priority={priority}
                sizes="(min-width: 640px) 90vw, 100vw"
                className="object-cover"
                style={{ objectPosition: mobilePosition }}
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
    </>
  );
}
