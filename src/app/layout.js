import "./globals.css";
import { Noto_Sans } from "next/font/google";
import NavBar from "./layouts/navbar/Navbar";
import Footer from "./layouts/footer/Footer";

const noto = Noto_Sans({ subsets: ["latin"], weight: "400" });
export const metadata = {
  title: "CFO | Asistente de Finanzas",
  description: ".",
  keywords: [
    "freelance",
    "fullstack",
    "developer",
    "desarrollador web",
    "argentina",
    "catamarca",
    "agustin",
    "avellaneda",
    "front-end",
    "back-end",
  ],

  twitter: {
    card: "summary_large_image",
    title: "CFO | Asistente de Finanzas",
    description: "",
    creator: "Avellaneda Agustín",
    images: [""],
  },

  robots: {
    index: true,
    follow: true,
    nocache: true,
  },

  openGraph: {
    images: "",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={noto.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
