import Image from "next/image"
import plants from "../../../public/images/plants.png"

export default function PageCard({ company, subtitle, description, imageSrc1, imageSrc2 }: { company: string, subtitle: string, description: string, imageSrc1: string, imageSrc2: string }) {
  return (
    <main id="about" className="flex bg-coffee-100 h-screen justify-center items-center w-full h-full px-16">
        <div className="m-4 px-4 w-1/4 h-4/6">
            <div className="h-1/2 w-full items-start">
                <h1 className="text-black text-xl">{company}</h1>
                <a className="text-sm text-black">{subtitle}</a>
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
        <div className="m-4 bg-coffee-200 w-3/4 h-4/6 p-4 rounded-md border border-coffee-300 text-black flex space-x-4">
            <div className="w-4/6 overflow-y-scroll">
                <div dangerouslySetInnerHTML={{ __html: description }} />
            </div>
            <div className="flex flex-col items-center justify-center h-full overflow-y-scroll">
                <Image
                    src={imageSrc1}
                    alt="coffee shop"
                    width={270}
                    height={100}
                    className="mb-2"
                />
                <Image
                    src={imageSrc2}
                    alt="coffee shop"
                    width={270}
                    height={100}
                />
            </div>
        </div>
    </main>
  )
}