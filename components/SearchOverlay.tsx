"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { CATEGORIES, PRODUCTS } from "@/lib/products";
import { formatPrice } from "@/lib/format";
import { CloseIcon, SearchIcon } from "./icons";

export default function SearchOverlay({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const results = useMemo(() => {
    const q = query.trim();
    if (q.length < 2) return [];
    return PRODUCTS.filter(
      (p) =>
        p.name.includes(q) ||
        p.fabric.includes(q) ||
        CATEGORIES[p.category].label.includes(q)
    ).slice(0, 6);
  }, [query]);

  return (
    <div
      className="fixed inset-0 z-50 bg-white/98 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="جستجوی محصولات"
    >
      <div className="mx-auto max-w-2xl px-4 pt-20 md:pt-28">
        <div className="flex items-center gap-3 border-b border-charcoal pb-3">
          <SearchIcon size={22} className="shrink-0 text-taupe" />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="نام محصول یا جنس پارچه را جستجو کنید…"
            className="w-full bg-transparent text-lg outline-none placeholder:text-taupe/60"
          />
          <button
            type="button"
            aria-label="بستن جستجو"
            onClick={onClose}
            className="shrink-0 p-1 transition-colors hover:text-champagne-deep"
          >
            <CloseIcon size={22} />
          </button>
        </div>

        {query.trim().length >= 2 && (
          <div className="mt-6">
            {results.length === 0 ? (
              <p className="py-8 text-center text-taupe">
                محصولی با این عنوان پیدا نشد. عبارت دیگری را امتحان کنید.
              </p>
            ) : (
              <ul className="divide-y divide-line">
                {results.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/product/${p.slug}`}
                      onClick={onClose}
                      className="flex items-center gap-4 py-3 transition-colors hover:bg-ivory"
                    >
                      <span className="relative block h-16 w-13 shrink-0 overflow-hidden bg-cream">
                        <Image
                          src={p.images[0]}
                          alt={p.name}
                          fill
                          sizes="52px"
                          className="object-cover"
                        />
                      </span>
                      <span className="flex-1">
                        <span className="block text-[15px]">{p.name}</span>
                        <span className="mt-0.5 block text-sm text-taupe">
                          {CATEGORIES[p.category].label}
                        </span>
                      </span>
                      <span className="text-sm">
                        {formatPrice(p.salePrice ?? p.price)}{" "}
                        <span className="text-taupe">تومان</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
