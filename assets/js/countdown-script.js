// countdown-script.js
function startCountdown() {
    const targetDate = new Date("2026-04-11T00:00:00+07:00").getTime();
    
    function update() {
        const now = new Date().getTime();
        const diff = targetDate - now;

        const wrapper = document.getElementById("countdown-wrapper");
        const container = document.getElementById("timer-container");

        if (diff <= 0) {
            if (container) container.innerHTML = "<h3 style='color:#c9184a; font-family:Kanit;'>Happy Anniversary! ❤️</h3>";
            if (wrapper) wrapper.style.opacity = "1";
            return;
        }

        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);

        // ใส่ตัวเลขลงไปใน ID ต่างๆ
        const daysEl = document.getElementById("days");
        const hoursEl = document.getElementById("hours");
        const minsEl = document.getElementById("minutes");
        const secsEl = document.getElementById("seconds");

        if (daysEl) daysEl.innerText = String(d).padStart(2, '0');
        if (hoursEl) hoursEl.innerText = String(h).padStart(2, '0');
        if (minsEl) minsEl.innerText = String(m).padStart(2, '0');
        if (secsEl) secsEl.innerText = String(s).padStart(2, '0');

        if (wrapper) wrapper.style.opacity = "1";
    }

    update();
    setInterval(update, 1000);
}

// เรียกใช้ฟังก์ชันเมื่อโหลดหน้าเสร็จ
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startCountdown);
} else {
    startCountdown();
}