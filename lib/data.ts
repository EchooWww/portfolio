import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaKeyboard, FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import drivethrudietImg from "@/public/drivethrudiet.png";
import ecohabitImg from "@/public/ecohabit.png";
import courseraiImg from "@/public/courserai.png";

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
    title: "Software Engineer Intern - RAZR Marketing",
    location: "Vancouver, BC",
    description: "Worked in automated testing and front-end development teams.",
    icon: React.createElement(FaKeyboard),
    date: "2024",
  },
  {
    title: "British Columbia Institute of Technology",
    location: "Burnaby, BC",
    description: "Stuying passionately with the goal of becoming a programmer.",
    icon: React.createElement(LuGraduationCap),
    date: "2023-Present",
  },
  {
    title: "the University of Hong Kong",
    location: "Hong Kong",
    description: "Graduated with a master's degree in psychology.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "E-commerce Specialist - China Merchants Bank",
    location: "Shanghai, China",
    description:
      "Managed e-commerce operations, including transactions, inquiries, and issue resolution. Collaborated cross-functionally to optimize user experience ",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2020",
  },
  {
    title: "Social Media Specialist - Trip.com Group",
    location: "Shanghai, China",
    description:
      "Implemented social media strategies, created engaging content, and managed channels to attract more followers",
    icon: React.createElement(FaReact),
    date: "2017 - 2019",
  },
] as const;

export const projectsData = [
  {
    title: "Courserai",
    description:
      "A web app that enables users to generate their own courses with help of AI",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Prisma",
      "Tailwind",
      "Shadcn",
      "OpenAI API",
      "YouTube API",
    ],
    imageUrl: courseraiImg,
  },
  {
    title: "DriveThruDiet",
    description:
      "A fast food nutrition calculator that helps users make healthier choices based on their diet goals",
    tags: [
      "Node.js",
      "Express",
      "EJS",
      "MongoDB",
      "OpenAI API",
      "Google Maps API",
    ],
    imageUrl: drivethrudietImg,
  },
  {
    title: "EcoHabit",
    description:
      "A eco-friendly habit tracker that helps users track their daily habits and carbon footprint",
    tags: [
      "Html",
      "css",
      "Bootstrap",
      "Javascript",
      "Firebase",
      "Node.js",
      "Socket.io",
      "OpenAI API",
    ],
    imageUrl: ecohabitImg,
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
  "Angular",
  "Playwright",
  "Node.js",
  "Tailwind CSS",
  "MongoDB",
  "SQL",
  "Express.js",
  "Python",
  "Prisma",
  "Restful API",
  "Git & GitHub",
] as const;
