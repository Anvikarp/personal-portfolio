import React from "react";
import { BsArrowUpRight } from "react-icons/bs"; // Importing upward arrow icon

export default function Footer() {
  return (
    <footer
      className="px-4 text-center relative"
      style={{
        backgroundImage: 'url("https://images.alphacoders.com/866/866051.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '30vh', // Adjust the height as needed
        backgroundAttachment: 'fixed', // Optional: keeps the background fixed
      }}
    >
      <div
        className="absolute bottom-0 w-full text-white text-xs flex justify-center gap-4 items-center mb-2"
      >
        <small>© {new Date().getFullYear()} Anvika. All rights reserved.</small>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline flex items-center gap-1"
        >
          LinkedIn <BsArrowUpRight />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline flex items-center gap-1"
        >
          GitHub <BsArrowUpRight />
        </a>
      </div>
    </footer>
  );
}
