import { ProjectData } from "../types";

// Import images
import chickenDinner from "../../../public/images/chicken-dinner.png";
import richardBot from "../../../public/images/richard-bot.png";
import learnWithHerm from "../../../public/images/learn-with-herm.png";
import mingo from "../../../public/images/mingo.png";
import abtc from "../../../public/images/abtc.png";
import debateDino from "../../../public/images/debate-dino.png";

export const projects: ProjectData[] = [
  {
    id: "richard-bot",
    name: "Richard Bot",
    imageSrc: richardBot,
    githubLink: "https://github.com/emilyniee/Richard-Bot",
    otherLink: "https://www.canva.com/design/DAE1jeoVHuY/ASRcNw4EnKmlf60757iklA/view",
  },
  {
    id: "chicken-dinner",
    name: "Chicken Dinner",
    imageSrc: chickenDinner,
    githubLink: "https://github.com/emilyniee/UOttahack6-WWCD",
    otherLink: "https://devpost.com/software/chicken-dinner-st9ank",
  },
  {
    id: "learn-with-herm",
    name: "Learn with Herm",
    imageSrc: learnWithHerm,
    githubLink: "https://github.com/emilyniee/learnwithherm",
    otherLink: "https://devpost.com/software/learn-with-herm",
  },
  {
    id: "mingo",
    name: "MinGo",
    imageSrc: mingo,
    githubLink: "https://github.com/emilyniee/htn2024",
    otherLink: "https://devpost.com/software/mingo-ua6mey",
  },
  {
    id: "abtc",
    name: "A Better Tent City",
    imageSrc: abtc,
    githubLink: "https://github.com/uwblueprint/abtc",
    otherLink: "https://www.abettertentcity.org/",
  },
  {
    id: "debate-dino",
    name: "Debate Dino",
    imageSrc: debateDino,
    githubLink: "https://github.com/sunbagel/DebateDino",
    otherLink: "https://github.com/sunbagel/DebateDino",
  },
];
