import ProjectsCard from "../components/projectsCard"
import chickenDinner from "../../../public/images/chicken-dinner.png"
import richardBot from "../../../public/images/richard-bot.png"
import learnWithHerm from "../../../public/images/learn-with-herm.png"
import mingo from "../../../public/images/mingo.png"
import abtc from "../../../public/images/abtc.png"
import debateDino from "../../../public/images/debate-dino.png"
import plants2 from "../../../public/images/plants2.png"
import Image from "next/image"

export default function Projects() {
    return (
      <main id="projects" className="flex bg-coffee-100 h-screen justify-center items-center w-full h-full justify-between px-24">
        <div className="grid grid-cols-3 grid-flow-row gap-4 w-1/2">
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
                    imageSrc={mingo.src}
                    githubLink="https://github.com/emilyniee/htn2024"
                    otherLink="https://devpost.com/software/mingo-ua6mey"
                />
            </div>
            <div>
                <ProjectsCard
                    projectName="A Better Tent City"
                    imageSrc={abtc.src}
                    githubLink="https://github.com/uwblueprint/abtc"
                    otherLink="https://www.abettertentcity.org/"
                />
            </div>
            <div>
                <ProjectsCard
                    projectName="Debate Dino"
                    imageSrc={debateDino.src}
                    githubLink="https://github.com/sunbagel/DebateDino"
                    otherLink="https://github.com/sunbagel/DebateDino"
                />
            </div>
        </div>
        <div className="ml-4 px-4 w-1/2 h-5/6 flex justify-end items-end">
            <div className="text-right">
                <h1 className="text-black text-xl mb-4">PROJECTS</h1>
                <Image
                src={plants2.src}
                alt="coffee shop"
                width={1383}
                height={585}
                />
            </div>
        </div>
      </main>
    )
  }