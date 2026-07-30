function AuthInput({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
}) {
  return (

    <div>

      <label className="block mb-2 font-medium text-slate-700">

        {label}

      </label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
      />

    </div>

  );
}

export default AuthInput;