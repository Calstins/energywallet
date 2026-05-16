import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";

const anim = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

const inputStyle = {
  background: "#F3F4F6",
  borderRadius: "10px",
  padding: "11px 14px",
  fontFamily: "Manrope, sans-serif",
  fontSize: "13px",
  color: "#374151",
  border: "1.5px solid transparent",
  outline: "none",
  transition: "border-color 0.2s, background 0.2s",
  width: "100%",
};

function Field({ label, children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
      <label
        style={{
          fontFamily: "Manrope, sans-serif",
          fontWeight: 600,
          fontSize: "12px",
          color: "#374151",
        }}
      >
        {label}
      </label>
      {children}
    </div>
  );
}

export default function ContactPage() {
  return (
    <PageTransition>
      <style>{`
        .contact-input:focus { border-color: #EB5E00 !important; background: #fff !important; }
        .contact-page { padding-top: 88px; min-height: 100vh; background: #fff; position: relative; overflow: hidden; }
        .contact-container { max-width: 1200px; margin: 0 auto; padding: 48px 24px 80px; }
        .contact-grid {
          display: grid;
          grid-template-columns: 380px 1fr;
          gap: 100px;
          align-items: start;
          margin-top: 56px;
        }
        @media (max-width: 960px) {
          .contact-grid { grid-template-columns: 1fr; gap: 48px; }
        }
      `}</style>

      <div className="contact-page">
        <div className="contact-container">
          {/* Big hero title */}
          <motion.h1
            style={{
              fontFamily: '"Be Vietnam Pro", sans-serif',
              fontWeight: 900,
              color: "#0D0D0D",
              lineHeight: 1.0,
              fontSize: "clamp(52px, 8vw, 108px)",
            }}
            {...anim(0)}
          >
            Here to{" "}
            <span
              style={{
                color: "#EB5E00",
                textDecoration: "underline",
                textDecorationColor: "#EB5E00",
                textUnderlineOffset: "6px",
                textDecorationThickness: "4px",
              }}
            >
              help
            </span>
          </motion.h1>

          <div className="contact-grid">
            {/* ── LEFT: narrow form ── */}
            <motion.div {...anim(0.1)}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <Field label="Full name">
                  <input
                    className="contact-input"
                    style={inputStyle}
                    type="text"
                    placeholder="Type your full name here"
                  />
                </Field>
                <Field label="Email Address">
                  <input
                    className="contact-input"
                    style={inputStyle}
                    type="email"
                    placeholder="Enter your email here"
                  />
                </Field>
                <Field label="Contact number">
                  <input
                    className="contact-input"
                    style={inputStyle}
                    type="tel"
                    placeholder="Enter you contact number here"
                  />
                </Field>
                <Field label="Message">
                  <textarea
                    className="contact-input"
                    style={{ ...inputStyle, resize: "none" }}
                    rows={5}
                    placeholder="Type your message here"
                  />
                </Field>
                <div>
                  <motion.button
                    style={{
                      background: "#EB5E00",
                      color: "#fff",
                      fontFamily: "Manrope, sans-serif",
                      fontWeight: 700,
                      fontSize: "13px",
                      padding: "12px 28px",
                      borderRadius: "8px",
                      border: "none",
                      cursor: "pointer",
                    }}
                    whileHover={{ backgroundColor: "#FF7A2F" }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Send Message
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* ── RIGHT: newsletter + large rotated phone icon ── */}
            <motion.div
              style={{ position: "relative", minHeight: "400px" }}
              {...anim(0.18)}
            >
              {/* Newsletter text content */}
              <div
                style={{ position: "relative", zIndex: 1, maxWidth: "340px" }}
              >
                <h2
                  style={{
                    fontFamily: '"Be Vietnam Pro", sans-serif',
                    fontWeight: 900,
                    fontSize: "26px",
                    color: "#0D0D0D",
                    marginBottom: "10px",
                  }}
                >
                  Join our newsletter
                </h2>
                <p
                  style={{
                    fontFamily: "Manrope, sans-serif",
                    fontSize: "13px",
                    color: "#6B7280",
                    lineHeight: 1.7,
                    marginBottom: "20px",
                  }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took
                </p>
                <Field label="Email Address">
                  <input
                    className="contact-input"
                    style={{ ...inputStyle, maxWidth: "280px" }}
                    type="email"
                    placeholder="Enter your email here"
                  />
                </Field>
                <button
                  style={{
                    marginTop: "14px",
                    background: "#EB5E00",
                    color: "#fff",
                    fontFamily: "Manrope, sans-serif",
                    fontWeight: 700,
                    fontSize: "13px",
                    padding: "12px 28px",
                    borderRadius: "8px",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#FF7A2F")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "#EB5E00")
                  }
                >
                  Sign up
                </button>
              </div>

              {/* Large rotated phone icon — fills right portion, matches Figma */}
              <div
                style={{
                  position: "absolute",
                  top: "-40px",
                  right: "-80px",
                  width: "420px",
                  height: "420px",
                  opacity: 0.15,
                  pointerEvents: "none",
                  userSelect: "none",
                  zIndex: 0,
                  transform: "rotate(15deg)",
                }}
              >
                <img
                  src="/phone-call.svg"
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating orange chat bubble — bottom right */}
        <motion.div
          style={{
            position: "fixed",
            bottom: "32px",
            right: "32px",
            zIndex: 40,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
        >
          <div
            style={{
              width: "44px",
              height: "44px",
              background: "#EB5E00",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 8px 24px rgba(235,94,0,0.35)",
              cursor: "pointer",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.12)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
            </svg>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
}
