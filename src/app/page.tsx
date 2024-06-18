import Landing from "./sections/landing";
import Navbar from "./components/navbar";
import About from "./sections/about";
import Experience from "./sections/experience";
import Projects from "./sections/projects";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen min-w-screen">
        <main className=" w-full flex justify-center fixed px-12 pb-1 pt-1 bg-coffee-100">
            <h1 className="text-sm text-coffee-300">this website is a work in progress!</h1>
        </main>
      <Navbar/>
      <Landing/>
      <About/>
      <Experience/>
      <Projects/>
    </main>
  );
}
