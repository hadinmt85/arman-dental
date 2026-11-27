import Image from "next/image";
import Link from "next/link";
import { Icon } from "./Icon";
import { faDigits } from "@/lib/format";
import type { Service } from "@/lib/site";

type ServiceCardProps = {
  service: Service;
  index: number;
  detailed?: boolean;
};

export function ServiceCard({
  service,
  index,
  detailed = false,
}: ServiceCardProps) {
  const href = detailed ? "/appointment" : `/services#${service.id}`;

  return (
    <Link
      href={href}
      id={service.id}
      className="group card-lift card-shine relative flex h-full scroll-mt-28 flex-col overflow-hidden rounded-[1.6rem] border border-line/80 bg-surface/95 shadow-card backdrop-blur-sm hover:border-mint-300/70 hover:shadow-soft"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-sky">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-700 ease-out group-hover:scale-[1.05]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-900/25 via-transparent to-transparent" />
        <span className="absolute left-3 top-3 grid h-7 min-w-7 place-items-center rounded-full border border-line/70 bg-surface/85 px-2 text-[9px] font-bold tabular-nums text-brand-900 backdrop-blur">
          {faDigits(String(index).padStart(2, "0"))}
        </span>
        <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/15 px-2.5 py-1 text-[8px] font-medium text-white backdrop-blur">
          <Icon name="clock" className="h-2.5 w-2.5" />
          {service.duration}
        </span>
      </div>

      <div className="relative flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-mint-100 to-surface text-brand-700 ring-1 ring-mint-200/70 transition duration-500 group-hover:from-brand-600 group-hover:to-brand-700 group-hover:text-white group-hover:ring-brand-500/40">
            <Icon name={service.icon} className="h-5 w-5" />
          </span>
          <span className="text-[9px] font-medium text-muted">
            {detailed ? "جزئیات درمان" : "شروع هزینه"}
          </span>
        </div>

        <h3 className="mt-4 text-[15px] font-extrabold text-ink transition group-hover:text-brand-700">
          {service.title}
        </h3>
        <p className="mt-2 text-[11px] leading-6 text-muted">
          {detailed ? service.description : service.short}
        </p>

        {detailed ? (
          <ul className="mt-3 space-y-1.5 border-t border-line/80 pt-3">
            {service.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-1.5 text-[10px] leading-5 text-ink-soft"
              >
                <Icon
                  name="check"
                  className="mt-0.5 h-3 w-3 shrink-0 text-mint-600"
                />
                {feature}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-auto pt-4">
          <div className="flex items-center justify-between gap-3 border-t border-line/80 pt-3">
            <div>
              <span className="block text-[9px] text-muted">شروع هزینه</span>
              <span className="mt-0.5 block text-[11px] font-bold text-ink">
                {service.price}
              </span>
            </div>
            <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition duration-300 group-hover:bg-brand-600 group-hover:text-white group-hover:ring-brand-500">
              <Icon name="arrowLeft" className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
