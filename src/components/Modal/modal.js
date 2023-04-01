import { useEffect } from "react";
import style from "./modal.module.scss";
import clsx from "clsx";

export default function Modal({ modalId, children }) {
  return (
    <div
      id={modalId}
      aria-hidden="true"
      className={clsx(
        style.modalHeight,
        "modal border-4 border-solid border-grey-700 max-w-sm lg:max-w-screen-md max-w-sm fixed lg:bottom-0 lg:left-0 lg:top-auto top-60 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto"
      )}
    >
      <div className="relative w-full  max-w-2xl md:h-auto">
        <div className="p-4 relative bg-white rounded-lg shadow">
          {children}
        </div>
      </div>
    </div>
  );
}
