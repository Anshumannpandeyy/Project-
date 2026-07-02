/* ============================================
   ROMANTIC WEBSITE - CLEAN STABLE JS
   NO SCROLL BUG VERSION
============================================ */

/* =========================
   SAFE SELECTOR
========================= */

const $ = (id) => document.getElementById(id);

/* =========================
   MUSIC SYSTEM
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
            console.log("Music blocked until user gesture");
        }
        isMusicPlaying = !isMusicPlaying;
    });
}

/* =========================
   COUNTER
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
   FORGIVENESS METER
========================= */

const meterFill = $('meterFill');
const meterPercentage = $('meterPercentage');
const meterStatus = $('meterStatus');
const meterSection = $('forgiveness');

let meterInitialized = false;

function runMeter() {
    if (!meterFill || !meterPercentage || !meterStatus) return;

    const msgs = [
        "Calibrating love...",
        "Syncing emotions...",
        "Analyzing bond...",
        "Processing affection..."
    ];

    meterStatus.textContent =
        msgs[Math.floor(Math.random() * msgs.length)];

    setTimeout(() => {
        let current = 0;
        const target = 100;
        const step = 4;

        const interval = setInterval(() => {
            current += step;

            if (current >= target) {
                current = target;
                clearInterval(interval);
                meterStatus.textContent = "Love locked ❤️ 100%";
            }

            meterFill.style.width = current + "%";
            meterPercentage.textContent = current + "%";
        }, 50);
    }, 800);
}

if (meterSection) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !meterInitialized) {
                runMeter();
                meterInitialized = true;
            }
        });
    }, { threshold: 0.5 });

    observer.observe(meterSection);
}

/* =========================
   FLOATING ANIMATIONS (SAFE)
========================= */

const petalsContainer = document.querySelector('.petals-container');
const heartsContainer = document.querySelector('.hearts-container');

function spawn(container, emoji, className) {
    if (!container) return;

    if (container.children.length > 25) {
        container.removeChild(container.firstChild);
    }

    const el = document.createElement('div');
    el.className = className;
    el.textContent = emoji;

    el.style.left = Math.random() * window.innerWidth + "px";
    el.style.fontSize = (0.8 + Math.random() * 1.2) + "rem";
    el.style.opacity = 0.5;

    el.style.animation = "float 8s linear forwards";

    container.appendChild(el);

    setTimeout(() => el.remove(), 9000);
}

setInterval(() => spawn(petalsContainer, "🌸", "petal"), 1800);
setInterval(() => spawn(heartsContainer, "❤️", "heart"), 2200);

/* =========================
   SHARE BUTTON
========================= */

const shareBtn = $('shareBtn');

if (shareBtn) {
    shareBtn.addEventListener('click', async () => {
        const text = "A romantic message 💕";
        const url = location.href;

        try {
            if (navigator.share) {
                await navigator.share({
                    title: "Message 💕",
                    text,
                    url
                });
            } else {
                await navigator.clipboard.writeText(text + " " + url);
                alert("Copied 💕");
            }
        } catch (e) {
            console.log("Share failed");
        }
    });
}

/* =========================
   PAGE LOAD
========================= */

document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = "1";
});

/* =========================
   CONFETTI EASTER EGG
========================= */

let clicks = 0;

document.querySelector('.rose-emoji')?.addEventListener('click', () => {
    clicks++;
    if (clicks >= 5) {
        clicks = 0;
        confetti();
    }
});

function confetti() {
    const items = ["🌹", "✨", "💕", "💌"];

    for (let i = 0; i < 15; i++) {
        const el = document.createElement("div");
        el.textContent = items[Math.floor(Math.random() * items.length)];
        el.style.position = "fixed";
        el.style.left = Math.random() * 100 + "vw";
        el.style.top = "40%";
        el.style.fontSize = "2rem";
        el.style.animation = "fall 2.5s ease-out forwards";

        document.body.appendChild(el);

        setTimeout(() => el.remove(), 3000);
    }
}

/* =========================
   ACCESSIBILITY
========================= */

document.querySelectorAll('.btn, .music-btn').forEach(btn => {
    btn.setAttribute('tabindex', '0');

    btn.addEventListener('keydown', (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            btn.click();
        }
    });
});
