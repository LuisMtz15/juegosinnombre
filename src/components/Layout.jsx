// src/components/Layout.jsx
import { motion } from "framer-motion";

import F1 from "../assets/F1.png";
import F2 from "../assets/F2.png";
import F3 from "../assets/F3.png";
import F4 from "../assets/F4.png";
import F5 from "../assets/F5.png";
import F6 from "../assets/F6.png";
import F7 from "../assets/F7.png";
import F8 from "../assets/F8.png";
import F9 from "../assets/F9.png";
import F10 from "../assets/F10.png";

/* ---------- MOBILE ---------- */
const mobileBlobs = [
  { src: F1, className: "-top-6 left-4 w-24" },
  { src: F4, className: "-top-6 right-4 w-24" },

  { src: F5, className: "top-1/2 -left-8 w-24 -translate-y-1/2" },
  { src: F7, className: "top-1/2 -right-8 w-24 -translate-y-1/2" },

  { src: F9, className: "-bottom-6 left-6 w-24" },
  { src: F10, className: "-bottom-6 right-6 w-24" },
];

/* ---------- DESKTOP ---------- */
const desktopBlobs = [
  // ANILLO SUPERIOR
  { src: F1, className: "-top-24 left-4 w-32 lg:w-40", anim: 4.0 },
  { src: F2, className: "-top-28 left-1/4 w-32 lg:w-40", anim: 4.6 },
  { src: F3, className: "-top-28 left-1/2 w-32 lg:w-40", anim: 5.0 },
  { src: F4, className: "-top-24 right-1/4 w-32 lg:w-40", anim: 5.4 },
  { src: F2, className: "-top-20 right-4 w-28 lg:w-36", anim: 5.8 },

  // ANILLO MEDIO
  { src: F5, className: "top-1/4 -left-24 w-32 lg:w-40", anim: 6.0 },
  { src: F1, className: "top-1/2 -left-16 w-28 lg:w-36", anim: 4.3 },
  {
    src: F7,
    className: "top-1/2 left-1/2 w-28 lg:w-36 -translate-x-1/2",
    anim: 5.2,
  },
  { src: F8, className: "top-1/2 -right-16 w-28 lg:w-36", anim: 6.4 },
  { src: F5, className: "top-1/4 -right-24 w-32 lg:w-40", anim: 4.9 },

  // ANILLO INFERIOR
  { src: F9, className: "-bottom-10 left-6 w-32 lg:w-40", anim: 5.1 },
  { src: F10, className: "-bottom-14 left-1/3 w-32 lg:w-40", anim: 5.7 },
  { src: F7, className: "-bottom-16 right-1/3 w-32 lg:w-40", anim: 6.3 },
  { src: F8, className: "-bottom-10 right-6 w-32 lg:w-40", anim: 4.5 },
];

export default function Layout({ children, onEndSession }) {
  return (
    <div className="h-screen bg-[#FBF7F1] flex items-center justify-center px-4 py-3 sm:py-6 overflow-hidden relative font-fredoka">
      {/* BOTÓN FLOTANTE PARA TERMINAR SESIÓN (sólo host) */}
      {onEndSession && (
        <button
          type="button"
          onClick={onEndSession}
          className="absolute top-3 right-4 z-20 rounded-full border border-[#343434]/15 bg-white/90 px-3 py-1 text-xs sm:text-sm font-medium text-[#343434] shadow-sm hover:bg-[#FBEFE3] hover:-translate-y-0.5 transition"
        >
          Terminar sesión
        </button>
      )}

      {/* BLOBS MOBILE */}
      {mobileBlobs.map((blob, index) => (
        <motion.img
          key={`m-${index}`}
          src={blob.src}
          alt=""
          className={`pointer-events-none absolute z-0 opacity-90 sm:hidden ${blob.className}`}
          initial={{ y: -3 }}
          animate={{ y: 3 }}
          transition={{
            duration: 3.5 + index * 0.4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}

      {/* BLOBS DESKTOP / TABLET */}
      {desktopBlobs.map((blob, index) => (
        <motion.img
          key={`d-${index}`}
          src={blob.src}
          alt=""
          className={`pointer-events-none absolute z-0 opacity-90 hidden sm:block ${blob.className}`}
          initial={{ y: -8 }}
          animate={{ y: 8 }}
          transition={{
            duration: blob.anim,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}

      {/* TARJETA CENTRAL */}
      <motion.main
        className="relative z-10 w-full max-w-2xl bg-white/90 backdrop-blur-xl shadow-xl rounded-3xl p-6 sm:p-8 border border-[#FBF7F1]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        {children}
      </motion.main>
    </div>
  );
}