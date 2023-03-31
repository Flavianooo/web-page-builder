import style from "./form.module.scss";

export default function Form({ title = "", children, submitChanges }) {
  return (
    <form
      onSubmit={submitChanges}
      className="relative flex flex-col w-full p-4 mx-auto my-0 bg-white border border-gray-300 rounded-lg shadow-lg md:max-w-2xl md:p-8"
    >
      <div className="flex flex-col items-center justify-center w-full">
        <h2 className="text-2xl font-bold text-center text-gray-900">
          {title}
        </h2>
        <div className="flex flex-col items-center justify-center w-full">
          {children}
          <small className="mt-3 text-xs">
            You don't need to save anything, this builder saves data real time!
            Everything you do is saved and live.{" "}
          </small>
        </div>
      </div>
    </form>
  );
}
