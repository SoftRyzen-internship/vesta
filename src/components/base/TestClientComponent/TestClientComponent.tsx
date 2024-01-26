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

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title={heading}>
        <PaymentDetailList />
      </Modal>
    </>
  );
};
