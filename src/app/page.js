import Presentation from "./../components/Presentation";
import About from "./../components/About";
import Team from "./../components/Team";
import Contact from "./../components/Contact";
export default function Home() {
  return (
    <div className="">
      <div>
        <Presentation />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="team">
        <Team />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}
