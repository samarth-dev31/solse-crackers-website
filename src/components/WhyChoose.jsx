import { motion } from "framer-motion";
import {
  Sparkles,
  BadgeIndianRupee,
  ShieldCheck,
  Truck,
  Package,
  Handshake,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Premium Quality",
    description:
      "High-quality fireworks with vibrant colours and exciting effects for every celebration.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Best Wholesale Prices",
    description:
      "Competitive wholesale and retail pricing for wholesale and retail customers.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Products",
    description:
      "Reliable fireworks sourced from trusted manufacturers for safe celebrations.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description:
      "Quick and dependable delivery to ensure your order arrives on time.",
  },
  {
    icon: Package,
    title: "Wide Product Range",
    description:
      "A huge collection of crackers including gift boxes, rockets, sparklers and more.",
  },
  {
    icon: Handshake,
    title: "Customer Satisfaction",
    description:
      "Friendly support and excellent service to make your celebrations memorable.",
  },
];

export default function WhyChoose() {
  return (
    <section
      id="whychoose"
      className="relative overflow-hidden bg-black py-24"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-yellow-400/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-yellow-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white">
            Why Choose{" "}
            <span className="text-yellow-400">Solse Crackers?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            We deliver premium fireworks, competitive prices, and reliable
            service to make every celebration brighter and more memorable.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
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
                className="group rounded-3xl border border-yellow-400/20 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-yellow-400/50 hover:shadow-[0_0_35px_rgba(250,204,21,0.18)]"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400/10 text-yellow-400 transition-all duration-300 group-hover:bg-yellow-400 group-hover:text-black">
                  <Icon size={32} />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}