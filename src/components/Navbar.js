"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/login", { email, password });

      console.log("Inicio de sesión exitoso");
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  const menuItems = ["Inicio", "Nosotros", "Ayuda y feedback"];
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-[#E1E0E070]">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">exp_</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/">
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/#about" aria-current="page">
            Nosotros
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/#team">
            Exp_ team
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link color="foreground" href="/#contact">
            Contacto
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link color="foreground" href="/principal">
            FER-Bot
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Button className="hover:bg-[#F31260] " onPress={onOpen}>
            Iniciar sesión
          </Button>

          <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    Bienvenido de vuelta
                  </ModalHeader>
                  <ModalBody>
                    <div className="max-w-[280px] mx-auto">
                      <div className="flex flex-col items-center mt-[10vh]">
                        <h2 className="mb-5 text-gray-900  font-bold text-xl">
                          Iniciar Sesión
                        </h2>

                        <form onSubmit={handleSubmit}>
                          <input
                            className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium "
                            type="email"
                            placeholder="Correo electrónico"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <input
                            type="password"
                            className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium "
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </form>
                        <p className="text-center mt-3 text-[14px]">
                          ¿No tienes cuenta? <br />
                          <Link
                            href="/register"
                            onClick={onClose}
                            className="text-gray-600"
                          >
                            Crea una Cuenta
                          </Link>
                        </p>
                        <p className="text-center mt-3 text-[14px]">
                          Al continuar confirmas que aceptas los términos y las
                          politicas de privacidad
                          <br />
                          <Link
                            href="/"
                            onClick={onClose}
                            className="text-gray-600"
                          >
                            Termis of Service
                          </Link>{" "}
                          and{" "}
                          <Link
                            href="/"
                            onClick={onClose}
                            className="text-gray-600"
                          >
                            Privacy Policy
                          </Link>
                        </p>
                      </div>
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      color="danger"
                      className="hover:text-[#000000]"
                      variant="light"
                      onClick={onClose}
                    >
                      Close
                    </Button>
                    <Button
                      color="primary"
                      className="hover:bg-[#5870f8] hover:text-[#000000] "
                      onSubmit={handleSubmit}
                    >
                      Iniciar sesión
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
