"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { CheckIcon } from "@/components/icons";
import { useCart } from "@/lib/cart";
import { formatPrice, toFaDigits } from "@/lib/format";

const SHIPPING_METHODS = [
  { key: "pishtaz", label: "پست پیشتاز", price: 80000, eta: "۳ تا ۵ روز کاری" },
  { key: "tipax", label: "تیپاکس (پس‌کرایه)", price: 0, eta: "۱ تا ۳ روز کاری" },
] as const;

/** ارقام فارسی/عربی را به لاتین برمی‌گرداند تا اعتبارسنجی برای همه صفحه‌کلیدها کار کند */
function normalizeDigits(value: string): string {
  return value
    .replace(/[۰-۹]/g, (d) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(d)))
    .replace(/[٠-٩]/g, (d) => String("٠١٢٣٤٥٦٧٨٩".indexOf(d)));
}

type FormErrors = Partial<Record<string, string>>;

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};
  const get = (name: string) => String(data.get(name) ?? "").trim();

  if (get("fullName").length < 3) {
    errors.fullName = "نام و نام خانوادگی را کامل وارد کنید.";
  }
  const phone = normalizeDigits(get("phone")).replace(/[\s-]/g, "");
  if (!/^09\d{9}$/.test(phone)) {
    errors.phone = "شماره موبایل معتبر نیست؛ مثال: ۰۹۱۲۱۲۳۴۵۶۷";
  }
  if (!get("province")) errors.province = "استان را وارد کنید.";
  if (!get("city")) errors.city = "شهر را وارد کنید.";
  if (get("address").length < 10) {
    errors.address = "آدرس را کامل‌تر وارد کنید تا مرسوله بدون مشکل برسد.";
  }
  const postal = normalizeDigits(get("postalCode")).replace(/[\s-]/g, "");
  if (!/^\d{10}$/.test(postal)) {
    errors.postalCode = "کد پستی باید ۱۰ رقم باشد.";
  }
  return errors;
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  dir?: "rtl" | "ltr";
  full?: boolean;
  inputMode?: "text" | "numeric" | "tel";
  error?: string;
};

function Field({
  label,
  name,
  type = "text",
  required = true,
  dir,
  full,
  inputMode,
  error,
}: FieldProps) {
  return (
    <label className={`block ${full ? "sm:col-span-2" : ""}`}>
      <span className="mb-1.5 block text-sm">
        {label}
        {required && <span className="text-champagne-deep"> *</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        dir={dir}
        inputMode={inputMode}
        aria-invalid={error ? true : undefined}
        className={`w-full border bg-white px-3.5 py-3 text-sm outline-none transition-colors focus:border-charcoal ${
          error ? "border-champagne-deep" : "border-line"
        }`}
      />
      {error && <span className="mt-1.5 block text-[13px] text-champagne-deep">{error}</span>}
    </label>
  );
}

export default function CheckoutPage() {
  const { lines, subtotal, clear, hydrated } = useCart();
  const [shipping, setShipping] = useState<string>("pishtaz");
  const [orderId, setOrderId] = useState<string | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});

  const shippingMethod = SHIPPING_METHODS.find((m) => m.key === shipping)!;
  const total = subtotal + shippingMethod.price;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const nextErrors = validateForm(new FormData(e.currentTarget));
    setErrors(nextErrors);
    const firstErrorField = Object.keys(nextErrors)[0];
    if (firstErrorField) {
      e.currentTarget
        .querySelector<HTMLInputElement>(`input[name="${firstErrorField}"]`)
        ?.focus();
      return;
    }
    const id = `MH-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(id);
    clear();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (orderId) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-24 text-center md:py-32">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-champagne text-white">
          <CheckIcon size={28} />
        </span>
        <h1 className="section-title mt-6">سفارش شما ثبت شد</h1>
        <p className="mt-3 leading-8 text-taupe">
          کد پیگیری سفارش:{" "}
          <span dir="ltr" className="text-charcoal">
            {orderId}
          </span>
          <br />
          این یک سفارش آزمایشی است؛ درگاه پرداخت آنلاین در نسخهٔ نهایی فعال
          می‌شود.
        </p>
        <Link href="/shop" className="btn-primary mt-8">
          بازگشت به فروشگاه
        </Link>
      </div>
    );
  }

  // تا خوانده شدن سبد از حافظه مرورگر، پیام «سبد خالی» نشان داده نشود
  if (!hydrated) {
    return <div className="min-h-[60vh]" aria-hidden />;
  }

  if (lines.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-24 text-center md:py-32">
        <h1 className="section-title">سبد خرید شما خالی است</h1>
        <p className="mt-3 text-taupe">
          برای ثبت سفارش، ابتدا محصولی به سبد اضافه کنید.
        </p>
        <Link href="/shop" className="btn-primary mt-8">
          مشاهده محصولات
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:px-8 md:py-14">
      <header className="mb-8 md:mb-12">
        <p className="eyebrow text-right text-sm">Checkout</p>
        <h1 className="section-title mt-1.5">ثبت سفارش</h1>
      </header>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_22rem]"
      >
        <div className="space-y-10">
          {/* مشخصات گیرنده */}
          <section>
            <h2 className="mb-5 border-b border-line pb-3 text-base font-medium">
              مشخصات گیرنده
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="نام و نام خانوادگی" name="fullName" error={errors.fullName} />
              <Field
                label="شماره موبایل"
                name="phone"
                type="tel"
                dir="ltr"
                inputMode="tel"
                error={errors.phone}
              />
              <Field label="استان" name="province" error={errors.province} />
              <Field label="شهر" name="city" error={errors.city} />
              <Field label="آدرس کامل" name="address" full error={errors.address} />
              <Field
                label="کد پستی"
                name="postalCode"
                dir="ltr"
                inputMode="numeric"
                error={errors.postalCode}
              />
            </div>
          </section>

          {/* روش ارسال */}
          <section>
            <h2 className="mb-5 border-b border-line pb-3 text-base font-medium">
              روش ارسال
            </h2>
            <div className="space-y-3">
              {SHIPPING_METHODS.map((m) => (
                <label
                  key={m.key}
                  className={`flex cursor-pointer items-center justify-between border px-4 py-3.5 text-sm transition-colors ${
                    shipping === m.key ? "border-charcoal" : "border-line"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="shipping"
                      checked={shipping === m.key}
                      onChange={() => setShipping(m.key)}
                      className="h-4 w-4 accent-charcoal"
                    />
                    <span>
                      {m.label}
                      <span className="mt-0.5 block text-[13px] text-taupe">
                        {m.eta}
                      </span>
                    </span>
                  </span>
                  <span>
                    {m.price === 0
                      ? "پس‌کرایه"
                      : `${formatPrice(m.price)} تومان`}
                  </span>
                </label>
              ))}
            </div>
          </section>

          {/* پرداخت */}
          <section>
            <h2 className="mb-5 border-b border-line pb-3 text-base font-medium">
              روش پرداخت
            </h2>
            <label className="flex cursor-pointer items-center gap-3 border border-charcoal px-4 py-3.5 text-sm">
              <input
                type="radio"
                name="payment"
                checked
                readOnly
                className="h-4 w-4 accent-charcoal"
              />
              <span>
                پرداخت آنلاین (زرین‌پال)
                <span className="mt-0.5 block text-[13px] text-taupe">
                  در نسخهٔ آزمایشی، سفارش بدون پرداخت ثبت می‌شود.
                </span>
              </span>
            </label>
          </section>
        </div>

        {/* خلاصهٔ سفارش */}
        <aside className="h-fit bg-ivory p-6 lg:sticky lg:top-32">
          <h2 className="border-b border-line pb-4 text-base font-medium">
            خلاصهٔ سفارش
          </h2>
          <ul className="divide-y divide-line/70 py-2">
            {lines.map((line) => (
              <li
                key={`${line.slug}-${line.size}`}
                className="flex justify-between gap-3 py-3 text-sm"
              >
                <span className="text-taupe">
                  {line.product.name}
                  <span className="mx-1">·</span>
                  {line.size}
                  <span className="mx-1">×</span>
                  {toFaDigits(line.qty)}
                </span>
                <span className="shrink-0">
                  {formatPrice(line.lineTotal)}
                </span>
              </li>
            ))}
          </ul>
          <dl className="space-y-3 border-t border-line py-4 text-sm">
            <div className="flex justify-between">
              <dt className="text-taupe">جمع سبد</dt>
              <dd>{formatPrice(subtotal)} تومان</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-taupe">هزینهٔ ارسال</dt>
              <dd>
                {shippingMethod.price === 0
                  ? "پس‌کرایه"
                  : `${formatPrice(shippingMethod.price)} تومان`}
              </dd>
            </div>
          </dl>
          <div className="flex justify-between border-t border-line pt-4 text-base">
            <span>مبلغ قابل پرداخت</span>
            <span>{formatPrice(total)} تومان</span>
          </div>
          <button type="submit" className="btn-primary mt-6 w-full">
            ثبت سفارش آزمایشی
          </button>
          <Link
            href="/cart"
            className="mt-3 block text-center text-sm text-taupe transition-colors hover:text-champagne-deep"
          >
            بازگشت به سبد خرید
          </Link>
        </aside>
      </form>
    </div>
  );
}
