/**
 * GSAP Animation Pack v1.0
 * main.js — cursor, scroll progress, entrance animations, UI logic
 */

import {
  play1, play2, play3, play4, play5, play6,
  play7, play8, play9, play10, play11, play12
} from './animations.js';

// Expose to window so inline onclick attributes work
Object.assign(window, {
  play1, play2, play3, play4, play5, play6,
  play7, play8, play9, play10, play11, play12
});

gsap.registerPlugin(ScrollTrigger);

// ─── Custom Cursor ────────────────────────────────────────────────────────────
const cur   = document.getElementById('cursor');
const trail = document.getElementById('cursorTrail');
let mx = 0, my = 0, tx = 0, ty = 0;

document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
gsap.set(cur,   { xPercent: -50, yPercent: -50 });
gsap.set(trail, { xPercent: -50, yPercent: -50 });

function tickCursor() {
  tx += (mx - tx) * 0.12;
  ty += (my - ty) * 0.12;
  gsap.set(cur,   { x: mx, y: my });
  gsap.set(trail, { x: tx, y: ty });
  requestAnimationFrame(tickCursor);
}
tickCursor();

// Cursor expand on interactive elements
document.querySelectorAll('.play-btn, .anim-card').forEach(el => {
  el.addEventListener('mouseenter', () => gsap.to(cur, { scale: 3, duration: 0.2 }));
  el.addEventListener('mouseleave', () => gsap.to(cur, { scale: 1, duration: 0.2 }));
});

// ─── Scroll Progress Bar ──────────────────────────────────────────────────────
const scrollLine = document.getElementById('scrollLine');
window.addEventListener('scroll', () => {
  const prog = window.scrollY / (document.body.scrollHeight - window.innerHeight);
  gsap.to(scrollLine, { scaleX: prog, duration: 0.1, ease: 'none' });
});

// ─── Hero Entrance ────────────────────────────────────────────────────────────
gsap.from('.nav',        { opacity: 0, y: -20, duration: 0.6, ease: 'power3.out' });
gsap.from('.badge',      { opacity: 0, y: 20, duration: 0.8, delay: 0.3, ease: 'power3.out' });
gsap.from('.hero-word',  { y: 80, opacity: 0, duration: 1, stagger: 0.1, delay: 0.5, ease: 'power4.out', skewY: 3 });
gsap.from('.hero-sub',   { opacity: 0, y: 20, duration: 0.8, delay: 1, ease: 'power3.out' });
gsap.from('.hero-meta',  { opacity: 0, x: 20, duration: 0.8, delay: 1.2, ease: 'power3.out' });

// ─── Cards on Scroll ─────────────────────────────────────────────────────────
gsap.from('.anim-card', {
  y: 40,
  opacity: 0,
  duration: 0.6,
  stagger: 0.06,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: '#cardsGrid',
    start: 'top 85%'
  }
});

// ─── Code Block Toggle ───────────────────────────────────────────────────────
window.toggleCode = function(id) {
  document.getElementById(id).classList.toggle('visible');
};

// ─── Auto-start Loops ────────────────────────────────────────────────────────
play6();   // Float loop
play12();  // Dot pulse
