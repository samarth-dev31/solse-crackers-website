import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

// Product Images
import megaCelebrationPack from "../assets/mega-celebration-pack.png";
import multiShotCake from "../assets/multi-shot-cake.png";
import colourSparklers from "../assets/colour-sparklers.png";
import twinklingStars from "../assets/twinkling-stars.png";
import festivalRocket from "../assets/festival-rocket.png";
import groundChakkars from "../assets/ground-chakkars.png";
import FlowerPots from "../assets/flower-pots.png";
import skyShots from "../assets/sky-shots.png";
import deluxeGroundWheel from "../assets/deluxe-ground-wheel.png";

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Mega Celebration Pack",
      category: "PREMIUM",
      image: megaCelebrationPack,
      description:
        "Complete fireworks combo pack with rockets, sparklers, cakes, fountains and ground fireworks for grand family celebrations.",
    },
    {
      id: 2,
      name: "Multi Shot Cake",
      category: "BEST SELLER",
      image: multiShotCake,
      description:
        "25-shot aerial cake delivering colourful bursts and spectacular sky effects for unforgettable celebrations.",
    },
    {
      id: 3,
      name: "Colour Sparklers",
      category: "KIDS",
      image: colourSparklers,
      description:
        "Safe and colourful sparklers that create bright sparkling effects, perfect for children and family fun.",
    },
    {
      id: 4,
      name: "Twinkling Stars",
      category: "FAMILY",
      image: twinklingStars,
      description:
        "Beautiful twinkling star fireworks producing colourful sparkling effects for festive evenings.",
    },
    {
      id: 5,
      name: "Festival Rocket",
      category: "AERIAL",
      image: festivalRocket,
      description:
        "High-flying rocket that launches into the sky with dazzling colours and exciting aerial displays.",
    },
    {
      id: 6,
      name: "Ground Chakkars",
      category: "POPULAR",
      image: groundChakkars,
      description:
        "Fast spinning ground fireworks creating brilliant circles of colourful sparks.",
    },
    {
      id: 7,
      name: "Flower Pots",
      category: "CLASSIC",
      image: FlowerPots,
      description:
        "Traditional fountain fireworks producing tall showers of colourful sparkling flames.",
    },
    {
      id: 8,
      name: "Sky Shots",
      category: "NEW",
      image: skyShots,
      description:
        "Compact aerial shots with vibrant colours and impressive sky-filling effects.",
    },
    {
      id: 9,
      name: "Deluxe Ground Wheel",
      category: "PREMIUM",
      image: deluxeGroundWheel,
      description:
        "Premium spinning ground wheel delivering smooth rotation with bright golden and colourful sparks.",
    },
  ];

  const categories = [
    "All",
    "PREMIUM",
    "BEST SELLER",
    "KIDS",
    "FAMILY",
    "AERIAL",
    "POPULAR",
    "CLASSIC",
    "NEW",
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
const [searchTerm, setSearchTerm] = useState("");
const [selectedImage, setSelectedImage] = useState(null);

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (<section
      id="products"
      className="relative overflow-hidden bg-black py-24"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-yellow-400/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-yellow-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl font-black text-white md:text-6xl">
            Our <span className="text-yellow-400">Premium Products</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            Discover our premium collection of fireworks designed to make every celebration brighter, safer and more memorable.
          </p>
        </motion.div>

        {/* Search */}
        <div className="relative mx-auto mt-12 max-w-xl">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-full border border-yellow-400/20 bg-white/5 py-4 pl-14 pr-6 text-white placeholder-gray-400 outline-none backdrop-blur-xl focus:border-yellow-400"
          />
        </div>

        {/* Categories */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-6 py-3 font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-yellow-400 text-black shadow-lg"
                  : "border border-yellow-400/20 bg-white/5 text-gray-300 hover:border-yellow-400 hover:text-yellow-400"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">{filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-yellow-400/20 bg-[#111111] shadow-[0_0_30px_rgba(250,204,21,0.06)] transition-all duration-300 hover:border-yellow-400 hover:shadow-[0_0_40px_rgba(250,204,21,0.15)]"
            >
              {/* Product Image */}
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <span
                  className={`inline-block w-fit rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider ${
                    product.category === "PREMIUM"
                      ? "bg-yellow-500 text-black"
                      : product.category === "BEST SELLER"
                      ? "bg-red-500 text-white"
                      : product.category === "NEW"
                      ? "bg-green-500 text-white"
                      : product.category === "POPULAR"
                      ? "bg-blue-500 text-white"
                      : product.category === "KIDS"
                      ? "bg-pink-500 text-white"
                      : product.category === "FAMILY"
                      ? "bg-purple-500 text-white"
                      : product.category === "AERIAL"
                      ? "bg-orange-500 text-white"
                      : "bg-gray-600 text-white"
                  }`}
                >
                  {product.category}
                </span>

                <h3 className="mt-4 text-2xl font-bold text-white">
                  {product.name}
                </h3>

                <p className="mt-3 flex-1 leading-7 text-gray-300">
                  {product.description}
                </p>

                
                <button
  onClick={() => setSelectedImage(product.image)}
  className="mt-4 w-full rounded-xl border border-yellow-400 text-yellow-400 py-3 font-semibold transition-all duration-300 hover:bg-yellow-400 hover:text-black"
>
  View Image
</button>

<a
  href="https://wa.me/919422148518"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 rounded-xl bg-green-500 py-4 text-center font-bold text-white transition-all duration-300 hover:bg-green-600"
>
  Get Latest Price
</a>
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
   {selectedImage && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
    onClick={() => setSelectedImage(null)}
  >
    <img
      src={selectedImage}
      alt="Product"
      className="max-h-[90vh] max-w-[90vw] rounded-2xl border-2 border-yellow-400"
    />
  </div>
)} </section>
  );
}