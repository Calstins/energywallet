import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const footerLinks = [
  { label: "About", to: "/about" },
  { label: "App Details", to: "/app-details" },
  { label: "Support", to: "/support" },
  { label: "Privacy", to: "/support" },
  { label: "Terms", to: "/support" },
];

export default function Footer() {
  return (
    <>
      <style>{`
        .footer-inner {
          display: flex;
          flex-direction: row;
          align-items: flex-end;
          justify-content: space-between;
          gap: 32px;
          padding: 56px 24px 40px;
        }
        .footer-brand-text {
          font-family: "Be Vietnam Pro", sans-serif;
          font-weight: 900;
          font-size: clamp(40px, 6vw, 80px);
          line-height: 1;
          margin-bottom: 12px;
          padding-bottom: 20px;
          background: linear-gradient(90deg, #EB5E00 0%, #FF9A5C 50%, #FAD9C4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .footer-nav {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          gap: 8px 24px;
          justify-content: flex-end;
          align-items: flex-end;
          padding-bottom: 4px;
        }

        @media (max-width: 767px) {
          .footer-inner {
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 48px 24px 36px;
            gap: 24px;
          }
          .footer-brand-text {
            font-size: clamp(36px, 10vw, 56px);
          }
          .footer-nav {
            justify-content: center;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 8px 20px;
          }
          .footer-copy {
            text-align: center;
          }
        }
      `}</style>

      <footer
        style={{
          background: "#0D0D0D",
          color: "#fff",
          position: "relative",
          zIndex: 40,
        }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="footer-inner">
            {/* Brand block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="footer-brand-text">EnergyWallet</div>
              <p
                className="footer-copy"
                style={{
                  fontFamily: "Manrope, sans-serif",
                  fontSize: "13px",
                  color: "#6B7280",
                  margin: 0,
                }}
              >
                © 2024 EnergyWallet. Built for the Nigerian digital community.
              </p>
            </motion.div>

            {/* Nav links — horizontal row, right-aligned desktop / centered mobile */}
            <motion.nav
              className="footer-nav"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {footerLinks.map((l) => (
                <Link
                  key={l.label}
                  to={l.to}
                  style={{
                    fontFamily: "Manrope, sans-serif",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "#9CA3AF",
                    textDecoration: "none",
                    transition: "color 0.2s",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#9CA3AF")
                  }
                >
                  {l.label}
                </Link>
              ))}
            </motion.nav>
          </div>
        </div>
      </footer>
    </>
  );
}
