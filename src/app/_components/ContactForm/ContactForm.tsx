"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared_components/From";
import { Input } from "@/shared_components/Input";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/shared_components/Button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared_components/Select";
import { Textarea } from "@/shared_components/Textarea";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  phone: z.string(),
  company: z.string(),
  state: z.string(),
  message: z.string(),
  // BlueCaribu custom fields
  "%_DE_PENDIENTE": z.string().optional(),
  "ALTURA_EN_MTS._DE_LA_OBRA": z.string().optional(),
  PREFERENCIA_DE_CONTACTO: z.string().optional(),
  DATOS_DE_CUBIERTA: z.string().optional(),
  MUROS: z.string().optional(),
  NUMERO_DE_PRESUPUESTO: z.string().optional(),
  FUENTES: z.string().optional(),
  WEB_O_REDES: z.string().optional(),
});

const states = [
  "Buenos Aires",
  "Ciudad Autónoma de Buenos Aires",
  "Catamarca",
  "Chaco",
  "Chubut",
  "Córdoba",
  "Corrientes",
  "Entre Ríos",
  "Formosa",
  "Jujuy",
  "La Pampa",
  "La Rioja",
  "Mendoza",
  "Misiones",
  "Neuquén",
  "Río Negro",
  "Salta",
  "San Juan",
  "San Luis",
  "Santa Cruz",
  "Santa Fe",
  "Santiago del Estero",
  "Tierra del Fuego",
  "Tucumán",
];

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      state: "",
      message: "",
      "%_DE_PENDIENTE": "",
      "ALTURA_EN_MTS._DE_LA_OBRA": "",
      PREFERENCIA_DE_CONTACTO: "",
      DATOS_DE_CUBIERTA: "",
      MUROS: "",
      NUMERO_DE_PRESUPUESTO: "",
      FUENTES: "",
      WEB_O_REDES: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // The form submission will be handled by BlueCaribu
    setIsSubmitted(true);
    form.reset();
    toast.success(
      <div className="flex flex-col gap-2">
        <p className="font-bold">¡Recibimos tus datos correctamente!</p>
        <p>
          Un representante del equipo comercial se pondrá en contacto con vos a
          la brevedad.
        </p>
        <p>Nuestro horario de atención es de lunes a viernes de 9 a 18 hs.</p>
        <p className="font-bold">¡Gracias!</p>
        <p>Grupo LTN</p>
      </div>,
      {
        duration: 5000,
      }
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-4 p-8 md:grid-cols-2 blueform"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="md:col-span-2">
              <FormLabel>Nombre y apellido</FormLabel>
              <FormControl>
                <Input variant="one-line" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input variant="one-line" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Teléfono</FormLabel>
              <FormControl>
                <Input variant="one-line" type="tel" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Empresa</FormLabel>
              <FormControl>
                <Input variant="one-line" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="state"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Provincia</FormLabel>
              <FormControl>
                <Select
                  {...field}
                  value={field.value}
                  onValueChange={(value) => field.onChange(value)}
                >
                  <SelectTrigger variant="one-line">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {states.map((state) => (
                      <SelectItem value={state} key={state}>
                        {state}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="md:col-span-2">
              <FormLabel>Mensaje</FormLabel>
              <FormControl>
                <Textarea variant="one-line" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="max-w-fit px-4 py-3"
            type="submit"
          >
            Enviar
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;
