"use client";

import { useState } from "react";

import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { PaymentDetailList } from "@/components/base/PaymentDetailList";

import hero from "@/data/hero-section.json";
import common from "@/data/common.json";

export const HeroButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { button: label } = hero;
  const { heading } = common.paymentView;

  return (
    <>
      {/* Mobile version: */}
      <Button
        type="button"
        label={label.short}
        onClick={() => setIsOpen(true)}
        className="mb-16 md:mb-24 xl:mb-[139.5px] md:hidden"
      />

      {/* Tablet & desktop version: */}
      <Button
        type="button"
        label={label.full}
        onClick={() => setIsOpen(true)}
        className="mb-16 md:mb-24 xl:mb-[139.5px] hidden md:inline-block"
      />

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={heading}
        className=" md:w-[580px] xl:w-[694px]"
      >
        <PaymentDetailList />
      </Modal>
    </>
  );
};
