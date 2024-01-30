"use client";
import { Fragment } from "react";
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
  const { closeBtnAriaLabel } = data.ui;

  return (
    <>
      {/* Use the `Transition` component at the root level */}
      <Transition show={isOpen} as={Fragment}>
        <Dialog onClose={onClose} className="relative z-50">
          {/* The backdrop, rendered as a fixed sibling to the panel container */}
          <div
            className="fixed inset-0 bg-color-modal-backdrop"
            aria-hidden="true"
          />
          {/* Full-screen scrollable container */}
          <div className="fixed inset-0 w-screen overflow-y-auto">
            {/* Container to center the panel */}
            <div className="flex min-h-full md:items-center justify-center md:p-4">
              {/* The actual dialog panel with personal transition  */}
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className={`mx-auto overflow-y-scroll  bg-color-modal-background relative py-12 px-5 md:px-14 ${className}`}
                >
                  <button
                    type="button"
                    onClick={onClose}
                    aria-label={closeBtnAriaLabel}
                    className="absolute z-50 top-4 right-4 text-color-modal-stroke hover:text-color-modal-stroke/75 focus-visible:text-color-modal-stroke/75 transition-all"
                  >
                    <CloseIcon className="w-6 h-6" />
                  </button>

                  <div>
                    {title && (
                      <Dialog.Title className="mb-6 md:mb-8 text-color-modal-heading text-[22px] md:text-[28px] font-medium leading-[1.4] xl:text-center">
                        {title}
                      </Dialog.Title>
                    )}
                    {children}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
