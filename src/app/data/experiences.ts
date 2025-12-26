import { ExperienceData } from "../types";

// Import images
import coffee0 from "../../../public/images/coffee0.png";
import coffee1 from "../../../public/images/coffee1.png";
import coffee2 from "../../../public/images/coffee2.png";
import coffee3 from "../../../public/images/coffee3.png";
import coffee4 from "../../../public/images/coffee4.png";
import coffee5 from "../../../public/images/coffee5.png";

import amd1 from "../../../public/images/amd1.jpg";
import amd2 from "../../../public/images/amd2.jpeg";
import trend1 from "../../../public/images/trend1.jpeg";
import trend2 from "../../../public/images/trend2.jpeg";
import flightDeck from "../../../public/images/flightdeck.png";
import flightDeck2 from "../../../public/images/flightdeck2.jpg";
import r2ac from "../../../public/images/r2ac.png";
import r2ac2 from "../../../public/images/r2ac2.png";
import bloom1 from "../../../public/images/bloom1.png";
import bloom2 from "../../../public/images/bloom2.png";

export const experiences: ExperienceData[] = [
  {
    id: "amd",
    company: "AMD",
    position: "Software Developer",
    timeline: "Sept 2024 - Dec 2024",
    imageSrc: coffee0,
    readMoreLink: "/amd",
    description: `At AMD, I worked on the Display Solutions team on the Linux side. During my term, I focused on two things - Linux Kernel development and Power Measurement Automation.

For Linux Kernel development I used mostly C, dealing with issues that had the potential to directly impact customers. This included issues to do with memory management, framebuffers, and other display issues. Things such as kernel rebase regressions were particularly difficult as the offending commit is not something that's easily found, but it was a cool challenge to work through and solve. My changes were promoted to the open-source Linux Kernel (which is pretty cool to see!)

Power Measurement Automation was a project I had full ownership of, and consisted of a series of scripts, pipelines, and data processing that ran nightly. This would catch issues in new kernel developments before they had the chance to affect the upstream kernel in production. For scripting, I worked with Python and Bash to develop things such as starting DAQ measurements, playing videos with various features turned on/off, and generating packages for upload. These scripts were then integrated into pipelines using Groovy, to be run within a Docker container on a Kubernetes pod. Finally, data was ingested/transformed using Databricks. Queries and visualizations were made using SQL, aiding hundreds of developers in debugging power issues.`,
    images: {
      image1: amd1,
      image2: amd2,
    },
  },
  {
    id: "trendmicro",
    company: "Trend Micro",
    position: "Software Developer",
    timeline: "Jan 2024 - May 2024",
    imageSrc: coffee1,
    readMoreLink: "/trendmicro",
    description: `Trend Micro is a cybersecurity company that helps detect and prevent risks for millions of individuals. During my time, I worked on Heartbeat Service, which was a microservice that facilitated "heartbeats" between agents and managers. This ensured that nodes were healthy and correctly protected.

When I first joined, upgrades were announced, triggered, and monitored manually by people on my team, which took around 10 hours of time/week. I was able to automate all of this. Using Bash, Python, and Jenkins, I was able to connect all parts of the upgrade - from using a webhook to announce upgrades to triggering AWS lambda functions. To ensure reliability, I set up Pagerduty using Terraform, to make sure that any upgrade failures were caught and reported instantly. I then used SQL and Splunk to monitor the percentage of no-touch deployments, so that areas that failed often could be spotted and improved.

Near the end of my term, I was able to kick off a new project - building an internal CLI that would have the ability to directly reach into nodes and perform operations such as restart or policy sends. Using Java and gRPC protocol, I set up an MVP server and client. Unfortunately, I was not able to finish the project, and had to send it off to the team (with plenty of documentation, of course :)). Moving to a new city in the winter seemed daunting, but it became one of the most memorable experiences of my life.`,
    images: {
      image1: trend1,
      image2: trend2,
    },
  },
  {
    id: "neurospice",
    company: "NeuroSpice.ai | Mellivora Applied Research",
    position: "Software Developer",
    timeline: "Dec 2023 - May 2024",
    imageSrc: coffee2,
    readMoreLink: "/neurospice",
    description: "Coming soon!",
    images: {
      image1: coffee2, // Placeholder
      image2: coffee2, // Placeholder
    },
  },
  {
    id: "rcaf",
    company: "Royal Canadian Air Force",
    position: "Fullstack Developer",
    timeline: "May 2023 - Aug 2023",
    imageSrc: coffee3,
    readMoreLink: "/rcaf",
    description: `Working in a close-knit team of 5, we were labeled as the forefront of innovation for the RCAF, pushing the limits of research and development. During my term, the main focus was fixing the problem of communication between students on the BTL (Basic Training List) and their managers. In simple terms, it's the stage where recruits to the military undergo their training. Through brainstorming and meeting with users, we decided to tackle the problem straight from the root - onboarding, a process that was nonexistent at the time. We decided to create a web app that acted as a central source of truth - a BTL portal that allowed for a back-and-forth line of communication between managers and students through guides, forums, announcements, faqs, and feedback.

I spearheaded the prototyping process, coming up with an MVP in under 2 weeks using Figma, Vue.js, and Vuetify. Using Pinia as a state management system, I was able to persist some example data for demoing. Using Node.js and Express.js, we effectively created controller and service layers that then connected to a PostgreSQL database through the ORM Sequelize. Once that was done, we got the chance to visit the military base and interact with members of the BTL in person. They tested the program straight from the computer, and we worked off their feedback to improve our application.`,
    images: {
      image1: flightDeck,
      image2: flightDeck2,
    },
  },
  {
    id: "r2ac",
    company: "Race to a Cure",
    position: "Social Lead",
    timeline: "Sept 2020 - Aug 2022",
    imageSrc: coffee4,
    readMoreLink: "/r2ac",
    description: `Race to a Cure is a national platform that strives to spread positivity admist the Covid-19 pandemic through reliable news, vaccine updates, research studies, webinars, and virtual camps. I joined Race to a Cure near its formation as one of the sole graphic designers. I worked overtime to kickstart the organization, creating logos, banners, color schemes, everything you can think of.

I actively contributed and watched as my efforts led to results, which led to my promotion to Social Lead, where I lead a department of 30 people. I led our social media through many rebrandings to look more professional. During my time there, I was able to grow our follower base from 0 to 7000, and gain proficient graphic design skills. I also gained strong research capabilities through a research study on the availability of medical resources, testing/reporting cases, and chronic illness during the Covid-19 pandemic.`,
    images: {
      image1: r2ac,
      image2: r2ac2,
    },
  },
  {
    id: "bloomred",
    company: "The Bloom Red Project",
    position: "Graphics Head",
    timeline: "Aug 2020 - Jul 2022",
    imageSrc: coffee5,
    readMoreLink: "/bloomred",
    description: `The Bloom Red Project is an organization that works to provide menstrual products to those in need and eradicate period stigma through educational campaigns. I worked as the Graphics Head and helped brand the organization, creating the logo using Inkscape and regularly working on promotional posts using Canva. Through public donation events in partnership with the City of Mississauga, we successfully raised over 5000 menstrual products to give to those in need.`,
    images: {
      image1: bloom1,
      image2: bloom2,
    },
  },
];
