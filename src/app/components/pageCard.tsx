import Image from "next/image";
import plants from "../../../public/images/plants.png";
import { PageCardProps } from "../types";

export default function PageCard({ company, subtitle, description, imageSrc1, imageSrc2 }: PageCardProps) {
  return (
    <section className="flex flex-col lg:flex-row bg-coffee-100 min-h-screen lg:h-screen justify-center items-center w-full px-4 md:px-8 lg:px-16 py-8 lg:py-0">
      <div className="m-2 md:m-4 px-2 md:px-4 w-full lg:w-1/4 lg:h-4/6 mb-6 lg:mb-0">
        <div className="lg:h-1/2 w-full mb-4 lg:mb-0">
          <h1 className="text-black text-xl md:text-2xl">{company}</h1>
          <p className="text-sm md:text-base text-black">{subtitle}</p>
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
      <div className="m-2 md:m-4 bg-coffee-200 w-full lg:w-3/4 lg:h-4/6 p-4 md:p-6 rounded-md border border-coffee-300 text-black flex flex-col lg:flex-row lg:space-x-4 max-h-96 lg:max-h-full">
        <div className="w-full lg:w-4/6 overflow-y-scroll mb-4 lg:mb-0 text-sm md:text-base">
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </div>
        <div className="w-full lg:w-2/6 flex flex-col items-center justify-start lg:justify-center overflow-y-scroll space-y-4">
          <Image
            src={imageSrc1}
            alt={`${company} work environment photo 1`}
            width={270}
            height={100}
            className="w-full max-w-xs h-auto"
          />
          <Image
            src={imageSrc2}
            alt={`${company} work environment photo 2`}
            width={270}
            height={100}
            className="w-full max-w-xs h-auto"
          />
        </div>
      </div>
    </section>
  );
}