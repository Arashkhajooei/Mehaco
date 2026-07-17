"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { getProduct, type Product } from "./products";

export type CartItem = {
  slug: string;
  size: string;
  qty: number;
};

export type CartLine = CartItem & {
  product: Product;
  unitPrice: number;
  lineTotal: number;
};

type CartContextValue = {
  items: CartItem[];
  lines: CartLine[];
  count: number;
  subtotal: number;
  /** تا قبل از خواندن localStorage، سبد را «خالی» فرض نکنید */
  hydrated: boolean;
  addItem: (slug: string, size: string, qty?: number) => void;
  updateQty: (slug: string, size: string, qty: number) => void;
  removeItem: (slug: string, size: string) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "mehaco-cart-v1";
export const MAX_QTY = 10;

function parseStoredItems(raw: string | null): CartItem[] {
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw) as CartItem[];
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((i) => getProduct(i.slug));
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setItems(parseStoredItems(window.localStorage.getItem(STORAGE_KEY)));
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // پر بودن حافظه مرورگر نباید سایت را از کار بیندازد
    }
  }, [items, hydrated]);

  // همگام‌سازی بین تب‌ها: تغییر سبد در یک تب، تب‌های دیگر را هم به‌روز می‌کند
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key !== STORAGE_KEY) return;
      setItems(parseStoredItems(e.newValue));
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const addItem = useCallback((slug: string, size: string, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.slug === slug && i.size === size);
      if (existing) {
        return prev.map((i) =>
          i.slug === slug && i.size === size
            ? { ...i, qty: Math.min(i.qty + qty, MAX_QTY) }
            : i
        );
      }
      return [...prev, { slug, size, qty: Math.min(qty, MAX_QTY) }];
    });
  }, []);

  const updateQty = useCallback((slug: string, size: string, qty: number) => {
    setItems((prev) =>
      qty <= 0
        ? prev.filter((i) => !(i.slug === slug && i.size === size))
        : prev.map((i) =>
            i.slug === slug && i.size === size
              ? { ...i, qty: Math.min(qty, MAX_QTY) }
              : i
          )
    );
  }, []);

  const removeItem = useCallback((slug: string, size: string) => {
    setItems((prev) => prev.filter((i) => !(i.slug === slug && i.size === size)));
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const value = useMemo<CartContextValue>(() => {
    const lines: CartLine[] = items
      .map((item) => {
        const product = getProduct(item.slug);
        if (!product) return null;
        const unitPrice = product.salePrice ?? product.price;
        return { ...item, product, unitPrice, lineTotal: unitPrice * item.qty };
      })
      .filter((l): l is CartLine => l !== null);

    return {
      items,
      lines,
      count: lines.reduce((sum, l) => sum + l.qty, 0),
      subtotal: lines.reduce((sum, l) => sum + l.lineTotal, 0),
      hydrated,
      addItem,
      updateQty,
      removeItem,
      clear,
    };
  }, [items, hydrated, addItem, updateQty, removeItem, clear]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart باید داخل CartProvider استفاده شود");
  return ctx;
}
