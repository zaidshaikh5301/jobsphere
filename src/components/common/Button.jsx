import React from "react";

function Button({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  const baseStyle =
    "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-4 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 hover:-translate-y-1 hover:shadow-xl focus:ring-blue-200",

    secondary:
      "bg-slate-900 text-white hover:bg-slate-800 hover:-translate-y-1 hover:shadow-xl focus:ring-slate-300",

    outline:
      "border border-slate-300 bg-white text-slate-800 hover:bg-slate-50 hover:border-blue-600 hover:text-blue-600",

    ghost:
      "text-slate-700 hover:bg-slate-100",

    success:
      "bg-green-600 text-white hover:bg-green-700 hover:-translate-y-1 hover:shadow-xl",

    danger:
      "bg-red-600 text-white hover:bg-red-700 hover:-translate-y-1 hover:shadow-xl",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",

    md: "px-6 py-3 text-base",

    lg: "px-8 py-4 text-lg",

    xl: "px-10 py-5 text-xl",
  };

  return (
    <button
      type={type}
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;