import type { Metadata } from "next";
import { UserIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "حساب کاربری",
  description: "ورود به حساب کاربری محاکو.",
};

export default function AccountPage() {
  return (
    <div className="mx-auto max-w-md px-4 py-20 md:py-28">
      <div className="text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-ivory text-champagne">
          <UserIcon size={26} />
        </span>
        <p className="eyebrow mt-5 text-sm">My Account</p>
        <h1 className="section-title mt-1.5">ورود / ثبت‌نام</h1>
        <p className="mt-3 text-sm leading-7 text-taupe">
          ورود با کد یک‌بارمصرف پیامکی، در نسخهٔ نهایی سایت فعال می‌شود.
        </p>
      </div>

      <form
        className="mt-8 space-y-4"
        aria-disabled="true"
        onSubmit={undefined}
      >
        <label className="block">
          <span className="mb-1.5 block text-sm">شماره موبایل</span>
          <input
            type="tel"
            dir="ltr"
            placeholder="۰۹۱۲ ۰۰۰ ۰۰۰۰"
            disabled
            className="w-full border border-line bg-ivory/60 px-3.5 py-3 text-sm outline-none placeholder:text-taupe/50"
          />
        </label>
        <button type="button" disabled className="btn-primary w-full opacity-50">
          دریافت کد ورود (به‌زودی)
        </button>
      </form>
    </div>
  );
}
