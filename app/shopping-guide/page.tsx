import type { Metadata } from "next";
import Link from "next/link";
import InfoPage, { InfoBlock } from "@/components/InfoPage";

export const metadata: Metadata = {
  title: "راهنمای خرید",
  description: "مراحل ساده خرید از فروشگاه اینترنتی محاکو.",
};

export default function ShoppingGuidePage() {
  return (
    <InfoPage
      eyebrow="How to Order"
      title="راهنمای خرید"
      intro="خرید از محاکو ساده است؛ در چهار قدم سفارش‌تان ثبت می‌شود."
    >
      <InfoBlock title="۱. انتخاب محصول">
        <p>
          از منوی «لباس خواب» یا «کالکشن مجلسی» وارد فروشگاه شوید و با فیلتر
          سایز، جنس پارچه و قیمت، سریع‌تر به محصول موردنظر برسید.
        </p>
      </InfoBlock>

      <InfoBlock title="۲. انتخاب سایز و افزودن به سبد">
        <p>
          در صفحهٔ محصول، جدول «راهنمای سایز» را ببینید، سایز و تعداد را انتخاب
          کنید و روی «افزودن به سبد خرید» بزنید.
        </p>
      </InfoBlock>

      <InfoBlock title="۳. ثبت مشخصات و روش ارسال">
        <p>
          در صفحهٔ سبد خرید، سفارش را بررسی و روی «ادامه و ثبت سفارش» بزنید.
          سپس مشخصات گیرنده و روش ارسال را وارد کنید.
        </p>
      </InfoBlock>

      <InfoBlock title="۴. پرداخت و رهگیری">
        <p>
          پرداخت به‌صورت آنلاین و امن انجام می‌شود. پس از ثبت سفارش، کد رهگیری
          مرسوله پیامک خواهد شد.
        </p>
        <p className="mt-4">
          سوالی ماند؟{" "}
          <Link
            href="/faq"
            className="border-b border-champagne-deep pb-0.5 text-champagne-deep"
          >
            سوالات متداول
          </Link>{" "}
          را ببینید یا از{" "}
          <Link
            href="/contact"
            className="border-b border-champagne-deep pb-0.5 text-champagne-deep"
          >
            راه‌های ارتباطی
          </Link>{" "}
          بپرسید.
        </p>
      </InfoBlock>
    </InfoPage>
  );
}
