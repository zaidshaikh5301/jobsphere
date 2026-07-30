import { useState } from "react";

import AuthLayout from "../../components/auth/AuthLayout";
import AuthCard from "../../components/auth/AuthCard";
import LoginForm from "../../components/auth/LoginForm";
import RegisterForm from "../../components/auth/RegisterForm";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <AuthLayout>
      <AuthCard>

        {/* Heading */}

        <div className="mb-8 text-center">

          <h1 className="text-4xl font-bold text-slate-800">
            {isLogin ? "Welcome Back 👋" : "Create Your Account"}
          </h1>

          <p className="text-slate-500 mt-3">
            {isLogin
              ? "Login to continue your journey with JobSphere."
              : "Join thousands of professionals finding their dream jobs."}
          </p>

        </div>

        {/* Toggle */}

        <div className="flex bg-slate-100 rounded-xl p-1 mb-8">

          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-3 rounded-lg font-semibold transition ${
              isLogin
                ? "bg-blue-600 text-white shadow"
                : "text-slate-700"
            }`}
          >
            Login
          </button>

          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-3 rounded-lg font-semibold transition ${
              !isLogin
                ? "bg-blue-600 text-white shadow"
                : "text-slate-700"
            }`}
          >
            Register
          </button>

        </div>

        {/* Forms */}

        {isLogin ? <LoginForm /> : <RegisterForm />}

      </AuthCard>
    </AuthLayout>
  );
}

export default Auth;