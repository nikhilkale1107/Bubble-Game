var timer = 30;
var score = 0;
var clickrn = 0;

function increaseScore() {
    score += 10;
    document.querySelector("#score").textContent = score;
}

function Newfind() {
    clickrn = Math.floor(Math.random() * 10);
    document.querySelector("#hit").textContent = clickrn;
}

function makeBubble() {
    var a = "";
    for (var i = 1; i <= 65; i++) {
        var b = Math.floor(Math.random() * 10);
        a += `<div class="bubble">${b}</div>`;
    }
    document.querySelector("#pbottom").innerHTML = a;
}

function runtime() {
    var timerA = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#startTimer").textContent = timer;
        } else {
            clearInterval(timerA);
            document.querySelector("#pbottom").innerHTML = `<h1>Game Over</h1>`;
            
            document.querySelector("#pbottom").removeEventListener("click", bubbleClickHandler);
        }
    }, 1000);
}

function bubbleClickHandler(details) {
    var clickedNum = Number(details.target.textContent);
    if (clickedNum === clickrn) {
        increaseScore();
        Newfind();
    }
}


document.querySelector("#pbottom").addEventListener("click", bubbleClickHandler);


runtime();
makeBubble();
Newfind();
