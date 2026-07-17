import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import {
  FabricIcon,
  InstagramIcon,
  NeedleIcon,
  SupportIcon,
  TruckIcon,
} from "@/components/icons";
import {
  CATEGORIES,
  getBestsellers,
  getNewArrivals,
  type Category,
} from "@/lib/products";

const BENEFITS = [
  {
    icon: FabricIcon,
    title: "پارچه‌های باکیفیت",
    text: "پارچه‌ها را لمس می‌کنیم، می‌پوشیم و بعد انتخاب می‌کنیم؛ فقط بهترین‌ها به تولید می‌رسند.",
  },
  {
    icon: NeedleIcon,
    title: "دوخت دقیق",
    text: "هر تکه در کارگاه محاکو با وسواس دوخته و تک‌به‌تک کنترل کیفیت می‌شود.",
  },
  {
    icon: TruckIcon,
    title: "ارسال سریع",
    text: "سفارش شما با بسته‌بندی شکیل، در سریع‌ترین زمان به سراسر کشور ارسال می‌شود.",
  },
  {
    icon: SupportIcon,
    title: "پشتیبانی",
    text: "قبل و بعد از خرید کنار شماییم؛ از انتخاب سایز تا تعویض کالا.",
  },
];

const IG_IMAGES = [
  "/images/ig-1.jpg",
  "/images/ig-2.jpg",
  "/images/ig-3.jpg",
  "/images/ig-4.jpg",
  "/images/ig-5.jpg",
  "/images/ig-6.jpg",
];

function SectionHeading({
  eyebrow,
  title,
  href,
  linkLabel,
}: {
  eyebrow: string;
  title: string;
  href?: string;
  linkLabel?: string;
}) {
  return (
    <div className="mb-8 flex items-end justify-between md:mb-10">
      <div>
        <p className="eyebrow text-right text-sm">{eyebrow}</p>
        <h2 className="section-title mt-1.5">{title}</h2>
      </div>
      {href && linkLabel && (
        <Link
          href={href}
          className="mb-1 border-b border-charcoal pb-0.5 text-sm transition-colors hover:border-champagne-deep hover:text-champagne-deep"
        >
          {linkLabel}
        </Link>
      )}
    </div>
  );
}

export default function HomePage() {
  const newArrivals = getNewArrivals(4);
  const bestsellers = getBestsellers(4);

  return (
    <>
      {/* بخش اول: تصویر تمام‌عرض */}
      <section className="relative flex min-h-[82vh] items-end md:min-h-[88vh]">
        <Image
          src="/images/hero.jpg"
          alt="زنی با روبدوشامبر ساتن در نور طبیعی پنجره"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[65%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/55 via-charcoal/10 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-14 md:px-8 md:pb-20">
          <h1
            dir="ltr"
            className="fade-up text-right font-display text-4xl font-medium italic leading-tight text-white md:text-6xl"
          >
            Delicate. Silky. Luxurious.
          </h1>
          <p className="fade-up-delay-1 mt-4 max-w-xl text-[15px] leading-8 text-white/90 md:text-lg md:leading-9">
            لباس‌هایی با طراحی ظریف و پارچه‌های باکیفیت، برای زنانی که به زیبایی
            و کیفیت اهمیت می‌دهند.
          </p>
          <div className="fade-up-delay-2 mt-7">
            <Link href="/shop" className="btn-primary bg-white !text-charcoal hover:!bg-ivory">
              مشاهده محصولات
            </Link>
          </div>
        </div>
      </section>

      {/* دسته‌بندی محصولات */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {(Object.keys(CATEGORIES) as Category[]).map((key) => (
            <Link
              key={key}
              href={`/shop?category=${key}`}
              className="group relative block aspect-[4/5] overflow-hidden bg-cream sm:aspect-[4/4.5]"
            >
              <Image
                src={CATEGORIES[key].image}
                alt={CATEGORIES[key].label}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <h3 className="text-2xl font-light text-white md:text-3xl">
                  {CATEGORIES[key].label}
                </h3>
                <span className="mt-2 inline-block border-b border-white/70 pb-0.5 text-sm text-white/90 transition-colors group-hover:border-champagne group-hover:text-champagne">
                  مشاهده کالکشن
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* کالکشن جدید */}
      <section className="mx-auto max-w-7xl px-4 pb-16 md:px-8 md:pb-24">
        <SectionHeading
          eyebrow="New Arrivals"
          title="کالکشن جدید"
          href="/shop?new=1"
          linkLabel="مشاهده همه"
        />
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4 md:gap-x-6">
          {newArrivals.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* پرفروش‌ترین‌ها */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
          <SectionHeading
            eyebrow="Bestsellers"
            title="پرفروش‌ترین‌ها"
            href="/shop"
            linkLabel="مشاهده همه"
          />
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4 md:gap-x-6">
            {bestsellers.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* چرا محاکو؟ */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <div className="mb-10 text-center md:mb-14">
          <p className="eyebrow text-sm">Why Mehaco</p>
          <h2 className="section-title mt-1.5">چرا محاکو؟</h2>
        </div>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b) => (
            <div key={b.title} className="text-center">
              <b.icon className="mx-auto text-champagne" />
              <h3 className="mt-4 text-base font-medium">{b.title}</h3>
              <p className="mx-auto mt-2 max-w-60 text-sm leading-7 text-taupe">
                {b.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* گالری اینستاگرام */}
      <section className="mx-auto max-w-7xl px-4 pb-16 md:px-8 md:pb-24">
        <div className="mb-8 text-center md:mb-10">
          <p className="eyebrow text-sm">@mehaco</p>
          <h2 className="section-title mt-1.5">محاکو در اینستاگرام</h2>
        </div>
        <div className="grid grid-cols-3 gap-2 md:grid-cols-6 md:gap-3">
          {IG_IMAGES.map((src, i) => (
            <a
              key={src}
              href="https://instagram.com/mehaco"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-square overflow-hidden bg-cream"
            >
              <Image
                src={src}
                alt={`تصویر ${i + 1} از اینستاگرام محاکو`}
                fill
                sizes="(max-width: 768px) 33vw, 16vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-charcoal/0 text-white opacity-0 transition-all duration-300 group-hover:bg-charcoal/35 group-hover:opacity-100">
                <InstagramIcon size={22} />
              </span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
