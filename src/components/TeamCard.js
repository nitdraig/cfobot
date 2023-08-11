"use client";
import React from "react";
import { infoTeam } from "./InfoData";
import { Image, Link } from "@nextui-org/react";

const TeamCard = () => {
  return (
    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-16 xl:grid-cols-4">
      {infoTeam.map((team, i) => (
        <div
          key={i}
          className="group flex transform cursor-pointer flex-col items-center rounded-xl p-8 transition-colors duration-300 bg-[#e0e0e0] hover:bg-[#F31260]"
        >
          <img
            className="h-32 w-32 rounded-full object-cover ring-4 ring-gray-300"
            src={team.TeamImg}
            alt=""
          />

          <h1 className="mt-4 text-1xl font-semibold capitalize text-gray-700 group-hover:text-white dark:text-white">
            {team.Name}
          </h1>

          <p className="mt-2 capitalize text-gray-500 group-hover:text-gray-300 dark:text-gray-300">
            {team.TeamJob}
          </p>

          <div className="-mx-2 mt-3 flex">
            <Link
              href={team.SocialmediaOne}
              target="_blank"
              className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white dark:text-gray-300 dark:hover:text-gray-300"
              aria-label="Reddit"
            >
              <Image
                className="h-6 w-6 fill-current mt-[-1px]"
                width="35"
                height="35"
                src="https://res.cloudinary.com/dcu06etml/image/upload/v1691695459/Icons/oetnuhheclx6emmckils.svg"
              />
            </Link>

            <Link
              href={team.SocialmediaTwo}
              target="_blank"
              className="mx-2"
              aria-label="Facebook"
            >
              <Image
                className="h-6 w-6 fill-current mt-[-1px]"
                width="35"
                height="35"
                src="https://res.cloudinary.com/dcu06etml/image/upload/v1691695341/Icons/ax48ah4mqwf7myl7ddbl.svg"
              />
            </Link>

            <Link
              href={team.SocialmediaThree}
              target="_blank"
              className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white dark:text-gray-300 dark:hover:text-gray-300"
              aria-label="Github"
            >
              <Image
                className="h-6 w-6 fill-current mt-[-1px]"
                width="35"
                height="35"
                src="https://res.cloudinary.com/dcu06etml/image/upload/v1691695329/Icons/ipaeehj8lm3jyzvi5sfp.svg"
              />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamCard;
