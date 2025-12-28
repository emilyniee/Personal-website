import Image from "next/image";
import plants from "../../../public/images/plants.png";

export default function About() {
  return (
    <section id="about" className="flex flex-col lg:flex-row bg-coffee-100 min-h-screen lg:h-screen justify-center items-center w-full px-4 md:px-8 lg:px-16 py-8 lg:py-0" aria-labelledby="about-heading">
      <div className="m-2 md:m-4 px-2 md:px-4 w-full lg:w-1/4 lg:h-4/6 mb-6 lg:mb-0">
        <div className="flex lg:h-1/2 w-full items-start mb-4 lg:mb-0">
          <h2 id="about-heading" className="text-black text-xl md:text-2xl">ABOUT ME</h2>
        </div>
        <div className="hidden lg:flex lg:h-1/2 items-end">
          <Image
            src={plants}
            alt="Decorative plant illustration"
            width={150}
            height={150}
          />
        </div>
      </div>
      <div className="m-2 md:m-4 bg-coffee-200 w-full lg:w-3/4 max-h-96 lg:h-4/6 p-4 md:p-6 rounded-md border border-coffee-300 text-black overflow-y-scroll text-sm md:text-base">
        <div className="mb-4">
          Hi! My name is Emily Nie and I&apos;m a 3rd year Computer Science student at the University of Waterloo. I&apos;m a problem solver who thrives on innovation and challenges.
        </div>
        <div className="mb-4">
          <p className="font-semibold">Tech stack:</p>
          <ul className="ml-4">
            <li>○ Languages: Python, Javascript, Typescript, Java, C/C++, C#, Go, Bash, Groovy, HTML, CSS/SASS, SQL</li>
            <li>○ Libraries/Frameworks: React, Next.js, Vue.js, Angular, Django, Node.js, Express.js, Bootstrap, PyTorch, TensorFlow</li>
            <li>○ Tools: PostgreSQL, MySQL, DynamoDB, MongoDB, Terraform, Docker, Git, Jenkins, AWS, Azure, Figma, Jira</li>
          </ul>
        </div>
        <div className="mb-4">
          <p className="font-semibold">Experience: </p>
          <ul className="ml-4">
            <li>○ Current SWE intern @ AMD, Full-stack Developer @ UW Blueprint</li>
            <li>○ Previous SWE @ Trend Micro, Full-stack Developer @ RCAF </li>
          </ul>
        </div>
        <div className="mb-4">
          <p className="font-semibold">Hobbies: </p>
          <ul className="ml-4">
            <li>○ Dance! I&apos;m the director of a dance crew called Haebeat. In my spare time, you&apos;ll probably catch me at a dance studio</li>
            <li>○ Drawing, all of the icons and visuals on this website are designed or drawn by me :) </li>
            <li>○ Film - I like to preserve memories in pictures and videos</li>
            <li>○ Gaming (Valorant, TFT, Word Hunt, to name some) </li>
          </ul>
        </div>
      </div>
    </section>
  );
}