import type { Metadata } from "next";
import { Suspense } from "react";
import ShopClient from "@/components/ShopClient";

export const metadata: Metadata = {
  title: "فروشگاه",
  description:
    "خرید لباس خواب و کالکشن مجلسی زنانه محاکو؛ فیلتر بر اساس سایز، جنس پارچه و قیمت.",
};

export default function ShopPage() {
  return (
    <Suspense>
      <ShopClient />
    </Suspense>
  );
}
