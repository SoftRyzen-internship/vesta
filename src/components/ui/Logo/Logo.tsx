import Link from "next/link";

import { LogoType } from "./types";

import LogotypeIcon from "~/icons/logo.svg";

import hero from "@/data/hero-section.json";

export const Logo: React.FC<LogoType> = ({ className = "", onClick }) => {
  const { logo } = hero;

  return (
    <Link
      href="/"
      className={`${className} inline-block`}
      aria-label={logo}
      onClick={onClick}
    >
      <LogotypeIcon />
    </Link>
  );
};
