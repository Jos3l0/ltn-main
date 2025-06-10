import React from "react";
import Image from "next/image";
import ContactForm from "../../_components/ContactForm/ContactForm";
import Link from "next/link";

interface Locations {
  title: string;
  link: string;
}

const locations: Locations[] = [
  {
    title: "Oficinas comerciales",
    link: "https://www.google.com/maps/d/u/0/edit?mid=1_piS61gvg3iQNR83uv0Hkfn8OL5s8uU&usp=sharing",
  },
  {
    title: "Plantas industriales",
    link: "https://www.google.com/maps/d/u/0/edit?mid=10jDpr2R_wOcV5A31ujj7VNNdq62uqb0&usp=sharing",
  },
];

const ContactHeader = () => (
  <div className="flex flex-col gap-6">
    <div className="flex flex-col sm:flex-row gap-2">
      <span className="whitespace-nowrap text-sm">FORMULARIO DE CONTACTO</span>
      <div className="sm:border-r-[1.5px] sm:border-gray" />
      <span className="text-sm">INFO@GRUPOLTN.COM</span>
    </div>
    <span className="font-bold">
      Dejanos tus datos y nuestro equipo comercial se comunicará a la brevedad
      para asesorarte.
    </span>
  </div>
);

const ContactSocials = () => (
  <>
    <Link href="https://www.linkedin.com/company/gltn" target="_blank">
      <Image
        src={"/icons/linkedin-black.png"}
        alt="Logo Linkedin"
        width={200}
        height={200}
        className="w-12 md:w-8"
      />
    </Link>
    <Link href="https://www.youtube.com/@GrupoLTN" target="_blank">
      <Image
        src={"/icons/youtube-black.png"}
        alt="Logo Youtube"
        width={200}
        height={200}
        className="w-12 md:w-8"
      />
    </Link>
    <Link href="https://www.instagram.com/grupoltn.oficial/" target="_blank">
      <Image
        src={"/icons/instagram-black.png"}
        alt="Logo Instagram"
        width={200}
        height={200}
        className="w-12 md:w-8"
      />
    </Link>
    <Link href="https://www.facebook.com/LTNargentina" target="_blank">
      <Image
        src={"/icons/facebook-black.png"}
        alt="Logo Facebook"
        width={200}
        height={200}
        className="w-12 md:w-8"
      />
    </Link>
  </>
);

const ContactLocations = () => (
  <>
    {locations.map((location) => (
      <Link key={location.title} href={location.link} target="_blank">
        <div className="flex justify-between">
          <span className="mr-4 inline-block text-4xl">{location.title}</span>
          <Image
            src={"/icons/arrow-diagonal.svg"}
            alt="Arrow diagonal"
            width={30}
            height={20}
          />
        </div>
      </Link>
    ))}
  </>
);

const ContactSection = () => {
  return (
    <section id="contact-section" className="w-full bg-white">
      {/* Mobile */}
      <div className="md:hidden">
        <div className="flex justify-center border-b-[1px] border-gray p-8">
          <ContactHeader />
        </div>
        <div className="border-b-[1px] border-gray md:order-4 md:col-span-3 md:border-b-0 md:border-r-[1px]">
          <ContactForm />
        </div>
        <div className="flex flex-row justify-between gap-4 border-b-[1px] border-gray p-8 md:border-b-0 md:border-r-[1px]">
          <ContactSocials />
        </div>
        <div className="flex gap-4 border-b-[1px] border-gray p-8 md:order-2 md:col-span-2">
          <Image
            src={"/icons/map-marker.svg"}
            alt="Map Marker"
            width={20}
            height={20}
          />
          <span>UBICACIONES</span>
        </div>
        <div className="order-5 col-span-1 row-span-1 flex flex-col gap-8 p-4 py-12 md:order-5 md:col-span-2 md:gap-4">
          <ContactLocations />
        </div>
      </div>
      {/* Desktop */}
      <div className="hidden md:block">
        <div className="border-b-[1px] border-gray">
          <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-8 p-8">
            <ContactHeader />
            <div className="mr-40 flex gap-4">
              <Image
                src={"/icons/map-marker.svg"}
                alt="Map Marker"
                width={20}
                height={20}
              />
              <span>UBICACIONES</span>
            </div>
          </div>
        </div>
        <div className="mx-auto flex max-w-[1200px] flex-wrap">
          <div className="flex flex-col gap-4 border-r-[1px] border-gray p-8">
            <ContactSocials />
          </div>
          <div className="min-w-[500px] flex-1 border-r-[1px] border-gray">
            <ContactForm />
          </div>
          <div className="flex flex-col gap-4 p-8">
            <ContactLocations />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
