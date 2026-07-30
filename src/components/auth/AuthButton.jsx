function AuthButton({
  children,
  type = "submit",
}) {
  return (

    <button
      type={type}
      className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-xl font-semibold"
    >

      {children}

    </button>

  );
}

export default AuthButton;