"use client";

import { useState } from "react";

import { Modal } from "@/components/ui/Modal";

export const TestClientComponent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)} type="button">
        Click
      </button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="My modal title"
      >
        <>
          <div className="min-w-[280px]">My modal inner view...</div>
        </>
      </Modal>
    </>
  );
};
