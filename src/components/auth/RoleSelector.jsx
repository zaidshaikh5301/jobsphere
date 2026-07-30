function RoleSelector({
  role,
  setRole,
}) {
  return (

    <div className="grid grid-cols-2 gap-3">

      <button
        type="button"
        onClick={() => setRole("jobseeker")}
        className={`rounded-xl py-3 font-semibold transition ${
          role === "jobseeker"
            ? "bg-blue-600 text-white"
            : "bg-slate-100"
        }`}
      >

        Job Seeker

      </button>

      <button
        type="button"
        onClick={() => setRole("recruiter")}
        className={`rounded-xl py-3 font-semibold transition ${
          role === "recruiter"
            ? "bg-blue-600 text-white"
            : "bg-slate-100"
        }`}
      >

        Recruiter

      </button>

    </div>

  );
}

export default RoleSelector;