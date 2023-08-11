"use client";
import React from "react";
import ChatComponent from "./ChatComponent"; // Ajusta la ruta según la ubicación de ChatComponent

import AOS from "aos";
import "aos/dist/aos.css";

const Page = () => {
  return (
    <main className="container">
      <div data-aos="fade-up" className="container ">
        <ChatComponent />
      </div>
    </main>
  );
};

export default Page;
