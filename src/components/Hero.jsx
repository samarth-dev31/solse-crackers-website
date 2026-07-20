import { motion } from "framer-motion";
import heroBackground from "../assets/hero-background.png";
import heroMobile from "../assets/hero-mobile.png";


export default function Hero() {
  return (
    <section
  id="home"
  className="relative min-h-screen flex items-start justify-center pt-24 overflow-hidden"
>
  {/* Desktop Background */}
  <div
    className="absolute inset-0 hidden md:block"
    style={{
      backgroundImage: `url(${heroBackground})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  />

  {/* Mobile Background */}
  <div
    className="absolute inset-0 md:hidden"
    style={{
      backgroundImage: `url(${heroMobile})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/55"></div>

  {/* Content */}
  <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center pt-20">

        <motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="
    text-6xl
    md:text-8xl
    lg:text-[7rem]
    font-black
    leading-[0.95]
    tracking-tight
    text-center
    mb-8
  "
>
  <span className="text-white">Celebrate Every</span>
  <br />
  <span className="text-yellow-400">Festival with Light</span>
</motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-8 max-w-4xl mx-auto text-lg md:text-xl text-gray-200 leading-8"
        >
          Premium quality fireworks at wholesale prices.
          Safe, colourful and unforgettable celebrations
          for families, businesses and special occasions.
        </motion.p>{/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-8"
        >
          <a
            href="#products"
            className="w-72 rounded-2xl bg-yellow-400 px-10 py-5 text-lg font-bold text-black shadow-lg transition-all duration-300 hover:scale-105
hover:shadow-[0_0_30px_rgba(250,204,21,0.45)]
transition-all
duration-300"
          >
            Explore Products
          </a>

          <a
            href="https://wa.me/919422148518"
            target="_blank"
            rel="noopener noreferrer"
            className="w-72 rounded-2xl border-2 border-yellow-400 px-10 py-5 text-lg font-bold text-yellow-400 transition-all duration-300 hover:scale-105
hover:bg-yellow-400
hover:text-black
transition-all
duration-300"
          >
            Order on WhatsApp
          </a>
        </motion.div>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
  <div className="rounded-full border border-yellow-400/30 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md">
    🏆 Premium Quality
  </div>

  <div className="rounded-full border border-yellow-400/30 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md">
    🚚 Wholesale & Retail
  </div>

  <div className="rounded-full border border-yellow-400/30 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md">
    💬 WhatsApp Orders
  </div>
</div>




</div>

      
    </section>
  );
}