"use client";

import { ButtonType } from "./types";

export const Button: React.FC<ButtonType> = ({
  label,
  type,
  className,
  onClick,
}) => {
  return (
    <button
      className={`bg-color-accent-main text-color-text-primary py-6 px-10 rounded-3xl text-[18px] font-bold leading-[1.35] uppercase tracking-[1.26px] hover:bg-color-accent-hover focus:bg-color-accent-hover md:text-[20px] md:tracking-[1.4px] ${className}`}
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
