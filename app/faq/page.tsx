import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";
import { ChevronDownIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "سوالات متداول",
  description: "پاسخ سوالات پرتکرار درباره خرید، ارسال و تعویض کالا در محاکو.",
};

const FAQS = [
  {
    q: "سفارش من چند روزه می‌رسد؟",
    a: "سفارش‌ها ظرف ۱ تا ۲ روز کاری آماده می‌شوند و بسته به روش ارسال، ۱ تا ۵ روز کاری بعد به دست‌تان می‌رسند.",
  },
  {
    q: "اگر سایز مناسب نبود چه کنم؟",
    a: "تا ۷ روز پس از تحویل می‌توانید درخواست تعویض سایز بدهید؛ کافی است کد سفارش را در واتساپ برای ما بفرستید. جزئیات در صفحه «شرایط تعویض کالا» آمده است.",
  },
  {
    q: "جنس پارچه‌ها چیست؟",
    a: "در هر صفحهٔ محصول، بخش «مشخصات پارچه» جنس دقیق و ویژگی‌های آن را توضیح می‌دهد؛ از ساتن و حریر تا پنبه صددرصد طبیعی.",
  },
  {
    q: "چطور از رنگ واقعی محصول مطمئن شوم؟",
    a: "عکس‌های سایت با نور طبیعی و بدون فیلتر ثبت می‌شوند. با این حال ممکن است رنگ روی نمایشگرهای مختلف کمی متفاوت دیده شود.",
  },
  {
    q: "امکان خرید حضوری هست؟",
    a: "محاکو در حال حاضر فقط به‌صورت آنلاین فعالیت می‌کند و سفارش‌ها به سراسر کشور ارسال می‌شوند.",
  },
  {
    q: "پرداخت چطور انجام می‌شود؟",
    a: "پرداخت از طریق درگاه امن آنلاین انجام می‌شود. در روش تیپاکس، هزینهٔ ارسال هنگام تحویل پرداخت خواهد شد.",
  },
];

export default function FaqPage() {
  return (
    <InfoPage
      eyebrow="FAQ"
      title="سوالات متداول"
      intro="پاسخ پرتکرارترین سوالات مشتریان محاکو را اینجا جمع کرده‌ایم."
    >
      <div className="border-t border-line">
        {FAQS.map((item) => (
          <details key={item.q} className="group border-b border-line">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-medium [&::-webkit-details-marker]:hidden">
              {item.q}
              <ChevronDownIcon
                size={18}
                className="shrink-0 text-taupe transition-transform group-open:rotate-180"
              />
            </summary>
            <p className="pb-6 leading-8 text-taupe">{item.a}</p>
          </details>
        ))}
      </div>
    </InfoPage>
  );
}
