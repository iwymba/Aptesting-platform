"use client";
import { useEffect, useRef } from "react";
export default function Reveal({ children, className = "" }) {
  const r = useRef(null);
  useEffect(() => {
    const el = r.current;
    if (!el || !("IntersectionObserver" in window)) return el?.classList.add("in");
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("in"); io.disconnect(); } }, { threshold: 0.1 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={r} className={`rv ${className}`}>{children}</div>;
}
