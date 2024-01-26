"use client";

import { useState } from "react";

import { Modal } from "@/components/ui/Modal";
import { Portal } from "@/components/ui/Portal";

export const TestClientComponent: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)} type="button">
        Click
      </button>

      {showModal && (
        <Portal onModalClose={() => setShowModal(false)}>
          <Modal onModalClose={() => setShowModal(false)} />
        </Portal>
      )}
    </>
  );
};
