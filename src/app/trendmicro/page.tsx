import PageCard from "../components/pageCard"
import trend1 from "../../../public/images/trend1.jpeg"
import trend2 from "../../../public/images/trend2.jpeg"

const descriptionText =`Trend Micro is a cybersecurity company that helps detect and prevent risks for millions of individuals. During my time, I worked on Heartbeat Service, which was a microservice that facilitated “heartbeats” between agents and managers. This ensured that nodes were healthy and correctly protected. 

When I first joined, upgrades were announced, triggered, and monitored manually by people on my team, which took around 10 hours of time/week. I was able to automate all of this. Using Bash, Python, and Jenkins, I was able to connect all parts of the upgrade - from using a webhook to announce upgrades to triggering AWS lambda functions. To ensure reliability, I set up Pagerduty using Terraform, to make sure that any upgrade failures were caught and reported instantly. I then used SQL and Splunk to monitor the percentage of no-touch deployments, so that areas that failed often could be spotted and improved.

Near the end of my term, I was able to kick off a new project - building an internal CLI that would have the ability to directly reach into nodes and perform operations such as restart or policy sends. Using Java and gRPC protocol, I set up an MVP server and client. Unfortunately, I was not able to finish the project, and had to send it off to the team (with plenty of documentation, of course :)). Moving to a new city in the winter seemed daunting, but it became one of the most memorable experiences of my life.`

const formattedDescription = descriptionText.split('\n').join('<br />');

export default function rcaf() {
  return (
    <PageCard
        company="Trend Micro"
        subtitle="Jan 2024 - Aug 2024"
        description={formattedDescription}
        imageSrc1={trend1.src}
        imageSrc2={trend2.src}
    />
  )
}