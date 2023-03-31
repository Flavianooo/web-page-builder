import style from "./form.module.scss";

export default function Form({ title = "", children, submitChanges }) {
  return (
    <form onSubmit={submitChanges} className="">
      <div className="flex flex-col items-center justify-center w-full">
        <h2 className="text-2xl font-bold text-center text-gray-900">
          {title}
        </h2>
        <div className="flex flex-col w-full">
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
