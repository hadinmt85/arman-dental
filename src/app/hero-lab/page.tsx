import type { Metadata } from "next";
import { HeroOptionLab } from "@/components/HeroOptionLab";

export const metadata: Metadata = {
  title: "Hero Lab — انتخاب تصویر هیرو",
  description: "شش گزینهٔ تصویر برای هیروی کلینیک دندانپزشکی آرمان.",
  robots: { index: false, follow: false },
};

export default function HeroLabPage() {
  return (
    <div className="bg-paper">
      <HeroOptionLab />
    </div>
  );
}
