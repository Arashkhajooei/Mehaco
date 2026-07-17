import type { Metadata } from "next";
import InfoPage, { InfoBlock } from "@/components/InfoPage";
import { InstagramIcon, MailIcon, WhatsAppIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "تماس با ما",
  description: "راه‌های ارتباط با محاکو؛ اینستاگرام، واتساپ و ایمیل.",
};

export default function ContactPage() {
  return (
    <InfoPage
      eyebrow="Contact"
      title="تماس با ما"
      intro="سوالی درباره محصولات، سایز یا سفارش‌تان دارید؟ از هر یک از راه‌های زیر با ما در ارتباط باشید."
    >
      <InfoBlock title="راه‌های ارتباطی">
        <ul className="space-y-4">
          <li>
            <a
              href="https://instagram.com/mahaco"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 transition-colors hover:text-champagne-deep"
            >
              <InstagramIcon size={20} className="text-champagne" />
              اینستاگرام: <span dir="ltr">@mahaco</span>
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/989000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 transition-colors hover:text-champagne-deep"
            >
              <WhatsAppIcon size={20} className="text-champagne" />
              واتساپ: <span dir="ltr">۰۹۰۰ ۰۰۰ ۰۰۰۰</span>
            </a>
          </li>
          <li>
            <a
              href="mailto:hello@mahaco.ir"
              className="flex items-center gap-3 transition-colors hover:text-champagne-deep"
            >
              <MailIcon size={20} className="text-champagne" />
              ایمیل: <span dir="ltr">hello@mahaco.ir</span>
            </a>
          </li>
        </ul>
      </InfoBlock>

      <InfoBlock title="ساعات پاسخ‌گویی">
        <p>
          شنبه تا پنجشنبه، از ساعت ۱۰ صبح تا ۸ شب. پیام‌های خارج از این ساعت،
          اولین روز کاری بعد پاسخ داده می‌شوند.
        </p>
      </InfoBlock>
    </InfoPage>
  );
}
