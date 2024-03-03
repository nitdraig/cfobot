import React from "react";
import ChatComponent from "./ChatComponent/ChatComponent";

const FerView = () => {
  return (
    <>
      <h3 className="text-3xl text-center mt-4 font-semibold">
        Escribe tu consulta
      </h3>
      <ChatComponent />
    </>
  );
};

export default FerView;
