import ExperienceCard from "../components/experienceCard";
import { experiences } from "../data/experiences";

export default function Experience() {
  return (
    <section id="experience" className="flex flex-col bg-greene min-h-screen lg:h-screen justify-center items-center w-full py-8 px-4" aria-labelledby="experience-heading">
      <h2 id="experience-heading" className="text-black text-xl md:text-2xl mb-4 md:mb-6">EXPERIENCES</h2>
      <div className="w-full md:w-5/6 lg:h-4/6 bg-coffee-100 overflow-y-scroll rounded-md">
        {experiences.map((experience) => (
          <ExperienceCard
            key={experience.id}
            company={experience.company}
            position={experience.position}
            timeline={experience.timeline}
            readMore={experience.readMoreLink}
            imageSrc={experience.imageSrc}
          />
        ))}
      </div>
    </section>
  );
}
