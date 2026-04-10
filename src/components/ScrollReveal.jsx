"use client";
import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target); // ✅ sirf 1 baar animate hoga
          }
          // ❌ else block bilkul mat likho — warna hide hota rahega
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px", // ✅ thoda pehle trigger hoga
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}