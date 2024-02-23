"use client";

import Link from "next/link";
import feturedCourses from "@/data/music_coures.json";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}
function Featured() {
  const getCourses = feturedCourses.courses.filter(
    (course) => course.isFeatured
  );
  return (
    <div className=" py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            Featured Course
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn With the best
          </p>
        </div>
      </div>
      <div className=" mt-10 mx-8">
        <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8  justify-center">
          {getCourses.map((item) => (
            <div key={item.id} className=" flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <img src={item.image} className=" p-4 rounded-lg shadow-md" />
                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200 text-center">
                  {item.title}
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow py-4 px-4 text-center">
                  {item.description}
                </p>
                <Link
                  href={`/courses/${item.slug}`}
                  className=" text-center p-4"
                >
                  Learn More
                </Link>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className=" mt-20 text-center">
        <Link
          href={"/courses"}
          className="px-4 py-2 rounded border bg-gradient-to-r from-orange-700 to-red-600"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}

export default Featured;
