import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/lib/format";
import type { Product } from "@/lib/products";

export default function ProductCard({
  product,
  priority = false,
}: {
  product: Product;
  priority?: boolean;
}) {
  const onSale = product.salePrice !== undefined;

  return (
    <Link href={`/product/${product.slug}`} className="group block">
      <div className="relative aspect-[3/4] overflow-hidden bg-cream">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          priority={priority}
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        {onSale && (
          <span className="absolute top-3 right-3 bg-champagne-deep px-2.5 py-1 text-xs text-white">
            حراج
          </span>
        )}
        {!onSale && product.isNew && (
          <span className="absolute top-3 right-3 bg-white/90 px-2.5 py-1 text-xs text-charcoal">
            جدید
          </span>
        )}
      </div>
      <div className="pt-3 pb-1">
        <h3 className="text-[15px] leading-6">{product.name}</h3>
        <p className="mt-0.5 text-[13px] text-taupe">{product.fabric}</p>
        <p className="mt-1.5 text-[15px]">
          {onSale ? (
            <>
              <span className="text-champagne-deep">
                {formatPrice(product.salePrice!)}
              </span>{" "}
              <span className="text-[13px] text-taupe line-through">
                {formatPrice(product.price)}
              </span>{" "}
              <span className="text-[13px] text-taupe">تومان</span>
            </>
          ) : (
            <>
              {formatPrice(product.price)}{" "}
              <span className="text-[13px] text-taupe">تومان</span>
            </>
          )}
        </p>
      </div>
    </Link>
  );
}
