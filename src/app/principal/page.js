"use client";
import React from "react";
import ChatComponent from "./ChatComponent";

import { useEffect } from "react";

const page = () => {
  return (
    <main className="container">
      <div>
        <ChatComponent />
      </div>
    </main>
  );
};

export default page;
