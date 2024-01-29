import { HeroTitleType } from "./types";

export const HeroTitle: React.FC<HeroTitleType> = ({
  title,
  className = "",
}) => {
  return (
    <h1
      className={`text-color-text-primary text-[28px] font-medium leading-[1.35] w-80 md:text-[48px] md:w-[656px] xl:text-[52px] ${className}`}
    >
      {title}
    </h1>
  );
};
