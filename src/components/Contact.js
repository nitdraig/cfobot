"use client";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
const Contact = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "32fafdae-c103-4d78-9efd-eeff7f00a64d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
    }
  }
  return (
    <div className="flex min-h-screen items-center justify-start bg-[#e1e1e9]">
      <div data-aos="fade-down-right" className="  mx-auto w-full   max-w-lg">
        <h2 className="text-4xl font-medium">Contactanos</h2>
        <p className="mt-3">
          Cuentanos quién eres, y por qué quieres formar parte de Exp_
        </p>

        <form onSubmit={handleSubmit} className="mt-10">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="relative z-0">
              <input
                type="text"
                name="name"
                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder=" "
              />
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                Tu nombre
              </label>
            </div>
            <div className="relative z-0">
              <input
                type="text"
                name="email"
                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder=" "
              />
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                Tu email
              </label>
            </div>
            <div className="relative z-0 col-span-2">
              <textarea
                name="message"
                rows="5"
                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder=" "
              ></textarea>
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                Hablanos de ti
              </label>
            </div>
          </div>
          <Button
            type="submit"
            onPress={onOpen}
            className="mt-5 rounded-md bg-black hover:bg-[#F31260] px-10 py-2 text-white"
          >
            Enviar Mensaje
          </Button>
          <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    Mensaje Enviado
                  </ModalHeader>
                  <ModalBody>
                    <p>
                      Haz enviado el mensaje, estaremos en contacto pronto.
                      ¡Muchas gracias!
                    </p>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onClick={onClose}>
                      Close
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </form>
      </div>
    </div>
  );
};

export default Contact;
