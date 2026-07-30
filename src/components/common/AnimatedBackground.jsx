import { motion } from "framer-motion";

function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">

      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-80 h-80 bg-blue-400/20 rounded-full blur-3xl top-20 -left-20"
      />

      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl top-40 right-0"
      />

      <motion.div
        animate={{
          y: [0, -80, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl bottom-10 left-1/2"
      />

    </div>
  );
}

export default AnimatedBackground;