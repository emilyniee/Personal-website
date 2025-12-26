import ProjectsCard from "../components/projectsCard";
import { projects } from "../data/projects";
import plants2 from "../../../public/images/plants2.png";
import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="flex flex-col-reverse lg:flex-row bg-coffee-100 min-h-screen lg:h-screen justify-center items-center w-full px-4 md:px-8 lg:px-24 py-8 lg:py-0" aria-labelledby="projects-heading">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full lg:w-1/2 mb-8 lg:mb-0">
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
      <div className="lg:ml-4 px-2 md:px-4 w-full lg:w-1/2 lg:h-5/6 flex justify-center lg:justify-end items-center lg:items-end mb-6 lg:mb-0">
        <div className="text-center lg:text-right">
          <h2 id="projects-heading" className="text-black text-xl md:text-2xl mb-4">PROJECTS</h2>
          <div className="hidden lg:block max-w-md">
            <Image
              src={plants2}
              alt="Decorative plant illustration in a pot"
              width={1383}
              height={585}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}