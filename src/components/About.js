"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  const router = useRouter();

  const handleRedirect1 = () => {
    router.push("/info"); // Reemplaza con la ruta correcta de tu componente destino
  };
  const handleRedirect2 = () => {
    router.push("#contact"); // Reemplaza con la ruta correcta de tu componente destino
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="relative bg-[#e1e1e9]   pt-10 bg-blueGray-50">
      <div className="text-center p-6">
        <h2 className="text-[3em]">Nosotros</h2>
      </div>
      <div data-aos="fade-down-right" className="container mx-auto">
        <div className="flex flex-wrap items-center">
          <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
            <div
              data-aos="flip-right"
              className="relative flex flex-col min-w-0 break-words mb-6 shadow-lg rounded-lg bg-[#1C2631] hover:bg-[#274b72]"
            >
              <img
                alt="..."
                src="https://res.cloudinary.com/dcu06etml/image/upload/v1691717690/skwkggtv7xvcnsogzvpu.webp"
                className="w-full align-middle rounded-t-lg"
              />
              <blockquote className="relative p-8 mb-4">
                <h4 className="text-xl font-bold text-white">
                  Nuestra comunidad busca apoyar todos los proyectos posibles
                </h4>
                <p className="text-md font-light mt-2 text-white">
                  Podes formar parte de la primera comunidad de proyectos IT en
                  LATAM
                </p>
              </blockquote>
            </div>
          </div>
          <div className="w-full md:w-6/12 px-4">
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 px-4">
                <div className="relative flex flex-col mt-4">
                  <div data-aos="flip-right" className="px-4 py-5 flex-auto">
                    <div className="p-3 inline-flex  mb-5   rounded-full ">
                      <img
                        src="https://res.cloudinary.com/dcu06etml/image/upload/v1691628903/EXP_/FER/d5yg0pkacywvqdmgna52.png"
                        className=" text-center items-center justify-center w-10 h-10  rounded-full   "
                      />
                    </div>
                    <h6 className="text-xl mb-1 font-semibold">
                      Nuestra visión
                    </h6>
                    <p className="mb-4 text-blueGray-500">
                      Buscamos ser el puente para que puedas alcanzar tus
                      objetivos y logres el éxito con tu proyecto.
                    </p>
                  </div>
                  <Button
                    onClick={handleRedirect1}
                    color="danger"
                    variant="ghost"
                  >
                    Ver más
                  </Button>
                </div>
              </div>
              <div className="w-full md:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 mt-4">
                  <div data-aos="flip-right" className="px-4 py-5 flex-auto">
                    <div className=" p-3 inline-flex  mb-5   rounded-full ">
                      <img
                        src="https://res.cloudinary.com/dcu06etml/image/upload/v1691628903/EXP_/FER/d5yg0pkacywvqdmgna52.png"
                        className=" text-center items-center justify-center w-10 h-10  rounded-full   "
                      />
                    </div>

                    <h6 className="text-xl mb-1 font-semibold">
                      Únete a nosotros
                    </h6>
                    <p className="mb-4 text-blueGray-500">
                      Rellena el funcionario, únete a nuestro canal de Discord y
                      forma parte de nuestra comunidad
                    </p>
                  </div>
                  <Button
                    onClick={handleRedirect2}
                    color="danger"
                    variant="ghost"
                  >
                    Ver más
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
