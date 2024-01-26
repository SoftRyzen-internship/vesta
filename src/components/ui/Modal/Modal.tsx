"use client";

import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

import CloseIcon from "~/icons/cross.svg";

import data from "@/data/common.json";

import { ModalProps } from "./types";

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
  className = "",
}) => {
  const [modalState, setModalState] = useState<"open" | "close" | "progress">(
    "progress",
  );

  const { closeBtnAriaLabel } = data.ui;

  const handleClose = () => {
    setModalState("close");
  };

  useEffect(() => {
    // This timeout helps to get transition after component did mount

    if (modalState !== "progress") return;

    const timeout = setTimeout(() => setModalState("open"), 0);

    return () => clearTimeout(timeout);
  }, [modalState]);

  useEffect(() => {
    // This timeout helps to get transition before component will unmount

    if (modalState !== "close") return;

    const timeout = setTimeout(onClose, 600);

    return () => clearTimeout(timeout);
  }, [modalState, onClose]);

  return (
    <>
      {/* Use the `Transition` component at the root level */}
      <Transition show={modalState === "open"}>
        <Dialog open={isOpen} onClose={handleClose} className="relative z-50">
          {/* The backdrop, rendered as a fixed sibling to the panel container */}

          <div
            className="fixed inset-0 bg-color-modal-backdrop"
            aria-hidden="true"
          />

          {/* Full-screen scrollable container */}
          <div className="fixed inset-0 w-screen overflow-y-auto">
            {/* Container to center the panel */}
            <div className="flex min-h-full items-center justify-center p-4">
              {/* The actual dialog panel with personal transition  */}
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-500"
                enterFrom="opacity-0 scale-75"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-300"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-75"
              >
                <Dialog.Panel
                  className={`mx-auto rounded-2xl bg-color-modal-background relative py-12 px-5 md:px-14 ${className}`}
                >
                  <button
                    type="button"
                    onClick={handleClose}
                    aria-label={closeBtnAriaLabel}
                    className="absolute top-4 right-4 text-color-modal-stroke hover:text-color-modal-stroke/75 focus-visible:text-color-modal-stroke/75 transition-all"
                  >
                    <CloseIcon className="w-6 h-6" />
                  </button>

                  {title && (
                    <Dialog.Title className="mb-6 md:mb-8 text-color-modal-heading text-[22px] md:text-[28px] font-medium leading-[1.4]">
                      {title}
                    </Dialog.Title>
                  )}

                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
