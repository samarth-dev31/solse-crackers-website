import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaEnvelope,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-black py-24 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-400/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-500/10 blur-[120px] rounded-full"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-yellow-400/20 bg-white/5 backdrop-blur-xl p-10 md:p-14 shadow-[0_0_40px_rgba(250,204,21,0.08)]"
        >
          <h2 className="text-4xl md:text-5xl font-black text-center text-white">
            Contact <span className="text-yellow-400">Us</span>
          </h2>

          <p className="mt-5 text-center text-gray-300 max-w-2xl mx-auto text-lg">
            Ready to order premium fireworks? Contact Solse Crackers today and
            celebrate every occasion with brilliance.
          </p>

          <div className="grid md:grid-cols-2 gap-10 mt-14">
            {/* Left */}
            <div className="space-y-7">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="bg-yellow-400/10 p-4 rounded-xl text-yellow-400 text-xl">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h3 className="text-white font-bold text-lg">Address</h3>
                  <p className="text-gray-300">
                    Solse Crackers
                    <br />
                    Your Business Address
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="bg-yellow-400/10 p-4 rounded-xl text-yellow-400 text-xl">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h3 className="text-white font-bold text-lg">Phone</h3>
                  <p className="text-gray-300">+91 9595654444,
                    +91 9730644141

                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="bg-yellow-400/10 p-4 rounded-xl text-yellow-400 text-xl">
                  <FaWhatsapp />
                </div>

                <div>
                  <h3 className="text-white font-bold text-lg">WhatsApp</h3>
                  <p className="text-gray-300">
                    Fast replies & latest price list
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="bg-yellow-400/10 p-4 rounded-xl text-yellow-400 text-xl">
                  <FaEnvelope />
                </div>

                <div>
                  <h3 className="text-white font-bold text-lg">Email</h3>
                  <a
                    href="mailto:yourgmail@gmail.com"
                    className="text-gray-300 hover:text-yellow-400 transition"
                  >
                    Solsecrackersrashin@gmail.com
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-4">
                <div className="bg-yellow-400/10 p-4 rounded-xl text-yellow-400 text-xl">
                  <FaClock />
                </div>

                <div>
                  <h3 className="text-white font-bold text-lg">
                    Business Hours
                  </h3>
                  <p className="text-gray-300">
                    Monday - Sunday
                    <br />
                    9:00 AM - 9:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col justify-center">
              <div className="rounded-2xl border border-yellow-400/20 bg-black/30 p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Ready to Order?
                </h3>

                <p className="text-gray-300 mb-8">
                  Chat with us on WhatsApp to get the latest price list and
                  place your order instantly.
                </p>

                <a
                  href="https://wa.me/919422148518"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-10 py-5 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(34,197,94,0.35)]"
                >
                  <FaWhatsapp className="text-2xl" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}