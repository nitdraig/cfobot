"use client";
import React, { useState } from "react";
import axios from "axios"; // Asegúrate de importar axios

const Page = () => {
  const [consulta, setConsulta] = useState("");
  const [respuesta, setRespuesta] = useState("");

  const enviarConsulta = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/bot/consulta", {
        message: consulta, // Asegúrate de que estás enviando el contenido del mensaje
      });
      setRespuesta(response.data.generatedResponse);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="container h-screen ">
      <h2 className="text-center mt-10 text-xl">
        Soy CFO Consulta lo que gustes
      </h2>
      <div className="container content-center">
        <div>
          <p className="text-black">Respuesta: {respuesta}</p>
        </div>
        <form>
          <label className="">
            <input
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Search for anything..."
              type="text"
              name="search"
              value={consulta}
              onChange={(e) => setConsulta(e.target.value)}
            />
          </label>
          <div className="text-center mt-4">
            <button
              type="button"
              onClick={enviarConsulta}
              className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-indigo-700 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Consultar
            </button>
            <button
              type="button"
              disabled
              className="ml-2 flex-none rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
            >
              Borrar Charla
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Page;
