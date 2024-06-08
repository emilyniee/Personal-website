import Landing from "./sections/landing";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen min-w-screen">
      <Navbar/>
      <Landing/>
    </main>
  );
}
