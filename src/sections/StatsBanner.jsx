import { motion } from "framer-motion";

export default function StatsBanner() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[800px] mx-auto">
          {/* 99% card */}
          <motion.div
            className="bg-[#EB5E00] rounded-2xl p-10 flex flex-col items-center justify-center text-white text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span
              className="font-headline font-black leading-none"
              style={{ fontSize: "clamp(56px, 8vw, 96px)" }}
            >
              99%
            </span>
            <span className="font-body font-semibold text-base mt-3 text-orange-100 leading-snug">
              Uptime for all
              <br />
              transactions
            </span>
          </motion.div>

          {/* 2M+ users card */}
          <motion.div
            className="bg-gray-100 rounded-2xl p-10 flex flex-col items-center justify-center text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Users icon */}
            <svg
              className="w-14 h-14 text-[#EB5E00] mb-4"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
            </svg>
            <span className="font-headline font-black text-[#0D0D0D] text-2xl leading-snug">
              2M+ Users Across
              <br />
              Nigeria
            </span>
          </motion.div>
        </div>

        {/* Journey CTA */}
        <motion.div
          className="mt-6 bg-[#FFF0E8] rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-6 max-w-[800px] mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div>
            <h2
              className="font-headline font-black text-[#EB5E00]"
              style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.1 }}
            >
              Start Your Journey
              <br />
              Today.
            </h2>
            <p className="font-body text-gray-600 text-sm mt-2 leading-relaxed max-w-[320px]">
              Join thousands of Nigerians who have taken full control of their
              financial energy.
            </p>
          </div>
          <a
            href="#home"
            className="flex-shrink-0 bg-[#EB5E00] hover:bg-[#FF7A2F] text-white font-body font-bold text-sm px-7 py-3.5 rounded-full transition-all hover:-translate-y-1 hover:shadow-lg whitespace-nowrap"
          >
            Get Started for Free
          </a>
        </motion.div>
      </div>
    </section>
  );
}
