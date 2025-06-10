import { Button } from "@/shared_components/Button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/shared_components/Dialog";
import Image from "next/image";
import CategoryFilters from "./CategoryFilters";
import type { Categories } from "../products";

const FiltersModal = ({ categories }: { categories: Categories }) => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button
          asChild
          variant={"icon"}
          className="min-h-12 min-w-12 border-[1px] border-lightgray p-2"
        >
          <Image src={"/icons/filter.svg"} alt={""} width={30} height={30} />
        </Button>
      </DialogTrigger>
      <DialogContent className="rounded-none! h-full w-full max-w-full grid-cols-2 pt-24">
        <CategoryFilters categories={categories} />
      </DialogContent>
    </Dialog>
  );
};

export default FiltersModal;
