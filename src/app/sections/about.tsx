import Image from "next/image"
import plants from "../../../public/images/plants.png"

export default function About() {
  return (
    <main id="about" className="flex bg-coffee-100 h-screen justify-center items-center w-full h-full px-16">
        <div className="m-4 px-4 w-1/4 h-4/6">
            <div className="flex h-1/2 w-full items-start">
                <h1 className="text-black text-xl">ABOUT ME</h1>
            </div>
            <div className="h-1/2 flex items-end">
                <Image
                src={plants.src}
                alt="coffee shop"
                width={150}
                height={150}
            />
            </div>
        </div>
        <div className="m-4 bg-coffee-200 w-3/4 h-4/6 p-4 rounded-md border border-coffee-300 text-black overflow-y-scroll">
            <div className="mb-4">
              Hi! My name is Emily Nie and I’m a 3rd year Computer Science student at the University of Waterloo. I’m a problem solver who thrives on innovation and challenges.
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
                <li>○ Dance! I’m the director of a dance crew called Haebeat. In my spare time, you’ll probably catch me at a dance studio</li>
                <li>○ Drawing, all of the icons and visuals on this website are designed or drawn by me :) </li>
                <li>○ Film - I like to preserve memories in pictures and videos</li>
                <li>○ Gaming (Valorant, TFT, Word Hunt, to name some) </li>
              </ul>
            </div>
        </div>
    </main>
  )
}