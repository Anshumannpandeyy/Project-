/* ============================================
   CLEAN ROMANTIC WEBSITE JS (FIXED)
   ============================================ */

/* SAFE SELECTOR */
const $ = (id) => document.getElementById(id);

/* MUSIC */
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
        } catch (e) {}
        isMusicPlaying = !isMusicPlaying;
    });
}

/* COUNTER */
const counterDisplay = $('counter');

function updateCounter() {
    if (!counterDisplay) return;

    const startDate = new Date('2025-01-01T00:00:00').getTime();
    counterDisplay.textContent =
        Math.floor((Date.now() - startDate) / 1000).toLocaleString();
}

updateCounter();
setInterval(updateCounter, 1000);

/* FORGIVENESS METER */
const meterFill = $('meterFill');
const meterPercentage = $('meterPercentage');
const meterStatus = $('meterStatus');
const meterSection = $('forgiveness');

let meterDone = false;

function runMeter() {
    if (!meterFill || !meterPercentage || !meterStatus) return;

    meterStatus.textContent = "Loading...";

    setTimeout(() => {
        let current = 0;
        const target = 100;

        const interval = setInterval(() => {
            current += 4;

            if (current >= target) {
                current = target;
                clearInterval(interval);
                meterStatus.textContent = "Complete ❤️";
            }

            meterFill.style.width = current + "%";
            meterPercentage.textContent = current + "%";
        }, 40);
    }, 800);
}

if (meterSection) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting && !meterDone) {
                runMeter();
                meterDone = true;
            }
        });
    }, { threshold: 0.5 });

    observer.observe(meterSection);
}

/* FLOATING ELEMENTS (SAFE LIMIT) */
const petalsContainer = document.querySelector('.petals-container');
const heartsContainer = document.querySelector('.hearts-container');

function spawn(container, emoji, time) {
    if (!container) return;

    if (container.children.length > 20) {
        container.removeChild(container.firstChild);
    }

    const el = document.createElement('div');
    el.textContent = emoji;
    el.style.position = 'absolute';
    el.style.left = Math.random() * 100 + "vw";
    el.style.top = "-10px";
    el.style.fontSize = "18px";
    el.style.animation = `float ${time}s linear`;

    container.appendChild(el);

    setTimeout(() => el.remove(), 10000);
}

setInterval(() => spawn(petalsContainer, '🌸', 8), 1200);
setInterval(() => spawn(heartsContainer, '❤️', 10), 1500);

/* SHARE */
const shareBtn = $('shareBtn');

if (shareBtn) {
    shareBtn.addEventListener('click', async () => {
        const url = location.href;

        try {
            if (navigator.share) {
                await navigator.share({
                    title: "💕",
                    text: "A message",
                    url
                });
            }
        } catch (e) {}
    });
}

/* PAGE READY */
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '1';
});

/* ❌ IMPORTANT: NO SCROLL LOCK ANYMORE */
/* (ye hi tumhara main bug tha) */
