"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { ChevronDownIcon } from "@/components/icons";
import { toFaDigits } from "@/lib/format";
import {
  CATEGORIES,
  PRODUCTS,
  getFabrics,
  getSizes,
  type Category,
} from "@/lib/products";

const PRICE_RANGES = [
  { key: "all", label: "همه قیمت‌ها", min: 0, max: Infinity },
  { key: "under2", label: "تا ۲ میلیون تومان", min: 0, max: 2_000_000 },
  { key: "2to4", label: "۲ تا ۴ میلیون تومان", min: 2_000_000, max: 4_000_000 },
  { key: "over4", label: "بالای ۴ میلیون تومان", min: 4_000_000, max: Infinity },
] as const;

type PriceKey = (typeof PRICE_RANGES)[number]["key"];

function toggle<T>(list: T[], value: T): T[] {
  return list.includes(value)
    ? list.filter((v) => v !== value)
    : [...list, value];
}

export default function ShopClient() {
  const params = useSearchParams();
  const rawCategory = params.get("category");
  // پارامتر نامعتبر (لینک اشتباه یا ناقص) باید مثل «همه محصولات» رفتار کند
  const category: Category | null =
    rawCategory && rawCategory in CATEGORIES ? (rawCategory as Category) : null;
  const onlyNew = params.get("new") === "1";
  const onlySale = params.get("sale") === "1";

  const [sizes, setSizes] = useState<string[]>([]);
  const [fabrics, setFabrics] = useState<string[]>([]);
  const [price, setPrice] = useState<PriceKey>("all");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const heading = onlySale
    ? "حراج"
    : onlyNew
      ? "کالکشن جدید"
      : category && CATEGORIES[category]
        ? CATEGORIES[category].label
        : "فروشگاه";

  const eyebrow = onlySale
    ? "Sale"
    : onlyNew
      ? "New Arrivals"
      : category === "sleepwear"
        ? "Sleepwear"
        : category === "evening"
          ? "Evening Collection"
          : "The Boutique";

  const products = useMemo(() => {
    const range = PRICE_RANGES.find((r) => r.key === price)!;
    return PRODUCTS.filter((p) => {
      if (category && p.category !== category) return false;
      if (onlyNew && !p.isNew) return false;
      if (onlySale && p.salePrice === undefined) return false;
      if (sizes.length > 0 && !p.sizes.some((s) => sizes.includes(s))) return false;
      if (fabrics.length > 0 && !fabrics.includes(p.fabric)) return false;
      const effective = p.salePrice ?? p.price;
      if (effective < range.min || effective >= range.max) return false;
      return true;
    });
  }, [category, onlyNew, onlySale, sizes, fabrics, price]);

  const activeFilterCount =
    sizes.length + fabrics.length + (price !== "all" ? 1 : 0);

  const filterPanel = (
    <div className="space-y-8">
      {/* سایز */}
      <fieldset>
        <legend className="mb-3 text-sm font-medium">سایز</legend>
        <div className="flex flex-wrap gap-2">
          {getSizes().map((s) => {
            const active = sizes.includes(s);
            return (
              <button
                key={s}
                type="button"
                aria-pressed={active}
                onClick={() => setSizes((prev) => toggle(prev, s))}
                className={`h-10 w-12 border text-sm transition-colors ${
                  active
                    ? "border-charcoal bg-charcoal text-white"
                    : "border-line hover:border-charcoal"
                }`}
              >
                {s}
              </button>
            );
          })}
        </div>
      </fieldset>

      {/* جنس پارچه */}
      <fieldset>
        <legend className="mb-3 text-sm font-medium">جنس پارچه</legend>
        <div className="space-y-2.5">
          {getFabrics().map((f) => (
            <label key={f} className="flex cursor-pointer items-center gap-2.5 text-sm">
              <input
                type="checkbox"
                checked={fabrics.includes(f)}
                onChange={() => setFabrics((prev) => toggle(prev, f))}
                className="h-4 w-4 accent-charcoal"
              />
              {f}
            </label>
          ))}
        </div>
      </fieldset>

      {/* قیمت */}
      <fieldset>
        <legend className="mb-3 text-sm font-medium">قیمت</legend>
        <div className="space-y-2.5">
          {PRICE_RANGES.map((r) => (
            <label key={r.key} className="flex cursor-pointer items-center gap-2.5 text-sm">
              <input
                type="radio"
                name="price"
                checked={price === r.key}
                onChange={() => setPrice(r.key)}
                className="h-4 w-4 accent-charcoal"
              />
              {r.label}
            </label>
          ))}
        </div>
      </fieldset>

      {activeFilterCount > 0 && (
        <button
          type="button"
          onClick={() => {
            setSizes([]);
            setFabrics([]);
            setPrice("all");
          }}
          className="border-b border-charcoal pb-0.5 text-sm transition-colors hover:border-champagne-deep hover:text-champagne-deep"
        >
          حذف همه فیلترها
        </button>
      )}
    </div>
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:px-8 md:py-14">
      <header className="mb-8 md:mb-12">
        <p className="eyebrow text-right text-sm">{eyebrow}</p>
        <h1 className="section-title mt-1.5">{heading}</h1>
        <p className="mt-2 text-sm text-taupe">
          {toFaDigits(products.length)} محصول
        </p>
      </header>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[15rem_1fr]">
        {/* فیلترها — دسکتاپ */}
        <aside className="hidden lg:block">
          <div className="sticky top-32">
            <p className="mb-6 border-b border-line pb-3 text-sm font-medium">
              فیلترها
            </p>
            {filterPanel}
          </div>
        </aside>

        {/* فیلترها — موبایل */}
        <div className="lg:hidden">
          <button
            type="button"
            onClick={() => setFiltersOpen((v) => !v)}
            aria-expanded={filtersOpen}
            className="flex w-full items-center justify-between border border-line px-4 py-3 text-sm"
          >
            <span>
              فیلترها
              {activeFilterCount > 0 && (
                <span className="mr-2 text-champagne-deep">
                  ({toFaDigits(activeFilterCount)})
                </span>
              )}
            </span>
            <ChevronDownIcon
              size={18}
              className={`transition-transform ${filtersOpen ? "rotate-180" : ""}`}
            />
          </button>
          {filtersOpen && (
            <div className="border border-t-0 border-line p-4">{filterPanel}</div>
          )}
        </div>

        {/* محصولات */}
        <div>
          {products.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <p className="text-lg">محصولی با این فیلترها پیدا نشد.</p>
              <p className="mt-2 text-sm text-taupe">
                فیلترها را تغییر دهید یا همه محصولات را ببینید.
              </p>
              <Link href="/shop" className="btn-outline mt-6">
                مشاهده همه محصولات
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 md:gap-x-6 md:gap-y-10">
              {products.map((p, i) => (
                <ProductCard key={p.slug} product={p} priority={i < 3} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
