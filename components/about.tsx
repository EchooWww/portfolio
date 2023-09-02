"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "../lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 1);
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-left leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Echo.about()</SectionHeading>
      <p className="mb-3">
        After several years for working in marketing and social media, I decided
        to pursue my passion for programming. I enrolled in BCIT and learned{" "}
        <span className="font-medium">
          programming languages and web development
        </span>
        . <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I love the feeling of finally figuring out a
        solution to a problem. I am always looking to learn new technologies. I
        am currently looking for a{" "}
        <span className="font-medium">co-op position</span> as a{" "}
        <span className="underline">software developer</span>.
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy
        watching movies and playing with my 🐱cats. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">📷photography and video-editing</span>.
        I&apos;m also learning how to play the 🎸guitar.
      </p>
    </motion.section>
  );
}
