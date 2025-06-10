import { Dialog, DialogContent } from "@/shared_components/Dialog";
import React from "react";
import type { Project } from "../projects";
import useIsDesktop from "@/hooks/useIsDesktop";
import Image from "next/image";
import { products } from "@/app/(products)/productos/products";

interface Props {
  selectedProyect: Project | null;
  closeModal: () => void;
}

// ----------Components----------
const Title = ({ title }: { title: string }) => (
  <h1 className="mt-12 text-4xl">{title}</h1>
);

const Description = ({ description }: { description: string }) => (
  <p className="">{description}</p>
);

const ProductCarousel = ({ productsId }: { productsId: number[] }) => (
  <ul className="flex list-none gap-20 overflow-x-scroll">
    {productsId.map((productId) => {
      const foundProduct = products.find((prod) => prod.id === productId);

      if (foundProduct) {
        return (
          <li key={foundProduct.title} className="none">
            <div className="relative mb-4 h-60 w-60 border-[1px] border-lightgray">
              {foundProduct.productImages &&
              foundProduct.productImages.length > 0 ? (
                <Image
                  src={
                    foundProduct.productImages[0] ??
                    "/images/products/default-image.png"
                  }
                  alt={foundProduct.title}
                  width={400}
                  height={400}
                  className="mx-auto h-full w-full max-w-80 fill-current object-contain"
                />
              ) : (
                <Image
                  src={"/images/products/default-image.png"}
                  alt={foundProduct.title}
                  width={400}
                  height={400}
                  className="mx-auto h-full w-full max-w-80 fill-current object-contain"
                />
              )}
            </div>
            <h4 className="pl-8 font-medium">{foundProduct.title}</h4>
          </li>
        );
      }
    })}
  </ul>
);

const MobileProyectModal = ({ selectedProyect, closeModal }: Props) => {
  console.log("selectedProyect", selectedProyect);
  if (!selectedProyect) return null;

  return (
    <Dialog open={!!selectedProyect} onOpenChange={closeModal}>
      <DialogContent className="h-full max-w-[60rem] overflow-y-scroll pt-12">
        <div className="flex flex-col gap-6 overflow-x-hidden">
          <div className="mb-12">
            <Title title={selectedProyect.title} />
          </div>
          <div className="">
            <Image
              src={selectedProyect.imagePath}
              alt="image"
              width={600}
              height={360}
            />
          </div>
          <div>
            <Description description={selectedProyect.description} />
          </div>
          <div>
            <h3 className="text-2xl">Productos utilizados:</h3>
            {typeof selectedProyect.relatedProducts === "string" ? (
              <p>{selectedProyect.relatedProducts}</p>
            ) : (
              <ProductCarousel productsId={selectedProyect.relatedProducts} />
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

// const DesktopProyectModal = ({ selectedProyect, closeModal }: Props) => {
//   console.log("selectedProyect", selectedProyect);
//   if (!selectedProyect) return null;

//   return (
//     <Dialog open={!!selectedProyect} onOpenChange={closeModal}>
//       <DialogContent className="max-h-[40rem] w-4/5 max-w-[70rem] overflow-x-hidden overflow-y-scroll">
//         <div className="flex flex-col gap-12 overflow-x-hidden">
//           <div className="flex flex-wrap gap-12">
//             <div className="min-w-96 flex-1">
//               <Image
//                 src={selectedProyect.imagePath}
//                 alt="image"
//                 width={600}
//                 height={360}
//               />
//             </div>
//             <div className="flex min-w-96 flex-1 flex-col gap-8">
//               <div>
//                 <Title title={selectedProyect.title} />
//               </div>
//               <div>
//                 <Description description={selectedProyect.description} />
//               </div>
//             </div>
//           </div>
//           <div className="overflow-x-hidden">
//             <h3 className="text-2xl">Productos utilizados:</h3>
//             {typeof selectedProyect.relatedProducts === "string" ? (
//               <p>{selectedProyect.relatedProducts}</p>
//             ) : (
//               <ProductCarousel productsId={selectedProyect.relatedProducts} />
//             )}
//           </div>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// };

const ProyectModal = ({ selectedProyect, closeModal }: Props) => {
  const isDesktop = useIsDesktop();

  // Esperar a que `isDesktop` tenga un valor verdadero o falso
  if (isDesktop === null) return null;
  if (!selectedProyect) return null;

  return (
    // <>
    //   {isDesktop ? (
    //     <DesktopProyectModal
    //       selectedProyect={selectedProyect}
    //       closeModal={closeModal}
    //     />
    //   ) : (
    <MobileProyectModal
      selectedProyect={selectedProyect}
      closeModal={closeModal}
    />
    //   )}
    // </>
  );
};

export default ProyectModal;
