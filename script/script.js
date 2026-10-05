const timer1 = new countdownTimer({
    selector: "#clock1",
    targetDate: new Date('October, 9 2026 14:00:00')
})
timer1.startTimer();

const session = document.getElementById("session-name");

