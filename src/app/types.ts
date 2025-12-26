import { StaticImageData } from "next/image";

// Component Props Types
export interface SignProps {
  title: string;
}

export interface ExperienceCardProps {
  company: string;
  position: string;
  timeline: string;
  readMore: string;
  imageSrc: string | StaticImageData;
}

export interface PageCardProps {
  company: string;
  subtitle: string;
  description: string;
  imageSrc1: string | StaticImageData;
  imageSrc2: string | StaticImageData;
}

export interface ProjectsCardProps {
  imageSrc: string | StaticImageData;
  projectName: string;
  githubLink: string;
  otherLink: string;
}

// Data Structure Types
export interface ExperienceData {
  id: string;
  company: string;
  position: string;
  timeline: string;
  imageSrc: string | StaticImageData;
  readMoreLink: string;
  description: string;
  images: {
    image1: string | StaticImageData;
    image2: string | StaticImageData;
  };
}

export interface ProjectData {
  id: string;
  name: string;
  imageSrc: string | StaticImageData;
  githubLink: string;
  otherLink: string;
}

// Social Links
export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
  resume: string;
}
