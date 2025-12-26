import Image from "next/image";
import GithubIcon from "./icons/GithubIcon";
import { ProjectsCardProps } from "../types";

export default function ProjectsCard({ imageSrc, projectName, githubLink, otherLink }: ProjectsCardProps) {
  return (
    <article className="flex flex-row md:flex-col w-full h-full p-4 md:p-6 lg:p-8 md:text-center bg-greene rounded-md gap-3 md:gap-0 md:space-y-3 lg:space-y-4 items-center md:items-stretch">
      <div className="flex-shrink-0 md:flex md:justify-center">
        <Image
          className="rounded-md w-20 h-20 md:w-24 md:h-auto object-cover"
          src={imageSrc}
          alt={`${projectName} preview`}
          width={100}
          height={50}
        />
      </div>
      <div className="flex-1 md:flex-none flex flex-col justify-center md:block">
        <h3 className="text-sm md:text-base lg:text-lg text-black font-semibold mb-1 md:mb-0">{projectName}</h3>
        <div className="flex md:justify-center items-center gap-2 mt-1 md:mt-2">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${projectName} on GitHub`}
          >
            <GithubIcon />
          </a>
          <a
            href={otherLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs md:text-sm hover:underline"
            aria-label={`View ${projectName} live demo or additional information`}
          >
            | link
          </a>
        </div>
      </div>
    </article>
  );
}
  