import Image from "next/image";
import React from "react";
import BackToTopBtn from "./BackToTopBtn/BackToTopBtn";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative flex-wrap bg-black p-8 text-white md:p-16">
      <div className="mb-8 flex flex-col justify-between gap-8 md:flex-row">
        <div>
          <Image
            src="/logo-white.svg"
            alt="Logo"
            width={150}
            height={400}
            className="mb-6"
          />
          <span className="block">Tecnología para un</span>
          <span className="block">mundo sustentable</span>
        </div>
        <div>
          <h5 className="mb-4">Construcción</h5>
          <ul className="text-gray">
            <li>
              <Link href={"/acerolatina"}>Acerolatina</Link>
            </li>
            <li>
              <Link href={"/simpletech"}>Simpletech</Link>
            </li>
            <li>
              <Link href="/productos/construccion/paredes-y-muros">
                Paredes y muros
              </Link>
            </li>
            <li>
              <Link href={"/productos/construccion/techos-y-cubiertas"}>
                Techos y cubiertas
              </Link>
            </li>
            <li>
              <Link href={"/productos/construccion/pisos-y-entrepisos"}>
                Pisos y entrepisos
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="mb-4">Refrigeración</h5>
          <ul className="text-gray">
            <li>
              <Link href={"/friolatina"}>Friolatina</Link>
            </li>
            <li>
              <Link href={"/bervill"}>Bervill</Link>
            </li>
            <li>
              <Link href={"/productos/refrigeracion/camaras-frigorificas"}>
                Cámaras Frigoríficas
              </Link>
            </li>
            <li>
              <Link href={"/proyectos/proyectos-industriales"}>
                Proyectos Industriales
              </Link>
            </li>
            <li>
              <Link href={"/proyectos/proyectos-residenciales"}>
                Proyectos Residenciales
              </Link>
            </li>
          </ul>
        </div>
        <ul className="flex flex-col gap-4">
          <li>
            <Link href={"/productos"}>Productos</Link>
          </li>
          <li>
            <Link href={"/proyectos"}>Proyectos</Link>
          </li>
          <li>
            <Link href={"/#contact-section"}>Contacto</Link>
          </li>
          <li>
            <a
              href={
                "https://forms.office.com/pages/responsepage.aspx?id=8k4h6o93OkCl1en1oVvHY0sic70WhdRLnAbZHxS0TzVUQ1laRzlGQ1dJV1RJVVBENDNKWVlKOVNWNi4u&route=shorturl"
              }
              target="_blank"
            >
              Academia LTN
            </a>
          </li>
        </ul>
        <ul className="flex flex-col gap-4">
          <a href="tel:+5492616054947" className="text-white">
            Soporte técnico
          </a>
          <Link href="/#grupo-ltn" className="text-white">
            Sobre el Grupo LTN
          </Link>
          <li>
            <Link href="https://grupoltn.hiringroom.com/jobs" target="_blank">
              Trabajá con nosotros
            </Link>
          </li>
        </ul>
        <div className="flex gap-4 md:flex-col">
          <Link href="https://www.linkedin.com/company/gltn/" target="_blank">
            <Image
              src={"/icons/linkedin-white.png"}
              alt="Logo Linkedin"
              width={50}
              height={50}
              className="mb-6 w-8"
            />
          </Link>
          <Link href="https://www.youtube.com/@GrupoLTN" target="_blank">
            <Image
              src={"/icons/youtube-white.png"}
              alt="Logo Youtube"
              width={50}
              height={50}
              className="mb-6 w-8"
            />
          </Link>
          <Link href="https://www.facebook.com/LTNargentina" target="_blank">
            <Image
              src={"/icons/facebook-white.png"}
              alt="Logo Facebook"
              width={50}
              height={50}
              className="mb-6 w-8"
            />
          </Link>
          <Link
            href="https://www.instagram.com/grupoltn.oficial/"
            target="_blank"
          >
            <Image
              src={"/icons/instagram-white.png"}
              alt="Logo Instagram"
              width={50}
              height={50}
              className="mb-6 w-8"
            />
          </Link>
        </div>
      </div>
      <div className="flex justify-between">
        <span className="text-xs">Copyright 2025. GRUPO LTN.</span>
        {/* <span className="text-xs">Política de privacidad</span> */}
      </div>
      <BackToTopBtn />
    </footer>
  );
};

export default Footer;
