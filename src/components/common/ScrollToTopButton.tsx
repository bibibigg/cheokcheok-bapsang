"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          aria-label="맨 위로 이동"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            transition: {
              type: "spring",
              stiffness: 260,
              damping: 20,
            }
          }}
          exit={{
            scale: 0,
            opacity: 0,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 25,
            }
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="
            fixed bottom-6 right-6 z-50
            rounded-full bg-white dark:bg-gray-800
            border border-gray-200 dark:border-gray-700
            text-gray-700 dark:text-gray-200
            shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700
            w-12 h-12 flex items-center justify-center
          "
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
