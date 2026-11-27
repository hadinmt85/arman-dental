"use client";

import { useState } from "react";
import { Icon } from "./Icon";
import { faDigits } from "@/lib/format";

type FaqItem = {
  q: string;
  a: string;
};

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="overflow-hidden rounded-[1.6rem] border border-line/80 bg-surface/95 backdrop-blur-sm">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={item.q}
            className="border-b border-line/80 transition-colors last:border-b-0 data-[open=true]:bg-brand-50/40"
            data-open={isOpen}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center gap-3 px-5 py-4 text-right transition hover:bg-sky-soft/70"
            >
              <span
                className={`text-[9px] font-bold tabular-nums transition ${
                  isOpen ? "text-brand-600" : "text-muted"
                }`}
              >
                {faDigits(String(index + 1).padStart(2, "0"))}
              </span>
              <span
                className={`flex-1 text-[12px] font-semibold transition sm:text-[13px] ${
                  isOpen ? "text-brand-800" : "text-ink-soft"
                }`}
              >
                {item.q}
              </span>
              <span
                className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border transition duration-300 ${
                  isOpen
                    ? "rotate-45 border-brand-600 bg-brand-600 text-white"
                    : "border-line-strong/70 bg-white text-muted"
                }`}
              >
                <Icon name="plus" className="h-3 w-3" />
              </span>
            </button>

            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl px-5 pb-5 ps-10 text-[11px] leading-7 text-muted">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
