import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-yellow-400/20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-400/5 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-500/5 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-black text-yellow-400">
              Solse Crackers
            </h2>

            <p className="tracking-[0.35em] text-gray-400 uppercase text-xs mt-2">
              Premium Fireworks
            </p>

            <p className="text-gray-300 mt-6 leading-8">
              Bringing joy, colour and unforgettable celebrations with premium
              quality fireworks at wholesale prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>
                <a href="#home" className="hover:text-yellow-400 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#products" className="hover:text-yellow-400 transition">
                  Products
                </a>
              </li>

              <li>
                <a href="#gallery" className="hover:text-yellow-400 transition">
                  Gallery
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-yellow-400 transition">
                  About
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-yellow-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-yellow-400 mt-1" />
                <span className="text-gray-300">
                  Your Business Address
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-yellow-400" />
                <span className="text-gray-300">
                  +91 9422 148518
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaWhatsapp className="text-green-500" />
                <a
                  href="https://wa.me/919422148518"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-green-400 transition"
                >
                  Chat on WhatsApp
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-yellow-400/20 mt-12 pt-8">

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Solse Crackers. All Rights Reserved.
            </p>

            <p className="text-gray-500 text-sm">
              Made with ❤️ for joyful celebrations.
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}