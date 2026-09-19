import { useEffect } from "react";

export function useScrollExperience() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = window.matchMedia("(min-width: 900px)");
    const root = document.documentElement;
    const hero = document.querySelector<HTMLElement>(".work-deck");
    const projects = Array.from(
      document.querySelectorAll<HTMLElement>(".project"),
    );
    const links = Array.from(
      document.querySelectorAll<HTMLAnchorElement>(".work-index a"),
    );
    let frame = 0;
    const clamp = (n: number, min: number, max: number) =>
      Math.max(min, Math.min(max, n));
    const render = () => {
      frame = 0;
      const h = window.innerHeight;
      const total = document.documentElement.scrollHeight - h;
      root.style.setProperty(
        "--reading-progress",
        String(total > 0 ? window.scrollY / total : 0),
      );
      const motion = !reduced.matches && desktop.matches;
      hero?.style.setProperty(
        "--deck-scroll",
        motion ? `${clamp(window.scrollY * 0.055, 0, 32)}px` : "0px",
      );
      let active = "";
      projects.forEach((project) => {
        const box = project.getBoundingClientRect();
        if (box.top < h * 0.55 && box.bottom > h * 0.3) active = project.id;
        project.style.setProperty(
          "--image-shift",
          motion
            ? `${clamp((h * 0.5 - box.top - box.height * 0.25) * 0.035, -13, 13)}px`
            : "0px",
        );
      });
      links.forEach((link) => {
        const current = link.hash === `#${active}`;
        link.classList.toggle("is-current", current);
        if (current) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(render);
    };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    reduced.addEventListener("change", schedule);
    desktop.addEventListener("change", schedule);
    const observer =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(schedule)
        : null;
    observer?.observe(document.body);
    render();
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      reduced.removeEventListener("change", schedule);
      desktop.removeEventListener("change", schedule);
      observer?.disconnect();
      if (frame) cancelAnimationFrame(frame);
      root.style.removeProperty("--reading-progress");
      hero?.style.removeProperty("--deck-scroll");
      projects.forEach((p) => p.style.removeProperty("--image-shift"));
    };
  }, []);
}
