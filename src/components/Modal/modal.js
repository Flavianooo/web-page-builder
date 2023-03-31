import style from "./modal.module.scss";

export default function Modal({ modalId, children }) {
  return (
    <div
      id={modalId}
      aria-hidden="true"
      className="modal fixed mt-40 top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full"
    >
      {children}
    </div>
  );
}
