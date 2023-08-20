import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "British Columbia Institute of Technology",
    location: "Burnaby, BC",
    description: "Stuying passionately with the goal of becoming a programmer.",
    icon: React.createElement(LuGraduationCap),
    date: "2023-",
  },
  {
    title: "the University of Hong Kong",
    location: "Hong Kong",
    description: "Graduated with a master's degree in psychology.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "E-commerce Specialist",
    location: "Shanghai, China",
    description:
      "Managed e-commerce operations, including transactions, inquiries, and issue resolution. Collaborated cross-functionally to optimize user experience. ",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2020",
  },
  {
    title: "Social Media Specialist",
    location: "Shanghai, China",
    description:
      "Implemented social media strategies, created engaging content, and managed channels to attract more followers.",
    icon: React.createElement(FaReact),
    date: "2017 - 2019",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "DriveThruDiet",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "EcoHabit",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "Java",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Firebase",
  "Express",
  "Python",
] as const;
