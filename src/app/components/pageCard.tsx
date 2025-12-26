import Image from "next/image";
import plants from "../../../public/images/plants.png";
import { PageCardProps } from "../types";

export default function PageCard({ company, subtitle, description, imageSrc1, imageSrc2 }: PageCardProps) {
  return (
    <section className="flex bg-coffee-100 h-screen justify-center items-center w-full h-full px-16">
      <div className="m-4 px-4 w-1/4 h-4/6">
        <div className="h-1/2 w-full items-start">
          <h1 className="text-black text-xl">{company}</h1>
          <p className="text-sm text-black">{subtitle}</p>
        </div>
        <div className="h-1/2 flex items-end">
          <Image
            src={plants}
            alt="Decorative plant illustration"
            width={150}
            height={150}
          />
        </div>
      </div>
      <div className="m-4 bg-coffee-200 w-3/4 h-4/6 p-4 rounded-md border border-coffee-300 text-black flex space-x-4">
        <div className="w-4/6 overflow-y-scroll">
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </div>
        <div className="flex flex-col items-center justify-center h-full overflow-y-scroll">
          <Image
            src={imageSrc1}
            alt={`${company} work environment photo 1`}
            width={270}
            height={100}
            className="mb-2"
          />
          <Image
            src={imageSrc2}
            alt={`${company} work environment photo 2`}
            width={270}
            height={100}
          />
        </div>
      </div>
    </section>
  );
}