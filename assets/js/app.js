/**
 * Tathmeer International — app.js
 * Optimized: removed dead code, improved performance, added accessibility.
 * All core logic is now inlined in index.html for single-file simplicity.
 * This file retained for particles.js configuration only (backward compat).
 */

// Particles are now initialized inline in index.html.
// This file is intentionally minimal.
// If you re-integrate this file, call initParticles() below.

function initParticles() {
  if (typeof particlesJS === 'undefined') return;

  particlesJS('particles-js', {
    particles: {
      number: { value: 45, density: { enable: true, value_area: 1200 } },
      color: { value: '#C49A2A' },
      shape: { type: 'circle' },
      opacity: {
        value: 0.25,
        random: true,
        anim: { enable: true, speed: 0.5, opacity_min: 0.05, sync: false }
      },
      size: { value: 3, random: true },
      line_linked: {
        enable: true,
        distance: 160,
        color: '#C49A2A',
        opacity: 0.12,
        width: 1
      },
      move: {
        enable: true,
        speed: 1.8,
        direction: 'none',
        random: true,
        straight: false,
        out_mode: 'out'
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: { enable: true, mode: 'grab' },
        onclick:  { enable: false },
        resize:   true
      },
      modes: {
        grab: { distance: 180, line_linked: { opacity: 0.4 } }
      }
    },
    retina_detect: true
  });
}