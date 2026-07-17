import Link from "next/link";
import { InstagramIcon, MailIcon, WhatsAppIcon } from "./icons";

const CUSTOMER_LINKS = [
  { href: "/shopping-guide", label: "راهنمای خرید" },
  { href: "/size-guide", label: "راهنمای سایز" },
  { href: "/shipping", label: "شرایط ارسال" },
  { href: "/returns", label: "شرایط تعویض کالا" },
  { href: "/faq", label: "سوالات متداول" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ivory">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* برند */}
          <div>
            <p className="text-xl font-semibold">محاکو</p>
            <p className="eyebrow mt-1 text-right text-[12px]">
              Delicate. Silky. Luxurious.
            </p>
            <p className="mt-4 max-w-xs text-sm leading-7 text-taupe">
              طراحی و تولید لباس خواب، لباس راحتی و کالکشن‌های مجلسی زنانه؛ با
              پارچه‌های باکیفیت و دوختی که حسش می‌کنید.
            </p>
          </div>

          {/* محاکو */}
          <nav aria-label="محاکو">
            <p className="mb-4 text-sm font-medium">محاکو</p>
            <ul className="space-y-3 text-sm text-taupe">
              <li>
                <Link href="/about" className="transition-colors hover:text-champagne-deep">
                  درباره ما
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-champagne-deep">
                  تماس با ما
                </Link>
              </li>
            </ul>
          </nav>

          {/* خدمات مشتریان */}
          <nav aria-label="خدمات مشتریان">
            <p className="mb-4 text-sm font-medium">خدمات مشتریان</p>
            <ul className="space-y-3 text-sm text-taupe">
              {CUSTOMER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-champagne-deep">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ارتباط با ما */}
          <div>
            <p className="mb-4 text-sm font-medium">ارتباط با ما</p>
            <ul className="space-y-3 text-sm text-taupe">
              <li>
                <a
                  href="https://instagram.com/mehaco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 transition-colors hover:text-champagne-deep"
                >
                  <InstagramIcon size={18} />
                  اینستاگرام محاکو
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/989000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 transition-colors hover:text-champagne-deep"
                >
                  <WhatsAppIcon size={18} />
                  واتساپ
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@mehaco.ir"
                  className="flex items-center gap-2.5 transition-colors hover:text-champagne-deep"
                >
                  <MailIcon size={18} />
                  <span dir="ltr">hello@mehaco.ir</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-line pt-8 sm:flex-row">
          <p className="text-xs text-taupe">
            © ۱۴۰۵ محاکو — تمامی حقوق محفوظ است.
          </p>
          {/* جای نماد اعتماد الکترونیکی */}
          <div
            className="flex h-16 w-16 items-center justify-center border border-dashed border-line text-center text-[10px] leading-4 text-taupe/70"
            title="نماد اعتماد الکترونیکی (پس از دریافت)"
          >
            نماد
            <br />
            اعتماد
          </div>
        </div>
      </div>
    </footer>
  );
}
