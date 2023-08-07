import Link from "next/link";
import React, { useState } from "react";
import axios from "axios"; // Asegúrate de importar axios

export const RegisterUser = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/register", {
        username,
        email,
        password,
      });
      console.log("Registro exitoso");
      // Puedes redirigir al usuario a la página de inicio de sesión u otra página aquí
    } catch (error) {
      console.error(error.response.data.message);
    }
  };
  return (
    <div className="max-w-[280px] mx-auto">
      <div className="flex flex-col items-center mt-[10vh]">
        <h2 className="mb-5 text-gray-900  font-bold text-xl">Registrate</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium "
            placeholder="Nombre completo"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium "
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium "
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <input
            type="password"
            className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium "
            placeholder="Confirm password"
            value=""
          /> */}
          <button
            type="submit"
            className="bg-slate-500 hover:bg-slate-700 text-white text-base rounded-lg py-2.5 px-5 transition-colors w-full text-[19px]"
          >
            Registrate
          </button>
        </form>
        <p className="text-center mt-3 text-[14px]">
          ¿Ya tienes cuenta? <br />
          <Link href="/login" className="text-gray-600">
            Iniciar Sesión
          </Link>
        </p>
        <p className="text-center mt-3 text-[14px]">
          Al registrarte confirmas que leíste los términos y la politica de
          privacidad
          <br />
          <a href="/terms" className="text-gray-600">
            Terms of Service
          </a>
          {""} and {""}
          <a href="/privacy" className="text-gray-600">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default RegisterUser;
