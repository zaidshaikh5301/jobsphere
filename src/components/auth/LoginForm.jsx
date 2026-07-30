import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import AuthInput from "./AuthInput";
import AuthButton from "./AuthButton";
import RoleSelector from "./RoleSelector";

function LoginForm() {
  const [role, setRole] = useState("jobseeker");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="space-y-5">

      <RoleSelector
        role={role}
        setRole={setRole}
      />

      <AuthInput
        label="Email Address"
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
            placeholder="Enter password"
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

      <div className="flex justify-between items-center text-sm">

        <label className="flex items-center gap-2">

          <input type="checkbox" />

          Remember Me

        </label>

        <button
          type="button"
          className="text-blue-600 hover:underline"
        >
          Forgot Password?
        </button>

      </div>

      <AuthButton>

        Login

      </AuthButton>

    </form>
  );
}

export default LoginForm;