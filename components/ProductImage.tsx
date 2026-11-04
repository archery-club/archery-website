import Image from "next/image";
import { productMedia, type ProductMediaName } from "@/lib/product-media";

export default function ProductImage({ name, alt, className = "", priority = false }: { name: ProductMediaName; alt: string; className?: string; priority?: boolean }) {
  return <Image {...productMedia[name]} alt={alt} className={className} priority={priority} unoptimized />;
}
