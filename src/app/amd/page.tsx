import Image from "next/image"
import plants from "../../../public/images/plants.png"

export default function Amd() {
  return (
    <main id="about" className="flex bg-coffee-100 h-screen justify-center items-center w-full h-full px-16">
        <div className="m-4 px-4 w-1/4 h-4/6">
            <div className="flex h-1/2 w-full items-start">
                <h1 className="text-black text-xl">AMD</h1>
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
        <div className="m-4 bg-coffee-200 w-3/4 h-4/6 p-4 rounded-md border border-coffee-300 text-black">
            coming soon!
        </div>
    </main>
  )
}