import React from "react";

const ChatForm = ({ consulta, setConsulta, enviarConsulta }) => {
  return (
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
        <div className=" lg:ml-4 ml-1 text-center content-center">
          <button
            type="button"
            onClick={enviarConsulta}
            className="flex items-center text-md justify-center bg-[#274b72] hover:bg-[#b3b0b0] hover:text-black rounded-xl text-white px-4 py-4 flex-shrink-0"
          >
            <span>Enviar</span>
          </button>
        </div>
        <div className="ml-4 mt-1 text-center content-center">
          {/* <button
            type="button"
            onClick={borrarConversacion}
            className="flex items-center justify-center bg-red-700 hover:bg-red-400 rounded-xl text-white px-3 py-1 flex-shrink-0"
          >
            <span>Limpiar</span>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default ChatForm;
