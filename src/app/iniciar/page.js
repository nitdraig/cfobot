"use client";
import { Image, Link } from "@nextui-org/react";
import React from "react";

const page = () => {
  return (
    <div className="h-screen">
      <Link href="/about">Nosotros</Link>
      <Link href="/vision">Nuestra visión</Link>
      <Link href="/about">Únete a la comunidad exp_ </Link>
      <div>
        <Image
          alt="About exp_"
          className="object-cover rounded-xl "
          src="https://res.cloudinary.com/dcu06etml/image/upload/v1688837285/draig-page/jws1bjwbchc3libmknz2.jpg"
          width={200}
        />
      </div>
    </div>
  );
};

export default page;
