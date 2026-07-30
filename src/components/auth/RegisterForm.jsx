import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import AuthInput from "./AuthInput";
import AuthButton from "./AuthButton";
import RoleSelector from "./RoleSelector";

function RegisterForm() {

  const [role, setRole] = useState("jobseeker");

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (

    <form className="space-y-5">

      <RoleSelector
        role={role}
        setRole={setRole}
      />

      <AuthInput
        label="Full Name"
        placeholder="Enter your full name"
      />

      <AuthInput
        label="Email"
        type="email"
        placeholder="Enter your email"
      />

      <div>

        <label className="block mb-2 font-medium text-slate-700">

          Password

        </label>

        <div className="relative">

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Create password"
            className="w-full border border-slate-300 rounded-xl px-4 py-3 pr-12 focus:ring-2 focus:ring-blue-600 outline-none"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-3.5 text-gray-500"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>

        </div>

      </div>

      <div>

        <label className="block mb-2 font-medium text-slate-700">

          Confirm Password

        </label>

        <div className="relative">

          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm password"
            className="w-full border border-slate-300 rounded-xl px-4 py-3 pr-12 focus:ring-2 focus:ring-blue-600 outline-none"
          />

          <button
            type="button"
            onClick={() =>
              setShowConfirmPassword(!showConfirmPassword)
            }
            className="absolute right-4 top-3.5 text-gray-500"
          >
            {showConfirmPassword ? (
              <EyeOff size={20} />
            ) : (
              <Eye size={20} />
            )}
          </button>

        </div>

      </div>

      <AuthButton>

        Create Account

      </AuthButton>

    </form>

  );
}

export default RegisterForm;