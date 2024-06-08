import Image from "next/image";

export default function ExperienceCard({ company, position, timeline, readMore, imageSrc }: { company: string, position: string, timeline: string, readMore: string, imageSrc: string }) {
    return (
        <main className="flex p-8 align-center justify-center items-center">
            <div className="w-1/6">
                <Image
                    src={imageSrc}
                    alt=""
                    width={100}
                    height={100}
                />
            </div>
            <div className="w-2/6">
                <h1 className="text-lg text-black">{company}</h1>
                <h2 className="text-md text-black">{position}</h2>
            </div>
            <div className="w-3/6 items-end flex-col text-right">
                <h2 className="text-md text-black">{timeline}</h2>
                <h4 className="text-sm text-black">{readMore}</h4>
            </div>
        </main>
    );
}
  