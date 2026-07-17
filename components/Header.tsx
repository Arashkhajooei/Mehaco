"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useCart } from "@/lib/cart";
import { toFaDigits } from "@/lib/format";
import SearchOverlay from "./SearchOverlay";
import { BagIcon, CloseIcon, MenuIcon, SearchIcon, UserIcon } from "./icons";

const NAV_LINKS = [
  { href: "/shop?category=sleepwear", label: "لباس خواب" },
  { href: "/shop?category=evening", label: "کالکشن مجلسی" },
  { href: "/shop?new=1", label: "کالکشن جدید" },
  { href: "/shop?sale=1", label: "حراج" },
  { href: "/about", label: "درباره ما" },
];

export default function Header() {
  const { count } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  // با هر جابه‌جایی مسیر، منو و جستجو بسته شوند تا صفحه جدید زیر آن‌ها گیر نکند
  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen || searchOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, searchOpen]);

  return (
    // توجه: backdrop-blur نباید روی خود header باشد؛ برای عناصر fixed داخلش
    // (منوی موبایل و جستجو) containing block می‌سازد و آن‌ها را جمع می‌کند
    <header className="sticky top-0 z-40">
      {/* امضای برند */}
      <div className="border-b border-line bg-ivory">
        <p className="eyebrow py-1.5 text-center text-[13px]">
          Delicate. Silky. Luxurious.
        </p>
      </div>

      <div className="border-b border-line bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-8">
          {/* سمت راست: لوگو (و منوی موبایل) */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="-m-1 p-2 md:hidden"
              aria-label={menuOpen ? "بستن منو" : "باز کردن منو"}
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
            </button>
            <Link href="/" className="flex flex-col items-start leading-none" onClick={() => setMenuOpen(false)}>
              <span className="text-2xl font-semibold tracking-tight md:text-[26px]">
                محاکو
              </span>
              <span
                dir="ltr"
                className="mt-0.5 font-display text-[10px] font-medium uppercase tracking-[0.35em] text-champagne"
              >
                Mehaco
              </span>
            </Link>
          </div>

          {/* منوی اصلی */}
          <nav className="hidden md:block" aria-label="منوی اصلی">
            <ul className="flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-charcoal transition-colors hover:text-champagne-deep"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* سمت چپ: جستجو، حساب، سبد */}
          <div className="flex items-center gap-2 md:gap-3">
            <button
              type="button"
              aria-label="جستجو"
              className="p-2 transition-colors hover:text-champagne-deep"
              onClick={() => setSearchOpen(true)}
            >
              <SearchIcon size={21} />
            </button>
            <Link
              href="/account"
              aria-label="حساب کاربری"
              className="hidden p-2 transition-colors hover:text-champagne-deep md:block"
            >
              <UserIcon size={21} />
            </Link>
            <Link
              href="/cart"
              aria-label="سبد خرید"
              className="relative p-2 transition-colors hover:text-champagne-deep"
              onClick={() => setMenuOpen(false)}
            >
              <BagIcon size={21} />
              {count > 0 && (
                <span className="absolute -bottom-0.5 -left-0.5 flex h-4.5 min-w-4.5 items-center justify-center rounded-full bg-champagne-deep px-1 text-[10px] text-white">
                  {toFaDigits(count)}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* منوی موبایل — top دقیقاً برابر ارتفاع هدر موبایل است (نوار امضا + نوار h-16) */}
      {menuOpen && (
        <div className="fixed inset-x-0 top-[98px] bottom-0 z-40 overflow-y-auto bg-white md:hidden">
          <nav aria-label="منوی موبایل" className="px-6 py-6">
            <ul className="divide-y divide-line">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="block py-4 text-lg"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/account"
                  className="flex items-center gap-3 py-4 text-lg"
                  onClick={() => setMenuOpen(false)}
                >
                  <UserIcon size={20} />
                  حساب کاربری
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}

      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
    </header>
  );
}
