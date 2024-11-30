import PageCard from "../components/pageCard"
import bloom1 from "../../../public/images/bloom1.png"
import bloom2 from "../../../public/images/bloom2.png"

const descriptionText = `The Bloom Red Project is an organization that works to provide menstrual products to those in need and eradicate period stigma through educational campaigns. I worked as the Graphics Head and helped brand the organization, creating the logo using Inkscape and regularly working on promotional posts using Canva. Through public donation events in partnership with the City of Mississauga, we successfully raised over 5000 menstrual products to give to those in need.`

const formattedDescription = descriptionText.split('\n').join('<br />');
export default function rcaf() {
  return (
    <PageCard
        company="The Bloom Red Project"
        subtitle="Aug 2020 - Jul 2022"
        description={formattedDescription}
        imageSrc1={bloom1.src}
        imageSrc2={bloom2.src}
    />
  )
}