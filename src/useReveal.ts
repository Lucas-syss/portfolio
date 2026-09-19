import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let observer: IntersectionObserver | undefined;
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal"),
    );
    const showAll = () =>
      elements.forEach((el) => {
        el.classList.remove("will-reveal");
        el.classList.add("revealed");
      });
    const setup = () => {
      observer?.disconnect();
      if (preference.matches || !("IntersectionObserver" in window)) {
        showAll();
        return;
      }
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries)
            if (entry.isIntersecting) {
              entry.target.classList.add("revealed");
              observer?.unobserve(entry.target);
            }
        },
        { threshold: 0.06 },
      );
      for (const el of elements) {
        if (el.getBoundingClientRect().top < window.innerHeight) {
          el.classList.add("revealed");
          continue;
        }
        el.classList.remove("revealed");
        el.classList.add("will-reveal");
        observer.observe(el);
      }
    };
    setup();
    preference.addEventListener("change", setup);
    return () => {
      observer?.disconnect();
      preference.removeEventListener("change", setup);
      showAll();
    };
  }, []);
}
