import { Search } from "lucide-react";

function Input({
  type = "text",
  placeholder,
  value,
  onChange,
  icon = false,
  className = "",
  ...props
}) {
  return (
    <div className="relative w-full">
      {icon && (
        <Search
          size={20}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />
      )}

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`
          w-full
          ${icon ? "pl-12" : "pl-4"}
          pr-4
          py-3.5
          rounded-xl
          border
          border-slate-300
          bg-white
          text-slate-900
          placeholder:text-slate-400
          shadow-sm
          outline-none
          transition-all
          duration-300
          focus:border-blue-600
          focus:ring-4
          focus:ring-blue-100
          hover:border-slate-400
          ${className}
        `}
        {...props}
      />
    </div>
  );
}

export default Input;