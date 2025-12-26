import ProjectsCard from "../components/projectsCard";
import { projects } from "../data/projects";
import plants2 from "../../../public/images/plants2.png";
import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="flex bg-coffee-100 h-screen justify-center items-center w-full h-full justify-between px-24" aria-labelledby="projects-heading">
      <div className="grid grid-cols-3 grid-flow-row gap-4 w-1/2">
        {projects.map((project) => (
          <div key={project.id}>
            <ProjectsCard
              projectName={project.name}
              imageSrc={project.imageSrc}
              githubLink={project.githubLink}
              otherLink={project.otherLink}
            />
          </div>
        ))}
      </div>
      <div className="ml-4 px-4 w-1/2 h-5/6 flex justify-end items-end">
        <div className="text-right">
          <h2 id="projects-heading" className="text-black text-xl mb-4">PROJECTS</h2>
          <Image
            src={plants2}
            alt="Decorative plant illustration in a pot"
            width={1383}
            height={585}
          />
        </div>
      </div>
    </section>
  );
}