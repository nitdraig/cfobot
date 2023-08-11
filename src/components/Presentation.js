"use client";

import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Presentation = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("#about"); // Reemplaza con la ruta correcta de tu componente destino
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <header className="header">
      <div
        data-aos="zoom-out-right"
        className="header-content container mx-auto px-6 py-16 pt-28 text-center"
      >
        <div className="mx-auto max-w-lg">
          <h2 className="text-3xl font-bold text-[#e9e9eb] dark:text-white md:text-4xl">
            Potencia tus ideas
          </h2>

          <p className="mt-6 text-[1.4em] text-[#e9e9eb] dark:text-gray-300">
            En este espacio vibrante y lleno de posibilidades, estamos
            comprometidos a impulsar tu éxito y hacer realidad tus aspiraciones
            emprendedoras. Sabemos que cada idea, cada visión y cada sueño son
            únicos, y estamos aquí para proporcionarte las herramientas, los
            recursos y el apoyo necesario para convertirlos en realidad.
          </p>

          <div className="mx-auto mt-6 w-full max-w-sm ">
            <Button
              color="default"
              variant="shadow"
              className="hover:bg-[#F31260]"
              onClick={handleRedirect}
            >
              Sobre Nosotros
            </Button>{" "}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Presentation;
