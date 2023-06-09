export default function ModalDisableButton() {
  const disablePopup = (evt) => {
    evt.preventDefault();
    evt.target.closest(".modal")?.classList.toggle("hidden");
  };

  return (
    <button onClick={disablePopup} className="absolute right-1 top-1">
      <svg className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
        <path d="M14.348 14.849a1.2 1.2 0 01-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 01-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 111.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 011.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 010 1.698z" />
      </svg>
    </button>
  );
}
