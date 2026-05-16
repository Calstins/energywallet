import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

const team = [
  {
    name: "Tony George",
    role: "Founder",
    img: "/team-tony.jpg",
    bio: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    name: "Innocent Idewele",
    role: "Lead Engineer",
    img: "/team-innocent.jpg",
    bio: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    name: "Sonia Ezeribe",
    role: "Product Manager",
    img: "/team-sonia.jpg",
    bio: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    name: "Tolu Richards",
    role: "Digital Growth Strategist",
    img: "/team-tolu.jpg",
    bio: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
  },
  {
    name: "Nsisong Uyire",
    role: "BDM",
    img: null,
    bio: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

function TeamCard({ member, delay }) {
  return (
    <motion.div
      {...fadeUp(delay)}
      style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}
    >
      <div
        style={{
          width: "120px",
          height: "140px",
          flexShrink: 0,
          borderRadius: "12px",
          overflow: "hidden",
          background: "#F3F4F6",
        }}
      >
        {member.img ? (
          <img
            src={member.img}
            alt={member.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top",
            }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#FFF0E8",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="#EB5E00"
              style={{ width: "40px", height: "40px", opacity: 0.4 }}
            >
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
            </svg>
          </div>
        )}
      </div>
      <div style={{ flex: 1, paddingTop: "4px" }}>
        <h3
          style={{
            fontFamily: '"Be Vietnam Pro", sans-serif',
            fontWeight: 900,
            fontSize: "20px",
            color: "#EB5E00",
            lineHeight: 1.2,
            marginBottom: "4px",
          }}
        >
          {member.name}
        </h3>
        <p
          style={{
            fontFamily: "Manrope, sans-serif",
            fontWeight: 600,
            fontSize: "13px",
            color: "#6B7280",
            marginBottom: "10px",
          }}
        >
          {member.role}
        </p>
        <p
          style={{
            fontFamily: "Manrope, sans-serif",
            fontSize: "12px",
            color: "#9CA3AF",
            lineHeight: 1.65,
            margin: 0,
          }}
        >
          {member.bio}
        </p>
      </div>
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <PageTransition>
      <style>{`
        .about-page {
          padding-top: 88px;
          min-height: 100vh;
          background: #fff;
          position: relative;
          overflow: hidden;
        }
        .about-watermark {
          position: fixed;
          top: 88px;
          right: 0;
          width: 46%;
          height: calc(100vh - 88px);
          pointer-events: none;
          user-select: none;
          z-index: 0;
          opacity: 0.07;
        }
        .about-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 64px 24px 80px;
          position: relative;
          z-index: 1;
        }
        .about-text-block {
          /* No width constraint — text fills the container naturally */
          margin-bottom: 72px;
        }
        .about-team-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          margin-bottom: 32px;
        }
        @media (max-width: 1023px) {
          .about-watermark { width: 60%; }
          .about-team-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .about-watermark { display: none; }
          .about-team-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div className="about-page">
        {/* SVG watermark — fixed to viewport right, behind everything */}
        <svg
          className="about-watermark"
          viewBox="0 0 60 57"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.66184 21.2606C-0.23984 22.8888 -0.13996 27.2977 0.480812 28.8836C0.547744 30.6061 20.0937 33.7322 20.1995 25.5023C19.9599 18.8004 5.87771 18.4928 0.66184 21.2606ZM40.7752 55.1488C26.8296 58.6439 8.09238 57.7197 5.11996 47.7606C5.08424 47.5494 5.40815 47.3465 5.69495 47.4464C15.499 52.1663 28.761 50.9408 40.1058 47.4558V44.4691C27.8534 50.6689 -4.06366 43.7918 3.10435 34.7681C3.45254 34.3294 8.92747 36.611 15.2684 35.9181C30.4426 34.7102 29.2891 14.1661 10.3278 14.3513C3.8635 13.7621 -0.24053 18.3322 3.08355 11.7322C22.7502 -27.2245 92.319 42.2323 40.7752 55.1488Z"
            fill="#EB5E00"
          />
        </svg>

        <div className="about-container">
          {/* Heading */}
          <motion.h1
            style={{
              fontFamily: '"Be Vietnam Pro", sans-serif',
              fontWeight: 900,
              fontSize: "clamp(28px, 3vw, 40px)",
              color: "#0D0D0D",
              marginBottom: "24px",
            }}
            {...fadeUp(0)}
          >
            Energywallet
          </motion.h1>

          {/* Body text — no width constraint, fills container */}
          <motion.div className="about-text-block" {...fadeUp(0.08)}>
            <p
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: "14px",
                color: "#4B5563",
                lineHeight: 1.85,
                marginBottom: "20px",
              }}
            >
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
            <p
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: "14px",
                color: "#4B5563",
                lineHeight: 1.85,
                margin: 0,
              }}
            >
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested. Sections 1.10.32 and
              1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
              reproduced in their exact original form, accompanied by English
              versions from the 1914 translation by H. Rackham.
            </p>
          </motion.div>

          {/* TEAM label */}
          <motion.h2
            style={{
              fontFamily: '"Be Vietnam Pro", sans-serif',
              fontWeight: 900,
              fontSize: "22px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#0D0D0D",
              marginBottom: "40px",
            }}
            {...fadeUp(0.1)}
          >
            TEAM
          </motion.h2>

          {/* Row 1 */}
          <div className="about-team-grid">
            {team.slice(0, 3).map((m, i) => (
              <TeamCard key={m.name} member={m} delay={0.1 + i * 0.1} />
            ))}
          </div>

          {/* Row 2 */}
          <div className="about-team-grid">
            {team.slice(3).map((m, i) => (
              <TeamCard key={m.name} member={m} delay={0.35 + i * 0.1} />
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
