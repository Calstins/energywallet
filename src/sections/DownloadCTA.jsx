import { motion } from "framer-motion";

export default function DownloadCTA() {
  return (
    <>
      <style>{`
        .cta-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: end;
          border-top: none;
          min-height: 420px;
        }
        .cta-phone-wrap {
          position: relative;
          width: 320px;
          margin-bottom: -200px;
          flex-shrink: 0;
        }
        .cta-right {
          position: relative;
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
          height: 100%;
        }

        @media (max-width: 1023px) {
          .cta-grid {
            grid-template-columns: 1fr;
            min-height: unset;
          }
          .cta-right {
            justify-content: center;
            align-items: center;
            margin-top: 32px;
          }
          .cta-phone-wrap {
            width: 75%;
            max-width: 280px;
            margin-bottom: -200px;
            margin-left: auto;
            margin-right: auto;
          }
        }
      `}</style>

      <section
        style={{
          background: "transparent",
          paddingTop: 10,
          paddingBottom: 100,
          position: "relative",
          zIndex: 10,
          overflow: "visible",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="cta-grid">
            {/* ── Left: text ── */}
            <motion.div
              style={{ paddingTop: "64px", paddingBottom: "80px" }}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2
                style={{
                  fontFamily: '"Be Vietnam Pro", sans-serif',
                  fontWeight: 900,
                  fontSize: "clamp(32px, 4vw, 56px)",
                  color: "#EB5E00",
                  lineHeight: 1.05,
                  marginBottom: "16px",
                }}
              >
                Explore Energy
              </h2>
              <p
                style={{
                  fontFamily: "Manrope, sans-serif",
                  color: "#374151",
                  fontSize: "16px",
                  lineHeight: 1.75,
                  maxWidth: "380px",
                  marginBottom: "32px",
                }}
              >
                Energywallet is a beautiful digital ecosystem designed to make
                payment easy for everyone.
              </p>
              <div style={{ display: "flex", gap: "48px", flexWrap: "wrap" }}>
                {["iOS", "Android"].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      color: "#EB5E00",
                      fontFamily: "Manrope, sans-serif",
                      fontWeight: 700,
                      fontSize: "14px",
                      textDecoration: "none",
                      transition: "gap 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.gap = "12px")}
                    onMouseLeave={(e) => (e.currentTarget.style.gap = "6px")}
                  >
                    Download for {platform}
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
                  </a>
                ))}
              </div>
            </motion.div>

            {/* ── Right: phone ── */}
            <motion.div
              className="cta-right"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="cta-phone-wrap">
                <img
                  src="/phone.png"
                  alt="EnergyWallet App"
                  style={{
                    width: "100%",
                    objectFit: "contain",
                    display: "block",
                    filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.12))",
                  }}
                />
                {/* Fade overlay */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "45%",
                    background:
                      "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
                    pointerEvents: "none",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
