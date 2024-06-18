import ProjectsCard from "../components/projectsCard"
import chickenDinner from "../../../public/images/chicken-dinner.png"
import richardBot from "../../../public/images/richard-bot.png"
import learnWithHerm from "../../../public/images/learn-with-herm.png"

export default function Projects() {
    return (
      <main className="flex bg-coffee-100 h-screen justify-center items-center w-full h-full">
        <div className="grid grid-cols-3 grid-flow-row gap-4">
            <div>
                <ProjectsCard
                projectName="Richard Bot"
                imageSrc={richardBot.src}
                githubLink="https://github.com/emilyniee/Richard-Bot"
                otherLink="https://www.canva.com/design/DAE1jeoVHuY/ASRcNw4EnKmlf60757iklA/view"
            />
            </div>
            <div>
                <ProjectsCard
                    projectName="Chicken Dinner"
                    imageSrc={chickenDinner.src}
                    githubLink="https://github.com/emilyniee/UOttahack6-WWCD"
                    otherLink="https://devpost.com/software/chicken-dinner-st9ank"
                />
            </div>
            <div>
                <ProjectsCard
                    projectName="Learn with Herm"
                    imageSrc={learnWithHerm.src}
                    githubLink="https://github.com/emilyniee/learnwithherm"
                    otherLink="https://devpost.com/software/learn-with-herm"
                />
            </div>
        </div>


      </main>
    )
  }