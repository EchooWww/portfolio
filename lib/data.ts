import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
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
      "Managed e-commerce operations, including transactions, inquiries, and issue resolution. Collaborated cross-functionally to optimize user experience ",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2020",
  },
  {
    title: "Social Media Specialist",
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
  "Node.js",
  "Tailwind",
  "MongoDB",
  "Firebase",
  "Express",
  "Python",
  "Prisma",
  "Web API",
  "Git & GitHub",
] as const;
