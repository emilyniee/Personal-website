import Image from "next/image";
import { ExperienceCardProps } from "../types";

export default function ExperienceCard({ company, position, timeline, readMore, imageSrc }: ExperienceCardProps) {
  return (
    <article className="flex flex-row p-4 md:p-6 lg:p-8 items-center gap-3 md:gap-4 border-b border-coffee-200 last:border-b-0">
      <div className="w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 flex-shrink-0 lg:mr-2">
        <Image
          src={imageSrc}
          alt={`${company} logo`}
          width={100}
          height={100}
          className="w-full h-auto"
        />
      </div>
      <div className="flex-1 min-w-0 md:flex md:items-center md:justify-between">
        <div className="md:flex-1">
          <h3 className="text-sm md:text-base lg:text-lg text-black font-semibold truncate">{company}</h3>
          <p className="text-xs md:text-sm text-black truncate">{position}</p>
        </div>
        <div className="mt-1 md:mt-0 md:flex md:flex-col md:items-end md:text-right md:ml-4">
          <p className="text-xs md:text-sm text-black">{timeline}</p>
          <a
            className="text-xs md:text-sm text-black hover:underline inline-block"
            href={readMore}
            aria-label={`Read more about ${company} experience`}
          >
            read more
          </a>
        </div>
      </div>
    </article>
  );
}
  