const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

function repeat (text) {
    alert(text);
    lost.textContent = 0;
    dead.textContent = 0;
}

for (let i = 1; i < 10; i++) {
    let hole = getHole(i);
    hole.onclick = () => {
        if (hole.className.includes("hole_has-mole")) {
            dead.textContent = +dead.textContent + 1;
        } else {
            lost.textContent = +lost.textContent + 1;
        }
        if (lost.textContent == 5) {
            repeat("Поражение");
        }
        if (dead.textContent == 10) {
            repeat("Победа");
        }
    }
}