import { motion } from "framer-motion";

function HeroStats() {
  const stats = [
    { number: 10000, suffix: "+", label: "Jobs Posted" },
    { number: 500, suffix: "+", label: "Companies" },
    { number: 25000, suffix: "+", label: "Candidates" },
    { number: 95, suffix: "%", label: "Hiring Success" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
    >
      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 text-center shadow-lg border border-white"
        >
          <h2 className="text-4xl font-bold text-blue-600">
            {item.number}
            {item.suffix}
          </h2>

          <p className="mt-2 text-gray-600">{item.label}</p>
        </div>
      ))}
    </motion.div>
  );
}

export default HeroStats;