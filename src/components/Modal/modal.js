import { useEffect } from "react";
import style from "./modal.module.scss";

export default function Modal({ modalId, children }) {
  return (
    <div
      id={modalId}
      aria-hidden="true"
      className="modal bg-white border border-gray-300 rounded-lg shadow-lg p-4 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 hidden"
    >
      {children}
    </div>
  );
}
