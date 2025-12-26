import Image from "next/image";
import { ExperienceCardProps } from "../types";

export default function ExperienceCard({ company, position, timeline, readMore, imageSrc }: ExperienceCardProps) {
  return (
    <article className="flex p-8 align-center justify-center items-center">
      <div className="w-1/6">
        <Image
          src={imageSrc}
          alt={`${company} logo`}
          width={100}
          height={100}
        />
      </div>
      <div className="w-2/6">
        <h3 className="text-lg text-black">{company}</h3>
        <p className="text-md text-black">{position}</p>
      </div>
      <div className="w-3/6 items-end flex-col text-right">
        <p className="text-md text-black">{timeline}</p>
        <a
          className="text-sm text-black hover:underline"
          href={readMore}
          aria-label={`Read more about ${company} experience`}
        >
          read more
        </a>
      </div>
    </article>
  );
}
  