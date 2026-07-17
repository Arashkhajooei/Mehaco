import type { Metadata } from "next";
import InfoPage, { InfoBlock } from "@/components/InfoPage";

export const metadata: Metadata = {
  title: "راهنمای سایز",
  description: "جدول سایزبندی لباس خواب و لباس‌های مجلسی محاکو.",
};

const ROWS = [
  { size: "S", bust: "۸۴–۸۸", waist: "۶۴–۶۸", hip: "۹۰–۹۴" },
  { size: "M", bust: "۸۸–۹۲", waist: "۶۸–۷۲", hip: "۹۴–۹۸" },
  { size: "L", bust: "۹۲–۹۸", waist: "۷۲–۷۸", hip: "۹۸–۱۰۴" },
  { size: "XL", bust: "۹۸–۱۰۴", waist: "۷۸–۸۶", hip: "۱۰۴–۱۱۰" },
];

export default function SizeGuidePage() {
  return (
    <InfoPage
      eyebrow="Size Guide"
      title="راهنمای سایز"
      intro="برای انتخاب سایز درست، اندازه‌های خود را با جدول زیر مقایسه کنید. همه اندازه‌ها به سانتی‌متر است."
    >
      <InfoBlock title="جدول سایزبندی">
        <div className="overflow-x-auto">
          <table className="w-full min-w-96 text-center">
            <thead>
              <tr className="border-b border-charcoal/20 text-charcoal">
                <th className="py-3 font-medium">سایز</th>
                <th className="py-3 font-medium">دور سینه</th>
                <th className="py-3 font-medium">دور کمر</th>
                <th className="py-3 font-medium">دور باسن</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.size} className="border-b border-line">
                  <td className="py-3 text-charcoal">{row.size}</td>
                  <td className="py-3">{row.bust}</td>
                  <td className="py-3">{row.waist}</td>
                  <td className="py-3">{row.hip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </InfoBlock>

      <InfoBlock title="چطور اندازه بگیرید؟">
        <ul className="list-disc space-y-2 pr-5">
          <li>
            <span className="text-charcoal">دور سینه:</span> متر را روی
            برجسته‌ترین قسمت سینه، موازی با زمین بگیرید.
          </li>
          <li>
            <span className="text-charcoal">دور کمر:</span> باریک‌ترین قسمت
            کمر را بدون فشردن متر اندازه بزنید.
          </li>
          <li>
            <span className="text-charcoal">دور باسن:</span> متر را روی
            پهن‌ترین قسمت باسن بگیرید.
          </li>
        </ul>
        <p className="mt-4">
          اگر بین دو سایز هستید، برای لباس خواب سایز بزرگ‌تر و برای لباس مجلسی
          جذب، سایز دقیق‌تر را پیشنهاد می‌کنیم. هنوز مطمئن نیستید؟ در واتساپ
          راهنمایی‌تان می‌کنیم.
        </p>
      </InfoBlock>
    </InfoPage>
  );
}
