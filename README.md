# Mehaco (محاکو) — Online Boutique

Online boutique for the **Mehaco** brand: women's sleepwear, loungewear, and evening collections, built for the Iranian market (Persian, fully RTL).

> Delicate. Silky. Luxurious.

Version 1 implements the "Mehaco Website Design Document" faithfully: minimal, luxurious, mobile-first, and entirely right-to-left.

## Getting started

Requires Node.js 22 (an `.nvmrc` is included).

```bash
nvm use          # or any other way to activate Node 22
npm install
npm run dev      # http://localhost:3000
```

Production build:

```bash
npm run build && npm start
```

> Note: don't run `npm run build` while the dev server is running — both share the
> `.next` directory and the dev cache will get corrupted.

## Tech stack

- **Next.js 15** (App Router, fully static output — fast and light, ~110 KB JS)
- **Tailwind CSS v4** — brand tokens live in `app/globals.css` (`@theme` block)
- **TypeScript**
- Persian font: **Vazirmatn** (free stand-in for IRAN Yekan X until a license is purchased)
- English signature font: **Cormorant Garamond**

## Structure

| Path | Description |
|---|---|
| `app/page.tsx` | Home: hero, category cards, new arrivals, bestsellers, "Why Mehaco", Instagram gallery |
| `app/shop` + `components/ShopClient.tsx` | Shop with size / fabric / price filters |
| `app/product/[slug]` + `components/ProductDetail.tsx` | Product page: gallery, size, quantity, cart, description / fabric / care / size-guide sections, similar products |
| `app/cart`, `app/checkout` | Cart and test checkout (with full form validation) |
| `app/about`, `contact`, `faq`, `size-guide`, `shipping`, `returns`, `shopping-guide`, `account` | Info pages |
| `lib/products.ts` | Product catalog (currently static — 14 sample products) |
| `lib/cart.tsx` | Cart context: localStorage, cross-tab sync, quantity cap of 10 |
| `lib/format.ts` | Persian price and digit formatting |

## v1 status (what is still placeholder)

- **Photos**: downloaded from Unsplash for testing (`public/images/`) and should be
  replaced with real brand photography. The design is optimized for 3:4 portrait shots.
- **Payment**: the "place test order" button records the order without payment.
  Connecting Zarinpal (or another gateway) is required for the production release.
- **Products**: hardcoded in `lib/products.ts`; to manage products without a developer,
  connecting a CMS or admin panel is the recommended next step.
- **User accounts**: UI only; SMS one-time-code login still needs to be implemented.
- **Trust badge**: a placeholder in the footer — replace once the eNamad seal is issued.
- **Font**: if an IRAN Yekan X license is purchased, only `app/layout.tsx` and
  `--font-sans` in `globals.css` need to change.

## Suggested v2 roadmap

1. Payment gateway integration (Zarinpal) + server-side order handling
2. Product admin panel (or a headless CMS such as Strapi/Sanity, or Supabase)
3. SMS OTP login
4. Real Instagram gallery integration
5. Hosting: static output on an Iran-local CDN (e.g. ArvanCloud) for fast in-country loading
