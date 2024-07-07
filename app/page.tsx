import ButtonCTA from "./components/ButtonCTA";
import NavBar from "./components/NavBar";
import Title from "./components/Title";
import ButtonGrupo from "./components/ButtonGrupo";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="h-screen relative">
      <img src="../../bg.png" alt="" className="absolute inset-0 w-full h-screen opacity-10 z-10" />
      <div className="relative z-10">
        <NavBar />
        <ButtonCTA />
        <Title />
        <ButtonGrupo />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}
