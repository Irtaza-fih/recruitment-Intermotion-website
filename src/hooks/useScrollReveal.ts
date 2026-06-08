import { useEffect, useRef } from "react";

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    // Observe all children with scroll-reveal class, or the element itself
    const children = el.querySelectorAll<HTMLElement>(".scroll-reveal");
    if (children.length > 0) {
      children.forEach((child, i) => {
        child.style.transitionDelay = `${i * 0.1}s`;
        const rect = child.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          child.classList.add("revealed");
        } else {
          observer.observe(child);
        }
      });
    } else {
      el.classList.add("scroll-reveal");
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add("revealed");
      } else {
        observer.observe(el);
      }
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}
