"use client";
import React from "react";

const Modal = ({ isOpen, toggleModal, children }) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 flex justify-center items-center w-full h-full backdrop-blur-sm"
          aria-labelledby="popup-modal"
          aria-hidden={!isOpen}
        >
          <div className="relative h-full md:h-fit max-w-[100vw] md:max-w-5xl">
            <div className="relative rounded-3xl h-full bg-white md:max-h-[75vh] overflow-y-scroll pt-20 md:pt-0">
              <button
                onClick={toggleModal}
                type="button"
                className="flex md:hidden text-gray-600 bg-transparent p-2 rounded-lg text-sm justify-center items-center"
              >
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m15 19-7-7 7-7"
                  />
                </svg>
                Back
                <span className="sr-only">Close modal</span>
              </button>
              <button
                onClick={toggleModal}
                type="button"
                className="absolute hidden md:flex z-20 top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 justify-center items-center"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
