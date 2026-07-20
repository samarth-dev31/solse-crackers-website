import { motion } from "framer-motion";

const reviews = [
  {
    name: "Rahul P.",
    review:
      "Excellent quality crackers and very reasonable prices. The products were exactly as expected.",
  },
  {
    name: "Priya S.",
    review:
      "Great collection of fireworks and quick response on WhatsApp. Highly recommended!",
  },
  {
    name: "Amit D.",
    review:
      "Perfect for family celebrations. Safe products and friendly service.",
  },
];

function Reviews() {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">
          ⭐ Customer Reviews
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -8 }}
              className="bg-white/10 backdrop-blur-lg border border-yellow-400/30 rounded-2xl p-6 shadow-xl"
            >
              <div className="text-yellow-400 text-2xl mb-3">
                ★★★★★
              </div>

              <p className="text-gray-200 leading-7">
                "{item.review}"
              </p>

              <h3 className="mt-6 font-bold text-white">
                — {item.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;