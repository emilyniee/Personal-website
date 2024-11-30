import PageCard from "../components/pageCard"
import r2ac from "../../../public/images/r2ac.png"
import r2ac2 from "../../../public/images/r2ac2.png"

const descriptionText =`Race to a Cure is a national platform that strives to spread positivity admist the Covid-19 pandemic through reliable news, vaccine updates, research studies, webinars, and virtual camps. I joined Race to a Cure near its formation as one of the sole graphic designers. I worked overtime to kickstart the organization, creating logos, banners, color schemes, everything you can think of. 

I actively contributed and watched as my efforts led to results, which led to my promotion to Social Lead, where I lead a department of 30 people. I led our social media through many rebrandings to look more professional. During my time there, I was able to grow our follower base from 0 to 7000, and gain proficient graphic design skills. I also gained strong research capabilities through a research study on the availability of medical resources, testing/reporting cases, and chronic illness during the Covid-19 pandemic.`

const formattedDescription = descriptionText.split('\n').join('<br />');

export default function rcaf() {
  return (
    <PageCard
        company="Race to a Cure"
        subtitle="Sept 2020 - Aug 2022"
        description={formattedDescription}
        imageSrc1={r2ac.src}
        imageSrc2={r2ac2.src}
    />
  )
}