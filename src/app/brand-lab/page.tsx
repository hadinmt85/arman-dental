import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = {
  title: "پیشنهاد نام و لوگو",
  description:
    "ده مسیر برندینگ برای کلینیک دندانپزشکی آرمان؛ نام، نشان، تایپوگرافی، پالت و لحن برند.",
  robots: { index: false, follow: false },
};

type BrandId =
  | "denta"
  | "labkhand"
  | "sepid"
  | "morvarid"
  | "arka"
  | "nila"
  | "raha"
  | "dandaneh"
  | "mehr"
  | "avin";

type Brand = {
  id: BrandId;
  no: string;
  name: string;
  latin: string;
  tagline: string;
  category: string;
  concept: string;
  stage: string;
  text: string;
  muted: string;
  accent: string;
  palette: string[];
};

const brands: Brand[] = [
  {
    id: "denta",
    no: "۰۱",
    name: "دنتا",
    latin: "DENTA",
    tagline: "ساده، دقیق، حرفه‌ای.",
    category: "دندانپزشکی عمومی",
    concept:
      "کوتاه، بین‌المللی و مناسب دامنه و اپلیکیشن. برای برندی که می‌خواهد ساده و حرفه‌ای دیده شود و در ذهن ماندگار باشد.",
    stage: "#eff5ff",
    text: "#0b2a45",
    muted: "#4f6074",
    accent: "#1e4fd8",
    palette: ["#1e4fd8", "#9cc4ff", "#ffffff", "#0b2a45"],
  },
  {
    id: "labkhand",
    no: "۰۲",
    name: "لبخند",
    latin: "LABKHAND",
    tagline: "لبخند، از اینجا شروع می‌شود.",
    category: "لبخند و زیبایی",
    concept:
      "اسمی آشنا و انسانی برای ارتباط نزدیک و کمپین‌های احساسی. نشان، یک قوس لبخند با یک نقطهٔ طلایی است؛ ساده و گرم.",
    stage: "#fbeee8",
    text: "#3b2620",
    muted: "#6b554c",
    accent: "#b4533a",
    palette: ["#d97757", "#f4d7a0", "#fff8f0", "#3b2620"],
  },
  {
    id: "sepid",
    no: "۰۳",
    name: "سپید",
    latin: "SEPID",
    tagline: "سفیدی که می‌ماند.",
    category: "زیبایی و بلیچینگ",
    concept:
      "مینیمال و پاک؛ مناسب کلینیک زیبایی و خدمات سفیدسازی. فضای سفید، خطوط نازک و یک لهجهٔ آبی روشن.",
    stage: "#f4f8fb",
    text: "#0b2a45",
    muted: "#56677a",
    accent: "#1e4fd8",
    palette: ["#0b2a45", "#ffffff", "#cbd8e6", "#5f8ff4"],
  },
  {
    id: "morvarid",
    no: "۰۴",
    name: "مروارید",
    latin: "MORVARID",
    tagline: "درخشش طبیعی.",
    category: "لمینت و طراحی لبخند",
    concept:
      "حس لوکس و ظریف برای لمینت و طراحی لبخند. نشان، یک مروارید با دندانِ مرکزی است؛ عاج، سبز عمیق و طلایی.",
    stage: "#0f3d3a",
    text: "#f7f2e6",
    muted: "#b9ccc2",
    accent: "#8a6616",
    palette: ["#0f3d3a", "#f3ecdd", "#d5b25d", "#0b2a45"],
  },
  {
    id: "arka",
    no: "۰۵",
    name: "آرکا",
    latin: "ARKA",
    tagline: "معماری یک لبخند.",
    category: "ایمپلنت و درمان تخصصی",
    concept:
      "مدرن و معمارانه؛ الهام از قوس دندانی (dental arch). مناسب ایمپلنت و درمان‌های تخصصی با لحنی دقیق و مطمئن.",
    stage: "#101828",
    text: "#ffffff",
    muted: "#9fb0c0",
    accent: "#2f6a56",
    palette: ["#101828", "#8fdcbe", "#ffffff", "#1e4fd8"],
  },
  {
    id: "nila",
    no: "۰۶",
    name: "نیلا",
    latin: "NILA",
    tagline: "آرامش در هر مراجعه.",
    category: "خانوادگی و کودکان",
    concept:
      "آرام و خنک؛ مناسب کلینیک خانوادگی و کودکان. فیروزه‌ای حس پاکی و اعتماد می‌دهد و نشان، قطره‌ای با لبخند است.",
    stage: "#e6f7f5",
    text: "#0f4f48",
    muted: "#4d706b",
    accent: "#0b7f57",
    palette: ["#0f9f8a", "#e6fbf7", "#bdeee6", "#0f4f48"],
  },
  {
    id: "raha",
    no: "۰۷",
    name: "رها",
    latin: "RAHA",
    tagline: "رهایی از درد.",
    category: "مراقبت و آرامش",
    concept:
      "حس سبکی و رهایی از ترس دندانپزشکی؛ مناسب بیماران مضطرب و برندی که می‌خواهد دلسوز و آرام دیده شود.",
    stage: "#fbe9e6",
    text: "#4a2b26",
    muted: "#7a5a52",
    accent: "#b4533a",
    palette: ["#f2b8a8", "#fff8f4", "#d97757", "#4a2b26"],
  },
  {
    id: "dandaneh",
    no: "۰۸",
    name: "دندانه",
    latin: "DANDANEH",
    tagline: "اسمی که یادش می‌ماند.",
    category: "برند فرهنگی",
    concept:
      "واژه‌ای فارسی و ادبی برای دندان؛ متمایز و به‌یادماندنی. مناسب برندی با شخصیت فرهنگی و لحنی شاعرانه‌تر.",
    stage: "#f4efe4",
    text: "#17382f",
    muted: "#5d6a5e",
    accent: "#17382f",
    palette: ["#17382f", "#f4efe4", "#d5b25d", "#8b9a8f"],
  },
  {
    id: "mehr",
    no: "۰۹",
    name: "مهر",
    latin: "MEHR",
    tagline: "مهربانی در هر لبخند.",
    category: "کلینیک محله",
    concept:
      "گرم، مهربان و انسانی؛ مناسب کلینیک محله و ارتباط بلندمدت با بیمار. خورشید و دندان، نشانِ مهر و سلامت است.",
    stage: "#fdf3e3",
    text: "#5a3a16",
    muted: "#7a6447",
    accent: "#9a6a15",
    palette: ["#e0a93f", "#fff8ec", "#f2c778", "#5a3a16"],
  },
  {
    id: "avin",
    no: "۱۰",
    name: "آوین",
    latin: "AVIN",
    tagline: "آغازی تازه برای لبخند.",
    category: "برند مدرن",
    concept:
      "تازه و مدرن؛ «آغازی تازه». مناسب برند جوان با لحن آرام و پاک. نشان، یک برگ/دانه با نقطهٔ طلایی است.",
    stage: "#eef4ec",
    text: "#274d3c",
    muted: "#5d7265",
    accent: "#3f7a5e",
    palette: ["#3f7a5e", "#eef4ec", "#d5b25d", "#274d3c"],
  },
];

const toothPath =
  "M12 6.2C10.5 4.8 8 4.2 6.3 5.4 4.4 6.7 4.5 9.1 4.9 11.2c.3 1.6.6 3.3.9 5.2.2 1.4.6 3.2 1.7 3.2 1 0 1.1-1.8 1.4-3.3.3-1.5.8-2.6 2.1-2.6s1.8 1.1 2.1 2.6c.3 1.5.4 3.3 1.4 3.3 1.1 0 1.5-1.8 1.7-3.2.3-1.9.6-3.6.9-5.2.4-2.1.5-4.5-1.4-5.8C16 4.2 13.5 4.8 12 6.2Z";

function BrandMark({ id, className }: { id: BrandId; className?: string }) {
  const marks: Record<BrandId, ReactNode> = {
    denta: (
      <>
        <rect width="64" height="64" rx="18" fill="#1e4fd8" />
        <g transform="translate(14 14) scale(1.5)" fill="#ffffff">
          <path d={toothPath} />
        </g>
        <circle cx="52" cy="12" r="4" fill="#a9c6ff" />
      </>
    ),
    labkhand: (
      <>
        <rect width="64" height="64" rx="18" fill="#d97757" />
        <path
          d="M16 32c6 12 26 12 32 0"
          stroke="#fff7f0"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="47" cy="20" r="4" fill="#f4d7a0" />
      </>
    ),
    sepid: (
      <>
        <rect
          x="1"
          y="1"
          width="62"
          height="62"
          rx="17"
          fill="#ffffff"
          stroke="#cbd8e6"
          strokeWidth="2"
        />
        <g transform="translate(14 14) scale(1.5)" fill="#0b2a45">
          <path d={toothPath} />
        </g>
        <circle cx="17" cy="47" r="4" fill="#1e4fd8" />
      </>
    ),
    morvarid: (
      <>
        <rect width="64" height="64" rx="18" fill="#0f3d3a" />
        <circle cx="32" cy="32" r="23" fill="#f3ecdd" />
        <circle cx="32" cy="32" r="16" fill="#e5d9bf" />
        <g transform="translate(20 20)" fill="#0f3d3a">
          <path d={toothPath} />
        </g>
        <circle cx="22" cy="20" r="5" fill="#ffffff" opacity="0.5" />
      </>
    ),
    arka: (
      <>
        <rect width="64" height="64" rx="18" fill="#101828" />
        <path
          d="M14 50V31a18 18 0 0 1 36 0v19"
          stroke="#8fdcbe"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M22 39h20"
          stroke="#8fdcbe"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle cx="32" cy="49" r="3" fill="#8fdcbe" />
      </>
    ),
    nila: (
      <>
        <rect width="64" height="64" rx="18" fill="#0f9f8a" />
        <path
          d="M32 10C32 10 16 28 16 38a16 16 0 0 0 32 0C48 28 32 10 32 10Z"
          fill="#effbf7"
        />
        <path
          d="M24 37c4 6 12 6 16 0"
          stroke="#0f9f8a"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
      </>
    ),
    raha: (
      <>
        <rect width="64" height="64" rx="18" fill="#f2b8a8" />
        <path
          d="M14 32c5 14 31 14 36 0"
          stroke="#fff8f4"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M20 24c7-5 17-5 24 0"
          stroke="#fff8f4"
          strokeWidth="2"
          fill="none"
          opacity="0.55"
          strokeLinecap="round"
        />
        <circle cx="50" cy="18" r="4" fill="#fff8f4" />
      </>
    ),
    dandaneh: (
      <>
        <rect width="64" height="64" rx="18" fill="#17382f" />
        <path
          d="M25 18c-7 8-7 20 0 28M39 18c7 8 7 20 0 28"
          stroke="#f4efe4"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="32" cy="32" r="3.5" fill="#d5b25d" />
      </>
    ),
    mehr: (
      <>
        <rect width="64" height="64" rx="18" fill="#e0a93f" />
        <g
          stroke="#fff6e6"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.9"
        >
          <path d="M32 7v6M32 51v6M7 32h6M51 32h6M15 15l4 4M45 45l4 4M49 15l-4 4M19 45l-4 4" />
        </g>
        <circle cx="32" cy="32" r="14" fill="#fff8ec" />
        <g transform="translate(22 22) scale(0.84)" fill="#b0781d">
          <path d={toothPath} />
        </g>
      </>
    ),
    avin: (
      <>
        <rect width="64" height="64" rx="18" fill="#3f7a5e" />
        <path
          d="M18 44c0-16 10-26 26-26-1 16-10 26-26 26Z"
          fill="#eef4ec"
        />
        <path
          d="M18 44c8-8 16-14 26-26"
          stroke="#3f7a5e"
          strokeWidth="2.5"
          fill="none"
        />
        <circle cx="47" cy="17" r="3.5" fill="#d5b25d" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {marks[id]}
    </svg>
  );
}

const tips = [
  {
    title: "مخاطب را در نظر بگیر",
    text: "نام باید برای بیمار ۲۰ تا ۶۰ ساله قابل تلفظ، کوتاه و به‌یادماندنی باشد.",
  },
  {
    title: "از کلیشه فاصله بگیر",
    text: "اسم‌هایی مثل «دندانپزشکی مدرن» یا «کلینیک تخصصی» تمایز ایجاد نمی‌کنند.",
  },
  {
    title: "قبل از ثبت بررسی کن",
    text: "دامنه، اینستاگرام و علامت تجاری نام را پیش از نهایی‌سازی استعلام کن.",
  },
];

export default function BrandLabPage() {
  return (
    <div className="bg-paper">
      <section className="container-x pb-9 pt-12 sm:pt-16">
        <span className="eyebrow">Brand Lab / 10 Directions</span>
        <h1 className="mt-4 max-w-3xl text-[clamp(2.3rem,5vw,4rem)] font-extrabold leading-[1.14] tracking-[-0.05em] text-ink">
          ده اسم و لوگو برای
          <br />
          کلینیک دندانپزشکی.
        </h1>
        <p className="mt-5 max-w-xl text-sm leading-8 text-muted">
          ده مسیر مستقل برای نام و هویت بصری؛ هر کارت شامل نشان، تایپوگرافی،
          پالت و لحن برند است. برند فعلی سایت «آرمان» است و این‌ها گزینه‌های
          جایگزین یا الهام‌بخش‌اند.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <span className="chip">برند فعلی: آرمان</span>
          <span className="chip">۱۰ مسیر جایگزین</span>
          <span className="chip">قابل پیاده‌سازی روی سایت</span>
        </div>
      </section>

      <section className="container-x pb-16">
        <div className="grid gap-4 md:grid-cols-2">
          {brands.map((brand) => (
            <article
              key={brand.id}
              className="group overflow-hidden rounded-2xl border border-line bg-white shadow-card transition duration-300 hover:-translate-y-0.5 hover:shadow-soft"
            >
              <div
                className="relative aspect-[16/9] overflow-hidden p-5"
                style={{ backgroundColor: brand.stage }}
              >
                <div
                  className="flex items-center justify-between text-[9px] font-medium"
                  style={{ color: brand.muted }}
                >
                  <span>{brand.no} / ۱۰</span>
                  <span>{brand.category}</span>
                </div>

                <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <BrandMark
                      id={brand.id}
                      className="h-16 w-16 shrink-0 drop-shadow-sm"
                    />
                    <div>
                      <p
                        className="text-[30px] font-black leading-none tracking-[-0.05em]"
                        style={{ color: brand.text }}
                      >
                        {brand.name}
                      </p>
                      <p
                        className="mt-1.5 text-[9px] font-semibold tracking-[0.3em]"
                        style={{ color: brand.muted }}
                      >
                        {brand.latin}
                      </p>
                    </div>
                  </div>

                  <div className="flex shrink-0 gap-1.5">
                    {brand.palette.slice(0, 3).map((color) => (
                      <span
                        key={color}
                        className="h-2.5 w-2.5 rounded-full ring-1 ring-white/30"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-5">
                <p
                  className="text-[11px] font-bold"
                  style={{ color: brand.accent }}
                >
                  {brand.tagline}
                </p>
                <p className="mt-2 text-[10px] leading-6 text-muted">
                  {brand.concept}
                </p>

                <div className="mt-4 flex items-center justify-between border-t border-line pt-3">
                  <span className="text-[9px] text-muted">پالت برند</span>
                  <div className="flex gap-1.5">
                    {brand.palette.map((color) => (
                      <span
                        key={color}
                        className="h-4 w-4 rounded-full border border-line"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-white">
        <div className="container-x py-10">
          <div className="grid gap-6 md:grid-cols-3">
            {tips.map((tip, index) => (
              <div key={tip.title} className="border-t border-ink/15 pt-4">
                <span className="text-[10px] tabular-nums text-muted">
                  ۰{index + 1}
                </span>
                <h2 className="mt-3 text-[13px] font-bold text-ink">
                  {tip.title}
                </h2>
                <p className="mt-1.5 text-[10px] leading-6 text-muted">
                  {tip.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-10">
        <div className="flex flex-col gap-4 rounded-2xl border border-brand-200 bg-brand-50 p-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-[10px] leading-6 text-brand-800">
            نام‌ها و لوگوها مفهومی و پیشنهادی هستند. پیش از استفادهٔ تجاری،
            دامنه، شبکه‌های اجتماعی و علامت تجاری را بررسی کن. اگر یکی را انتخاب
            کنی، هویت کامل (فونت، رنگ، لوگو و لحن) روی سایت پیاده می‌شود.
          </p>
          <Link href="/" className="btn btn-primary btn-sm shrink-0">
            بازگشت به سایت
            <Icon name="arrowLeft" className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
