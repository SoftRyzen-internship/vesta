import Link from "next/link";

import hero from "@/data/hero-section.json";

export interface LogoType {
  className?: string;
  onClick?: () => void;
}

export const Logo: React.FC<LogoType> = ({ className, onClick }) => {
  const { logo } = hero;
  return (
    <Link
      href="/"
      className={`${className} inline-block`}
      aria-label={logo}
      onClick={onClick}
    >
      Vesta
      {/* <Image
        src="/images/logo.webp"
        width={236}
        height={36}
        alt={logo.label}
        priority
        className={imageClassName}
      /> */}
    </Link>
  );
};
