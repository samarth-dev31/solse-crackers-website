import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-black">

      {/* Background glow */}
      <div className="absolute h-96 w-96 rounded-full bg-yellow-400/10 blur-[140px]" />

      {/* Floating gold sparkles */}
      {[...Array(18)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-2 w-2 rounded-full bg-yellow-400"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.5, 1.8, 0.5],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 2 + Math.random(),
            repeat: Infinity,
            delay: Math.random(),
          }}
        />
      ))}

      {/* Logo */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-black tracking-wider text-yellow-400 drop-shadow-[0_0_20px_rgba(250,204,21,0.8)]"
      >
        Solse Crackers
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-3 text-gray-400"
      >
        Premium Fireworks Experience
      </motion.p>

      {/* Loading Bar */}
      <div className="relative mt-10 h-3 w-64 overflow-hidden rounded-full bg-gray-800">

        <motion.div
          className="h-full rounded-full bg-yellow-400"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2.5 }}
        />

        {/* Moving gold sparkle */}
        <motion.div
          className="absolute top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-yellow-300 blur-sm"
          initial={{ left: "-5%" }}
          animate={{ left: "100%" }}
          transition={{ duration: 2.0 }}
        />
      </div>
    </div>
  );
}