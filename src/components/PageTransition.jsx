import { motion, useReducedMotion } from "framer-motion";

/**
 * Opacity-only cross-fade on route change. Wrap each page's content.
 * Kept as the DIRECT keyed child of <AnimatePresence> in App.jsx, so the
 * motion wrapper below is what actually animates in/out.
 * Reduced motion → instant (no fade).
 */
export default function PageTransition({ children }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: reduce ? 1 : 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: reduce ? 1 : 0 }}
      transition={{ duration: reduce ? 0 : 0.24, ease: "linear" }}
    >
      {children}
    </motion.div>
  );
}
