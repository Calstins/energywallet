import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Big title */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="font-headline font-black text-[#0D0D0D]" style={{ fontSize: 'clamp(48px, 7vw, 96px)', lineHeight: 1.05 }}>
            Here to{' '}
            <span className="text-[#EB5E00] underline decoration-[#EB5E00] underline-offset-4">
              help
            </span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative">
          {/* Left: form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex flex-col gap-5">
              <div>
                <label className="block font-body font-semibold text-sm text-gray-700 mb-2">Full name</label>
                <input
                  type="text"
                  placeholder="Type your full name here"
                  className="w-full bg-gray-100 rounded-xl px-4 py-3.5 font-body text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#EB5E00] focus:bg-white transition-all border border-transparent focus:border-[#EB5E00]"
                />
              </div>
              <div>
                <label className="block font-body font-semibold text-sm text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email here"
                  className="w-full bg-gray-100 rounded-xl px-4 py-3.5 font-body text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#EB5E00] focus:bg-white transition-all border border-transparent focus:border-[#EB5E00]"
                />
              </div>
              <div>
                <label className="block font-body font-semibold text-sm text-gray-700 mb-2">Contact number</label>
                <input
                  type="tel"
                  placeholder="Enter you contact number here"
                  className="w-full bg-gray-100 rounded-xl px-4 py-3.5 font-body text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#EB5E00] focus:bg-white transition-all border border-transparent focus:border-[#EB5E00]"
                />
              </div>
              <div>
                <label className="block font-body font-semibold text-sm text-gray-700 mb-2">Message</label>
                <textarea
                  rows={5}
                  placeholder="Type your message here"
                  className="w-full bg-gray-100 rounded-xl px-4 py-3.5 font-body text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#EB5E00] focus:bg-white transition-all border border-transparent focus:border-[#EB5E00] resize-none"
                />
              </div>
              <motion.button
                className="self-start bg-[#EB5E00] hover:bg-[#FF7A2F] text-white font-body font-bold text-sm px-8 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg"
                whileTap={{ scale: 0.97 }}
              >
                Send Message
              </motion.button>
            </div>
          </motion.div>

          {/* Right: newsletter + big phone icon */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="relative z-10">
              <h3 className="font-headline font-black text-[#0D0D0D] text-3xl mb-3">Join our newsletter</h3>
              <p className="font-body text-gray-500 text-sm leading-relaxed mb-6 max-w-[380px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
              </p>
              <div>
                <label className="block font-body font-semibold text-sm text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email here"
                  className="w-full max-w-[320px] bg-gray-100 rounded-xl px-4 py-3.5 font-body text-sm placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#EB5E00] transition-all mb-3"
                />
                <br />
                <button className="bg-[#EB5E00] hover:bg-[#FF7A2F] text-white font-body font-bold text-sm px-8 py-3 rounded-full transition-all hover:shadow-lg">
                  Sign up
                </button>
              </div>
            </div>

            {/* Big phone/call icon - light gray watermark style */}
            <div className="absolute right-0 top-0 bottom-0 flex items-center pointer-events-none select-none opacity-20">
              <svg width="280" height="280" viewBox="0 0 280 280" fill="none">
                <path d="M56 33.6C56 22.4 65.4 13 76.6 13h23.8c9.8 0 18.2 6.7 20.3 16.2l7 31.5c1.9 8.4-1.8 17-9.1 21.4L108.5 88c8.7 19.6 28 43.4 47.5 52.2l6-10.1c4.4-7.3 13-11 21.4-9.1l31.5 7c9.5 2.1 16.1 10.5 16.1 20.3v23.8c0 11.2-9.4 20.6-20.6 20.6C98 192.7 26.3 121 26.3 33.6" 
                  stroke="#6B7280" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom-right chat bubble */}
      <div className="fixed bottom-8 right-8 z-40">
        <div className="w-12 h-12 bg-[#EB5E00] rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
