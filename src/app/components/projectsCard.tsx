import Image from "next/image";
import GithubIcon from "./icons/GithubIcon";
import { ProjectsCardProps } from "../types";

export default function ProjectsCard({ imageSrc, projectName, githubLink, otherLink }: ProjectsCardProps) {
  return (
    <article className="flex-column w-full h-full p-4 md:p-6 lg:p-8 text-center bg-greene rounded-md space-y-3 md:space-y-4">
      <div className="flex justify-center">
        <Image
          className="rounded-md"
          src={imageSrc}
          alt={`${projectName} preview`}
          width={100}
          height={50}
        />
      </div>
      <h3 className="text-base md:text-lg text-black font-semibold">{projectName}</h3>
      <div className="flex justify-center items-center gap-2">
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
          className="text-sm hover:underline"
          aria-label={`View ${projectName} live demo or additional information`}
        >
          | link
        </a>
      </div>
    </article>
  );
}
  