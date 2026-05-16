import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

const faqs = [
  {
    q: "Is Energywallet safe?",
    a: "Yes, Energywallet is safe. Only you have access to your credentials and, consequently, your wallet and its assets. In addition, we employ several other security measures including requiring 2FA via biometrics for sensitive actions, such as signing transactions.",
  },
  {
    q: "How do I create a wallet?",
    a: "Download the EnergyWallet app from the App Store or Google Play, sign up with your phone number, complete your KYC verification, and your wallet will be ready in minutes.",
  },
  {
    q: "What payment methods are supported?",
    a: "EnergyWallet supports bank transfers, card payments, and QR code payments. You can also fund your wallet from any Nigerian bank account.",
  },
  {
    q: "Can I have multiple sub-wallets?",
    a: "Yes! EnergyWallet allows you to create multiple sub-wallets for different spending categories like Food, Fuel, Transport, and Lifestyle, making budgeting effortless.",
  },
  {
    q: "Is there a transaction fee?",
    a: "EnergyWallet keeps fees minimal and transparent. Basic transactions are free, with small fees only on select premium features. No hidden charges — ever.",
  },
  {
    q: "How do I contact support?",
    a: "You can reach our support team 24/7 through the in-app chat, email support@energywallet.ng, or call our customer care line during business hours.",
  },
  {
    q: "What happens if I lose my phone?",
    a: "Use the Instant Lock feature on another device to immediately freeze all transactions. Contact our support team to begin account recovery through verified identity checks.",
  },
  {
    q: "How is my data protected?",
    a: "We use end-to-end encryption (AES-256) for all data. We never sell your data, and all personal information is stored on secure, compliant servers within Nigeria.",
  },
];

function FAQItem({ q, a, isOpen, onToggle }) {
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span className="font-body font-semibold text-gray-800 text-base group-hover:text-[#EB5E00] transition-colors">
          {q}
        </span>
        <div
          className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all text-lg font-light ${isOpen ? "bg-[#EB5E00] text-white" : "bg-gray-100 text-gray-500 group-hover:bg-orange-50 group-hover:text-[#EB5E00]"}`}
        >
          {isOpen ? "−" : "+"}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="font-body text-gray-500 text-sm leading-relaxed pb-5">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function SupportPage() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <PageTransition>
      <div className="pt-[88px] min-h-screen bg-white">
        {/* Hero banner */}
        <div className="bg-[#0D0D0D] relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none">
            <div className="absolute top-[-60px] left-[-60px] w-[360px] h-[360px] bg-[#EB5E00] rounded-full opacity-10 blur-3xl" />
            <div className="absolute bottom-[-80px] right-[100px] w-[280px] h-[280px] bg-[#EB5E00] rounded-full opacity-10 blur-3xl" />
          </div>
          <div className="max-w-[1200px] mx-auto px-6 py-20 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-[#EB5E00]/20 text-[#EB5E00] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5 font-body">
                Support Center
              </span>
              <h1
                className="font-headline font-black text-white mb-4"
                style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
              >
                How can we help you?
              </h1>
              <p className="font-body text-gray-400 text-base max-w-[480px] mx-auto mb-8">
                Search our knowledge base or browse categories below to find
                answers fast.
              </p>
              {/* Search bar */}
              <div className="relative max-w-[520px] mx-auto">
                <input
                  type="text"
                  placeholder="Search for answers…"
                  className="w-full bg-white rounded-full px-6 py-4 pr-14 font-body text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#EB5E00]/50 shadow-xl"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 bg-[#EB5E00] rounded-full flex items-center justify-center">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 py-16">
          {/* Browse by category */}

          {/* FAQ + contact prompt */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* FAQ accordion */}
            <div className="lg:col-span-2">
              <motion.div {...fadeUp(0.05)}>
                <h2 className="font-headline font-black text-[#0D0D0D] text-2xl mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="bg-white rounded-2xl border border-gray-100 divide-y divide-gray-100 px-6">
                  {faqs.map((item, i) => (
                    <FAQItem
                      key={i}
                      q={item.q}
                      a={item.a}
                      isOpen={openIndex === i}
                      onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
                    />
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Contact card */}
            <motion.div className="lg:col-span-1" {...fadeUp(0.12)}>
              <div className="bg-[#FFF0E8] rounded-2xl p-8 sticky top-28">
                <div className="w-12 h-12 bg-[#EB5E00] rounded-xl flex items-center justify-center mb-5">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                  </svg>
                </div>
                <h3 className="font-headline font-extrabold text-[#0D0D0D] text-xl mb-2">
                  Still need help?
                </h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed mb-6">
                  Can't find what you're looking for? Our support team is
                  available 24/7 to assist you.
                </p>
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 bg-[#EB5E00] hover:bg-[#FF7A2F] text-white font-body font-bold text-sm px-6 py-3.5 rounded-full transition-all hover:shadow-lg hover:-translate-y-0.5"
                >
                  Contact Support
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>

                {/* Quick contact info */}
                <div className="mt-6 pt-6 border-t border-orange-100 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#EB5E00"
                        strokeWidth="2"
                        strokeLinecap="round"
                      >
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                      </svg>
                    </div>
                    <span className="font-body text-xs text-gray-600">
                      +234 800 ENERGY
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#EB5E00"
                        strokeWidth="2"
                        strokeLinecap="round"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <span className="font-body text-xs text-gray-600">
                      support@energywallet.ng
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="mt-20 bg-[#0D0D0D] rounded-2xl p-12 text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none">
              <div className="absolute top-[-40px] right-[120px] w-[200px] h-[200px] bg-[#EB5E00] rounded-full opacity-10 blur-3xl" />
            </div>
            <h2 className="font-headline font-black text-white text-3xl mb-3 relative z-10">
              Ready to get started?
            </h2>
            <p className="font-body text-gray-400 text-base mb-8 relative z-10">
              Join 2M+ Nigerians already managing their finances with
              EnergyWallet.
            </p>
            <div className="flex justify-center gap-4 flex-wrap relative z-10">
              <a
                href="#"
                className="flex items-center gap-2 bg-white text-[#0D0D0D] font-body font-bold text-sm px-6 py-3.5 rounded-full hover:-translate-y-1 hover:shadow-xl transition-all"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                App Store
              </a>
              <a
                href="#"
                className="flex items-center gap-2 bg-[#EB5E00] text-white font-body font-bold text-sm px-6 py-3.5 rounded-full hover:-translate-y-1 hover:shadow-xl transition-all"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="m3 20.5 8-8-8-8M11 4.5l8 8-8 8" />
                </svg>
                Google Play
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
