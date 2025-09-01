import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <nav className="z-50 flexBetween max-container padding-container relative py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <ul className="hidden lg:flex gap-12 h-full">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter pb-1.5 cursor-pointer transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="hidden lg:flexCenter">
        <Button
          type="button"
          variant="btn_dark_green"
          title="Log In"
          icon="/user.svg"
        />
      </div>

      <div className="flexCenter lg:hidden">
        <MobileMenu />
      </div>
    </nav>
  );
}
