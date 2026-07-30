import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import { loginUser } from "../../services/authService";
import { useAuth } from "../../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      const data = await loginUser(formData);

      login(data.user, data.token);

      alert("Login Successful!");

      if (data.user.role === "recruiter") {
        navigate("/dashboard");
      } else {
        navigate("/");
      }

    } catch (err) {
      setError(
        err.response?.data?.message || "Login Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <section className="bg-gray-100 min-h-screen flex justify-center items-center">

        <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md">

          <h1 className="text-3xl font-bold text-center mb-6">
            Login
          </h1>

          {error && (
            <p className="bg-red-100 text-red-600 p-3 rounded mb-4">
              {error}
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full border rounded-lg p-3"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full border rounded-lg p-3"
              value={formData.password}
              onChange={handleChange}
            />

            <button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>

          </form>

          <p className="text-center mt-5">
            Don't have an account?{" "}
            <Link
              to="/auth"
              className="text-blue-600 font-semibold"
            >
              Register
            </Link>
          </p>

        </div>

      </section>
    </>
  );
}

export default Login;