"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared_components/Accordion";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/shared_components/Sheet";
import SocialIcons from "@/shared_components/SocialIcons";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const MenuButton = () => {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [path]);

  const closeMenu = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <Image
          src={"/icons/menu-black.svg"}
          width={40}
          height={40}
          alt="Menú"
        />
      </SheetTrigger>
      <SheetContent className="custom-overlay w-full border-black bg-black">
        <SheetHeader>
          <SheetDescription className="flex flex-col items-start justify-between gap-8 px-4 pt-8 md:flex-row md:px-12">
            <Accordion
              type="single"
              collapsible
              className="flex flex-col gap-8"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>Construcción</AccordionTrigger>
                <AccordionContent className="flex flex-col items-start gap-3 pt-6">
                  <Link href="/acerolatina" className="font-bold">
                    Acerolatina
                  </Link>
                  <Link href="/simpletech" className="font-bold">
                    Simpletech
                  </Link>
                  <Link
                    href="/proyectos/proyectos-vitivinicolas"
                    onClick={closeMenu}
                  >
                    Proyectos Vitivinícolas
                  </Link>
                  <Link
                    href="/proyectos/proyectos-comerciales"
                    onClick={closeMenu}
                  >
                    Proyectos Comerciales
                  </Link>
                  <Link
                    href="/proyectos/proyectos-residenciales"
                    onClick={closeMenu}
                  >
                    Proyectos Residenciales
                  </Link>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Refrigeración</AccordionTrigger>
                <AccordionContent className="flex flex-col items-start gap-3 pt-6">
                  <Link href="/friolatina" className="font-bold">
                    Friolatina
                  </Link>
                  <Link href="/bervill" className="font-bold">
                    Bervill
                  </Link>
                  <Link
                    href="/productos/refrigeracion/camaras-frigorificas"
                    onClick={closeMenu}
                  >
                    Cámaras Frigoríficas
                  </Link>
                  <Link
                    href="/proyectos/proyectos-industriales"
                    onClick={closeMenu}
                  >
                    Proyectos Industriales
                  </Link>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="flex flex-col items-start gap-8">
              <Link
                href="/productos"
                onClick={closeMenu}
                className="text-xl text-white"
              >
                Productos
              </Link>
              <Link
                href="/proyectos"
                onClick={closeMenu}
                className="text-xl text-white"
              >
                Proyectos
              </Link>
              <a
                href="tel:+5492616054947"
                onClick={closeMenu}
                className="text-xl text-white"
              >
                Soporte técnico
              </a>
              {path !== "/" && (
                <Link
                  href="/#grupo-ltn"
                  onClick={closeMenu}
                  className="text-xl text-white"
                >
                  Sobre Grupo LTN
                </Link>
              )}
              <Link
                href="https://grupoltn.hiringroom.com/jobs"
                onClick={closeMenu}
                className="text-xl text-white"
                target="_blank"
              >
                Trabajá con nosotros
              </Link>
              <a
                href={
                  "https://forms.office.com/pages/responsepage.aspx?id=8k4h6o93OkCl1en1oVvHY0sic70WhdRLnAbZHxS0TzVUQ1laRzlGQ1dJV1RJVVBENDNKWVlKOVNWNi4u&route=shorturl"
                }
                target="_blank"
                className="text-xl text-white"
              >
                Academia LTN
              </a>
              {path !== "/" && (
                <Link
                  href="/#contact-section"
                  onClick={closeMenu}
                  className="text-xl text-white"
                >
                  Contacto
                </Link>
              )}
            </div>
            <SocialIcons className="mt-8 md:mt-0" />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
