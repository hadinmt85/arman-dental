import Image from "next/image";
import Link from "next/link";
import { Icon } from "./Icon";
import type { Service } from "@/lib/site";

export function ServiceTile({ service }: { service: Service }) {
  return (
    <Link
      href={`/services#${service.id}`}
      className="group relative flex flex-col overflow-hidden rounded-[1.1rem] border border-line/80 bg-[#f9f3e7] shadow-card transition duration-500 hover:-translate-y-1 hover:border-mint-300/70 hover:shadow-soft"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-sky">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(min-width: 1280px) 190px, (min-width: 640px) 33vw, 50vw"
          className="object-cover transition duration-700 ease-out group-hover:scale-[1.07]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-900/10 to-transparent opacity-0 transition group-hover:opacity-100" />
      </div>

      <div className="flex flex-1 items-center justify-between gap-2 px-3 py-3">
        <h3 className="text-[12.5px] font-extrabold leading-5 text-brand-900">
          {service.title}
        </h3>
        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-brand-200/80 bg-white/70 text-brand-700 transition duration-300 group-hover:border-brand-600 group-hover:bg-brand-600 group-hover:text-white">
          <Icon name="chevronLeft" className="h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  );
}
