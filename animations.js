/**
 * GSAP Animation Pack v1.0
 * 12 production-ready animations
 * https://github.com/yourusername/gsap-animation-pack
 */

// ─── 01. Elastic Bounce In ───────────────────────────────────────────────────
export function play1() {
  gsap.from('#d1', {
    y: 60,
    opacity: 0,
    scale: 0.8,
    duration: 0.8,
    ease: 'elastic.out(1, 0.5)',
    clearProps: 'all'
  });
}

// ─── 02. Stagger Grid Entrance ───────────────────────────────────────────────
export function play2() {
  gsap.from('#d2 .stagger-item', {
    y: 30,
    opacity: 0,
    scale: 0.9,
    duration: 0.5,
    stagger: 0.08,
    ease: 'power3.out',
    onStart() {
      gsap.set('#d2 .stagger-item', {
        background: 'var(--accent)',
        borderColor: 'var(--accent)'
      });
    }
  });
  gsap.to('#d2 .stagger-item', {
    background: 'var(--surface)',
    borderColor: 'var(--border)',
    delay: 1.2,
    stagger: 0.06
  });
}

// ─── 03. Character Split Reveal ──────────────────────────────────────────────
export function play3() {
  gsap.from('#d3 .char', {
    y: 40,
    opacity: 0,
    rotateX: -90,
    duration: 0.6,
    stagger: 0.04,
    ease: 'back.out(2)',
    transformOrigin: 'top center'
  });
}

// ─── 04. Animated Counter ────────────────────────────────────────────────────
let cAnim;
export function play4() {
  if (cAnim) cAnim.kill();
  const el = document.getElementById('d4');
  const obj = { val: 0 };
  el.textContent = '000';
  cAnim = gsap.to(obj, {
    val: 100,
    duration: 2,
    ease: 'power2.out',
    onUpdate: () => {
      el.textContent = Math.round(obj.val).toString().padStart(3, '0');
    }
  });
}

// ─── 05. Wipe Clip Reveal ────────────────────────────────────────────────────
export function play5() {
  const wipe = document.getElementById('d5wipe');
  gsap.set(wipe, { scaleX: 0, transformOrigin: 'left' });
  const tl = gsap.timeline();
  tl.to(wipe, { scaleX: 1, duration: 0.45, ease: 'power3.inOut' })
    .to(wipe, { scaleX: 0, transformOrigin: 'right', duration: 0.45, ease: 'power3.inOut' });
}

// ─── 06. Infinite Float ──────────────────────────────────────────────────────
let floatTween;
export function play6() {
  if (floatTween) floatTween.kill();
  gsap.set('#d6', { y: 0 });
  floatTween = gsap.to('#d6', {
    y: -14,
    duration: 2.2,
    ease: 'sine.inOut',
    repeat: -1,
    yoyo: true
  });
}

// ─── 07. Particle Burst ──────────────────────────────────────────────────────
export function play7() {
  const stage = document.getElementById('d7');
  stage.innerHTML = '';
  const colors = ['#c8ff00', '#ff3c6e', '#00c8ff', '#b48eff'];
  for (let i = 0; i < 12; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.cssText = 'left:50%;top:50%;transform:translate(-50%,-50%)';
    p.style.background = colors[i % 4];
    stage.appendChild(p);

    const angle = (i / 12) * Math.PI * 2;
    const dist  = 35 + Math.random() * 25;
    gsap.fromTo(p,
      { x: 0, y: 0, opacity: 1, scale: 1 },
      {
        x: Math.cos(angle) * dist,
        y: Math.sin(angle) * dist,
        opacity: 0,
        scale: 0,
        duration: 0.8,
        ease: 'power2.out',
        delay: 0.02 * i
      }
    );
  }
}

// ─── 08. ScrollTrigger Fade Up ───────────────────────────────────────────────
export function play8() {
  gsap.from('#d8', {
    y: 30,
    opacity: 0,
    duration: 0.9,
    ease: 'power3.out'
  });
}

// ─── 09. Shape Morph ─────────────────────────────────────────────────────────
export function play9() {
  gsap.to('#d9', {
    borderRadius: '50%',
    rotate: 180,
    scale: 1.2,
    duration: 0.9,
    ease: 'power2.inOut',
    yoyo: true,
    repeat: 1
  });
}

// ─── 10. Typewriter ──────────────────────────────────────────────────────────
let twTween;
export function play10() {
  if (twTween) twTween.kill();
  const el   = document.getElementById('d10');
  const text = 'HELLO WORLD_';
  el.textContent = '';
  const obj = { len: 0 };
  twTween = gsap.to(obj, {
    len: text.length,
    duration: 1.6,
    ease: 'none',
    onUpdate: () => {
      el.textContent = text.slice(0, Math.round(obj.len));
    }
  });
}

// ─── 11. Line Draw Expand ────────────────────────────────────────────────────
export function play11() {
  gsap.from('#d11', {
    scaleX: 0,
    transformOrigin: 'center',
    opacity: 0,
    duration: 1,
    ease: 'expo.out'
  });
}

// ─── 12. Dot Pulse Loader ────────────────────────────────────────────────────
let dotTween;
export function play12() {
  if (dotTween) dotTween.kill();
  const dots = document.querySelectorAll('#d12 .demo-dot');
  gsap.set(dots, { y: 0 });
  dotTween = gsap.to(dots, {
    y: -12,
    duration: 0.4,
    ease: 'power2.out',
    stagger: { each: 0.15, repeat: -1, yoyo: true }
  });
}
