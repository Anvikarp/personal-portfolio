"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import Link from "next/link";
import { useActiveSectionContext } from "@/context/active-section-context";
import profileImg from "@/public/profile.png";

export default function About() {
  const { ref } = useSectionInView("About");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <motion.section
      ref={ref}
      className="mt-80 mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <div className="relative">
        <div className="bg-[#d7ddfb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <div className="flex items-center justify-center mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={profileImg}
              alt="Profile picture"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-32 w-32 rounded-full object-cover shadow-xl"
            />
          </motion.div>
        </div>

        {/* About Me Title and Text */}
        <SectionHeading>About me</SectionHeading>
        <p className="mb-3">
          I am currently a sophomore at <span className="font-medium">Santa Clara University</span> majoring in{" "}
          <span className="font-medium">Computer Science</span>. Recently, I have been exploring{" "}
          <span className="font-medium">data analytics, machine learning,</span> and{" "}
          <span className="font-medium">full-stack website development</span>. With the skills I develop 
          throughout my academic career, I aspire toward a career that will allow me to use my creativity 
          and interdisciplinary thinking to solve real-world problems.
        </p>

        <p>
          When I’m not on my computer, I love to crochet/knit, learn new languages, and go on long drives.
        </p>

        {/* Buttons Section Below About Me Text */}
        <div className="flex flex-col items-center justify-center mt-10 sm:flex-row gap-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#contact"
              className="group bg-[#013220] text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
              onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
            >
              Contact me{" "}
              <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
            </Link>

            <a
              className="bg-white p-4 text-[#013220] hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
              href="https://www.linkedin.com/in/anvikarenuprasad/"
              target="_blank"
            >
              <BsLinkedin />
            </a>

            <a
              className="bg-white p-4 text-[#013220] flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
              href="https://github.com/Anvikarp"
              target="_blank"
            >
              <FaGithubSquare />
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
