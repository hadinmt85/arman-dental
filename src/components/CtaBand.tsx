import Link from "next/link";
import { Icon } from "./Icon";
import { site } from "@/lib/site";

type CtaBandProps = {
  title?: string;
  text?: string;
  className?: string;
};

const perks = [
  "بدون تماس تلفنی",
  "انتخاب ساعت آزاد",
  "لغو رایگان تا ۲۴ ساعت قبل",
];

export function CtaBand({
  title = "نوبتت را رزرو کن.",
  text = "در چند دقیقه زمان مراجعه را انتخاب کن؛ بقیه‌اش با ما. مشاوره اولیه پیش از هر درمان انجام می‌شود.",
  className = "",
}: CtaBandProps) {
  return (
    <section className={`container-x ${className}`}>
      <div className="relative overflow-hidden rounded-[2.25rem] bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900 px-6 py-12 text-white shadow-soft sm:px-10 sm:py-16">
        <div className="noise pointer-events-none absolute inset-0 opacity-[0.07]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_320px_at_82%_-20%,rgba(255,255,255,0.18),transparent_62%)]" />
        <div className="pointer-events-none absolute -bottom-28 left-1/4 h-72 w-72 rounded-full bg-mint-300/20 blur-3xl" />
        <Icon
          name="tooth"
          className="pointer-events-none absolute -left-8 -top-12 h-64 w-64 text-white/[0.06]"
        />

        <div className="relative grid gap-8 lg:grid-cols-[1.35fr_1fr] lg:items-center">
          <div>
            <span className="eyebrow eyebrow-light">رزرو نوبت</span>
            <h2 className="mt-4 max-w-xl text-[clamp(2rem,4vw,3.2rem)] font-black leading-[1.14] tracking-[-0.05em]">
              {title}
            </h2>
            <p className="mt-4 max-w-lg text-xs leading-7 text-white/70 sm:text-[13px]">
              {text}
            </p>

            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
              {perks.map((perk) => (
                <li
                  key={perk}
                  className="inline-flex items-center gap-1.5 text-[9px] text-white/80"
                >
                  <Icon name="check" className="h-3 w-3 text-mint-300" />
                  {perk}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-2.5 rounded-[1.5rem] border border-white/15 bg-white/[0.07] p-4 backdrop-blur-md sm:flex-row lg:flex-col lg:items-stretch">
            <Link href="/appointment" className="btn btn-light w-full">
              رزرو آنلاین
              <Icon name="arrowLeft" className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${site.phoneHref}`}
              dir="ltr"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-xs font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
            >
              {site.phone}
            </a>
            <span className="mt-1 flex items-center justify-center gap-1.5 text-[8px] text-white/75">
              <span className="h-1 w-1 rounded-full bg-mint-300" />
              پاسخ‌گویی در ساعات کاری کلینیک
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
