import React from "react";
import { Card, CardHeader, CardBody, Image, Link } from "@nextui-org/react";

export default function CardPresentationAbout() {
  return (
    <Card className="py-4 lg:w-[300px] lg:h-[400px]">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Somos exp_</p>

        <h4 className="font-bold text-large">
          Queremos que logres tus objetivos
        </h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2 items-center justify-center">
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
      </CardBody>
    </Card>
  );
}
