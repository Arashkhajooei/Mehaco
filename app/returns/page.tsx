import type { Metadata } from "next";
import InfoPage, { InfoBlock } from "@/components/InfoPage";

export const metadata: Metadata = {
  title: "شرایط تعویض کالا",
  description: "شرایط و مراحل تعویض کالا در فروشگاه محاکو.",
};

export default function ReturnsPage() {
  return (
    <InfoPage
      eyebrow="Exchange"
      title="شرایط تعویض کالا"
      intro="رضایت شما برای ما مهم است. اگر سایز مناسب نبود یا کالا ایراد دوخت داشت، طبق شرایط زیر تعویض انجام می‌شود."
    >
      <InfoBlock title="مهلت و شرایط تعویض">
        <ul className="list-disc space-y-2 pr-5">
          <li>تا ۷ روز پس از تحویل مرسوله، امکان درخواست تعویض وجود دارد.</li>
          <li>
            کالا باید استفاده‌نشده و شسته‌نشده باشد و اتیکت و بسته‌بندی اصلی آن
            جدا نشده باشد.
          </li>
          <li>
            به دلیل ماهیت بهداشتی لباس خواب، تعویض این دسته فقط در صورت ایراد
            دوخت یا مغایرت سایز ارسالی با سفارش انجام می‌شود.
          </li>
          <li>کالاهای خریداری‌شده در حراج، فقط در صورت ایراد دوخت تعویض می‌شوند.</li>
        </ul>
      </InfoBlock>

      <InfoBlock title="مراحل تعویض">
        <ol className="list-decimal space-y-2 pr-5">
          <li>از طریق واتساپ یا دایرکت اینستاگرام، کد سفارش را برای ما بفرستید.</li>
          <li>تیم پشتیبانی شرایط را بررسی و نحوه بازگشت کالا را اعلام می‌کند.</li>
          <li>پس از دریافت و بررسی کالا، سایز یا مدل جایگزین ارسال می‌شود.</li>
        </ol>
      </InfoBlock>
    </InfoPage>
  );
}
