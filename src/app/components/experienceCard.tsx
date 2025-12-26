import Image from "next/image";
import { ExperienceCardProps } from "../types";

export default function ExperienceCard({ company, position, timeline, readMore, imageSrc }: ExperienceCardProps) {
  return (
    <article className="flex flex-col md:flex-row p-4 md:p-6 lg:p-8 items-center border-b border-coffee-200 last:border-b-0">
      <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 mb-4 md:mb-0 lg:mr-6 flex-shrink-0">
        <Image
          src={imageSrc}
          alt={`${company} logo`}
          width={100}
          height={100}
          className="w-full h-auto"
        />
      </div>
      <div className="flex-1 text-center md:text-left mb-2 md:mb-0">
        <h3 className="text-base md:text-lg text-black font-semibold">{company}</h3>
        <p className="text-sm md:text-md text-black">{position}</p>
      </div>
      <div className="flex flex-col items-center md:items-end text-center md:text-right md:ml-4">
        <p className="text-sm md:text-md text-black mb-1">{timeline}</p>
        <a
          className="text-xs md:text-sm text-black hover:underline"
          href={readMore}
          aria-label={`Read more about ${company} experience`}
        >
          read more
        </a>
      </div>
    </article>
  );
}
  