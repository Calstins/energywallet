import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const faqs = [
  {
    q: "Is Energywallet safe?",
    a: "Yes, Energywallet is safe. Only you have access to your credentials and, consequently, your wallet and its assets. We employ 2FA via biometrics for sensitive actions.",
  },
  {
    q: "Is Energywallet safe?",
    a: "Your deposits are protected by NDIC insurance. All financial data is encrypted using military-grade AES-256 encryption.",
  },
  {
    q: "Is Energywallet safe?",
    a: "We use end-to-end encryption for all transactions, and your data is stored on secure servers with multiple layers of protection.",
  },
  {
    q: "Is Energywallet safe?",
    a: "Energywallet is fully compliant with CBN regulations and Nigerian financial standards.",
  },
  {
    q: "Is Energywallet safe?",
    a: "Our Instant Lock feature lets you freeze your entire wallet with a single tap.",
  },
  {
    q: "Is Energywallet safe?",
    a: "We never sell your data. All personal information is kept strictly confidential.",
  },
];

function FAQItem({ q, a, isOpen, onToggle }) {
  return (
    <div style={{ borderBottom: "1px solid #E5E7EB" }}>
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: "16px",
          padding: "20px 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span
          style={{
            flexShrink: 0,
            fontSize: "22px",
            fontWeight: 300,
            lineHeight: 1,
            color: isOpen ? "#EB5E00" : "#9CA3AF",
            transition: "color 0.2s",
            width: "24px",
            textAlign: "center",
          }}
        >
          {isOpen ? "−" : "+"}
        </span>
        <span
          style={{
            fontFamily: "Manrope, sans-serif",
            fontWeight: 700,
            fontSize: "17px",
            color: isOpen ? "#EB5E00" : "#1F2937",
            transition: "color 0.2s",
            lineHeight: 1.4,
          }}
        >
          {q}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: "hidden" }}
          >
            <p
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: "14px",
                color: "#6B7280",
                lineHeight: 1.7,
                paddingLeft: "40px",
                paddingBottom: "20px",
                margin: 0,
              }}
            >
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <style>{`
        .faq-section {
          padding-top: 96px;
          padding-bottom: 0;
          margin-bottom: -80px;
          background: transparent;
          overflow: visible;
          position: relative;
          z-index: 0;
        }
        .faq-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: start;
        }
        .faq-left-col {
          position: sticky;
          top: 112px;
        }
        .faq-question-mark {
          display: block;
          font-family: "Be Vietnam Pro", sans-serif;
          font-weight: 800;
          font-size: clamp(260px, 32vw, 460px);
          letter-spacing: -7.93px;
          line-height: 0.75;
          background: linear-gradient(360deg, #FAD9C4 30%, rgba(108,108,108,0.4) 65%, rgba(255,255,255,0) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          user-select: none;
          transform: rotate(20deg);
          transform-origin: left center;
          margin-left: 16px;
          filter: blur(1.5px);
          opacity: 0.9;
        }

        /* ── Mobile ── */
        @media (max-width: 1023px) {
          .faq-section {
            padding-top: 64px;
            padding-bottom: 64px;  /* proper bottom padding, no negative margin */
            margin-bottom: 0;      /* no negative margin on mobile */
          }
          .faq-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .faq-left-col {
            position: static;      /* no sticky on mobile */
            top: auto;
          }
          .faq-question-mark {
            display: none;         /* hide ? completely on mobile */
          }
        }
      `}</style>

      <section id="support" className="faq-section">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="faq-grid">
            {/* ── LEFT: Title + ? ── */}
            <motion.div
              className="faq-left-col"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2
                style={{
                  fontFamily: '"Be Vietnam Pro", sans-serif',
                  fontWeight: 800,
                  fontSize: "clamp(32px, 4vw, 52px)",
                  color: "#EB5E00",
                  lineHeight: 1.15,
                  marginBottom: "24px",
                }}
              >
                Frequently
                <br />
                Asked Questions
              </h2>

              <div style={{ overflow: "visible", lineHeight: 1 }}>
                <span className="faq-question-mark">?</span>
              </div>
            </motion.div>

            {/* ── RIGHT: Accordion ── */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{ paddingTop: "8px" }}
            >
              <div style={{ marginBottom: "24px" }}>
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

              <Link
                to="/support"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#EB5E00",
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 700,
                  fontSize: "15px",
                  textDecoration: "none",
                  transition: "gap 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.gap = "14px")}
                onMouseLeave={(e) => (e.currentTarget.style.gap = "8px")}
              >
                See More FAQs
                <svg
                  width="16"
                  height="16"
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
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
