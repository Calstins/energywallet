import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "App details", to: "/app-details" },
  { label: "Contact", to: "/contact" },
  { label: "Support", to: "/support" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? "shadow-md" : ""}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center gap-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
          <img src="/logo.svg" alt="EnergyWallet" className="w-9 h-auto" />
          <span className="font-headline font-extrabold text-lg text-[#0D0D0D]">
            EnergyWallet
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-0.5 ml-auto">
          {links.map((l) => (
            <li key={l.label}>
              <NavLink
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `font-body text-sm font-semibold px-3.5 py-2 rounded-lg transition-colors ${
                    isActive
                      ? "text-[#EB5E00]"
                      : "text-gray-600 hover:text-[#EB5E00] hover:bg-orange-50"
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link
          to="/"
          className="hidden md:inline-flex items-center bg-[#EB5E00] hover:bg-[#FF7A2F] text-white font-body font-bold text-sm px-5 py-3 rounded-md transition-all hover:-translate-y-0.5 hover:shadow-lg ml-2 flex-shrink-0"
        >
          Download Now
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden ml-auto p-1.5 flex flex-col gap-1.5"
          aria-label="Menu"
        >
          <span
            className={`block w-6 h-0.5 bg-gray-800 rounded transition-all duration-300 origin-center ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-800 rounded transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-800 rounded transition-all duration-300 origin-center ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28 }}
          >
            <ul className="px-6 py-4 flex flex-col gap-1">
              {links.map((l, i) => (
                <motion.li
                  key={l.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <NavLink
                    to={l.to}
                    end={l.to === "/"}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `block text-base font-semibold px-4 py-3 rounded-lg transition-colors ${
                        isActive
                          ? "text-[#EB5E00] bg-orange-50"
                          : "text-gray-700 hover:bg-orange-50 hover:text-[#EB5E00]"
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  to="/"
                  onClick={() => setMenuOpen(false)}
                  className="mt-2 flex justify-center bg-[#EB5E00] text-white font-bold text-sm py-3 rounded-full hover:bg-[#FF7A2F] transition-colors"
                >
                  Download Now
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
