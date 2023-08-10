import React from "react";
import TeamCard from "./TeamCard";
import { infoTeam } from "./InfoData";

const Team = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 pt-28">
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
