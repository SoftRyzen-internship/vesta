"use client";

import { Button } from "@/components/ui/Button";
import { HeroTitle } from "@/components/ui/HeroTitle";
import { Logo } from "@/components/ui/Logo";

import hero from "@/data/hero-section.json";

export const Hero: React.FC = () => {
  const { title, subtitle, button, info, mail } = hero;
  return (
    <section className="bg-slate-600 pt-[25px] pb-8 h-screen md:pt-8 md:pb-[67px] xl:pb-[65px]">
      <div className="container">
        <Logo className="mb-[112px]" />
        <p className="text-color-text-primary text-[14px] font-normal leading-[1.35] tracking-[3.36px] uppercase opacity-60 mb-[13px] md:text-[18px] md:tracking-[4.32px]">
          {subtitle}
        </p>
        <HeroTitle title={title} />
        <Button
          label={button}
          type="button"
          className="mb-12"
          onClick={() => {
            console.log("click");
          }}
        />

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
