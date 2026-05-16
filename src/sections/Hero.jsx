import { motion } from "framer-motion";

const anim = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" },
});

export default function Hero() {
  return (
    <>
      <style>{`
        @media (max-width: 1023px) {
          .hero-two-col {
            grid-template-columns: 1fr !important;
          }
          .hero-left-col {
            padding: 48px 0 32px 0 !important;
            align-items: center !important;
            text-align: center !important;
          }
          .hero-left-col .badge-wrap {
            display: flex;
            justify-content: center;
          }
          .hero-left-col p {
            text-align: center !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }
          .hero-left-col .badges-row {
            justify-content: center !important;
          }
          .hero-headline-line {
            justify-content: center !important;
          }
          .hero-right-col {
            min-height: 360px;
            padding-bottom: 48px;
          }
        }
      `}</style>

      <section
        id="home"
        className="bg-white overflow-hidden"
        style={{ paddingTop: "88px", minHeight: "100vh" }}
      >
        <div className="max-w-[1200px] mx-auto px-6 w-full">
          <div
            className="hero-two-col"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              minHeight: "calc(100vh - 88px)",
              alignItems: "center",
            }}
          >
            {/* ══ LEFT: Text column ══ */}
            <div
              className="hero-left-col"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "56px 48px 56px 0",
              }}
            >
              {/* Badge */}
              <motion.div className="badge-wrap" {...anim(0.05)}>
                <span
                  style={{
                    display: "inline-block",
                    background: "#FFF0E8",
                    color: "#EB5E00",
                    fontSize: "11px",
                    fontFamily: "Manrope, sans-serif",
                    fontWeight: 700,
                    letterSpacing: "0.13em",
                    textTransform: "uppercase",
                    padding: "6px 16px",
                    borderRadius: "4px",
                    marginBottom: "28px",
                  }}
                >
                  Smart Finance for Nigeria
                </span>
              </motion.div>

              {/* Headline block */}
              <motion.div {...anim(0.12)} style={{ marginBottom: "24px" }}>
                {/* Line 1: Your Money. */}
                <div
                  className="hero-headline-line"
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    flexWrap: "wrap",
                    gap: "1em",
                    lineHeight: 1.04,
                  }}
                >
                  <span
                    style={{
                      fontFamily: '"Be Vietnam Pro", sans-serif',
                      fontWeight: 800,
                      fontSize: "clamp(35px, 5vw, 70px)",
                      color: "#0D0D0D",
                      letterSpacing: "-2px",
                      lineHeight: 1.04,
                    }}
                  >
                    Your
                  </span>
                  <span
                    style={{
                      fontFamily: '"Gloria Hallelujah", cursive',
                      fontWeight: 400,
                      fontSize: "clamp(34px, 4.8vw, 74px)",
                      color: "#EB5E00",
                      letterSpacing: "-0.5px",
                      lineHeight: 1.25,
                    }}
                  >
                    Money.
                  </span>
                </div>

                {/* Line 2: Your Rules. */}
                <div
                  className="hero-headline-line"
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    flexWrap: "wrap",
                    gap: "1em",
                    lineHeight: 1.04,
                  }}
                >
                  <span
                    style={{
                      fontFamily: '"Be Vietnam Pro", sans-serif',
                      fontWeight: 800,
                      fontSize: "clamp(35px, 5vw, 70px)",
                      color: "#0D0D0D",
                      letterSpacing: "-2px",
                      lineHeight: 1.04,
                    }}
                  >
                    Your
                  </span>
                  <span
                    style={{
                      fontFamily: '"Be Vietnam Pro", sans-serif',
                      fontWeight: 100,
                      fontSize: "clamp(35px, 5vw, 70px)",
                      color: "#0D0D0D",
                      letterSpacing: "-2px",
                      lineHeight: 1.04,
                    }}
                  >
                    Rules.
                  </span>
                </div>

                {/* Line 3: All in One App. */}
                <div
                  className="hero-headline-line"
                  style={{
                    display: "flex",
                    lineHeight: 1.04,
                  }}
                >
                  <span
                    style={{
                      fontFamily: '"Be Vietnam Pro", sans-serif',
                      fontWeight: 800,
                      fontSize: "clamp(35px, 5vw, 70px)",
                      color: "#EB5E00",
                      letterSpacing: "-2px",
                      lineHeight: 1.04,
                    }}
                  >
                    All in One App.
                  </span>
                </div>
              </motion.div>

              {/* Description */}
              <motion.p
                {...anim(0.28)}
                style={{
                  fontFamily: "Manrope, sans-serif",
                  fontSize: "15px",
                  color: "#4B5563",
                  lineHeight: 1.75,
                  maxWidth: "440px",
                  marginBottom: "32px",
                }}
              >
                Master your financial life with a high-performance wallet,
                direct vendor marketplace, and elite billing tools. Kinetic
                energy for your capital.
              </motion.p>

              {/* Store badges */}
              <motion.div
                className="badges-row"
                {...anim(0.38)}
                style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}
              >
                <a
                  href="#"
                  style={{ display: "block", transition: "transform .2s" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "translateY(-3px)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "translateY(0)")
                  }
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                    alt="App Store"
                    style={{ height: "44px", width: "auto" }}
                  />
                </a>
                <a
                  href="#"
                  style={{ display: "block", transition: "transform .2s" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "translateY(-3px)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "translateY(0)")
                  }
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Google Play"
                    style={{ height: "44px", width: "auto" }}
                  />
                </a>
              </motion.div>
            </div>

            {/* ══ RIGHT: Mockup with watermark logo + bounce ══ */}
            <motion.div
              className="hero-right-col"
              initial={{ opacity: 0, x: 48 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, delay: 0.2, ease: "easeOut" }}
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              {/* Orange radial blob */}
              <div
                style={{
                  position: "absolute",
                  width: "460px",
                  height: "420px",
                  background:
                    "radial-gradient(ellipse at center, #FDDCCC 0%, rgba(253,220,204,0) 70%)",
                  borderRadius: "50%",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-45%, -50%)",
                  zIndex: 0,
                  pointerEvents: "none",
                }}
              />

              {/* Faded logo watermark — inlined SVG */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 1,
                  pointerEvents: "none",
                  userSelect: "none",
                }}
              >
                <svg
                  width="540"
                  height="520"
                  viewBox="0 0 60 57"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ opacity: 0.06 }}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.66184 21.2606C-0.23984 22.8888 -0.13996 27.2977 0.480812 28.8836C0.547744 30.6061 20.0937 33.7322 20.1995 25.5023C19.9599 18.8004 5.87771 18.4928 0.66184 21.2606ZM40.7752 55.1488C26.8296 58.6439 8.09238 57.7197 5.11996 47.7606C5.08424 47.5494 5.40815 47.3465 5.69495 47.4464C15.499 52.1663 28.761 50.9408 40.1058 47.4558V44.4691C27.8534 50.6689 -4.06366 43.7918 3.10435 34.7681C3.45254 34.3294 8.92747 36.611 15.2684 35.9181C30.4426 34.7102 29.2891 14.1661 10.3278 14.3513C3.8635 13.7621 -0.24053 18.3322 3.08355 11.7322C22.7502 -27.2245 92.319 42.2323 40.7752 55.1488Z"
                    fill="#EB5E00"
                  />
                </svg>
              </div>

              {/* Floating mockup — infinite bounce */}
              <motion.img
                src="/energywallet-app-mockup.png"
                alt="EnergyWallet App"
                animate={{ y: [0, -14, 0] }}
                transition={{
                  duration: 3.8,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                style={{
                  position: "relative",
                  zIndex: 2,
                  width: "100%",
                  maxWidth: "600px",
                  objectFit: "contain",
                  filter: "drop-shadow(0 20px 48px rgba(0,0,0,0.13))",
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
