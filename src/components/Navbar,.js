import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <h1 className="text-xl font-semibold mr-4">exp_v01</h1>
        <button className="flex items-center px-3 py-2 border rounded text-gray-300 border-gray-400 hover:text-white hover:border-white md:hidden">
          <svg
            className="w-4 h-4 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 9h14a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2zm0-4a1 1 0 1 1 0-2h14a1 1 0 0 1 0 2H3zm0 8h14a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2z"
            />
          </svg>
        </button>
        <ul className="hidden md:flex space-x-4">
          <li>
            <Link href="/" className="hover:text-gray-300">
              Inicio
            </Link>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Acerca de
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Servicios
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
