"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SiteInteractions() {
  useEffect(() => {
    const cleanups: Array<() => void> = [];
    const fine = window.matchMedia("(pointer:fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion:reduce)").matches;

    /* ---------- Custom cursor ---------- */
    if (fine) {
      const dot = document.createElement("div");
      dot.className = "cur-dot";
      const ring = document.createElement("div");
      ring.className = "cur-ring";
      document.body.appendChild(ring);
      document.body.appendChild(dot);
      const prevCursor = document.body.style.cursor;
      document.body.style.cursor = "none";

      let mx = window.innerWidth / 2;
      let my = window.innerHeight / 2;
      let rx = mx;
      let ry = my;
      let cursorRaf = 0;

      const onMove = (e: MouseEvent) => {
        mx = e.clientX;
        my = e.clientY;
        dot.style.left = mx + "px";
        dot.style.top = my + "px";
      };
      window.addEventListener("mousemove", onMove);

      const loop = () => {
        rx += (mx - rx) * 0.18;
        ry += (my - ry) * 0.18;
        ring.style.left = rx + "px";
        ring.style.top = ry + "px";
        cursorRaf = requestAnimationFrame(loop);
      };
      cursorRaf = requestAnimationFrame(loop);

      const hoverSel = "a,button,[data-cursor],[data-magnetic]";
      const onOver = (e: MouseEvent) => {
        const t = (e.target as HTMLElement)?.closest?.(hoverSel) as HTMLElement | null;
        if (t) {
          ring.style.width = "58px";
          ring.style.height = "58px";
          ring.style.background = t.hasAttribute("data-invert")
            ? "rgba(241,236,225,.25)"
            : "rgba(108,116,73,.16)";
        }
      };
      const onOut = (e: MouseEvent) => {
        const t = (e.target as HTMLElement)?.closest?.(hoverSel) as HTMLElement | null;
        if (t) {
          ring.style.width = "42px";
          ring.style.height = "42px";
          ring.style.background = "transparent";
        }
      };
      document.addEventListener("mouseover", onOver);
      document.addEventListener("mouseout", onOut);

      cleanups.push(() => {
        cancelAnimationFrame(cursorRaf);
        window.removeEventListener("mousemove", onMove);
        document.removeEventListener("mouseover", onOver);
        document.removeEventListener("mouseout", onOut);
        dot.remove();
        ring.remove();
        document.body.style.cursor = prevCursor;
      });
    }

    /* ---------- Smooth momentum scroll (Lenis) ---------- */
    let lenis: Lenis | null = null;
    let lenisRaf = 0;
    if (!reduce) {
      lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 1, smoothWheel: true });
      const raf = (t: number) => {
        lenis?.raf(t);
        lenisRaf = requestAnimationFrame(raf);
      };
      lenisRaf = requestAnimationFrame(raf);
      cleanups.push(() => {
        cancelAnimationFrame(lenisRaf);
        lenis?.destroy();
        lenis = null;
      });
    }

    /* ---------- Anchor nav ---------- */
    const navHandlers: Array<{ el: Element; fn: (e: Event) => void }> = [];
    document.querySelectorAll("[data-nav]").forEach((a) => {
      const fn = (e: Event) => {
        const id = a.getAttribute("href");
        if (!id || !id.startsWith("#")) return;
        const el = id === "#top" ? document.body : document.querySelector(id);
        if (!el) return;
        e.preventDefault();
        const y = id === "#top" ? 0 : (el as HTMLElement).getBoundingClientRect().top + window.scrollY - 10;
        if (lenis) lenis.scrollTo(y, { duration: 1.3 });
        else window.scrollTo({ top: y, behavior: "smooth" });
      };
      a.addEventListener("click", fn);
      navHandlers.push({ el: a, fn });
    });
    cleanups.push(() => navHandlers.forEach(({ el, fn }) => el.removeEventListener("click", fn)));

    /* ---------- Nav background on scroll + scroll-spy ---------- */
    const nav = document.getElementById("nav");
    const links = Array.from(document.querySelectorAll<HTMLElement>("[data-navlink]"));
    const sections = ["work", "projects", "about", "contact"]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    const onScroll = () => {
      if (!nav) return;
      if (window.scrollY > 40) {
        nav.style.background = "rgba(241,236,225,.82)";
        nav.style.backdropFilter = "blur(12px)";
        nav.style.borderBottomColor = "var(--line)";
      } else {
        nav.style.background = "transparent";
        nav.style.backdropFilter = "none";
        nav.style.borderBottomColor = "transparent";
      }
      let cur = "";
      sections.forEach((s) => {
        if (s.getBoundingClientRect().top < window.innerHeight * 0.4) cur = s.id;
      });
      links.forEach((l) => {
        const on = l.getAttribute("data-navlink") === cur;
        l.style.opacity = on ? "1" : ".7";
        l.style.color = on ? "var(--accent)" : "";
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    cleanups.push(() => window.removeEventListener("scroll", onScroll));

    /* ---------- Toolbox: pause on hover + chip hover ---------- */
    const toolbox = document.querySelector<HTMLElement>("[data-toolbox]");
    if (toolbox) {
      const onEnter = () => {
        toolbox.style.animationPlayState = "paused";
      };
      const onLeave = () => {
        toolbox.style.animationPlayState = "running";
      };
      toolbox.addEventListener("mouseenter", onEnter);
      toolbox.addEventListener("mouseleave", onLeave);
      cleanups.push(() => {
        toolbox.removeEventListener("mouseenter", onEnter);
        toolbox.removeEventListener("mouseleave", onLeave);
      });

      toolbox.querySelectorAll<HTMLElement>('span[style*="border"]').forEach((chip) => {
        const baseColor = chip.style.color;
        chip.style.transition = "background .25s ease, color .25s ease, transform .25s ease";
        const enter = () => {
          chip.style.background = "var(--ink)";
          chip.style.color = "var(--bg)";
          chip.style.transform = "translateY(-3px)";
        };
        const leave = () => {
          chip.style.background = "";
          chip.style.color = baseColor;
          chip.style.transform = "";
        };
        chip.addEventListener("mouseenter", enter);
        chip.addEventListener("mouseleave", leave);
        cleanups.push(() => {
          chip.removeEventListener("mouseenter", enter);
          chip.removeEventListener("mouseleave", leave);
        });
      });
    }

    /* ---------- Experience row hover ---------- */
    document.querySelectorAll<HTMLElement>("[data-exp]").forEach((row) => {
      const enter = () => {
        row.style.color = "var(--accent)";
        row.style.paddingLeft = "30px";
        row.style.background = "rgba(108,116,73,.05)";
      };
      const leave = () => {
        row.style.color = "";
        row.style.paddingLeft = "16px";
        row.style.background = "";
      };
      row.addEventListener("mouseenter", enter);
      row.addEventListener("mouseleave", leave);
      cleanups.push(() => {
        row.removeEventListener("mouseenter", enter);
        row.removeEventListener("mouseleave", leave);
      });
    });

    /* ---------- Magnetic ---------- */
    if (fine && !reduce) {
      document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
        const strength = 0.32;
        el.style.transition = "transform .35s cubic-bezier(.16,1,.3,1)";
        const move = (e: MouseEvent) => {
          const r = el.getBoundingClientRect();
          const x = e.clientX - (r.left + r.width / 2);
          const y = e.clientY - (r.top + r.height / 2);
          el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
        };
        const leave = () => {
          el.style.transform = "translate(0,0)";
        };
        el.addEventListener("mousemove", move);
        el.addEventListener("mouseleave", leave);
        cleanups.push(() => {
          el.removeEventListener("mousemove", move);
          el.removeEventListener("mouseleave", leave);
        });
      });
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
