import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";

export default function AppDetailsPage() {
  return (
    <PageTransition>
      <div className="pt-[88px] min-h-screen bg-white">
        <div className="max-w-[1200px] mx-auto px-6 py-16">
          <motion.h1
            className="font-headline font-black text-[#0D0D0D] text-2xl mb-16"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            EnergyWallet
          </motion.h1>

          {/* App Mockup — centered, large */}
          <motion.div
            className="flex justify-center items-end"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.15, ease: "easeOut" }}
          >
            {/* Decorative light blob behind mockup */}
            <div className="relative flex justify-center">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-[#FFF0E8] rounded-full blur-3xl opacity-60 pointer-events-none" />
              <img
                src="/energywallet-app-mockup.png"
                alt="EnergyWallet App Details"
                className="relative z-10 w-full max-w-[680px] object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Feature highlights below */}
          <motion.div
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {[
              {
                icon: "/icon-smart-wallet.svg",
                title: "Smart Wallets",
                desc: "Organize your funds with dynamic sub-wallets designed for your specific spending habits and savings goals.",
              },
              {
                icon: "/icon-one-shop.svg",
                title: "One-Stop Shop",
                desc: "Access a curated marketplace of verified Nigerian vendors directly within the app for seamless transactions.",
              },
              {
                icon: "/icon-easy-payment.svg",
                title: "Easy Payments",
                desc: "Settle bills in seconds with our high-velocity payment engine, built for the pace of urban Nigerian life.",
              },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                className="flex flex-col gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.12 }}
              >
                <div className="w-11 h-11 bg-[#FFF0E8] rounded-xl flex items-center justify-center">
                  <img src={f.icon} alt={f.title} className="w-6 h-6" />
                </div>
                <h3 className="font-headline font-extrabold text-[#0D0D0D] text-lg">
                  {f.title}
                </h3>
                <p className="font-body text-gray-500 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
