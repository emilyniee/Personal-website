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
          Hi! My name is Emily Nie and I&apos;m a 4th year Computer Science student at the University of Waterloo. Nice to meet you :)
        </div>
        <div className="mb-4">
          <p className="font-semibold">Tech stack:</p>
          <ul className="ml-4">
            <li>○ Languages: Python, C/C++, Golang, Java, Javascript, Typescript, Bash, Groovy, HTML, CSS, SQL</li>
            <li>○ Libraries/Frameworks: PyTorch, Tensorflow, Scikit-learn, React, Vue.js, Angular, Django, Node.js, Express.js</li>
            <li>○ Tools: Kubernetes, Docker, Linux, PostgreSQL, MongoDB, Jenkins, Bazel, Terraform, AWS, Git, Azure, Jira</li>
          </ul>
        </div>
        <div className="mb-4">
          <p className="font-semibold">Experience: </p>
          <ul className="ml-4">
            <li>○ Current SWE intern @ Google </li>
            <li>○ Previous SWE @ AMD, Trend Micro, RCAF </li>
          </ul>
        </div>
        <div className="mb-4">
          <p className="font-semibold">Hobbies: </p>
          <ul className="ml-4">
            <li>○ Dance! I&apos;m the director of a dance crew called Haebeat. In my spare time, you&apos;ll probably catch me at a dance studio</li>
            <li>○ Drawing, all of the icons and visuals on this website are designed or drawn by me :) </li>
            <li>○ Film and photography (slowly running out of storage space)</li>
            <li>○ Gaming, currently obsessed with Stardew Valley and Overcooked</li>
          </ul>
        </div>
      </div>
    </section>
  );
}