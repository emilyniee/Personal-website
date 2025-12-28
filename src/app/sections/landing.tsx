import Image from "next/image";
import Sign from "../components/sign";
import coffeeShop from "../../../public/images/coffee-shop.png";
import { SOCIAL_LINKS, SITE_INFO } from "../data/constants";
import GithubIcon from "../components/icons/GithubIcon";
import LinkedinIcon from "../components/icons/LinkedinIcon";
import EmailIcon from "../components/icons/EmailIcon";

export default function Landing() {
  return (
    <section className="flex flex-col lg:flex-row bg-coffee-200 min-h-screen justify-center items-center w-full h-full px-4 py-8 lg:px-0">
      <div className="m-2 md:m-4 space-y-4 p-4 md:p-8 lg:p-16">
        <Sign title={SITE_INFO.name} />
        <Sign title={SITE_INFO.title} />
        <nav aria-label="Social media links" className="flex flex-wrap justify-center items-center gap-3 md:gap-5">
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
            <GithubIcon />
          </a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
            <LinkedinIcon />
          </a>
          <a href={SOCIAL_LINKS.email} target="_blank" rel="noopener noreferrer" aria-label="Email contact">
            <EmailIcon />
          </a>
          <a
            href={SOCIAL_LINKS.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 px-2 rounded-md bg-white text-coffee-300 hover:bg-gray-100"
            aria-label="View resume"
          >
            resume
          </a>
        </nav>
      </div>
      <div className="m-2 md:m-4 max-w-xs md:max-w-md lg:max-w-lg">
        <Image
          src={coffeeShop}
          alt="Illustrated coffee shop storefront"
          width={500}
          height={500}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}
