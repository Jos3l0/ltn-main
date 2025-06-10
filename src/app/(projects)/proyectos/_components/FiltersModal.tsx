import { Button } from "@/shared_components/Button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/shared_components/Dialog";
import Image from "next/image";
import React from "react";
import CategoryFilters from "./ProjectCategoryFilters";
import type { Category } from "../projects";

const FiltersModal = ({ categories }: { categories: Category[] }) => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button
          asChild
          variant={"icon"}
          className="min-h-20 min-w-20 border-[1px] border-lightgray p-6"
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
