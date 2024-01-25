"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";

import { PortalProps } from "./types";

export const Portal: React.FC<PortalProps> = ({ children, onModalClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Escape") onModalClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onModalClose]);

  const handleBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      onModalClose();
    }
  };

  return createPortal(
    <div
      onClick={handleBackdrop}
      className="fixed bottom-0 left-0 right-0 top-0 z-20 flex items-center justify-center bg-color-modal-backdrop"
    >
      {children}
    </div>,
    document.getElementById("modal")!,
  );
};
