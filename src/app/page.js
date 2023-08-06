import Image from "next/image";
import Presentation from "./../components/Presentation";

export default function Home() {
  return (
    <div className="main h-screen w-screen">
      <h1 className="text-center mt-10 text-3xl">CFO-ChatBot</h1>
      <Presentation />
    </div>
  );
}
