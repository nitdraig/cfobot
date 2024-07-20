"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useMailprex } from "usemailprex-react";
import Swal from "sweetalert2";

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const webName = "CFO Landing";
  const emailDestiny = process.env.NEXT_PUBLIC_EMAIL_DESTINY || "";
  const url = "https://api.mailprex.top/email/send";
  const formToken = process.env.NEXT_PUBLIC_MAILPREX_FORM_TOKEN || "";
  const { formData, handleChange, handleSubmit, response } = useMailprex({
    url,
    webName,
    emailDestiny,
    formToken,
  });

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!isValidEmail(formData.email)) {
      Swal.fire({
        title:
          "Formato de correo inválido. Por favor utilice una dirección de correo electrónico válida.",
        icon: "error",
      });
      return;
    }
    await handleSubmit(e);
    if (response.error) {
      Swal.fire({
        title: "Error al enviar el mensaje. Vuelve a intentarlo más tarde.",
        icon: "error",
      });
    } else {
      Swal.fire({ title: "¡Mensaje enviado con éxito!", icon: "success" });
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

        <form
          onSubmit={handleFormSubmit}
          className="mx-auto p-6 bg-transparent"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="relative z-0">
              <input
                type="text"
                name="fullname"
                id="fullname"
                value={formData.fullname}
                onChange={handleChange}
                required
                className="peer block w-full appearance-none border-0 border-b border-accent bg-transparent py-2.5 px-0 text-sm text-accent focus:border-secondary focus:outline-none focus:ring-0"
                placeholder=" "
              />
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-accent duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-accent ">
                Tu nombre completo
              </label>
            </div>
            <div className="relative z-0">
              <input
                type="email"
                value={formData.email}
                required
                onChange={handleChange}
                name="email"
                className="peer block w-full appearance-none border-0 border-b border-accent bg-transparent py-2.5 px-0 text-sm text-accent focus:border-secondary focus:outline-none focus:ring-0"
                placeholder=" "
              />
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-accent duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-accent ">
                Tu email
              </label>
            </div>
            <div className="relative z-0 col-span-2">
              <textarea
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                className="peer block w-full appearance-none border-0 border-b bg-transparent py-2.5 px-0 text-sm text-accent focus:border-secondary focus:outline-none focus:ring-0"
                placeholder=" "
              ></textarea>
              <label
                htmlFor="message"
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-accent duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-accent "
              >
                Tu mensaje
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="mt-5 rounded-md bg-black px-10 py-2 text-white"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
