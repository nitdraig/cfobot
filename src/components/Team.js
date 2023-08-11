"use client";
import React, { useEffect } from "react";
import TeamCard from "./TeamCard";
import AOS from "aos";
import "aos/dist/aos.css";
const Team = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="bg-[#f7f7f7] dark:bg-gray-900 lg:h-screen md:h-[1000px] sm:h-[1600px] ">
      <div data-aos="zoom-in" className="container mx-auto px-6 pt-20">
        <h2 className="text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl">
          Nuestro Equipo
        </h2>
        <p className="my-6 max-w-2xl text-gray-500 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt
          ex placeat modi magni quia error alias, adipisci rem similique, at
          omnis eligendi optio eos harum.
        </p>
        <div className="container ">
          <TeamCard />
        </div>
      </div>
    </section>
  );
};

export default Team;
