"use client";

import React from "react";

import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
const Presentation = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("#about"); // Reemplaza con la ruta correcta de tu componente destino
  };
  return (
    <header className="header  ">
      <div className="container mx-auto px-6 py-16 pt-28 text-center">
        <div className="mx-auto max-w-lg">
          <h1 className="text-3xl font-bold text-[#e9e9eb] dark:text-white md:text-4xl">
            Potencia tu negocio!
          </h1>

          <p className="mt-6 text-[#e9e9eb] dark:text-gray-300">
            En este espacio vibrante y lleno de posibilidades, estamos
            comprometidos a impulsar tu éxito y hacer realidad tus aspiraciones
            emprendedoras. Sabemos que cada idea, cada visión y cada sueño son
            únicos, y estamos aquí para proporcionarte las herramientas, los
            recursos y el apoyo necesario para convertirlos en realidad.
          </p>

          <div className="mx-auto mt-6 w-full max-w-sm ">
            <Button color="default" variant="shadow" onClick={handleRedirect}>
              Sobre Nosotros
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Presentation;
