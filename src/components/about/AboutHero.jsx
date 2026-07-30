import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../common/Button";

function AboutHero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl lg:text-6xl font-bold"
        >
          About JobSphere
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl mt-6 max-w-3xl mx-auto text-blue-100"
        >
          Connecting talented professionals with trusted companies through a
          modern, fast and secure hiring platform.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-10"
        >
          <Link to="/jobs">
            <Button size="lg">
              Explore Jobs
            </Button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

export default AboutHero;