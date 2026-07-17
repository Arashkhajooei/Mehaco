"use client";

import Image from "next/image";
import Link from "next/link";
import { MinusIcon, PlusIcon, TrashIcon } from "@/components/icons";
import { useCart } from "@/lib/cart";
import { formatPrice, toFaDigits } from "@/lib/format";

export default function CartPage() {
  const { lines, count, subtotal, updateQty, removeItem, hydrated } = useCart();

  // تا خوانده شدن سبد از حافظه مرورگر، پیام «سبد خالی» نشان داده نشود
  if (!hydrated) {
    return <div className="min-h-[60vh]" aria-hidden />;
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:px-8 md:py-14">
      <header className="mb-8 md:mb-12">
        <p className="eyebrow text-right text-sm">Shopping Bag</p>
        <h1 className="section-title mt-1.5">سبد خرید</h1>
      </header>

      {lines.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <p className="text-lg">سبد خرید شما خالی است.</p>
          <p className="mt-2 text-sm text-taupe">
            از کالکشن‌های محاکو دیدن کنید و لباس موردعلاقه‌تان را پیدا کنید.
          </p>
          <Link href="/shop" className="btn-primary mt-6">
            مشاهده محصولات
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_22rem]">
          {/* اقلام */}
          <ul className="divide-y divide-line border-t border-line">
            {lines.map((line) => (
              <li
                key={`${line.slug}-${line.size}`}
                className="flex gap-4 py-6 md:gap-6"
              >
                <Link
                  href={`/product/${line.slug}`}
                  className="relative block aspect-[3/4] w-24 shrink-0 overflow-hidden bg-cream md:w-28"
                >
                  <Image
                    src={line.product.images[0]}
                    alt={line.product.name}
                    fill
                    sizes="112px"
                    className="object-cover"
                  />
                </Link>
                <div className="flex flex-1 flex-col">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <Link
                        href={`/product/${line.slug}`}
                        className="text-[15px] hover:text-champagne-deep"
                      >
                        {line.product.name}
                      </Link>
                      <p className="mt-1 text-[13px] text-taupe">
                        سایز: {line.size} · {line.product.fabric}
                      </p>
                    </div>
                    <button
                      type="button"
                      aria-label="حذف از سبد"
                      onClick={() => removeItem(line.slug, line.size)}
                      className="p-1 text-taupe transition-colors hover:text-champagne-deep"
                    >
                      <TrashIcon size={18} />
                    </button>
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-4">
                    <div className="flex items-center border border-line">
                      <button
                        type="button"
                        aria-label="افزایش تعداد"
                        onClick={() =>
                          updateQty(line.slug, line.size, line.qty + 1)
                        }
                        className="px-2.5 py-2 transition-colors hover:text-champagne-deep"
                      >
                        <PlusIcon size={14} />
                      </button>
                      <span className="w-7 text-center text-sm">
                        {toFaDigits(line.qty)}
                      </span>
                      <button
                        type="button"
                        aria-label="کاهش تعداد"
                        onClick={() =>
                          updateQty(line.slug, line.size, line.qty - 1)
                        }
                        className="px-2.5 py-2 transition-colors hover:text-champagne-deep"
                      >
                        <MinusIcon size={14} />
                      </button>
                    </div>
                    <p className="text-[15px]">
                      {formatPrice(line.lineTotal)}{" "}
                      <span className="text-[13px] text-taupe">تومان</span>
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* خلاصهٔ سفارش */}
          <aside className="h-fit bg-ivory p-6 md:sticky md:top-32">
            <h2 className="border-b border-line pb-4 text-base font-medium">
              خلاصهٔ سفارش
            </h2>
            <dl className="space-y-3 py-4 text-sm">
              <div className="flex justify-between">
                <dt className="text-taupe">تعداد اقلام</dt>
                <dd>{toFaDigits(count)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-taupe">جمع سبد</dt>
                <dd>
                  {formatPrice(subtotal)}{" "}
                  <span className="text-taupe">تومان</span>
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-taupe">هزینهٔ ارسال</dt>
                <dd className="text-taupe">در مرحله بعد محاسبه می‌شود</dd>
              </div>
            </dl>
            <div className="flex justify-between border-t border-line pt-4 text-base">
              <span>مبلغ قابل پرداخت</span>
              <span>
                {formatPrice(subtotal)}{" "}
                <span className="text-sm text-taupe">تومان</span>
              </span>
            </div>
            <Link href="/checkout" className="btn-primary mt-6 w-full">
              ادامه و ثبت سفارش
            </Link>
            <Link
              href="/shop"
              className="mt-3 block text-center text-sm text-taupe transition-colors hover:text-champagne-deep"
            >
              ادامه خرید
            </Link>
          </aside>
        </div>
      )}
    </div>
  );
}
