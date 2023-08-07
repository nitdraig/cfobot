// "use client";
// import React, { useState } from "react";
// import axios from "axios"; // Asegúrate de importar axios

// const Page = () => {
//   const [consulta, setConsulta] = useState("");
//   const [respuesta, setRespuesta] = useState("");
//   const [conversacion, setConversacion] = useState([]);

//   const enviarConsulta = async (e) => {
//     e.preventDefault();
//     try {
//       const nuevaConversacion = [
//         ...conversacion,
//         { role: "user", content: consulta },
//       ];
//       setConversacion(nuevaConversacion);

//       const response = await axios.post("http://localhost:5000/bot/consulta", {
//         message: consulta,
//       });
//       const generatedResponse = response.data.generatedResponse;

//       const conversacionConRespuesta = [
//         ...nuevaConversacion,
//         { role: "bot", content: generatedResponse },
//       ];
//       setConversacion(conversacionConRespuesta);

//       setRespuesta(generatedResponse);
//       setConsulta("");
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const borrarConversacion = () => {
//     setConversacion([]);
//     setRespuesta("");
//   };

//   return (
//     <main className="container h-screen">
//       <h2 className="text-center mt-10 text-xl">
//         Soy CFOBot Consulta lo que gustes
//       </h2>
//       <div className="container content-center">
//         <div className=" ">
//           {conversacion.map((mensaje, index) => (
//             <div
//               key={index}
//               className={`mensaje ${
//                 mensaje.role === "user" ? "usuario" : "bot"
//               }`}
//             >
//               <p className="nombre">
//                 {mensaje.role === "user" ? "Tú" : "Bot"}:
//               </p>
//               <p className="contenido">{mensaje.content}</p>
//             </div>
//           ))}
//         </div>{" "}
//         <div className="text-center">
//           <form onSubmit={enviarConsulta}>
//             <label className="">
//               <input
//                 className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
//                 placeholder="Consultame..."
//                 type="text"
//                 name="search"
//                 value={consulta}
//                 onChange={(e) => setConsulta(e.target.value)}
//               />
//             </label>
//             <div className="text-center mt-4">
//               <button
//                 type="button"
//                 onClick={enviarConsulta}
//                 className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-indigo-700 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
//               >
//                 Consultar
//               </button>
//               <button
//                 type="button"
//                 onClick={borrarConversacion}
//                 className="ml-2 flex-none rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
//               >
//                 Borrar Charla
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Page;
"use client";
import React from "react";
import ChatComponent from "./ChatComponent"; // Ajusta la ruta según la ubicación de ChatComponent

const Page = () => {
  return (
    <main className="container h-screen">
      <h2 className="text-center mt-10 text-xl">
        Soy CFO Consulta lo que gustes
      </h2>{" "}
      <ChatComponent />
      <div className="container content-center"></div>
    </main>
  );
};

export default Page;
