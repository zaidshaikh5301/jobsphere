import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import { registerUser } from "../../services/authService";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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

      await registerUser(formData);

      alert("Registration Successful!");

      navigate("/auth");
    } catch (err) {
      setError(
        err.response?.data?.message || "Registration Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <section className="bg-gray-100 min-h-screen flex justify-center items-center">

        <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">

          <h1 className="text-3xl font-bold text-center mb-6">
            Register
          </h1>

          {error && (
            <p className="bg-red-100 text-red-600 p-3 rounded mb-4">
              {error}
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
            />

            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
            >
              <option value="user">Job Seeker</option>
              <option value="recruiter">Recruiter</option>
            </select>

            <button
              className="bg-blue-600 hover:bg-blue-700 text-white w-full py-3 rounded-lg"
              disabled={loading}
            >
              {loading ? "Registering..." : "Register"}
            </button>

          </form>

          <p className="text-center mt-5">
            Already have an account?{" "}
            <Link
              to="/auth"
              className="text-blue-600 font-semibold"
            >
              Login
            </Link>
          </p>

        </div>

      </section>
    </>
  );
}

export default Register;