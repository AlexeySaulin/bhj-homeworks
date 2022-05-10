const slides = Array.from(document.querySelectorAll(".slider__item"));
const prev = document.querySelector(".slider__arrow_prev");
const next = document.querySelector(".slider__arrow_next");

let index = 0;

next.onclick = function() {
    index++;
    for (let slide of slides) {
        slide.className = "slider__item";
    }
    if (index >= slides.length) {
        index = 0;
    }
    slides[index].classList.toggle("slider__item_active");
};

prev.onclick = function() {
    index--;
    for (let slide of slides) {
        slide.className = "slider__item";
    }
    if (index < 0) {
        index = slides.length - 1;
    }
    slides[index].classList.toggle("slider__item_active");
};
