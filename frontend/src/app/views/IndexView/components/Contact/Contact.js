"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Swal from "sweetalert2";

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const options = ["Otros"];

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(options[0]);

  const webName = "CFO AIA";
  const emailDestiny = process.env.NEXT_PUBLIC_EMAIL_RECEIVER;
  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "fullname":
        setFullname(value);
        break;
      case "webName":
        value;
        break;
      case "emailDestiny":
        value;
        break;
      case "email":
        setEmail(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "subject":
        setSubject(value);
        break;
      case "service":
        setService(value);
        break;
      case "message":
        setMessage(value);
        break;
      default:
        break;
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_FORM}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          subject: subject,
          phone: phone,
          service: service,
          message: message,
          webName: webName,
          emailDestiny: emailDestiny,
        }),
      });

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "¡El mensaje se ha enviado correctamente!",
          text: "Gracias por comunicarte, en la brevedad te responderemos",
        });
      } else {
        Swal.fire({
          icon: "warning",
          title: "Error al enviar el mensaje",
          text: "Hubo un problema al enviar el mensaje. Por favor, intenta nuevamente más tarde.",
        });
      }
    } catch (error) {
      console.error("Error al enviar la solicitud POST:", error);
      Swal.fire({
        icon: "error",
        title: "Error al enviar el mensaje",
        text: "Hubo un problema al enviar el mensaje. Por favor, intenta nuevamente más tarde.",
      });
    }
  };

  return (
    <section
      className="flex min-h-screen items-center justify-start bg-[#e1e1e9]"
      id="contact"
    >
      <div
        data-aos="fade-up-right"
        className="lg:mx-auto mx-10 w-full max-w-lg"
      >
        <h2 className="text-4xl font-medium">Contactanos</h2>
        <p className="mt-3">
          Ante cualquier duda o consulta puedes contactarme por el siguiente
          formulario
        </p>

        <form onSubmit={handleSubmit} className="mt-10">
          <div className="grid gap-6 sm:grid-cols-2">
            <div htmlFor="name" className="relative z-0">
              <input
                type="text"
                name="Nombres"
                value={fullname}
                onChange={handleChange}
                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-[#274b72] focus:outline-none focus:ring-0"
                placeholder=" "
                required
              />
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[#274b72] peer-focus:dark:text-blue-500">
                Tu nombre y apellido
              </label>
            </div>
            <div className="relative z-0">
              <input
                type="text"
                name="Email"
                value={email}
                onChange={handleChange}
                required
                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-[#274b72] focus:outline-none focus:ring-0"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[#274b72] peer-focus:dark:text-blue-500"
              >
                Tu email
              </label>
            </div>
            <div className="relative z-0 col-span-2">
              <textarea
                name="Mensaje"
                rows="5"
                value={message}
                onChange={handleChange}
                required
                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-[#274b72] focus:outline-none focus:ring-0"
                placeholder=" "
              ></textarea>
              <label
                htmlFor="message"
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[#274b72] peer-focus:dark:text-blue-500"
              >
                Tu mensaje
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="mt-5 rounded-md bg-black hover:bg-[#274b72] px-10 py-2 text-white"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
