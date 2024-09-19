import Image from "next/image";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Contact from "./components/Contact";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col container mx-auto px-12">
      <NavBar/>
      <Header/>
      <AboutMe/>
      <Skills/>
      <Contact/>
    </main>
  );
}
