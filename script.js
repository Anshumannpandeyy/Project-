/* ============================================
   CLEAN ROMANTIC WEBSITE - STABLE VERSION
   ============================================ */

/* =========================
   SAFE SELECTOR
========================= */

const $ = (id) => document.getElementById(id);

/* =========================
   MUSIC SYSTEM (STABLE)
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
            console.log("Music blocked until user interaction");
        }
    });
}

/* =========================
   LOVE COUNTER (SAFE)
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
   FORGIVENESS METER (CLEAN)
========================= */

const meterFill = $('meterFill');
const meterPercentage = $('meterPercentage');
const meterStatus = $('meterStatus');
const meterSection = $('forgiveness');

let meterDone = false;

function runMeter() {
    if (!meterFill || !meterPercentage || !meterStatus) return;

    const messages = [
        "Calibrating love...",
        "Checking emotions...",
        "Syncing hearts...",
        "Finalizing connection..."
    ];

    meterStatus.textContent =
        messages[Math.floor(Math.random() * messages.length)];

    let current = 0;
    const target = 100;

    const interval = setInterval(() => {
        current += 2;

        if (current >= target) {
            current = target;
            clearInterval(interval);
            meterStatus.textContent = "Love Locked ❤️ 100%";
        }

        meterFill.style.width = current + "%";
        meterPercentage.textContent = current + "%";

    }, 40);
}

if (meterSection) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !meterDone) {
                meterDone = true;
                runMeter();
            }
        });
    }, { threshold: 0.5 });

    observer.observe(meterSection);
}

/* =========================
   FLOATING EFFECTS (LIMITED - NO LAG)
========================= */

const petalsContainer = document.querySelector('.petals-container');
const heartsContainer = document.querySelector('.hearts-container');

function spawn(container, emoji, className) {
    if (!container) return;

    if (container.children.length > 20) {
        container.removeChild(container.firstChild);
    }

    const el = document.createElement('div');
    el.className = className;
    el.textContent = emoji;

    el.style.left = Math.random() * window.innerWidth + "px";
    el.style.opacity = Math.random() * 0.5 + 0.3;
    el.style.fontSize = (0.8 + Math.random()) + "rem";
    el.style.animation = "float 6s linear";

    container.appendChild(el);

    setTimeout(() => el.remove(), 8000);
}

setInterval(() => spawn(petalsContainer, "🌸", "petal"), 2500);
setInterval(() => spawn(heartsContainer, "❤️", "heart"), 3000);

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
        } catch (e) {}
    });
}

/* =========================
   PAGE LOAD FADE
========================= */

document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = "1";
});

/* =========================
   KEYBOARD ACCESSIBILITY
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
