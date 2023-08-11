import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Image } from "@nextui-org/react";

const ChatComponent = () => {
  const [consulta, setConsulta] = useState("");
  const [respuesta, setRespuesta] = useState("");
  const [conversacion, setConversacion] = useState(
    JSON.parse(localStorage.getItem("conversacion")) || []
  );
  const conversacionRef = useRef(null);

  useEffect(() => {
    // Almacenar la conversación en localStorage cada vez que cambie
    localStorage.setItem("conversacion", JSON.stringify(conversacion));
  }, [conversacion]);

  const enviarConsulta = async (e) => {
    e.preventDefault();
    try {
      const nuevaConversacion = [
        ...conversacion,
        { role: "user", content: consulta },
      ];
      setConversacion(nuevaConversacion);

      const response = await axios.post("http://localhost:5000/bot/consulta", {
        message: consulta,
      });
      const generatedResponse = response.data.generatedResponse;

      const conversacionConRespuesta = [
        ...nuevaConversacion,
        { role: "bot", content: generatedResponse },
      ];
      setConversacion(conversacionConRespuesta);

      setRespuesta(generatedResponse);
      setConsulta("");
      // Guardar interacción en la base de datos
      await axios.post("http://localhost:5000/interacciones/nuevainteraccion", {
        role: "user",
        contentUser: consulta,
        contentBot: generatedResponse,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const borrarConversacion = () => {
    setConversacion([]);
    setRespuesta("");
  };

  useEffect(() => {
    // Obtener el elemento de conversación utilizando la referencia
    const conversacionElement = conversacionRef.current;

    // Hacer el desplazamiento automático hacia abajo
    conversacionElement.scrollTop = conversacionElement.scrollHeight;
  }, [conversacion]);
  return (
    <div className="flex h-screen antialiased text-gray-800">
      <div className="flex flex-row h-full w-full overflow-x-hidden">
        <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
          <div className="flex flex-row items-center justify-center h-12 w-full">
            <div className="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                ></path>
              </svg>
            </div>
            <div className="ml-2 font-bold text-2xl">FER-Chat</div>
          </div>
          <div className="flex flex-col items-center bg-indigo-100 border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg">
            <div className="h-20 w-20 rounded-full border overflow-hidden">
              <Image
                src="https://avatars3.githubusercontent.com/u/2763884?s=128"
                alt="Avatar"
                className="h-full w-full"
              />
            </div>
            <div className="text-sm font-semibold mt-2">user</div>
            <div className="text-xs text-gray-500">exp_ CEO</div>
          </div>
          <div className="flex flex-col mt-8">
            <div className="flex flex-row items-center justify-between text-xs">
              <span className="font-bold">Interacciones Previas</span>
              <span className="flex items-center justify-center bg-gray-300  rounded-2xl">
                1000
              </span>
            </div>
            <div className="flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y-auto">
              <button className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                <div className="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">
                  P
                </div>
                <div className="ml-2 text-sm font-semibold">Potenciar Saas</div>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-auto h-[550px] p-6">
          <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-[#E1E1E9] h-full p-4">
            <div className="flex flex-col h-full overflow-x-auto mb-4">
              <div
                ref={conversacionRef}
                className="flex flex-col h-full overflow-y-auto"
              >
                {conversacion.map((mensaje, index) => (
                  <div key={index} className="grid grid-cols-12 gap-y-2">
                    {mensaje.role === "bot" && (
                      <div className="col-start-1 col-end-8 p-3 rounded-lg">
                        <div className="flex flex-row items-center">
                          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                            CFO
                          </div>
                          <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                            <p>{mensaje.content}</p>
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="col-start-1 col-end-8 p-3 rounded-lg"></div>
                    {mensaje.role === "user" && (
                      <div className="col-start-6 col-end-13 p-3 rounded-lg">
                        <div className="flex items-center justify-start flex-row-reverse">
                          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                            You
                          </div>
                          <div className="relative mr-3 text-sm bg-indigo-300 py-2 px-4 shadow rounded-xl">
                            <div
                              className={`${
                                mensaje.role === "user"
                                  ? "flex justify-end"
                                  : "flex justify-start"
                              }`}
                            >
                              <div
                                className={`${
                                  mensaje.role === "user"
                                } p-2 max-w-md`}
                              >
                                <p>{mensaje.content}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-row items-center h-[6rem] rounded-xl bg-white w-full px-4">
              <div className="flex-grow ml-4">
                <div className="relative w-full">
                  <form onSubmit={enviarConsulta}>
                    <label>
                      <input
                        type="text"
                        placeholder="Consultame..."
                        value={consulta}
                        onChange={(e) => setConsulta(e.target.value)}
                        className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                      />
                    </label>
                  </form>
                </div>
              </div>
              <div className="">
                <div className=" ml-4 text-center content-center">
                  <button
                    type="button"
                    onClick={enviarConsulta}
                    className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
                  >
                    <span>Enviar</span>
                  </button>
                </div>
                <div className="ml-4 mt-1 text-center content-center">
                  <button
                    type="button"
                    onClick={borrarConversacion}
                    className="flex items-center justify-center bg-red-700 hover:bg-red-400 rounded-xl text-white px-3 py-1 flex-shrink-0"
                  >
                    <span>Limpiar</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;
