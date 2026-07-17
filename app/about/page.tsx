import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "درباره ما",
  description: "داستان محاکو؛ برند زنانه لباس خواب، لباس راحتی و کالکشن‌های مجلسی.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative flex min-h-[50vh] items-end">
        <Image
          src="/images/about.jpg"
          alt="فضای آرام و روشن محاکو"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-12 md:px-8">
          <p className="eyebrow text-right text-sm !text-champagne">Our Story</p>
          <h1 className="mt-1.5 text-3xl font-light text-white md:text-4xl">
            درباره محاکو
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-14 md:py-20">
        <div className="space-y-6 text-[15px] leading-9 text-taupe">
          <p>
            محاکو با یک باور ساده شروع شد: لباسی که در خانه می‌پوشید، به همان
            اندازهٔ لباس بیرون‌تان مهم است. ما طراحی و تولید لباس خواب، لباس
            راحتی و کالکشن‌های مجلسی زنانه را با وسواس روی دو چیز پیش می‌بریم؛
            <span className="text-charcoal"> کیفیت پارچه</span> و
            <span className="text-charcoal"> دقت دوخت</span>.
          </p>
          <p>
            هر پارچه‌ای که انتخاب می‌کنیم، اول خودمان لمس می‌کنیم و می‌پوشیم.
            هر مدلی که طراحی می‌شود، باید سه ویژگی داشته باشد: ظرافت، راحتی و
            ماندگاری. به همین دلیل کالکشن‌های محاکو کوچک اما حساب‌شده‌اند؛ ما
            به‌جای تنوعِ زیاد، انتخاب‌های درست را کنار هم می‌گذاریم.
          </p>
          <p>
            امضای برند ما —{" "}
            <span dir="ltr" className="font-display italic text-champagne-deep">
              Delicate. Silky. Luxurious.
            </span>{" "}
            — خلاصهٔ همین نگاه است: لطافتی که حس می‌کنید، کیفیتی که می‌ماند و
            زیبایی‌ای که به خودتان هدیه می‌دهید.
          </p>
        </div>

        <div className="mt-12 border-t border-line pt-10 text-center">
          <p className="text-lg font-light">
            از کالکشن‌های محاکو دیدن کنید
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/shop?category=sleepwear" className="btn-outline">
              لباس خواب
            </Link>
            <Link href="/shop?category=evening" className="btn-primary">
              کالکشن مجلسی
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
