import { Dialog, DialogContent } from "@/shared_components/Dialog";
import React from "react";
import type { Product } from "../products";
import useIsDesktop from "@/hooks/useIsDesktop";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  useCarousel,
} from "@/shared_components/Carousel";
import { Button } from "@/shared_components/Button";

interface Props {
  selectedProduct: Product | null;
  closeModal: () => void;
}

// ----------Components----------
const Title = ({ title }: { title: string }) => (
  <h1 className="mt-12 text-2xl md:text-4xl">{title}</h1>
);

const CarouselImage = ({ images }: { images: string[] }) => {
  return (
    <Carousel
      opts={{
        align: "center",
        // loop: true,
        containScroll: "trimSnaps",
      }}
      className="flex h-full flex-col items-center justify-center"
    >
      <div className="relative mx-auto mb-8 h-full max-w-[85%] md:max-w-[80%]">
        {/* <div className="relative mx-auto mb-8 w-[290px] max-w-[80%] ">  */}
        <CarouselContent hidden className="self-center">
          {images.map((image) => (
            <CarouselItem key={image} className={"relative w-full"}>
              <Image
                src={image}
                alt={image}
                width={1200}
                height={1200}
                className="mx-auto h-full w-full  fill-current object-contain"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="max-w-6" />
        <CarouselPrevious className="max-w-6" />
      </div>
      <CarouselImages images={images} />
    </Carousel>
  );
};

const CarouselImages = ({ images }: { images: string[] }) => {
  const { scrollTo } = useCarousel();
  return (
    <div className="flex w-full gap-4 overflow-y-auto overflow-x-scroll">
      {images.map((image, i) => (
        <Image
          key={image}
          src={image}
          alt="Imagen"
          width={80}
          height={80}
          className="aspect-1 object-contain"
          onClick={() => scrollTo(i)}
        />
      ))}
    </div>
  );
};

const Description = ({ description }: { description: string }) => (
  <p className="text-sm md:text-base">{description}</p>
);

const Cores = ({ cores }: { cores: string[] | null }) => {
  if (!cores || cores.length === 0) return null;
  return (
    <div className="flex gap-12 w-full items-center">
      <span>Núcleos disponibles</span>
      <div className="flex gap-4">
        {cores.map((core) => (
          <Image
            key={core}
            src={`/icons/${core}.svg`}
            width={50}
            height={50}
            alt={core}
          />
        ))}
      </div>
    </div>
  );
};

const Features = ({ features }: { features: string[] }) => (
  <ul className="grid w-full grid-cols-2 gap-4">
    {features.map((feature) => (
      <li
        key={feature}
        className="flex items-center gap-2 border p-4 md:flex-row"
      >
        <Image
          src={"/icons/check-circle.svg"}
          width={30}
          height={30}
          alt={""}
        />
        <span className="text-xs md:text-base">{feature}</span>
      </li>
    ))}
  </ul>
);

const Downloadable = ({ url, label }: { url: string; label: string }) => (
  <a href={`${url}`} download className="w-full">
    <Button className="flex  gap-4 bg-black p-4 w-full h-12 md:h-14">
      <Image
        src={"/icons/download.svg"}
        alt={"Download"}
        width={100}
        height={100}
        className="max-w-8"
      />
      <span className="whitespace-nowrap">{label}</span>
    </Button>
  </a>
);

const DownloadZone = ({ selectedProduct }: { selectedProduct: Product }) => (
  <div className="flex flex-col md:flex-row w-full gap-3 justify-end">
    {selectedProduct.technicalSheet &&
      selectedProduct.technicalSheet.length > 0 &&
      selectedProduct.technicalSheet[0] !== undefined && (
        <Downloadable
          url={selectedProduct.technicalSheet[0]}
          label="Descargar Ficha técnica"
        />
      )}
    {selectedProduct.bimBlock &&
      selectedProduct.bimBlock.length > 0 &&
      selectedProduct.bimBlock[0] !== undefined && (
        <Downloadable
          url={selectedProduct.bimBlock[0]}
          label="Descargar Bloque BIM"
        />
      )}
  </div>
);

const MobileProductModal = ({ selectedProduct, closeModal }: Props) => {
  console.log("selectedProduct", selectedProduct);
  if (!selectedProduct) return null;

  return (
    <Dialog open={!!selectedProduct} onOpenChange={closeModal}>
      <DialogContent className="max-h-[95%] max-w-[95%] md:max-w-[70rem] overflow-y-scroll pt-4">
        <div className="flex flex-col gap-6 w-full">
          <div className="flex  flex-col-reverse md:flex-row gap-4 justify-between">
            <div className="w-full md:w-1/2">
              <CarouselImage images={selectedProduct.productImages ?? []} />
            </div>
            <div className=" w-full md:w-1/2 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <Title title={selectedProduct.title} />
                <Description description={selectedProduct.description} />
              </div>
              <Features features={selectedProduct.features} />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-between w-full">
            <Cores cores={selectedProduct.cores} />
            <DownloadZone selectedProduct={selectedProduct} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

// const DesktopProductModal = ({ selectedProduct, closeModal }: Props) => {
//   console.log("selectedProduct", selectedProduct);
//   if (!selectedProduct) return null;

//   return (
//     <Dialog open={!!selectedProduct} onOpenChange={closeModal}>
//       <DialogContent className="max-h-[40rem] w-4/5 max-w-[70rem] grid-cols-2 overflow-y-scroll">
//         <div className="flex flex-col gap-12">
//           <div className="flex-1">
//             <CarouselImage images={selectedProduct.productImages ?? []} />
//           </div>
//           <div>
//             <Cores cores={selectedProduct.cores} />
//           </div>
//         </div>
//         <div className="flex flex-col gap-8">
//           <div>
//             <Title title={selectedProduct.title} />
//           </div>
//           <div>
//             <Description description={selectedProduct.description} />
//           </div>
//           <div>
//             <Features features={selectedProduct.features} />
//           </div>
//           <div>
//             <DownloadZone selectedProduct={selectedProduct} />
//           </div>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// };

const ProductModal = ({ selectedProduct, closeModal }: Props) => {
  const isDesktop = useIsDesktop();

  // Esperar a que `isDesktop` tenga un valor verdadero o falso
  if (isDesktop === null) return null;
  if (!selectedProduct) return null;

  return (
    // <>
    //   {isDesktop ? (
    //     <DesktopProductModal
    //       selectedProduct={selectedProduct}
    //       closeModal={closeModal}
    //     />
    //   ) : (
    <MobileProductModal
      selectedProduct={selectedProduct}
      closeModal={closeModal}
    />
    //   )}
    // </>
  );
};

export default ProductModal;
