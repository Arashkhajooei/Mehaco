const faNumber = new Intl.NumberFormat("fa-IR");

/** قیمت را با ارقام فارسی و جداکنندهٔ هزارگان برمی‌گرداند، مثل «۱٬۸۹۰٬۰۰۰» */
export function formatPrice(price: number): string {
  return faNumber.format(price);
}

export function toFaDigits(value: number | string): string {
  const fa = "۰۱۲۳۴۵۶۷۸۹";
  return String(value).replace(/\d/g, (d) => fa[Number(d)]);
}
