"use client";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Hero = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("#about");
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="header w-screen lg:h-screen h-full">
      <div
        data-aos="zoom-out-right"
        className="header-content  lg:mx-auto mx-2 px-6 py-16  text-center"
      >
        <h1 className="lg:text-4xl text-3xl uppercase font-bold text-[#e9e9eb] dark:text-white mb-10 ">
          FER - Tu Asistente Personal de Finanzas
        </h1>
        <div className="lg:mx-12 mx-4">
          <div className="">
            <p className="mt-6 lg:text-2xl text-lg text-[#e9e9eb] dark:text-gray-300">
              FER es una IA configurada para ofrecerte asesoria en el acto como
              si fuera un CFO asistente exclusivo para ti.
            </p>
            <p className="mt-4 lg:text-2xl text-lg text-[#e9e9eb] font-bold dark:text-gray-300">
              ¿Y que es un CFO?
            </p>
            <p className="mt-4 lg:text-2xl text-lg text-[#e9e9eb] dark:text-gray-300">
              El director financiero (CFO) es el profesional financiero de mayor
              rango en una organización y la persona responsable de la salud
              financiera de la empresa.
            </p>
            <div className="mx-auto mt-14 w-full max-w-sm ">
              <button
                onClick={handleRedirect}
                className="group relative h-12 w-48 overflow-hidden rounded-2xl bg-[#f3f3f3] text-lg font-bold text-black hover:bg-[#274b72] hover:text-white"
              >
                Sobre FER
                <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-{#274b72}"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
