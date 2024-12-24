document.getElementById("calculate").addEventListener("click", function () {
    const startDate = document.getElementById("start-date").value;
    const endDate = document.getElementById("end-date").value;

    if (!startDate || !endDate) {
        alert("กรุณาเลือกวันที่ให้ครบถ้วน!");
        return;
    }

    const start = new Date(startDate);
    const end = new Date(endDate);

    if (start > end) {
        alert("วันที่เริ่มต้นต้องไม่มากกว่าวันที่สิ้นสุด!");
        return;
    }

    generateCalendar(start, end);
});

function generateCalendar(startDate, endDate) {
    const container = document.getElementById("calendar-container");
    container.innerHTML = ""; // ล้างปฏิทินเดิม

    let currentDate = new Date(startDate);
    let selectedDays = 0;

    while (currentDate <= endDate) {
        const dayDiv = document.createElement("div");
        dayDiv.className = "day selected"; // ตั้งค่าเริ่มต้นเป็น "เลือก"
        dayDiv.innerText = currentDate.getDate();
        dayDiv.setAttribute("data-date", currentDate.toISOString().split("T")[0]);

        // เพิ่มจำนวนวันที่เลือกเริ่มต้น
        selectedDays++;

        // เพิ่มฟังก์ชันติ๊ก/ยกเลิกติ๊กวันที่
        dayDiv.addEventListener("click", function () {
            if (this.classList.contains("selected")) {
                this.classList.remove("selected");
                selectedDays--; // ลดจำนวนวันที่เลือก
            } else {
                this.classList.add("selected");
                selectedDays++; // เพิ่มจำนวนวันที่เลือก
            }

            // อัปเดตจำนวนวันที่เลือกในหน้าจอ
            document.getElementById("result").innerText = `จำนวนวัน: ${selectedDays} วัน`;
        });

        container.appendChild(dayDiv);
        currentDate.setDate(currentDate.getDate() + 1);
    }

    // แสดงจำนวนวันที่เลือกทั้งหมดในช่วงเริ่มต้น
    document.getElementById("result").innerText = `จำนวนวัน: ${selectedDays} วัน`;
}
