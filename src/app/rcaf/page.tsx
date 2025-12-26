import PageCard from "../components/pageCard"
import flightDeck from "../../../public/images/flightdeck.png"
import flightDeck2 from "../../../public/images/flightdeck2.jpg"

const descriptionText =`Working in a close-knit team of 5, we were labeled as the forefront of innovation for the RCAF, pushing the limits of research and development. During my term, the main focus was fixing the problem of communication between students on the BTL (Basic Training List) and their managers. In simple terms, it’s the stage where recruits to the military undergo their training. Through brainstorming and meeting with users, we decided to tackle the problem straight from the root - onboarding, a process that was nonexistent at the time. We decided to create a web app that acted as a central source of truth - a BTL portal that allowed for a back-and-forth line of communication between managers and students through guides, forums, announcements, faqs, and feedback. 

I spearheaded the prototyping process, coming up with an MVP in under 2 weeks using Figma, Vue.js, and Vuetify. Using Pinia as a state management system, I was able to persist some example data for demoing. Using Node.js and Express.js, we effectively created controller and service layers that then connected to a PostgreSQL database through the ORM Sequelize. Once that was done, we got the chance to visit the military base and interact with members of the BTL in person. They tested the program straight from the computer, and we worked off their feedback to improve our application.`

const formattedDescription = descriptionText.split('\n').join('<br />');

export default function Rcaf() {
  return (
    <PageCard
        company="Royal Canadian Air Force"
        subtitle="May 2023 - Aug 2023"
        description={formattedDescription}
        imageSrc1={flightDeck}
        imageSrc2={flightDeck2}
    />
  )
}