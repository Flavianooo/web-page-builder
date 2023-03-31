import style from "./formInput.module.scss";

export default function FormInput({
  label,
  type,
  placeholder = "",
  value,
  onChange,
  min,
  max,
}) {
  return (
    <label className="flex flex-col items-start justify-start lg:max-w-screen-sm max-w-sm mb-4">
      <span className="text-sm font-bold text-gray-900">{label}</span>
      <input
        min={min}
        max={max}
        className="w-full h-10 px-3 py-2 text-base text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}
