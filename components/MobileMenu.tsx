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
        className={`w-[200px] bg-gradient-to-tl from-white/10 to-[#3d8b42] fixed top-0 bottom-0 transition-all duration-300 ease-in-out ${
          isMenuOpen ? "right-0" : "-right-full"
        } flex flex-col p-5 justify-center`}
      >
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            onClick={() => setIsMenuOpen(false)}
            className="flex justify-start items-center my-8 reguler-12 font-medium hover:font-bold text-black-200"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
}
