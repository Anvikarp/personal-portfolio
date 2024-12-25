import React from "react";
import researchImg from "@/public/Research.png";
import wordleImg from "@/public/Wordle.png";
import websiteImg from "@/public/Website.png";

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
    name: "Contact",
    hash: "#contact",
  },
] as const;


export const projectsData = [
  {
    title: "Stanford SHTEM Research Paper",
    description:
      "A team an I analyzed OPTN data to understand and help kidney transplant patients have faster and more optimal transplants.",
    tags: ["Matplotlib", "seaborn", "NumPy", "pandas", "scikit-learn"],
    imageUrl: researchImg,
  },
  {
    title: "Stanford and Oregon State University DYEL",
    description:
      "I used Tableau to analyze my household's PG&E electricity data and found ways to reduce our electricity usage.",
    tags: ["Tableau"],
    imageUrl: websiteImg,
  },
  {
    title: "Wordle",
    description:
      "Console based Wordle game using ANSI color feedback for correct, mispositioned, and incorrect guesses",
      tags: ["Java", "Object-Oriented Programming", "Algorithm Design", "ANSI Escape Codes"],
      imageUrl: wordleImg,
  }, 
] as const;

export const skillsData = [
  "JavaScript",
  "React",
  "Next.js",
  "Framer Motion",
  "Git",
  "TypeScript",
  "Tailwind",
  "Python",
  "Java",
  "C++",
  "Java", 
  "SQL",
  "HTML",
  "CSS",
] as const;
