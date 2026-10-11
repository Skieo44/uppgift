const session = document.getElementById("session-name");

const timer1 = new countdownTimer({
    selector: "#clock1",
    targetDate: new Date('October, 23 2026 18:00:00')
})
timer1.startTimer();

const button = document.getElementById("button");

button.addEventListener("click", testFunc);

function testFunc(){
    alert("press");
 
}


