const clickerCounter = document.getElementById("clicker__counter");
const cookieImg = document.getElementById("cookie");

cookieImg.onclick = function() {

    if (cookieImg.width ==200) {
        cookieImg.width += 100;
    } else {
        cookieImg.width -= 100;
    }

clickerCounter.textContent = +clickerCounter.textContent + 1;
};
