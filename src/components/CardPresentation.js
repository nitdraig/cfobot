import React from "react";
import { useRouter } from "next/navigation";
import { Card, CardBody, Divider, Image, Button } from "@nextui-org/react";

export default function CardPresentation() {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/iniciar"); // Reemplaza con la ruta correcta de tu componente destino
  };

  return (
    <Card className=" py-10 lg:w-[650px] lg:h-[400px] md:w-[400px] md:h-[300px] bg-[#000000]">
      <CardBody className="text-white">
        <h3 className="text-lg italic text-[2.5em]">Potencia tu StartUp</h3>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <p>
              Evoluciona tu negocio, lleva tus procesos a otro nivel. <br />
              ¡Explota tu potencial!
            </p>
            <div className="mt-[4em] ml-[10em]" style={{ flex: 1 }}>
              <Button color="default" variant="shadow" onClick={handleRedirect}>
                Iniciar
              </Button>
            </div>
          </div>
          <div style={{ marginTop: "2em" }}>
            <Image
              alt="Fer"
              className="object-cover rounded-xl"
              src="https://res.cloudinary.com/dcu06etml/image/upload/v1688837285/draig-page/jws1bjwbchc3libmknz2.jpg"
              style={{ width: "200px", height: "60%" }}
            />
          </div>{" "}
        </div>{" "}
      </CardBody>
      <Divider />
    </Card>
  );
}
