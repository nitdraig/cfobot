import ChatVisual from "@/app/principal/ChatVisual";
import Link from "next/link";
import React from "react";

const Presentation = () => {
  return (
    <div>
      <div className="text-center mt-5 ">
        <h2 className="text-xl">You´re in the jungle baby</h2>
        <p>Welcome Back</p>
        <div className="text-center mt-10 ml-3">
          <Link
            className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-indigo-700 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            href="/login"
          >
            Iniciar sesion
          </Link>
          <Link
            className="ml-2 flex-none rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
            href="/register"
          >
            Registrarse
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
