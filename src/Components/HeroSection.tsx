import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

export default function HeroSection() {
  return (
    <div className=" h-auto md:h-[40rem] flex items-center justify-center mx-auto rounded-md relative  max-w-[100%] py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 z-10 relative  text-center w-full">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the art of Music
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Comprehensive music course platform, providing expert-led lessons in
          theory, composition, and instrument mastery. Unlock your musical
          potential with interactive modules, personalized feedback, and a
          supportive learning community. Elevate your skills with our engaging
          curriculum.
        </p>
        <div className=" mt-4">
          <Link href={"/courses"}>
            <Button borderRadius="1.75rem" className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800">Explore Courses</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
