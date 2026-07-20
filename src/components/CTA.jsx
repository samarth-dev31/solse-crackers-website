import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-black py-24">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-400/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-yellow-500/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-yellow-400/20 bg-white/5 backdrop-blur-xl p-12 md:p-16 text-center shadow-2xl"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-black leading-tight"
          >
            <span className="text-white">Ready to</span>{" "}
            <span className="text-yellow-400">Light Up</span>
            <br />
            <span className="text-white">Your Celebration?</span>
          </motion.h2>

          <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-8">
            Premium fireworks for Diwali, weddings, birthdays and every special
            occasion. Experience safe, colourful and unforgettable celebrations
            with Solse Crackers.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
            <a
  href="https://wa.me/9595654444
  "
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(37,211,102,0.35)]"
>
  <FaWhatsapp className="text-3xl" />
  <span>Order Now</span>
</a>

            <a
              href="#products"
              className="rounded-2xl border-2 border-yellow-400 px-10 py-5 text-lg font-bold text-yellow-400 hover:bg-yellow-400 hover:text-black hover:scale-105 transition-all duration-300"
            >
              Explore Products
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}