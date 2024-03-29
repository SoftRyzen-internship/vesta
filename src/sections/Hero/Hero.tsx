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
      className={`${css.heroBg} h-[640px] md:h-[1024px] xl:h-[800px] pt-[25px] pb-8 md:pt-10 md:pb-[67px] m-auto xl:pb-[65px] xl:bg-[length:1440px_800px]`}
    >
      <div className="container flex flex-col h-full">
        <Logo className="mb-[113px] md:mb-[371px] xl:mb-[81px]" />

        <p className="text-color-text-primary text-[14px] font-normal leading-[1.35] tracking-[3.36px] uppercase opacity-60 mb-[13px] md:text-[18px] md:tracking-[4.32px] md:mb-2 xl:mb-4">
          {subtitle}
        </p>

        <HeroTitle title={title} className="mb-8 md:mb-12" />

        <HeroButton />

        <p className="text-color-text-primary text-sm font-light opacity-80 w-80 md:text-base md:w-[592px] xl:text-lg mt-auto">
          {info}

          <a
            target="_blank"
            rel="nofollow noopener noreferrer"
            href={`mailto:${mail}`}
            className={`${css.email}`}
          >
            {mail}
          </a>
        </p>
      </div>
    </section>
  );
};
