import { Search, FileText, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    icon: <Search size={40} />,
    title: "Search Jobs",
    description:
      "Browse thousands of verified jobs from top companies across different industries.",
  },
  {
    id: 2,
    icon: <FileText size={40} />,
    title: "Apply Easily",
    description:
      "Submit your application with a single click and track your application status.",
  },
  {
    id: 3,
    icon: <Briefcase size={40} />,
    title: "Get Hired",
    description:
      "Connect with recruiters and land your dream job faster than ever.",
  },
];

function HowItWorks() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">
            Process
          </span>

          <h2 className="text-5xl font-bold mt-6">
            How JobSphere Works
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Finding your dream job is simple. Follow these three easy steps.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl shadow-lg p-10 text-center"
            >
              <div className="w-20 h-20 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-6">
                {step.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {step.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;