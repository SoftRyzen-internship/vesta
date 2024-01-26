"use client";

import { useState } from "react";

import CopyIcon from "~/icons/copy.svg";

import data from "@/data/common.json";

import { PaymentDetailProps } from "./types";

export const PaymentDetail: React.FC<PaymentDetailProps> = ({
  label,
  value,
  valueClassName = "",
}) => {
  const [copied, setCopied] = useState(false);

  const { copyBtnLabel } = data.ui;

  const handleCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(value);

    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="flex gap-8 items-center">
      <div className="flex flex-col gap-1">
        <p className="text-color-modal-desc text-[12px] font-light leading-[1.5]">
          {label}
        </p>

        <p
          className={`text-color-modal-text text-[14px] md:text-[16px] font-light leading-[1.5] inline-flex ${valueClassName}`}
        >
          {value}
        </p>
      </div>

      <button
        onClick={handleCopy}
        type="button"
        className={`ml-auto hover:text-color-accent-hover focus-visible:text-color-accent-hover text-[12px] font-medium leading-[1.5] flex items-center gap-1 ${copied ? "text-color-accent-extra" : "text-color-accent-main"}`}
      >
        <CopyIcon className="w-5 h-5" />
        {copied ? copyBtnLabel.active : copyBtnLabel.default}
      </button>
    </div>
  );
};
