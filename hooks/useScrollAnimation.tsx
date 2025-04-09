"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

export function useScrollAnimation(threshold = 0.3) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: threshold });
  
  return { ref, isInView };
}
