"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/lib/cart";
import { formatPrice, toFaDigits } from "@/lib/format";
import { CATEGORIES, type Product } from "@/lib/products";
import {
  CheckIcon,
  ChevronDownIcon,
  MinusIcon,
  PlusIcon,
} from "./icons";

const SIZE_TABLE = [
  { size: "S", bust: "۸۴–۸۸", waist: "۶۴–۶۸", hip: "۹۰–۹۴" },
  { size: "M", bust: "۸۸–۹۲", waist: "۶۸–۷۲", hip: "۹۴–۹۸" },
  { size: "L", bust: "۹۲–۹۸", waist: "۷۲–۷۸", hip: "۹۸–۱۰۴" },
  { size: "XL", bust: "۹۸–۱۰۴", waist: "۷۸–۸۶", hip: "۱۰۴–۱۱۰" },
];

function InfoSection({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  return (
    <details className="group border-b border-line" open={defaultOpen}>
      <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-[15px] font-medium [&::-webkit-details-marker]:hidden">
        {title}
        <ChevronDownIcon
          size={18}
          className="text-taupe transition-transform group-open:rotate-180"
        />
      </summary>
      <div className="pb-5 text-sm leading-8 text-taupe">{children}</div>
    </details>
  );
}

export default function ProductDetail({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [activeImage, setActiveImage] = useState(0);
  const [size, setSize] = useState<string | null>(null);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [sizeError, setSizeError] = useState(false);

  const onSale = product.salePrice !== undefined;

  function handleAdd() {
    if (!size) {
      setSizeError(true);
      return;
    }
    addItem(product.slug, size, qty);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 2500);
  }

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
      {/* تصاویر */}
      <div>
        <div className="relative aspect-[3/4] overflow-hidden bg-cream">
          <Image
            src={product.images[activeImage]}
            alt={product.name}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          {onSale && (
            <span className="absolute top-4 right-4 bg-champagne-deep px-3 py-1 text-xs text-white">
              حراج
            </span>
          )}
        </div>
        {product.images.length > 1 && (
          <div className="mt-3 flex gap-3">
            {product.images.map((src, i) => (
              <button
                key={src}
                type="button"
                aria-label={`تصویر ${toFaDigits(i + 1)}`}
                onClick={() => setActiveImage(i)}
                className={`relative aspect-[3/4] w-20 overflow-hidden bg-cream transition-opacity ${
                  activeImage === i
                    ? "ring-1 ring-charcoal"
                    : "opacity-70 hover:opacity-100"
                }`}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* اطلاعات و خرید */}
      <div>
        <nav aria-label="مسیر" className="mb-4 text-[13px] text-taupe">
          <Link href="/shop" className="hover:text-champagne-deep">
            فروشگاه
          </Link>
          <span className="mx-1.5">/</span>
          <Link
            href={`/shop?category=${product.category}`}
            className="hover:text-champagne-deep"
          >
            {CATEGORIES[product.category].label}
          </Link>
        </nav>

        <h1 className="text-2xl font-light leading-10 md:text-3xl">
          {product.name}
        </h1>

        <p className="mt-4 text-xl">
          {onSale ? (
            <>
              <span className="text-champagne-deep">
                {formatPrice(product.salePrice!)}
              </span>{" "}
              <span className="text-base text-taupe line-through">
                {formatPrice(product.price)}
              </span>{" "}
              <span className="text-base text-taupe">تومان</span>
            </>
          ) : (
            <>
              {formatPrice(product.price)}{" "}
              <span className="text-base text-taupe">تومان</span>
            </>
          )}
        </p>

        {/* انتخاب سایز */}
        <fieldset className="mt-8">
          <legend className="mb-3 flex w-full items-center justify-between text-sm">
            <span className="font-medium">انتخاب سایز</span>
            {sizeError && !size && (
              <span className="text-champagne-deep">
                لطفاً ابتدا سایز را انتخاب کنید
              </span>
            )}
          </legend>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((s) => (
              <button
                key={s}
                type="button"
                aria-pressed={size === s}
                onClick={() => {
                  setSize(s);
                  setSizeError(false);
                }}
                className={`h-11 w-14 border text-sm transition-colors ${
                  size === s
                    ? "border-charcoal bg-charcoal text-white"
                    : "border-line hover:border-charcoal"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </fieldset>

        {/* تعداد و افزودن به سبد */}
        <div className="mt-6 flex items-stretch gap-3">
          <div className="flex items-center border border-line">
            <button
              type="button"
              aria-label="افزایش تعداد"
              onClick={() => setQty((q) => Math.min(q + 1, 10))}
              className="px-3 py-3 transition-colors hover:text-champagne-deep"
            >
              <PlusIcon size={16} />
            </button>
            <span className="w-8 text-center text-sm">{toFaDigits(qty)}</span>
            <button
              type="button"
              aria-label="کاهش تعداد"
              onClick={() => setQty((q) => Math.max(q - 1, 1))}
              className="px-3 py-3 transition-colors hover:text-champagne-deep"
            >
              <MinusIcon size={16} />
            </button>
          </div>
          <button
            type="button"
            onClick={handleAdd}
            className="btn-primary flex-1"
          >
            {added ? (
              <>
                <CheckIcon size={18} />
                به سبد اضافه شد
              </>
            ) : (
              "افزودن به سبد خرید"
            )}
          </button>
        </div>

        {added && (
          <p className="mt-3 text-sm text-taupe">
            <Link
              href="/cart"
              className="border-b border-champagne-deep pb-0.5 text-champagne-deep"
            >
              مشاهده سبد خرید و تکمیل سفارش
            </Link>
          </p>
        )}

        {/* بخش‌های اطلاعاتی */}
        <div className="mt-10 border-t border-line">
          <InfoSection title="توضیحات محصول" defaultOpen>
            <p>{product.description}</p>
          </InfoSection>
          <InfoSection title="مشخصات پارچه">
            <p>
              جنس: {product.fabric}
              <br />
              {product.fabricDetails}
            </p>
          </InfoSection>
          <InfoSection title="نحوهٔ شستشو">
            <ul className="list-disc space-y-1 pr-5">
              {product.care.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </InfoSection>
          <InfoSection title="راهنمای سایز">
            <div className="overflow-x-auto">
              <table className="w-full min-w-96 text-center text-sm">
                <thead>
                  <tr className="border-b border-line">
                    <th className="py-2 font-medium">سایز</th>
                    <th className="py-2 font-medium">دور سینه</th>
                    <th className="py-2 font-medium">دور کمر</th>
                    <th className="py-2 font-medium">دور باسن</th>
                  </tr>
                </thead>
                <tbody>
                  {SIZE_TABLE.filter((row) =>
                    product.sizes.includes(row.size)
                  ).map((row) => (
                    <tr key={row.size} className="border-b border-line/60">
                      <td className="py-2">{row.size}</td>
                      <td className="py-2">{row.bust}</td>
                      <td className="py-2">{row.waist}</td>
                      <td className="py-2">{row.hip}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-[13px]">
              اندازه‌ها به سانتی‌متر است. برای راهنمایی بیشتر،{" "}
              <Link
                href="/size-guide"
                className="border-b border-champagne-deep pb-0.5 text-champagne-deep"
              >
                راهنمای کامل سایز
              </Link>{" "}
              را ببینید.
            </p>
          </InfoSection>
        </div>
      </div>
    </div>
  );
}
