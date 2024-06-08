export default function Navbar() {
    return (
        <main className="bg-coffee-200 w-full flex justify-end h-16 fixed">
            <a href="#about" className="inline-flex items-center px-3 py-2 text-sm text-coffee-300 hover:text-coffee-200">about</a>
            <a href="#experience" className="inline-flex items-center px-3 py-2 text-sm text-coffee-300 hover:text-coffee-200">experience</a>
            <a href="#projects" className="inline-flex items-center px-3 py-2 text-sm text-coffee-300 hover:text-coffee-200">projects</a>
        </main>
    );
  }
  