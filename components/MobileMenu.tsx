"use client";

import Image from "next/image";
import { useState } from "react";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      {!isMenuOpen ? (
        <Image
          src="/menu.svg"
          width={32}
          height={32}
          alt="menu"
          className="inline-block cursor-pointer z-50"
          onClick={() => setIsMenuOpen(true)}
        />
      ) : (
        <Image
          src="/close.svg"
          width={32}
          height={32}
          alt="close"
          className="inline-block cursor-pointer filter invert-0 dark:invert z-50"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <div
        className={`w-[280px] bg-gradient-to-br from-white/95 via-white/90 to-green-50/20 backdrop-blur-lg border-l border-white/20 shadow-2xl fixed top-0 bottom-0 transition-all duration-500 ease-in-out z-10 ${
          isMenuOpen ? "right-0" : "-right-full"
        } flex flex-col p-6 justify-center overflow-hidden`}
      >
        <Image
          src="/hilink-logo.svg"
          width={100}
          height={50}
          alt="logo"
          className=" fixed top-20 self-center"
        />
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            onClick={() => setIsMenuOpen(false)}
            className="group relative flex items-center px-4 py-4 my-2 rounded-xl regular-12 font-medium text-gray-90 hover:text-green-50 hover:bg-green-50/10 transition-all duration-300 ease-out transform hover:translate-x-2 border border-transparent hover:border-green-50/20"
          >
            <div className="w-2 h-2 rounded-full bg-gray-30 group-hover:bg-green-50 mr-3 transition-colors duration-300" />
            {link.label}
            <svg
              className="w-4 h-4 ml-auto text-gray-30 group-hover:text-green-50 transform group-hover:translate-x-1 transition-all duration-300 opacity-0 group-hover:opacity-100"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-green-50/0 to-green-50/5 rounded-xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left -z-10" />
          </Link>
        ))}
      </div>
    </>
  );
}
