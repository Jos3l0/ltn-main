import Animate from "@/app/_animations/Animate";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/shared_components/Carousel";
import Image from "next/image";
import Link from "next/link";

interface Product {
  src: string;
  alt: string;
  link: string;
}

interface Props {
  products: Product[];
  width: number;
  height: number;
  className?: string;
}

export const ProductCarousel = ({
  products,
  width,
  height,
  className,
}: Props) => {
  const productItems = cn(
    "relative min-w-[22rem] h-full px-0 basis-0",
    className
  );

  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
        containScroll: "trimSnaps",
      }}
      className="m-auto w-full"
    >
      <Animate type="fade" direction="left">
        <CarouselContent className="flex lg:justify-center">
          {products.map((product) => (
            <CarouselItem key={product.alt} className={productItems}>
              <Link href={product.link} className="h-full">
                <Image
                  src={product.src}
                  alt={product.alt}
                  width={width}
                  height={height}
                  className="mx-auto h-full object-cover"
                />
                <span className="absolute bottom-4 left-8 z-10 text-white">
                  {product.alt}
                </span>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Animate>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
};
