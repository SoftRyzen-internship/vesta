"use client";

import { useState } from "react";

import { Modal } from "@/components/ui/Modal";
import { PaymentDetailList } from "@/components/base/PaymentDetailList";

import data from "@/data/common.json";

export const TestClientComponent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { heading } = data.paymentView;

  return (
    <>
      <button onClick={() => setIsOpen(true)} type="button">
        Click
      </button>

      {isOpen && (
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title={heading}
          className=" md:w-[580px] xl:w-[694px]"
        >
          <PaymentDetailList />
        </Modal>
      )}
    </>
  );
};
