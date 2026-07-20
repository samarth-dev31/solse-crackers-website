import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function OfferBanner() {
  return (
    <section className="relative overflow-hidden bg-black py-24">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-400/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-500/10 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-yellow-400/20 bg-white/5 backdrop-blur-xl p-10 md:p-14 shadow-[0_0_40px_rgba(250,204,21,0.08)] text-center"
        >
          {/* Badge */}
          <span className="inline-flex items-center rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-yellow-400">
            🎆 Festival Special Offer
          </span>

          {/* Heading */}
          <h2 className="mt-6 text-4xl md:text-5xl font-black leading-tight text-white">
            Celebrate Every Occasion
            <br />
            with{" "}
            <span className="text-yellow-400">
              Premium Fireworks
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            Wholesale & Retail Fireworks • Premium Quality • Bulk Orders
            Welcome • Best Prices for Diwali, Weddings, Birthdays and Every
            Celebration.
          </p>

          {/* Features */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <span className="rounded-full border border-yellow-400/20 bg-black/40 px-5 py-2 text-sm text-yellow-300">
              ✨ Premium Quality
            </span>

            <span className="rounded-full border border-yellow-400/20 bg-black/40 px-5 py-2 text-sm text-yellow-300">
              💰 Wholesale Prices
            </span>

            <span className="rounded-full border border-yellow-400/20 bg-black/40 px-5 py-2 text-sm text-yellow-300">
              🚚 Bulk Orders
            </span>

            <span className="rounded-full border border-yellow-400/20 bg-black/40 px-5 py-2 text-sm text-yellow-300">
              🛡️ Safe & Reliable
            </span>
          </div>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/919595654444"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-[#20ba5a] hover:shadow-[0_0_25px_rgba(37,211,102,0.35)]"
          >
            <FaWhatsapp className="text-2xl" />
            Get Latest Prices
          </a>
        </motion.div>
      </div>
    </section>
  );
}