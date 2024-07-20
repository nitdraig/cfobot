"use client";
import { useEffect, useRef, useState } from "react";
import ChatForm from "./components/chatform/ChatForm";
import Conversation from "./components/conversation/Conversation";
import Sidebar from "./components/sidebar/SideBar";
import axios from "axios";

const ChatComponent = () => {
  const [consulta, setConsulta] = useState("");
  const [respuesta, setRespuesta] = useState("");
  const conversacionRef = useRef(null);
  const [conversacion, setConversacion] = useState([]);
  const [interacciones, setInteracciones] = useState([]);
  const URLAPI = process.env.NEXT_PUBLIC_API_URL;

  // useEffect(() => {
  //   axios
  //     .get(`${URLAPI}interacciones/obtenerinteracciones`)
  //     .then((response) => {
  //       setInteracciones(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error al obtener interacciones:", error);
  //     });
  // }, []);

  useEffect(() => {
    sessionStorage.setItem("conversacion", JSON.stringify(conversacion));
  }, [conversacion]);

  useEffect(() => {
    const conversacionElement = conversacionRef.current;
    conversacionElement.scrollBot = conversacionElement.scrollHeight;
  }, [conversacion]);

  const enviarConsulta = async (e) => {
    e.preventDefault();
    try {
      const nuevaConversacion = [
        ...conversacion,
        { role: "user", content: consulta },
      ];
      setConversacion(nuevaConversacion);

      const response = await axios.post(`${URLAPI}bot/consulta`, {
        message: consulta,
      });

      console.log("Respuesta del servidor:", response.data);

      const generatedResponse = response.data.generatedResponse;

      const conversacionConRespuesta = [
        ...nuevaConversacion,
        { role: "bot", content: generatedResponse },
      ];
      setConversacion(conversacionConRespuesta);
      setRespuesta(generatedResponse);
      setConsulta("");
      await axios.post(`${URLAPI}interacciones/nuevainteraccion`, {
        role: "user",
        contentUser: consulta,
        contentBot: generatedResponse,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex h-full antialiased ">
      <Sidebar />
      <Conversation
        interacciones={interacciones}
        conversacion={conversacion}
        conversacionRef={conversacionRef}
        consulta={consulta}
        setConsulta={setConsulta}
        enviarConsulta={enviarConsulta}
      />
    </div>
  );
};

export default ChatComponent;
