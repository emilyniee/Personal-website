import ProjectsCard from "../components/projectsCard"
import chickenDinner from "../../../public/images/chicken-dinner.png"
import richardBot from "../../../public/images/richard-bot.png"
import learnWithHerm from "../../../public/images/learn-with-herm.png"
import filler from "../../../public/images/filler.png"

export default function Projects() {
    return (
      <main id="projects" className="flex bg-coffee-100 h-screen justify-center items-center w-full h-full">
        <div className="grid grid-cols-6 grid-flow-row gap-4">
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
            <div>
                <ProjectsCard
                    projectName="MinGo"
                    imageSrc={filler.src}
                    githubLink="https://github.com/emilyniee/htn2024"
                    otherLink="https://devpost.com/software/mingo-ua6mey"
                />
            </div>
            <div>
                <ProjectsCard
                    projectName="A Better Tent City"
                    imageSrc={filler.src}
                    githubLink="https://github.com/uwblueprint/abtc"
                    otherLink="https://www.abettertentcity.org/"
                />
            </div>
            <div>
                <ProjectsCard
                    projectName="Debate Dino"
                    imageSrc={filler.src}
                    githubLink="https://github.com/sunbagel/DebateDino"
                    otherLink="https://github.com/sunbagel/DebateDino"
                />
            </div>
        </div>


      </main>
    )
  }