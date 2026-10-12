const session = document.getElementById("session-name");

const timer1 = new countdownTimer({
    selector: "#clock1",
    targetDate: new Date('October, 23 2026 18:00:00')
})
timer1.startTimer();

const cards = document.getElementByAll(".card-content");

cards.forEach(function(card) {
    card.addEventListener("click", function() {
        const details = card.querySelector(".race-details");

        if (details.hidden) {
            details.hidden = false;
            alert("good morning");
        } else {
            details.hidden = true;
            alert("goodnight");
        }
        alert("wowza!");
    });
});
