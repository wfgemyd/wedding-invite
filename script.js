// -------------------- Reveal on scroll --------------------
const revealEls = document.querySelectorAll(".reveal");

const revealIO = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (e.isIntersecting) e.target.classList.add("in-view");
    }
  },
  { threshold: 0.18, rootMargin: "0px 0px -10% 0px" }
);

revealEls.forEach((el) => revealIO.observe(el));

// Footer year
const y = document.getElementById("year");
if (y) y.textContent = new Date().getFullYear();

// -------------------- Fireworks (WELCOME ONLY) --------------------
(() => {
  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  if (prefersReduced) return;

  const hero = document.getElementById("welcome");
  const canvas = document.getElementById("heroFx");
  if (!hero || !canvas) return;

  const ctx = canvas.getContext("2d", { alpha: true });

  // Soft wedding palette for fireworks
  const COLORS = [
    "#F2A7B5",
    "#FFD7E0",
    "#B9DCFF",
    "#DDE9D7",
    "#E9D7FF",
    "#F3DEC3",
  ];

  let running = false;
  let rafId = 0;
  let lastBurst = 0;

  const particles = [];
  const MAX_PARTICLES = 1200;

  function rand(min, max) {
    return Math.random() * (max - min) + min;
  }
  function pick(arr) {
    return arr[(Math.random() * arr.length) | 0];
  }

  function resizeToHero() {
    const r = hero.getBoundingClientRect();
    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    canvas.width = Math.floor(r.width * dpr);
    canvas.height = Math.floor(r.height * dpr);
    canvas.style.width = r.width + "px";
    canvas.style.height = r.height + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  window.addEventListener("resize", resizeToHero);
  resizeToHero();

  function hexToRgba(hex, a) {
    const h = hex.replace("#", "");
    const r = parseInt(h.slice(0, 2), 16);
    const g = parseInt(h.slice(2, 4), 16);
    const b = parseInt(h.slice(4, 6), 16);
    return `rgba(${r},${g},${b},${Math.max(0, Math.min(1, a))})`;
  }

  function drawGlow(x, y, coreR, color, alpha) {
    const glowR = coreR * 7.5; // bigger/wider
    const g = ctx.createRadialGradient(x, y, 0, x, y, glowR);
    g.addColorStop(0, hexToRgba(color, alpha * 0.55));
    g.addColorStop(0.25, hexToRgba(color, alpha * 0.2));
    g.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(x, y, glowR, 0, Math.PI * 2);
    ctx.fill();
  }

  function burst(cx, cy) {
    // bigger + wider, not fast
    const count = rand(95, 150) | 0;
    const color = pick(COLORS);

    for (let i = 0; i < count; i++) {
      const a = rand(0, Math.PI * 2);

      // wider spread, moderate speed (not “fast”)
      const speed = rand(1.6, 4.2);
      const r = rand(2.4, 4.8);
      const life = rand(85, 140); // longer life

      particles.push({
        x: cx,
        y: cy,
        vx: Math.cos(a) * speed,
        vy: Math.sin(a) * speed,
        drag: rand(0.988, 0.996),
        g: rand(0.012, 0.028),
        r,
        life,
        maxLife: life,
        color: Math.random() < 0.18 ? pick(COLORS) : color,
      });
    }

    if (particles.length > MAX_PARTICLES) {
      particles.splice(0, particles.length - MAX_PARTICLES);
    }
  }

  function step(now) {
    if (!running) return;

    const w = hero.clientWidth;
    const h = hero.clientHeight;

    ctx.clearRect(0, 0, w, h);

    // Slower burst rate
    if (now - lastBurst > 1400) {
      lastBurst = now;

      // Place bursts mostly behind center/top area (looks romantic, not chaotic)
      const x = rand(w * 0.2, w * 0.8);
      const y = rand(h * 0.12, h * 0.58);
      burst(x, y);
    }

    // Additive glow
    ctx.globalCompositeOperation = "lighter";

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];

      p.vx *= p.drag;
      p.vy *= p.drag;
      p.vy += p.g;

      p.x += p.vx;
      p.y += p.vy;

      p.life -= 1;

      const a = Math.max(0, p.life / p.maxLife);

      // Glow + core
      drawGlow(p.x, p.y, p.r, p.color, a);
      ctx.globalAlpha = a * 0.85;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();

      if (
        p.life <= 0 ||
        p.x < -140 ||
        p.x > w + 140 ||
        p.y < -140 ||
        p.y > h + 140
      ) {
        particles.splice(i, 1);
      }
    }

    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = "source-over";

    rafId = requestAnimationFrame(step);
  }

  function start() {
    if (running) return;
    running = true;
    resizeToHero();
    lastBurst = performance.now();
    rafId = requestAnimationFrame(step);
  }

  function stop() {
    running = false;
    cancelAnimationFrame(rafId);
    particles.length = 0;
    const w = hero.clientWidth;
    const h = hero.clientHeight;
    ctx.clearRect(0, 0, w, h);
  }

  // Run fireworks only while hero is on screen
  const heroIO = new IntersectionObserver(
    (entries) => {
      const on = entries.some((e) => e.isIntersecting);
      if (on) start();
      else stop();
    },
    { threshold: 0.35 }
  );

  heroIO.observe(hero);
})();
