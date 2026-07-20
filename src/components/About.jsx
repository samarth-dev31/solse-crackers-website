import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, Truck } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-black py-24"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-yellow-400/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-yellow-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm font-semibold text-yellow-400">
              ABOUT US
            </span>

            <h2 className="mt-6 text-5xl font-black text-white md:text-6xl">
              Lighting Every
              <span className="text-yellow-400"> Celebration</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              Solse Crackers is your trusted destination for premium-quality
              fireworks. We offer a wide range of products for festivals,
              weddings, birthdays, and every special occasion at competitive
              wholesale and retail prices.
            </p>

            <p className="mt-4 text-lg leading-8 text-gray-300">
              Our mission is to deliver high-quality fireworks, reliable
              service, and customer satisfaction while making every celebration
              brighter, safer, and more memorable.
            </p>
          </motion.div>

          {/* Right Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="rounded-3xl border border-yellow-400/20 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:border-yellow-400/50 hover:shadow-[0_0_35px_rgba(250,204,21,0.18)]">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400/10 text-yellow-400">
                <Sparkles size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Premium Fireworks
              </h3>
              <p className="mt-3 text-gray-300 leading-7">
                Carefully selected fireworks with vibrant colours and exciting
                effects for unforgettable celebrations.
              </p>
            </div>

            <div className="rounded-3xl border border-yellow-400/20 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:border-yellow-400/50 hover:shadow-[0_0_35px_rgba(250,204,21,0.18)]">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400/10 text-yellow-400">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Trusted Quality
              </h3>
              <p className="mt-3 text-gray-300 leading-7">
                We focus on dependable products and excellent customer service
                to ensure every order meets your expectations.
              </p>
            </div>

            <div className="rounded-3xl border border-yellow-400/20 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:border-yellow-400/50 hover:shadow-[0_0_35px_rgba(250,204,21,0.18)]">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400/10 text-yellow-400">
                <Truck size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Fast Service
              </h3>
              <p className="mt-3 text-gray-300 leading-7">
                From enquiry to delivery, we aim to provide a smooth, reliable,
                and customer-friendly experience.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}