import { motion } from "framer-motion";

function TrustedCompanies() {
  const companies = [
    "Google",
    "Microsoft",
    "Amazon",
    "Adobe",
    "Netflix",
    "Samsung",
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      viewport={{ once: true }}
      className="mt-20"
    >
      <p className="text-center uppercase tracking-widest text-gray-500 font-semibold">
        Trusted By Top Companies
      </p>

      <div className="flex flex-wrap justify-center gap-10 mt-10">

        {companies.map((company) => (
          <div
            key={company}
            className="bg-white rounded-2xl px-8 py-5 shadow hover:shadow-xl hover:-translate-y-2 transition-all duration-300 font-semibold text-lg"
          >
            {company}
          </div>
        ))}

      </div>
    </motion.div>
  );
}

export default TrustedCompanies;