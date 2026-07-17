export type Category = "sleepwear" | "evening";

export type Product = {
  slug: string;
  name: string;
  category: Category;
  price: number; // تومان
  salePrice?: number;
  fabric: string;
  sizes: string[];
  images: string[];
  description: string;
  fabricDetails: string;
  care: string[];
  isNew?: boolean;
  isBestseller?: boolean;
};

export const CATEGORIES: Record<Category, { label: string; image: string }> = {
  sleepwear: { label: "لباس خواب", image: "/images/cat-sleepwear.jpg" },
  evening: { label: "کالکشن مجلسی", image: "/images/cat-evening.jpg" },
};

const CARE_SATIN = [
  "شستشوی دستی با آب سرد یا ولرم",
  "استفاده از شوینده‌های ملایم و بدون سفیدکننده",
  "خشک کردن در سایه و دور از نور مستقیم آفتاب",
  "اتوکشی با حرارت کم و از پشت پارچه",
];

const CARE_COTTON = [
  "قابل شستشو در ماشین لباسشویی با دمای ۳۰ درجه",
  "استفاده از شوینده‌های ملایم",
  "خشک کردن در سایه",
  "اتوکشی با حرارت متوسط",
];

const CARE_DELICATE = [
  "فقط شستشوی دستی با آب سرد",
  "بدون پیچاندن و فشردن، به‌آرامی آبگیری شود",
  "خشک کردن به‌صورت پهن‌شده در سایه",
  "در صورت نیاز، اتوی بخار با فاصله از پارچه",
];

export const PRODUCTS: Product[] = [
  {
    slug: "roya-satin-kimono-set",
    name: "ست ساتن کیمونو «رویا»",
    category: "sleepwear",
    price: 2450000,
    fabric: "ساتن",
    sizes: ["S", "M", "L", "XL"],
    images: ["/images/p-sleep-3.jpg", "/images/detail-satin.jpg"],
    description:
      "ست کیمونو «رویا» با پارچهٔ ساتن درجه‌یک و حالتی روان و ابریشم‌گونه، برای لحظه‌های آرام خانه طراحی شده است. آستین‌های کیمونویی و کمربند پارچه‌ای، ظاهری لطیف و در عین حال شیک به این ست می‌دهد.",
    fabricDetails: "ساتن سیلک‌تاچ با درخشش ملایم، خنک و سبک روی پوست، بدون ایجاد حساسیت.",
    care: CARE_SATIN,
    isNew: true,
  },
  {
    slug: "adena-satin-robe",
    name: "روبدوشامبر ساتن «آدنا»",
    category: "sleepwear",
    price: 2150000,
    fabric: "ساتن",
    sizes: ["S", "M", "L", "XL"],
    images: ["/images/p-sleep-1.jpg", "/images/detail-satin.jpg"],
    description:
      "روبدوشامبر «آدنا» با قد بلند و برش آزاد، انتخابی بی‌زمان برای صبح‌ها و عصرهای آرام است. دوخت تمیز لبه‌ها و کمربند هم‌رنگ، جزئیاتی است که تفاوت را می‌سازد.",
    fabricDetails: "ساتن مات با وزن متوسط، فرم‌گیری عالی و سطحی نرم و خنک.",
    care: CARE_SATIN,
  },
  {
    slug: "nila-satin-robe",
    name: "روبدوشامبر ساتن «نیلا»",
    category: "sleepwear",
    price: 1980000,
    salePrice: 1590000,
    fabric: "ساتن",
    sizes: ["S", "M", "L"],
    images: ["/images/p-sleep-2.jpg", "/images/detail-white.jpg"],
    description:
      "روبدوشامبر «نیلا» با رنگ روشن و آرام و تریم سفید در لبه‌ها، حس یک صبح لطیف را به خانه می‌آورد. سبک، راحت و مناسب استفادهٔ روزمره.",
    fabricDetails: "ساتن سبک با ریزش عالی، مناسب فصل‌های گرم و میان‌فصل.",
    care: CARE_SATIN,
  },
  {
    slug: "mahtab-satin-nightgown",
    name: "پیراهن خواب ساتن «مهتاب»",
    category: "sleepwear",
    price: 1290000,
    fabric: "ساتن",
    sizes: ["S", "M", "L", "XL"],
    images: ["/images/p-sleep-4.jpg", "/images/detail-satin.jpg"],
    description:
      "پیراهن خواب «مهتاب» با برش ساده و ظریف، محبوب‌ترین مدل محاکوست؛ همان تعادل درست میان سادگی و زیبایی که هر شب دلتان می‌خواهد.",
    fabricDetails: "ساتن نرم با درخشش مهتابی، لطیف و خنک روی پوست.",
    care: CARE_SATIN,
    isBestseller: true,
  },
  {
    slug: "shabnam-chiffon-nightgown",
    name: "پیراهن خواب حریر «شبنم»",
    category: "sleepwear",
    price: 1480000,
    fabric: "حریر",
    sizes: ["S", "M", "L"],
    images: ["/images/p-sleep-5.jpg", "/images/detail-white.jpg"],
    description:
      "پیراهن «شبنم» از حریر سبک و شناور دوخته شده؛ لباسی که با هر حرکت، آرام موج می‌گیرد. برای شب‌هایی که می‌خواهید حس سبکی کنید.",
    fabricDetails: "حریر لطیف با شفافیت ملایم و آسترکشی در بالاتنه.",
    care: CARE_DELICATE,
    isNew: true,
  },
  {
    slug: "yas-lace-nightgown",
    name: "پیراهن خواب گیپور «یاس»",
    category: "sleepwear",
    price: 1750000,
    fabric: "گیپور",
    sizes: ["S", "M", "L", "XL"],
    images: ["/images/p-sleep-6.jpg", "/images/detail-white.jpg"],
    description:
      "پیراهن «یاس» با گیپور ظریف در یقه و حاشیه، ترکیبی از لطافت و جزئیات هنری است؛ انتخابی خاص برای هدیه دادن.",
    fabricDetails: "بدنهٔ ساتن با تریم گیپور نرم و بدون خارش.",
    care: CARE_DELICATE,
    isBestseller: true,
  },
  {
    slug: "nasim-cotton-set",
    name: "ست راحتی پنبه «نسیم»",
    category: "sleepwear",
    price: 980000,
    salePrice: 790000,
    fabric: "پنبه",
    sizes: ["S", "M", "L", "XL"],
    images: ["/images/p-sleep-7.jpg", "/images/detail-white.jpg"],
    description:
      "ست «نسیم» از پنبهٔ صددرصد طبیعی، برای خواب راحت و روزهای بی‌عجله. نرم، سبک و قابل‌اعتماد؛ همان چیزی که هر کمدی لازم دارد.",
    fabricDetails: "پنبهٔ ۱۰۰٪ با بافت نرم، قابلیت جذب عرق و تنفس عالی.",
    care: CARE_COTTON,
  },
  {
    slug: "aram-satin-nightgown",
    name: "پیراهن خواب ساتن «آرام»",
    category: "sleepwear",
    price: 1190000,
    fabric: "ساتن",
    sizes: ["S", "M", "L"],
    images: ["/images/p-sleep-8.jpg", "/images/detail-satin.jpg"],
    description:
      "پیراهن «آرام» با یقهٔ ظریف و برش راسته، برای کسانی طراحی شده که سادگی را دوست دارند؛ بدون هیچ جزئیات اضافه، فقط یک فرم درست.",
    fabricDetails: "ساتن با وزن سبک و ریزش نرم، مناسب تمام فصول.",
    care: CARE_SATIN,
  },
  {
    slug: "elize-evening-dress",
    name: "پیراهن مجلسی «الیزه»",
    category: "evening",
    price: 4850000,
    fabric: "کرپ",
    sizes: ["S", "M", "L", "XL"],
    images: ["/images/p-eve-1.jpg", "/images/detail-silk.jpg"],
    description:
      "پیراهن «الیزه» با فرم شیک و پارچهٔ کرپ سنگین، برای مهمانی‌هایی است که می‌خواهید بی‌تلاش، خاص دیده شوید. برش‌های تمیز و دوخت دقیق، امضای این مدل است.",
    fabricDetails: "کرپ درجه‌یک با ایستایی عالی و آستر کامل.",
    care: CARE_DELICATE,
    isNew: true,
  },
  {
    slug: "verona-maxi-dress",
    name: "پیراهن ماکسی «ورونا»",
    category: "evening",
    price: 5900000,
    fabric: "ساتن",
    sizes: ["S", "M", "L"],
    images: ["/images/p-eve-2.jpg", "/images/detail-satin.jpg"],
    description:
      "ماکسی «ورونا» با قد بلند و دنبالهٔ ملایم، انتخاب اول مشتریان محاکو برای مراسم رسمی است. ساتن براق و فرم دکلته، ترکیبی کلاسیک و همیشه‌درست.",
    fabricDetails: "ساتن سنگین با درخشش کنترل‌شده و آستر کامل.",
    care: CARE_DELICATE,
    isBestseller: true,
  },
  {
    slug: "zomorrod-evening-dress",
    name: "پیراهن مجلسی «زمرد»",
    category: "evening",
    price: 4200000,
    salePrice: 3490000,
    fabric: "ساتن",
    sizes: ["M", "L", "XL"],
    images: ["/images/p-eve-3.jpg", "/images/detail-silk.jpg"],
    description:
      "پیراهن «زمرد» با رنگ سبز عمیق و فرم جذب، برای کسانی است که از رنگ نمی‌ترسند. در نور مهمانی، این پیراهن خودش می‌درخشد.",
    fabricDetails: "ساتن نرم با کشسانی ملایم برای فرم بهتر روی بدن.",
    care: CARE_DELICATE,
  },
  {
    slug: "golnar-evening-dress",
    name: "پیراهن مجلسی «گلنار»",
    category: "evening",
    price: 5200000,
    fabric: "کرپ",
    sizes: ["S", "M", "L"],
    images: ["/images/p-eve-4.jpg", "/images/detail-silk.jpg"],
    description:
      "پیراهن «گلنار» با رنگ گرم و برش خاص در سرشانه، برای شب‌های مهم طراحی شده است؛ لباسی که در قاب عکس‌ها ماندگار می‌شود.",
    fabricDetails: "کرپ لطیف با ریزش سنگین و آستر کامل.",
    care: CARE_DELICATE,
  },
  {
    slug: "setare-evening-gown",
    name: "پیراهن شب «ستاره»",
    category: "evening",
    price: 6750000,
    fabric: "گیپور",
    sizes: ["S", "M", "L"],
    images: ["/images/p-eve-5.jpg", "/images/detail-silk.jpg"],
    description:
      "پیراهن شب «ستاره» با جزئیات درخشان و دامن بلند، لوکس‌ترین مدل این کالکشن است؛ برای شب‌هایی که همه نگاه‌ها به شماست.",
    fabricDetails: "بدنهٔ گیپور دست‌دوز با آستر ساتن و دامن ریزش‌دار.",
    care: CARE_DELICATE,
    isNew: true,
  },
  {
    slug: "romina-evening-dress",
    name: "پیراهن مجلسی «رومینا»",
    category: "evening",
    price: 3950000,
    fabric: "ساتن",
    sizes: ["S", "M", "L", "XL"],
    images: ["/images/p-eve-6.jpg", "/images/detail-satin.jpg"],
    description:
      "پیراهن «رومینا» با فرم ساده و خطوط تمیز، همان لباس مشکی بی‌نقصی است که همیشه به آن برمی‌گردید؛ مینیمال، رسمی و همیشه شیک.",
    fabricDetails: "ساتن مات با وزن متوسط و آستر کامل.",
    care: CARE_DELICATE,
    isBestseller: true,
  },
];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getNewArrivals(count = 4): Product[] {
  return PRODUCTS.filter((p) => p.isNew).slice(0, count);
}

export function getBestsellers(count = 4): Product[] {
  return PRODUCTS.filter((p) => p.isBestseller).slice(0, count);
}

export function getSaleProducts(): Product[] {
  return PRODUCTS.filter((p) => p.salePrice);
}

export function getSimilar(product: Product, count = 4): Product[] {
  return PRODUCTS.filter(
    (p) => p.category === product.category && p.slug !== product.slug
  ).slice(0, count);
}

export function getFabrics(): string[] {
  return [...new Set(PRODUCTS.map((p) => p.fabric))];
}

export function getSizes(): string[] {
  return ["S", "M", "L", "XL"];
}
