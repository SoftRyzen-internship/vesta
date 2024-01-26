export interface HeroTitleType {
  title: string;
}

export const HeroTitle: React.FC<HeroTitleType> = ({ title }) => {
  return (
    <h1 className="text-color-text-primary text-[28px] font-medium leading-[1.35] mb-8 w-80 md:text-[48px] md:w-[656px] xl:text-[52px]">
      {title}
    </h1>
  );
};
