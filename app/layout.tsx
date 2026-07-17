import type { Metadata } from "next";
import { Cormorant_Garamond, Vazirmatn } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { CartProvider } from "@/lib/cart";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-vazirmatn",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "محاکو | لباس خواب و کالکشن مجلسی زنانه",
    template: "%s | محاکو",
  },
  description:
    "محاکو؛ طراحی و تولید لباس خواب، لباس راحتی و کالکشن‌های مجلسی زنانه با پارچه‌های باکیفیت و دوخت دقیق. Delicate. Silky. Luxurious.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${vazirmatn.variable} ${cormorant.variable}`}
    >
      <body className="font-sans antialiased">
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
