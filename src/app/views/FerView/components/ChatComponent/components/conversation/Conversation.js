import React from "react";
import ChatForm from "../chatform/ChatForm";

const Conversation = ({
  interacciones,
  conversacion,
  conversacionRef,
  consulta,
  setConsulta,
  enviarConsulta,
}) => {
  return (
    <div className="flex flex-col flex-auto h-[550px] p-6">
      <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-[#E1E1E9] h-full p-4">
        <div className="flex flex-col h-full overflow-x-auto mb-4">
          <div
            ref={conversacionRef}
            className="flex flex-col h-full overflow-y-auto"
          >
            {interacciones.map((mensaje, i) => (
              <div
                key={i}
                className="grid lg:grid-cols-12 sm:grid-cols-1 gap-y-2"
              >
                {mensaje.role === "user" && (
                  <div className="col-start-6 col-end-13 p-3 rounded-lg">
                    <div className="flex items-center justify-start flex-row-reverse">
                      <div className="flex items-center text-white justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
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
                              mensaje.role === "user" ? "p-2 max-w-md" : ""
                            }`}
                          >
                            <p className="lg:text-sm text-xs">
                              {mensaje.contentUser}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="col-start-1 col-end-8 p-3 rounded-lg"></div>
                {mensaje.role === "user" && (
                  <div className="col-start-1  col-end-8  p-3 rounded-lg">
                    <div className="flex flex-row items-center">
                      <div className="flex items-center justify-center text-white h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                        FER
                      </div>
                      <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                        <p className="lg:text-sm text-xs">
                          {mensaje.contentBot}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {conversacion.map((mensaje, index) => (
              <div
                key={index}
                className="grid lg:grid-cols-12 sm:grid-cols-1  gap-y-2"
              >
                {mensaje.role === "bot" && (
                  <div className="col-start-1  col-end-8  p-3 rounded-lg">
                    <div className="flex flex-row items-center">
                      <div className="flex items-center text-white  justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                        CFO
                      </div>
                      <div className="relative ml-3 text-sm bg-white w-[90rem] py-2 px-4 shadow rounded-xl">
                        <p className="lg:text-sm text-xs">{mensaje.content}</p>
                      </div>
                    </div>
                  </div>
                )}
                <div className="col-start-1 col-end-8 p-3 rounded-lg"></div>
                {mensaje.role === "user" && (
                  <div className="col-start-6 col-end-13 p-3 rounded-lg">
                    <div className="flex items-center justify-start flex-row-reverse">
                      <div className="flex items-center justify-center text-white h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                        You
                      </div>
                      <div className="relative mr-3 text-sm max-w-[30rem] bg-indigo-300 py-2 px-4 shadow rounded-xl">
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
                            <p className="lg:text-sm text-xs">
                              {mensaje.content}
                            </p>
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
        <ChatForm
          consulta={consulta}
          setConsulta={setConsulta}
          enviarConsulta={enviarConsulta}
        />
      </div>
    </div>
  );
};

export default Conversation;
