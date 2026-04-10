// countdown-script.js
function startCountdown() {
    // กำหนดเป้าหมายเป็นวันที่ 11 เมษายน 2026 เวลา 07:30 น. (เขตเวลา +07:00)
    const targetDate = new Date("2026-04-11T07:30:00+07:00").getTime();
    
    function update() {
        const now = new Date().getTime();
        const diff = targetDate - now;

        const wrapper = document.getElementById("countdown-wrapper");
        const container = document.getElementById("timer-container");

        // ถ้าเวลาเหลือ 0 หรือติดลบ (เลยเวลา 07:30 น. มาแล้ว)
        if (diff <= 0) {
            if (container) {
                container.innerHTML = "<h3 style='color:#c9184a; font-family:Kanit;'>ความสุขมาเคาะประตูแล้วนะ ❤️</h3>";
            }
            if (wrapper) wrapper.style.opacity = "1";
            return;
        }

        // การคำนวณ วัน ชม. นาที วินาที
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);

        // ดึง Element
        const daysEl = document.getElementById("days");
        const hoursEl = document.getElementById("hours");
        const minsEl = document.getElementById("minutes");
        const secsEl = document.getElementById("seconds");

        // อัปเดตตัวเลขพร้อมใส่เลข 0 นำหน้าถ้ามีหลักเดียว
        if (daysEl) daysEl.innerText = String(d).padStart(2, '0');
        if (hoursEl) hoursEl.innerText = String(h).padStart(2, '0');
        if (minsEl) minsEl.innerText = String(m).padStart(2, '0');
        if (secsEl) secsEl.innerText = String(s).padStart(2, '0');

        // แสดงผล wrapper เมื่อคำนวณครั้งแรกเสร็จ
        if (wrapper) wrapper.style.opacity = "1";
    }

    update();
    const timerInterval = setInterval(() => {
        const now = new Date().getTime();
        if (targetDate - now <= 0) {
            update();
            clearInterval(timerInterval); // หยุดทำงานเมื่อถึงเวลา
        } else {
            update();
        }
    }, 1000);
}

// เรียกใช้ฟังก์ชันเมื่อโหลดหน้าเสร็จ
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startCountdown);
} else {
    startCountdown();
}