import { motion } from "framer-motion";

function ContactHero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl lg:text-6xl font-bold"
        >
          Contact Us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl mt-6 text-blue-100 max-w-3xl mx-auto"
        >
          Have questions, feedback, or need support? We'd love to hear from you.
        </motion.p>

      </div>
    </section>
  );
}

export default ContactHero;