import ExperienceCard from "../components/experienceCard"

import coffee1 from "../../../public/images/coffee1.png"
import coffee2 from "../../../public/images/coffee2.png"
import coffee3 from "../../../public/images/coffee3.png"

export default function Experience() {
    return (
      <main className="flex bg-greene h-screen justify-center items-center w-full h-full">
        <div className="h-4/6 w-5/6 bg-coffee-100">
            <ExperienceCard 
                company="Trend Micro"
                position="Software Developer"
                timeline="Jan 2024 - May 2024"
                readMore="read more"
                imageSrc={coffee1.src}
            />
            <ExperienceCard 
                company="NeuroSpice.ai | Mellivora Applied Research"
                position="Software Developer"
                timeline="Dec 2023 - May 2024"
                readMore="read more"
                imageSrc={coffee2.src}
            />
            <ExperienceCard 
                company="Royal Canadian Air Force"
                position="Fullstack Developer"
                timeline="May 2023 - Aug 2023"
                readMore="read more"
                imageSrc={coffee3.src}
            />
        </div>
      </main>
    )
  }