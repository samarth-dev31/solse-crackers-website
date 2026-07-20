import { motion } from "framer-motion";

import megaCelebrationPack from "../assets/mega-celebration-pack.png";
import multiShotCake from "../assets/multi-shot-cake.png";
import colourSparklers from "../assets/colour-sparklers.png";
import twinklingStars from "../assets/twinkling-stars.png";
import festivalRocket from "../assets/festival-rocket.png";
import groundChakkars from "../assets/ground-chakkars.png";
import flowerPots from "../assets/flower-pots.png";
import skyShots from "../assets/sky-shots.png";
import deluxeGroundWheel from "../assets/deluxe-ground-wheel.png";

export default function Gallery() {
  const products = [
  {
    id: 1,
    name: "Mega Celebration Pack",
    category: "Combo Pack",
    image: megaCelebrationPack,
    description: "Premium family celebration fireworks combo."
  },
  {
    id: 2,
    name: "Multi Shot Cake",
    category: "Aerial",
    image: multiShotCake,
    description: "25 shots with colourful sky effects."
  },
  {
    id: 3,
    name: "Colour Sparklers",
    category: "Sparklers",
    image: colourSparklers,
    description: "Bright colourful sparklers for all ages."
  },
  {
    id: 4,
    name: "Twinkling Stars",
    category: "Ground",
    image: twinklingStars,
    description: "Colourful spinning star crackers."
  },
  {
    id: 5,
    name: "Festival Rocket",
    category: "Rocket",
    image: festivalRocket,
    description: "High flying festival rocket."
  },
  {
    id: 6,
    name: "Ground Chakkars",
    category: "Ground",
    image: groundChakkars,
    description: "Fast spinning colourful ground chakkars."
  },
  {
    id: 7,
    name: "Colourful Flower Pots",
    category: "Fountain",
    image: flowerPots,
    description: "Beautiful fountain of colourful sparks."
  },
  {
    id: 8,
    name: "Sky Shots",
    category: "Aerial",
    image: skyShots,
    description: "Sky shots with vibrant aerial effects."
  },
  {
    id: 9,
    name: "Deluxe Ground Wheel",
    category: "Ground",
    image: deluxeGroundWheel,
    description: "Premium spinning ground wheel."
  },

  ];return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-black py-24 px-8 text-white"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-yellow-400/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-yellow-500/10 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white">
            Our <span className="text-yellow-400">Gallery</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            Explore our premium fireworks collection crafted to make every
            celebration brighter and more memorable.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="group overflow-hidden rounded-3xl border border-yellow-400/20 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-yellow-400/50 hover:shadow-[0_0_35px_rgba(250,204,21,0.18)]"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <span className="inline-block rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white">
                  {product.badge}
                </span>

                <div className="mt-3">
                  <span className="rounded-full bg-yellow-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-yellow-400">
                    {product.category}
                  </span>
                </div>

                <h3 className="mt-4 text-2xl font-bold text-white">
                  {product.name}
                </h3>

                <a
                  href={`https://wa.me/919595654444?text=${encodeURIComponent(
                    `Hello Solse Crackers! I would like to know more about ${product.name}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-[#25D366] px-6 py-4 font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-[#20ba5a] hover:shadow-[0_0_25px_rgba(37,211,102,0.35)]"
                >
                  Get Latest Price
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}