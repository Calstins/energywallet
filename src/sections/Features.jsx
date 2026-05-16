import { motion } from "framer-motion";

const features = [
  {
    icon: "/icon-smart-wallet.svg",
    title: "Smart Wallets",
    desc: "Organize your capital into high-performance buckets. Automated savings and smart categorization keep you ahead of every bill.",
  },
  {
    icon: "/icon-one-shop.svg",
    title: "One-Stop Shop",
    desc: "Direct vendor marketplace integrated right into your wallet. Buy data, electricity, and airtime with zero friction and elite speed.",
  },
  {
    icon: "/icon-easy-payment.svg",
    title: "Easy Payments",
    desc: "Bulk billing tools and instant QR transfers. Whether it's one vendor or a thousand, your energy stays focused on growth.",
  },
];

export default function Features() {
  return (
    <section id="app-details" className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-[#FFF0E8] text-[#EB5E00] text-xl font-bold tracking-widest uppercase px-5 py-1.5 rounded-full mb-4 font-body">
            Features
          </span>
          <h2
            className="font-headline font-black text-[#0D0D0D]"
            style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
          >
            Built for the Fast Lane
          </h2>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              style={{
                background:
                  "linear-gradient(360deg, #FDDCCC 0%, #FFF0E8 45%, #fffbfb 100%)",
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <div className="w-12 h-12 bg-[#FFDCCC] rounded-xl flex items-center justify-center mb-5">
                <img src={f.icon} alt={f.title} className="w-6 h-6" />
              </div>
              <h3 className="font-headline font-extrabold text-[#0D0D0D] text-xl mb-3">
                {f.title}
              </h3>
              <p className="font-body text-gray-600 text-sm leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Security Section */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ">
          {/* Lock image side */}
          <motion.div
            className="relative flex items-center justify-center order-2 lg:order-1"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="font-body text-xs font-semibold text-gray-500 tracking-widest uppercase">
                  System Shield Active
                </span>
              </div>
              <img
                src="/security.svg"
                alt="Security"
                className="w-full max-w-[450px] object-contain"
              />
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <h2
              className="font-headline font-bold text-[#0D0D0D] mb-4"
              style={{ fontSize: "clamp(20px, 3vw, 40px)" }}
            >
              Security is Our Foundation
            </h2>
            <p className="font-body text-gray-600 text-base leading-relaxed mb-8">
              We don't just move money; we protect your future. Our
              infrastructure is built with the highest compliance standards in
              the Nigerian financial ecosystem.
            </p>

            {[
              {
                icon: "/ndic.svg",
                title: "NDIC Insured",
                desc: "Your deposits are fully protected and insured by the NDIC, giving you peace of mind.",
              },
              {
                icon: "/instant-lock.svg",
                title: "Instant Lock",
                desc: "Control your access. One tap freezes all transactions in case of lost devices or suspicious activity.",
              },
              {
                icon: "/privacy.svg",
                title: "Privacy First",
                desc: "End-to-end encryption for every transaction. Your data belongs to you, and we keep it that way.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="flex gap-4 items-start mb-6"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.1 }}
              >
                <div className="w-10 h-10 rounded-xl bg-[#FFF0E8] flex items-center justify-center flex-shrink-0">
                  <img src={item.icon} alt={item.title} className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-headline font-bold text-[#0D0D0D] text-base mb-1">
                    {item.title}
                  </h4>
                  <p className="font-body text-gray-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
