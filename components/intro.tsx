"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  useEffect(() => {
    const text = "Hi, I'm Anvika"; // Text for the typewriter effect
    let i = 0;

    function type() {
      if (i < text.length) {
        document.getElementById("typewriter")!.textContent += text.charAt(i);
        i++;
        setTimeout(type, 150); // Adjust typing speed here
      }
    }

    type();
  }, []);

  return (
    <section
      ref={ref}
      id="home"
      className="mt-40 mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex justify-center items-center">
        <motion.h1
          className="text-6xl font-bold text-white relative drop-shadow-lg"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span id="typewriter" className="block"></span>
        </motion.h1>
      </div>

      {/* Spacer for adding more space */}
      <div className="h-6"></div> {/* Adjust the height as needed */}

      <motion.p
        className="text-lg sm:text-xl font-medium text-white text-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Aspiring <span>Software Engineer</span>
      </motion.p>
    </section>
  );
}
