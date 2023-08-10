"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";
const About = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/iniciar"); // Reemplaza con la ruta correcta de tu componente destino
  };

  return (
    <section class="relative bg-[#e1e1e9] pt-16 bg-blueGray-50">
      <div className="text-center">
        <h2 className="text-[3em]">Nosotros</h2>
      </div>

      <div class="container mx-auto">
        <div class="flex flex-wrap items-center">
          <div class="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
            <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-[#1C2631]">
              <img
                alt="..."
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=700&amp;q=80"
                class="w-full align-middle rounded-t-lg"
              />
              <blockquote class="relative p-8 mb-4">
                <h4 class="text-xl font-bold text-white">
                  Nuestra comunidad busca apoyar todos los proyectos posibles
                </h4>
                <p class="text-md font-light mt-2 text-white">
                  Podes formar parte de la primera comunidad de proyectos IT en
                  LATAM
                </p>
              </blockquote>
            </div>
          </div>
          <div class="w-full md:w-6/12 px-4">
            <div class="flex flex-wrap">
              <div class="w-full md:w-6/12 px-4">
                <div class="relative flex flex-col mt-4">
                  <div class="px-4 py-5 flex-auto">
                    <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                      <i class="fas fa-sitemap"></i>
                    </div>
                    <h6 class="text-xl mb-1 font-semibold">Nuestra visión</h6>
                    <p class="mb-4 text-blueGray-500">
                      Buscamos ser el puente para que puedas alcanzar tus
                      objetivos y logres el éxito con tu proyecto.
                    </p>
                  </div>
                  <Button color="danger" variant="ghost">
                    Ver más
                  </Button>
                </div>
                {/* <div class="relative flex flex-col min-w-0">
                  <div class="px-4 py-5 flex-auto">
                    <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                      <i class="fas fa-drafting-compass"></i>
                    </div>
                    <h6 class="text-xl mb-1 font-semibold">Únete a nosotros</h6>
                    <p class="mb-4 text-blueGray-500">
                      Rellena nuestro funcionario y únete a nuestro canal de
                      Discord.
                    </p>
                  </div>
            
                </div> */}
              </div>
              <div class="w-full md:w-6/12 px-4">
                <div class="relative flex flex-col min-w-0 mt-4">
                  <div class="px-4 py-5 flex-auto">
                    <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                      <i class="fas fa-newspaper"></i>
                    </div>
                    <h6 class="text-xl mb-1 font-semibold">Únete a nosotros</h6>
                    <p class="mb-4 text-blueGray-500">
                      Rellena el funcionario, únete a nuestro canal de Discord y
                      forma parte de nuestra comunidad
                    </p>
                  </div>
                  <Button color="danger" variant="ghost">
                    Ver más
                  </Button>
                </div>
              </div>
              {/* <div class="relative flex flex-col min-w-0">
                  <div class="px-4 py-5 flex-auto">
                    <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                      <i class="fas fa-file-alt"></i>
                    </div>
                    <h6 class="text-xl mb-1 font-semibold">Nuestro equipo</h6>
                    <p class="mb-4 text-blueGray-500">
                      Contamos con un equipo interesado en ayudarte en tu
                      proyecto.
                    </p>
                  </div>
                </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
