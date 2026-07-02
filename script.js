/* ============================================
   ROMANTIC WEBSITE - OPTIMIZED JAVASCRIPT
   ============================================ */

/* =========================
   SAFE ELEMENT SELECTOR
========================= */

const $ = (id) => document.getElementById(id);

/* =========================
   MUSIC SYSTEM (SAFE)
========================= */

const musicBtn = $('musicBtn');
const backgroundMusic = $('backgroundMusic');

let isMusicPlaying = false;

if (musicBtn && backgroundMusic) {
    backgroundMusic.volume = 0.7;
    backgroundMusic.loop = true;

    musicBtn.addEventListener('click', async () => {
        try {
            if (isMusicPlaying) {
                backgroundMusic.pause();
                musicBtn.classList.remove('playing');
            } else {
                await backgroundMusic.play();
                musicBtn.classList.add('playing');
            }
            isMusicPlaying = !isMusicPlaying;
        } catch (e) {
            alert("Tap again to enable music 🎵");
        }
    });
}

/* =========================
   LOVE COUNTER
========================= */

const counterDisplay = $('counter');

function updateCounter() {
    if (!counterDisplay) return;

    const startDate = new Date('2025-01-01T00:00:00').getTime();
    const now = Date.now();

    counterDisplay.textContent =
        Math.floor((now - startDate) / 1000).toLocaleString();
}

updateCounter();
setInterval(updateCounter, 1000);

/* =========================
   FORGIVENESS METER (OPTIMIZED)
========================= */

const meterFill = $('meterFill');
const meterPercentage = $('meterPercentage');
const meterStatus = $('meterStatus');
const meterSection = $('forgiveness');

let meterInitialized = false;

function initializeForgivenessMeter() {
    if (!meterFill || !meterPercentage || !meterStatus) return;

    const statusMessages = [
        'Calibrating love frequency...',
        'Scanning emotional depth...',
        'Syncing heart signals...',
        'Processing affection index...',
    ];

    meterStatus.textContent =
        statusMessages[Math.floor(Math.random() * statusMessages.length)];

    setTimeout(() => {
        const target = 100; // 🔥 FIXED 100%

        let current = 0;
        const step = target / 25;

        const interval = setInterval(() => {
            current += step;

            if (current >= target) {
                current = target;
                clearInterval(interval);

                meterStatus.textContent =
                    `Love locked at ${target}% ❤️`;
            }

            meterFill.style.width = current + '%';
            meterPercentage.textContent = Math.floor(current) + '%';

        }, 40);
    }, 1200);
}

/* =========================
   INTERSECTION OBSERVER (SAFE)
========================= */

if (meterSection) {
    const meterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !meterInitialized) {
                initializeForgivenessMeter();
                meterInitialized = true;
                meterObserver.disconnect();
            }
        });
    }, { threshold: 0.5 });

    meterObserver.observe(meterSection);
}

/* =========================
   FLOATING ELEMENTS (OPTIMIZED)
========================= */

const petalsContainer = document.querySelector('.petals-container');
const heartsContainer = document.querySelector('.hearts-container');

function createElement(container, emoji, className, durationRange) {
    if (!container) return;

    const el = document.createElement('div');
    el.className = className;
    el.textContent = emoji;

    el.style.left = Math.random() * window.innerWidth + 'px';
    el.style.fontSize = (0.8 + Math.random() * 1.2) + 'rem';
    el.style.opacity = (0.3 + Math.random() * 0.5);

    el.style.animation = `float ${durationRange}s linear`;

    container.appendChild(el);
}

/* Reduced frequency = NO LAG */
setInterval(() => createElement(petalsContainer, '🌸', 'petal', 8), 2000);
setInterval(() => createElement(heartsContainer, '❤️', 'heart', 10), 2500);

/* =========================
   SHARE BUTTON (SAFE)
========================= */

const shareBtn = $('shareBtn');

if (shareBtn) {
    shareBtn.addEventListener('click', async () => {
        const text = "A romantic message 💕 from Anshuman";
        const url = location.href;

        try {
            if (navigator.share) {
                await navigator.share({
                    title: "A Message 💕",
                    text,
                    url
                });
            } else {
                await navigator.clipboard.writeText(text + " " + url);
                alert("Copied to clipboard 💕");
            }
        } catch (e) {
            console.log("Share failed");
        }
    });
}

/* =========================
   PAGE FADE IN
========================= */

document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '1';
});

/* =========================
   SMOOTH SCROLL
========================= */


/* =========================
   HEART CLICK EASTER EGG
========================= */

let roseClicks = 0;

document.querySelector('.rose-emoji')?.addEventListener('click', () => {
    roseClicks++;

    if (roseClicks >= 5) {
        roseClicks = 0;
        createConfetti();
    }
});

function createConfetti() {
    const items = ['🌹', '✨', '💕', '💌'];

    for (let i = 0; i < 15; i++) {
        const el = document.createElement('div');
        el.textContent = items[Math.floor(Math.random() * items.length)];
        el.style.position = 'fixed';
        el.style.left = Math.random() * 100 + 'vw';
        el.style.top = '40%';
        el.style.fontSize = '2rem';
        el.style.animation = 'fall 2.5s ease-out forwards';
        document.body.appendChild(el);

        setTimeout(() => el.remove(), 3000);
    }
}

/* Confetti animation */
const style = document.createElement('style');
style.textContent = `
@keyframes fall {
    to {
        transform: translateY(100vh) rotate(360deg);
        opacity: 0;
    }
}`;
document.head.appendChild(style);

/* =========================
   ACCESSIBILITY
========================= */

document.querySelectorAll('.btn, .music-btn').forEach(btn => {
    btn.setAttribute('tabindex', '0');

    btn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            btn.click();
        }
    });
})
