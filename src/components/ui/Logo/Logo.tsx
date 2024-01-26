import Link from "next/link";

import { LogoType } from "./types";

import hero from "@/data/hero-section.json";
import Image from "next/image";

export const Logo: React.FC<LogoType> = ({ className, onClick }) => {
  const { logo } = hero;
  return (
    <Link
      href="/"
      className={`${className} inline-block`}
      aria-label={logo}
      onClick={onClick}
    >
      <Image
        src="/images/logo.webp"
        width={182.75}
        height={63}
        alt={logo}
        priority
      />
    </Link>
  );
};
