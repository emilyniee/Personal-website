import PageCard from "../components/pageCard"
import amd1 from "../../../public/images/amd1.jpg"
import amd2 from "../../../public/images/amd2.jpeg"

const descriptionText = `At AMD, I worked on the Display Solutions team on the Linux side. During my term, I focused on two things - Linux Kernel development and Power Measurement Automation.

For Linux Kernel development I used mostly C, dealing with issues that had the potential to directly impact customers. This included issues to do with memory management, framebuffers, and other display issues. Things such as kernel rebase regressions were particularly difficult as the offending commit is not something that’s easily found, but it was a cool challenge to work through and solve. My changes were promoted to the open-source Linux Kernel (which is pretty cool to see!) 

Power Measurement Automation was a project I had full ownership of, and consisted of a series of scripts, pipelines, and data processing that ran nightly. This would catch issues in new kernel developments before they had the chance to affect the upstream kernel in production. For scripting, I worked with Python and Bash to develop things such as starting DAQ measurements, playing videos with various features turned on/off, and generating packages for upload. These scripts were then integrated into pipelines using Groovy, to be run within a Docker container on a Kubernetes pod. Finally, data was ingested/transformed using Databricks. Queries and visualizations were made using SQL, aiding hundreds of developers in debugging power issues.
`
const formattedDescription = descriptionText.split('\n').join('<br />');
export default function rcaf() {
  return (
    <PageCard
        company="AMD"
        subtitle="Sept 2024 - Dec 2024"
        description={formattedDescription}
        imageSrc1={amd1.src}
        imageSrc2={amd2.src}
    />
  )
}