"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";

export function useScrollAnimation(options = { once: true, amount: 0.3 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, options);
  
  return { ref, isInView };
}
