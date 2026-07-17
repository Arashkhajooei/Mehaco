import type { Metadata } from "next";
import InfoPage, { InfoBlock } from "@/components/InfoPage";

export const metadata: Metadata = {
  title: "شرایط ارسال",
  description: "زمان و هزینهٔ ارسال سفارش‌های محاکو به سراسر کشور.",
};

export default function ShippingPage() {
  return (
    <InfoPage
      eyebrow="Shipping"
      title="شرایط ارسال"
      intro="همه سفارش‌ها با بسته‌بندی شکیل و مقاوم محاکو آماده و ارسال می‌شوند."
    >
      <InfoBlock title="روش‌های ارسال">
        <ul className="list-disc space-y-2 pr-5">
          <li>
            <span className="text-charcoal">پست پیشتاز:</span> تحویل در ۳ تا ۵
            روز کاری، برای همه شهرهای کشور.
          </li>
          <li>
            <span className="text-charcoal">تیپاکس (پس‌کرایه):</span> تحویل در
            ۱ تا ۳ روز کاری؛ هزینه هنگام دریافت پرداخت می‌شود.
          </li>
        </ul>
      </InfoBlock>

      <InfoBlock title="زمان آماده‌سازی سفارش">
        <p>
          سفارش‌ها ظرف ۱ تا ۲ روز کاری آماده و تحویل شرکت حمل می‌شوند. کد
          رهگیری مرسوله از طریق پیامک برای شما ارسال خواهد شد.
        </p>
      </InfoBlock>

      <InfoBlock title="نکته‌ها">
        <ul className="list-disc space-y-2 pr-5">
          <li>لطفاً آدرس و کد پستی را کامل و دقیق وارد کنید.</li>
          <li>
            در روزهای کمپین و حراج، ممکن است آماده‌سازی سفارش تا ۱ روز کاری
            بیشتر زمان ببرد.
          </li>
        </ul>
      </InfoBlock>
    </InfoPage>
  );
}
