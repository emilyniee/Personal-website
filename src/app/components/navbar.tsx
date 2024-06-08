export default function Navbar() {
    return (
        <main className=" w-full flex justify-end h-16 fixed space-x-6 px-12 pt-8">
            <a href="#about" className="inline-flex items-center py-2 text-lg text-coffee-300 hover:text-coffee-200">about</a>
            <a href="#experience" className="inline-flex items-center text-lg text-coffee-300 hover:text-coffee-200">experience</a>
            <a href="#projects" className="inline-flex items-center  text-lg text-coffee-300 hover:text-coffee-200">projects</a>
        </main>
    );
  }
  