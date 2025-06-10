import React from "react";
import { MenuButton } from "../MenuButton/MenuButton";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <div className="relative top-0 h-[120px]">
      <div className="flex h-full w-full flex-col">
        <div className="bg-black px-10 py-2">
          <div className="mx-auto flex max-w-[1200px] justify-end gap-8">
            <a href="tel:+5492616054947" className="text-white">
              Soporte técnico
            </a>
            <Link href="/#grupo-ltn" className="text-white">
              Sobre el Grupo LTN
            </Link>
          </div>
        </div>
        <header className="mx-auto flex w-full max-w-[1200px] flex-1 items-center justify-between bg-white px-10">
          <Link href={"/"} className="justify-self-start">
            <Image src={"/logo-black.svg"} alt="Logo" width={120} height={50} />
          </Link>
          <div className="flex h-full items-center justify-end gap-20">
            <Navbar />
            <MenuButton />
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
