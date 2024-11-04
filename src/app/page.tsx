import Landing from "./sections/landing";
import Navbar from "./components/navbar";
import About from "./sections/about";
import Experience from "./sections/experience";
import Projects from "./sections/projects";
import Wip from "./sections/wip";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen min-w-screen">
      <Navbar/>
      <Landing/>
      <About/>
      <Experience/>
      <Projects/>
    </main>
  );
}
