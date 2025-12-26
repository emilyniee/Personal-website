import ExperienceCard from "../components/experienceCard";
import { experiences } from "../data/experiences";

export default function Experience() {
  return (
    <section id="experience" className="flex flex-col bg-greene h-screen justify-center items-center w-full h-full" aria-labelledby="experience-heading">
      <h2 id="experience-heading" className="text-black text-xl mb-4">EXPERIENCES</h2>
      <div className="h-4/6 w-5/6 bg-coffee-100 overflow-y-scroll">
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
