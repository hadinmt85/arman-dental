"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Hero } from "./Hero";
import { Icon } from "./Icon";

type Option = {
  code: string;
  title: string;
  note: string;
  image: string;
  position: string;
  mobilePosition: string;
  source: string;
  recommended?: boolean;
};

const options: Option[] = [
  {
    code: "A",
    title: "استایل مجله‌ای",
    note: "فول‌بادی روی صندلی، پس‌زمینهٔ کلینیک گرم و فضای خالی برای تیتر. نزدیک‌ترین گزینه به مکاپ مرجع.",
    image: "/images/hero-options/a.jpg",
    position: "30% 45%",
    mobilePosition: "35% 50%",
    source: "Pexels 11928560",
    recommended: true,
  },
  {
    code: "B",
    title: "کلوزآپ با آینه",
    note: "قاب نزدیک از چهره و لبخند، حس زیبایی و طراحی لبخند را پررنگ می‌کند.",
    image: "/images/hero-options/b.jpg",
    position: "45% 32%",
    mobilePosition: "45% 30%",
    source: "Pexels 11928561",
  },
  {
    code: "C",
    title: "لبخند رو به دوربین",
    note: "ارتباط مستقیم و انسانی با بیمار؛ پس‌زمینهٔ روشن و حس آرامش.",
    image: "/images/hero-options/c.jpg",
    position: "24% 36%",
    mobilePosition: "30% 40%",
    source: "Pexels 4971500",
  },
  {
    code: "D",
    title: "لبخند با آینه",
    note: "لحظهٔ دیدن نتیجهٔ درمان؛ شاد و روشن، مناسب پیام «لبخند نهایی».",
    image: "/images/hero-options/d.jpg",
    position: "72% 36%",
    mobilePosition: "65% 40%",
    source: "Pexels 6627574",
  },
  {
    code: "E",
    title: "همراه با تیم درمان",
    note: "حضور کادر درمان در کادر؛ حس کلینیک واقعی و مراقبت تیمی.",
    image: "/images/hero-options/e.jpg",
    position: "68% 62%",
    mobilePosition: "62% 55%",
    source: "Pexels 6627476",
  },
  {
    code: "F",
    title: "چهرهٔ طبیعی",
    note: "قاب طبیعی با آینه و ابزار؛ متعادل بین زیبایی و درمان.",
    image: "/images/hero-options/f.jpg",
    position: "55% 38%",
    mobilePosition: "55% 40%",
    source: "Pexels 4971503",
  },
];

export function HeroOptionLab() {
  const [active, setActive] = useState(options[0]);
  const previewRef = useRef<HTMLDivElement>(null);

  const select = (option: Option) => {
    setActive(option);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      previewRef.current?.scrollIntoView({ block: "start" });
    } else {
      previewRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <section className="container-x pb-10 pt-12 sm:pt-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="eyebrow">Hero Lab / 6 Options</span>
            <h1 className="mt-4 text-[clamp(2.2rem,4.8vw,3.8rem)] font-black leading-[1.1] tracking-[-0.055em] text-brand-900">
              کدام چهره،
              <span className="text-gradient block">هیرو را می‌سازد؟</span>
            </h1>
          </div>
          <p className="max-w-sm text-[12px] leading-7 text-muted">
            شش عکس با پوست روشن، داخل همان چیدمان و رنگ‌بندی فعلی سایت. هر
            گزینه را انتخاب کن تا پیش‌نمایش زندهٔ هیرو را ببینی.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {options.map((option) => {
            const selected = option.code === active.code;

            return (
              <button
                key={option.code}
                type="button"
                onClick={() => select(option)}
                aria-pressed={selected}
                className={`group relative overflow-hidden rounded-[1.1rem] border bg-surface/80 p-1.5 text-right transition duration-300 ${
                  selected
                    ? "border-mint-500 shadow-[0_0_0_2px_rgba(201,164,90,0.25)]"
                    : "border-line/80 hover:border-mint-300/70"
                }`}
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[0.8rem] bg-sky">
                  <Image
                    src={option.image}
                    alt={`گزینه ${option.code} — ${option.title}`}
                    fill
                    sizes="(min-width: 1024px) 190px, 45vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                    style={{ objectPosition: option.position }}
                  />
                  <span className="absolute left-2 top-2 grid h-6 min-w-6 place-items-center rounded-full bg-brand-900/80 px-1.5 text-[9px] font-bold text-white backdrop-blur">
                    {option.code}
                  </span>
                  {option.recommended ? (
                    <span className="absolute bottom-2 right-2 rounded-full bg-mint-500 px-2 py-0.5 text-[8px] font-bold text-brand-900">
                      پیشنهاد
                    </span>
                  ) : null}
                </div>
                <div className="px-1.5 pb-1 pt-2">
                  <span className="block text-[11px] font-extrabold text-brand-900">
                    {option.title}
                  </span>
                  <span className="mt-0.5 block text-[8px] text-muted">
                    {option.source}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <div ref={previewRef} id="hero-preview" className="scroll-mt-24">
        <div className="border-y border-line/70 bg-surface/70">
          <div className="container-x flex flex-wrap items-center justify-between gap-3 py-3">
            <div className="flex items-center gap-2 text-[10px] text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-mint-500" />
              پیش‌نمایش زنده — گزینهٔ {active.code}
            </div>
            <div className="flex items-center gap-2 text-[10px]">
              <b className="font-bold text-brand-900">{active.title}</b>
              <span className="text-muted">· {active.source}</span>
            </div>
          </div>
        </div>

        <Hero
          image={active.image}
          alt={`پیش‌نمایش هیرو با گزینه ${active.code} — ${active.title}`}
          position={active.position}
          mobilePosition={active.mobilePosition}
          priority
        />
      </div>

      <section className="container-x pb-16 pt-6 sm:pb-20">
        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[1.5rem] border border-line/80 bg-surface/90 p-6 shadow-card">
            <span className="eyebrow">جزئیات گزینهٔ {active.code}</span>
            <h2 className="mt-3 text-2xl font-black tracking-[-0.04em] text-brand-900">
              {active.title}
            </h2>
            <p className="mt-3 max-w-xl text-[12px] leading-7 text-muted">
              {active.note}
            </p>
            <p className="mt-4 text-[10px] leading-6 text-muted">
              منبع: {active.source} — لایسنس Pexels. برای نسخهٔ نهایی، تصویر
              بهینه و برش پرتره می‌شود و در صورت تمایل جایگزین عکس فعلی هیرو
              خواهد شد.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-mint-300/60 bg-mint-50/70 p-6">
            <h2 className="flex items-center gap-2 text-[12px] font-bold text-brand-900">
              <Icon name="sparkles" className="h-4 w-4 text-mint-600" />
              راهنمای انتخاب
            </h2>
            <ul className="mt-4 space-y-3 text-[10px] leading-6 text-muted">
              <li className="flex gap-2">
                <Icon name="check" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-mint-600" />
                گزینهٔ A بیشترین تطابق را با مکاپ مرجع دارد.
              </li>
              <li className="flex gap-2">
                <Icon name="check" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-mint-600" />
                گزینه‌های B و D روی حس زیبایی و طراحی لبخند تمرکز دارند.
              </li>
              <li className="flex gap-2">
                <Icon name="check" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-mint-600" />
                گزینه‌های E و F فضای درمانی واقعی‌تری می‌سازند.
              </li>
            </ul>
            <p className="mt-4 rounded-xl border border-mint-300/50 bg-surface/60 p-3 text-[9px] leading-6 text-brand-800">
              کد گزینهٔ موردنظرت را بگو تا همان تصویر را با برش نهایی روی هیروی
              سایت اعمال کنم.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
