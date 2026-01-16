// components/AOSWrapper.tsx
"use client";
import { useEffect, ReactNode } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSWrapper({ children }: { children: ReactNode }) {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return <>{children}</>;
}
