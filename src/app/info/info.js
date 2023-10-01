"use client";
import React, { useEffect } from "react";

import "aos/dist/aos.css";
import AOS from "aos";

import Link from "next/link";
const GeneralInfo = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="container grid max-w-screen-xl gap-8 lg:grid-cols-2 lg:grid-rows-2">
      <div
        data-aos="fade-down-right"
        className="row-span-2 flex flex-col rounded-md border border-slate-200"
      >
        <img
          src="https://d33wubrfki0l68.cloudfront.net/c43307b88fb814366e4f3a181c788796cba83faa/4c05c/new/landing/omnichannel.png"
          className="w-full object-cover object-right-top"
          alt="CFOChat"
        />

        <div className="p-10">
          <h3 className="text-xl font-medium text-gray-700">
            Buscamos unir diferentes personas con un mismo objetivo
          </h3>
          <p className="mt-2 text-slate-500">
            Nuestra misión es crear un espacio donde personas apasionadas por la
            programación y el desarrollo puedan converger en una plataforma
            única. Buscamos unir a programadores de diversos antecedentes y
            niveles de experiencia, brindándoles la oportunidad de colaborar,
            aprender y crecer juntos. Creemos que la unión de talentos y
            conocimientos es la clave para impulsar proyectos innovadores y
            creativos.
          </p>
        </div>
      </div>
      <div
        data-aos="fade-down"
        className="flex rounded-md border border-slate-200"
      >
        <div className="flex-1 p-10">
          <h3 className="text-xl font-medium text-gray-700">
            La unión hace la fuerza
          </h3>
          <p className="mt-2 text-slate-500">
            Al facilitar la conexión entre estos individuos, esperamos fomentar
            la colaboración, el intercambio de ideas y la creación de soluciones
            tecnológicas impactantes. Nuestra plataforma se esfuerza por ser un
            punto de encuentro donde la diversidad en habilidades y enfoques sea
            valorada, y donde cada miembro pueda contribuir y beneficiarse de la
            riqueza de la comunidad.
          </p>
        </div>
      </div>
      <div
        data-aos="flip-left"
        className="flex rounded-md border border-slate-200"
      >
        <div className="flex-1 p-10">
          <h3 className="text-xl font-medium text-gray-700">
            Un puente entre ideas y personas con habilidades
          </h3>
          <p className="mt-2 text-slate-500">
            Al final, nuestro objetivo es construir puentes entre programadores
            y crear un ecosistema en el que todos puedan trabajar juntos hacia
            un objetivo común: el avance y la excelencia en el mundo de la
            tecnología.
          </p>
          <Link href="/#contact" className="mt-2 inline-flex text-sky-500">
            Únete a la comunidad
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GeneralInfo;
