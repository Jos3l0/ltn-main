"use client";

import { useState } from "react";
import { Button } from "@/shared_components/Button";
import { Input } from "@/shared_components/Input";
import emailjs from "emailjs-com";

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) return;

    const templateParams = {
      to_name: "Equipo de Marketing",
      from_email: email,
    };

    if (!serviceId || !templateId || !publicKey) {
      console.error("Faltan variables de entorno en EmailJS");
      return;
    }

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setEmail("");
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000); // Ocultar mensaje después de 5 segundos
      })
      .catch((error) => console.error("Error al suscribirse:", error));
  };

  return (
    <section className="flex h-[600px] w-full items-center justify-center bg-[url('/images/bg-newsletter.png')] bg-cover bg-center">
      <div className="flex flex-col items-center justify-center p-8">
        <h4 className="mb-4 text-center text-5xl text-white">
          Suscríbete a nuestro boletín informativo
        </h4>
        <span className="mb-12 text-center text-white">
          Y mantente al tanto de las últimas novedades, promociones y eventos
          del Grupo LTN.
        </span>
        <form
          onSubmit={handleSubscribe}
          className="flex w-full max-w-[640px] items-center gap-8 bg-black/60 p-4"
        >
          <Input
            variant="ghost"
            placeholder="Ingresa tu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-white"
          />
          <Button
            variant="outline"
            className="hidden border-white px-6 py-3 text-white md:block"
            type="submit"
          >
            Suscribirse
          </Button>
          {isSubmitted && (
            <span className="text-green-500">¡Suscripción exitosa!</span>
          )}
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
