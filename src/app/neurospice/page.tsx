import Image from "next/image";
import plants from "../../../public/images/plants.png";

export default function Neurospice() {
  return (
    <section className="flex flex-col lg:flex-row bg-coffee-100 min-h-screen lg:h-screen justify-center items-center w-full px-4 md:px-8 lg:px-16 py-8 lg:py-0">
      <div className="m-2 md:m-4 px-2 md:px-4 w-full lg:w-1/4 lg:h-4/6 mb-6 lg:mb-0">
        <div className="lg:h-1/2 w-full mb-4 lg:mb-0">
          <h1 className="text-black text-xl md:text-2xl">Neurospice.ai</h1>
        </div>
        <div className="hidden lg:flex lg:h-1/2 items-end">
          <Image
            src={plants}
            alt="Decorative plant illustration"
            width={150}
            height={150}
          />
        </div>
      </div>
      <div className="m-2 md:m-4 bg-coffee-200 w-full lg:w-3/4 lg:h-4/6 p-4 md:p-6 rounded-md border border-coffee-300 text-black flex items-center justify-center">
        <p className="text-base md:text-lg">Coming soon!</p>
      </div>
    </section>
  );
}