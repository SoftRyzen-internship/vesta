"use client";

import { Logo } from "@/components/ui/Logo";
import { HeroTitle } from "@/components/ui/HeroTitle";
import { HeroButton } from "@/components/ui/HeroButton/HeroButton";

import hero from "@/data/hero-section.json";

import css from "./Hero.module.css";

export const Hero: React.FC = () => {
  const { title, subtitle, info, mail } = hero;
  return (
    <section
      className={`${css.heroBg} pt-[25px] pb-8 md:pt-10 md:pb-[67px] m-auto xl:pb-[65px] xl:bg-[length:1440px_800px] bg-white`}
    >
      <div className="container">
        <Logo className="mb-[112px] md:mb-[368px] xl:mb-[73px]" />

        <p className="text-color-text-primary text-[14px] font-normal leading-[1.35] tracking-[3.36px] uppercase opacity-60 mb-[13px] md:text-[18px] md:tracking-[4.32px] md:mb-2 xl:mb-4">
          {subtitle}
        </p>

        <HeroTitle title={title} className="mb-8 md:mb-12" />

        <HeroButton />

        <p className="text-color-text-primary text-sm font-light opacity-80 w-80 md:text-base md:w-[592px] xl:text-lg">
          {info}

          <a href={`mailto:${mail}`} className="underline underline-offset-2">
            {mail}
          </a>
        </p>
      </div>
    </section>
  );
};
