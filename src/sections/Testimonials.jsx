import { motion } from "framer-motion";

const testimonials = [
  {
    name: "miguel piedrafita",
    handle: "@m1guelpf",
    text: "The Energywallet app has some of the best UI and UX of a digital app I've ever seen. Every snippet just blows my mind more and more.",
  },
  {
    name: "miguel piedrafita",
    handle: "@m1guelpf",
    text: "The Energywallet app has some of the best UI and UX of a digital app I've ever seen. Every snippet just blows my mind more and more.",
  },
  {
    name: "miguel piedrafita",
    handle: "@m1guelpf",
    text: "The Energywallet app has some of the best UI and UX of a digital app I've ever seen. Every snippet just blows my mind more and more.",
  },
  {
    name: "miguel piedrafita",
    handle: "@m1guelpf",
    text: "The Energywallet app has some of the best UI and UX of a digital app I've ever seen. Every snippet just blows my mind more and more.",
  },
  {
    name: "miguel piedrafita",
    handle: "@m1guelpf",
    text: "The Energywallet app has some of the best UI and UX of a digital app I've ever seen. Every snippet just blows my mind more and more.",
  },
  {
    name: "miguel piedrafita",
    handle: "@m1guelpf",
    text: "The Energywallet app has some of the best UI and UX of a digital app I've ever seen. Every snippet just blows my mind more and more.",
  },
  {
    name: "miguel piedrafita",
    handle: "@m1guelpf",
    text: "The Energywallet app has some of the best UI and UX of a digital app I've ever seen. Every snippet just blows my mind more and more.",
  },
  {
    name: "miguel piedrafita",
    handle: "@m1guelpf",
    text: "The Energywallet app has some of the best UI and UX of a digital app I've ever seen. Every snippet just blows my mind more and more.",
  },
];

const Avatar = () => (
  <div
    style={{
      width: "36px",
      height: "36px",
      borderRadius: "50%",
      background: "#F3F4F6",
      flexShrink: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <svg
      viewBox="0 0 24 24"
      fill="#9CA3AF"
      style={{ width: "20px", height: "20px" }}
    >
      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
    </svg>
  </div>
);

function CardInner({ t }) {
  return (
    <div
      style={{
        border: "1px solid #F5C9AD",
        background: "linear-gradient(145deg, #FFFAF7 0%, #FFFFFF 100%)",
        borderRadius: "16px",
        padding: "20px",
        height: "100%",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <Avatar />
        <div>
          <div
            style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 700,
              fontSize: "13px",
              color: "#111827",
            }}
          >
            {t.name}
          </div>
          <div
            style={{
              fontFamily: "Manrope, sans-serif",
              fontSize: "11px",
              color: "#9CA3AF",
            }}
          >
            {t.handle}
          </div>
        </div>
      </div>
      <p
        style={{
          fontFamily: "Manrope, sans-serif",
          fontSize: "13px",
          color: "#4B5563",
          lineHeight: 1.65,
          margin: 0,
        }}
      >
        {t.text}
      </p>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white overflow-hidden">
      <style>{`
        .testimonial-scroll::-webkit-scrollbar { display: none; }
        .t-desktop { display: none; }
        .t-mobile  { display: flex; }
        @media (min-width: 768px) {
          .t-desktop { display: grid; }
          .t-mobile  { display: none; }
        }
      `}</style>

      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2
            className="font-headline font-black text-[#EB5E00]"
            style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
          >
            Friends of Energy
          </h2>
          <p className="font-body text-gray-700 text-lg font-semibold mt-1">
            See what people are saying.
          </p>
        </motion.div>

        {/* ── DESKTOP: 4-col × 2-row grid ── */}
        <div
          className="t-desktop"
          style={{
            gridTemplateColumns: "repeat(4, 1fr)",
            gridTemplateRows: "repeat(2, auto)",
            gap: "16px",
          }}
        >
          {testimonials.slice(0, 8).map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
            >
              <CardInner t={t} />
            </motion.div>
          ))}
        </div>

        {/* ── MOBILE: drag-to-scroll single row ── */}
        <div
          className="testimonial-scroll t-mobile"
          style={{
            gap: "15px",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            paddingBottom: "8px",
            cursor: "grab",
          }}
        >
          {testimonials.slice(0, 8).map((t, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                width: "70vw",
                minHeight: "200px",
                scrollSnapAlign: "start",
              }}
            >
              <CardInner t={t} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
