const startTimer = document.getElementById("timer");

let timer = setInterval(function () {
    --startTimer.textContent;
    if (startTimer.textContent == 0) {
        clearInterval(timer);
        alert("Вы победили в конкурсе!");
    }
}, 1000); 