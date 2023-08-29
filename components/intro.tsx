"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  BsArrowRight,
  BsFillPenFill,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";
import { HiEye } from "react-icons/hi";
import { useActiveSectionContext } from "../context/active-section-context";
import { useSectionInView } from "../lib/hooks";
import { TypeAnimation } from "react-type-animation";
import { Unna } from "next/font/google";
const font = Unna({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export default function Intro() {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { ref } = useSectionInView("Home");

  return (
    <section
      ref={ref}
      className="mb-2 max-w-[50rem] md:text-right text-center sm:mb-0 scroll-mt-[100rem] sm:mt-0 mt-8"
      id="home"
    >
      <div className="flex flex-col items-center justify-center sm:mb-10 md:flex-row">
        <div className="w-full">
          <motion.h1
            className="mb-10 mt-4 px-10 text-5xl font-medium !leading-[1.5] md:text-6xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className={`${font.className} font-semibold`}>Echo Wang</span>
            <div className="text-base md:text-lg font-normal mt-4">
              <TypeAnimation
                cursor={true}
                sequence={[
                  "Life-long learner, problem solver, and team player",
                ]}
              />
            </div>
          </motion.h1>
        </div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/portrait.jpeg"
              alt="Echo portrait"
              width="150"
              height="150"
              quality="95"
              priority={true}
              className="md:h-32 md:w-32 rounded-full object-cover border-[0.2rem] border-white shadow-2xl mb-10 sm:mb-0 w-28 h-28"
            />
          </motion.div>
          <motion.span
            className="absolute sm:bottom-0 right-1 text-3xl bottom-10"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            ✨
          </motion.span>
        </div>
      </div>

      <motion.div
        className="flex flex-col md:flex-row items-center justify-center gap-2 px-4 text-md font-medium md:text-lg"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          className="group bg-white  px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/resume.pdf"
          target="_blank"
        >
          Open My Resume
          <HiEye className="opacity-60 group-hover:translate-x-1 transition" />
        </a>
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <div className="flex flex-row gap-1 mt-2 md:mt-0">
          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://www.linkedin.com/in/echo-wang-946662265/"
            target="_blank"
          >
            <BsLinkedin />
          </a>
          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.15rem] focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://github.com/EchooWww"
            target="_blank"
          >
            <BsGithub />
          </a>
          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.15rem] focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://echoowww.github.io/blog/"
            target="_blank"
          >
            <BsFillPenFill />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
