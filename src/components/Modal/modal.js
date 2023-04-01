import { useEffect } from "react";
import style from "./modal.module.scss";
import clsx from "clsx";
import ModalDisableButton from "./ModalDisableButton/modalDisableButton";

export default function Modal({ modalId, children }) {
  return (
    <div
      id={modalId}
      aria-hidden="true"
      className={clsx(
        style.modalHeight,
        "rounded-md border border-zinc-900 modal md:max-w-lg lg:max-w-xxl lg:max-w-screen-md lg: max-w-sm fixed lg:bottom-5 lg:left-5 lg:top-auto top-60 left-0 right-0 z-50 hidden overflow-x-hidden overflow-y-scroll"
      )}
    >
      <ModalDisableButton />
      <div className="relative w-full  max-w-2xl md:h-auto">
        <div className="pl-7 pt-6 relative bg-white ">{children}</div>
      </div>
    </div>
  );
}
