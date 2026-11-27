"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Icon } from "./Icon";
import { site } from "@/lib/site";

export function FloatingActions() {
  const pathname = usePathname();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname.endsWith("-lab")) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-40 sm:bottom-6">
      <div className="container-x flex items-end justify-between">
        <a
          href={site.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="گفت‌وگو در واتساپ"
          className="pointer-events-auto relative grid h-12 w-12 place-items-center rounded-full bg-[#25a35a] text-white shadow-[0_16px_30px_-12px_rgba(37,163,90,0.7)] transition duration-300 hover:scale-105 hover:bg-[#1f8f4e]"
        >
          <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25a35a]/35" />
          <Icon name="whatsapp" className="h-6 w-6" />
        </a>

        <a
          href="#top"
          aria-label="بازگشت به بالای صفحه"
          data-show={showTop}
          className="pointer-events-auto grid h-10 w-10 place-items-center rounded-full border border-line-strong/80 bg-surface/90 text-brand-800 opacity-0 shadow-card backdrop-blur transition duration-300 data-[show=true]:opacity-100 hover:border-mint-400 hover:text-mint-700"
        >
          <Icon name="arrowDown" className="h-4 w-4 rotate-180" />
        </a>
      </div>
    </div>
  );
}
