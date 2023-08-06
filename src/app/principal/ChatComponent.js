import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

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
    <div
      className="flex   antialiased text-gray-800"
      style={{ height: "500px" }}
    >
      <div className="flex flex-col flex-auto h-full p-6">
        <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
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
          </div>{" "}
          <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
            {" "}
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
            <div className="ml-4 text-center">
              <button
                type="button"
                onClick={enviarConsulta}
                className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
              >
                <span>Consultar</span>
                <span className="ml-2">
                  <svg
                    className="w-4 h-4 transform rotate-45 -mt-px"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    ></path>
                  </svg>
                </span>
              </button>
              <button
                type="button"
                onClick={borrarConversacion}
                className="flex items-center justify-center bg-red-700 hover:bg-red-400 rounded-xl text-white px-4 py-1 flex-shrink-0"
              >
                <span>Limpiar</span>
                <span className="ml-2">
                  <svg
                    className="w-4 h-4 transform rotate-45 -mt-px"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;
