function Card({
    children,
    className = "",
    hover = true,
}) {
    return (
        <div
            className={`
        bg-white
        rounded-3xl
        border
        border-slate-200
        shadow-md
        overflow-hidden
        transition-all
        duration-300
        ${hover
                    ? "hover:-translate-y-2 hover:shadow-2xl hover:border-blue-200"
                    : ""
                }
        ${className}
      `}
        >
            {children}
        </div>
    );
}

export default Card;