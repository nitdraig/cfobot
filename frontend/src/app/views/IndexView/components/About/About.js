"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/fer");
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className=" bg-[#e1e1e9] " id="about">
      <div className="text-center  ">
        <h2 className="text-3xl pt-10 mb-10">Sobre FER</h2>
      </div>
      <div data-aos="fade-down-right" className=" mx-auto">
        <div className="flex flex-wrap items-center">
          <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
            <div
              data-aos="flip-right"
              className="relative flex flex-col min-w-0 break-words mb-6 shadow-lg rounded-lg bg-[#1C2631] hover:bg-[#274b72]"
            >
              <img
                alt="..."
                src="https://res.cloudinary.com/draig/image/upload/v1691717690/skwkggtv7xvcnsogzvpu.webp"
                className="w-full align-middle rounded-t-lg"
              />
              <blockquote className="relative p-8 mb-4">
                <h4 className="text-xl font-bold text-white">Usar FER</h4>
                <p className="text-md font-light mt-2 text-white">
                  Hacer uso de FER es gratuito, solo evita ingresar datos
                  sensibles y de impacto para ti, o tu emprendimiento, recuerda
                  es solo una IA que analiza respecto a la información que
                  entregues.
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
                        src="https://res.cloudinary.com/draig/image/upload/v1691628903/EXP_/FER/d5yg0pkacywvqdmgna52.png"
                        className=" text-center items-center justify-center w-10 h-10  rounded-full   "
                      />
                    </div>
                    <h6 className="text-xl mb-1 font-semibold">Visión</h6>
                    <p className="mb-4 text-blueGray-500">
                      FER Busca ser un asistente simple, eficaz y sin vueltas en
                      temas financieros.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 mt-4">
                  <div data-aos="flip-right" className="px-4 py-5 flex-auto">
                    <div className=" p-3 inline-flex  mb-5   rounded-full ">
                      <img
                        src="https://res.cloudinary.com/draig/image/upload/v1691628903/EXP_/FER/d5yg0pkacywvqdmgna52.png"
                        className=" text-center items-center justify-center w-10 h-10  rounded-full   "
                      />
                    </div>

                    <h6 className="text-xl mb-1 font-semibold">Misión</h6>
                    <p className="mb-4 text-blueGray-500">
                      Colaborar a tomar desiciones óptimas, sin perder tiempo y
                      lo más acertadas posible.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <button
                  onClick={handleRedirect}
                  className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow"
                >
                  <div className="absolute inset-0 w-3 bg-[#274b72] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                  <span className="relative text-black group-hover:text-white">
                    Empezar a usar FER
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
