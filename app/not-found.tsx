import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center md:py-32">
      <p className="eyebrow text-sm">404</p>
      <h1 className="section-title mt-1.5">این صفحه پیدا نشد</h1>
      <p className="mt-3 leading-8 text-taupe">
        صفحه‌ای که دنبالش بودید وجود ندارد یا جابه‌جا شده است.
      </p>
      <Link href="/" className="btn-primary mt-8">
        بازگشت به صفحهٔ اصلی
      </Link>
    </div>
  );
}
