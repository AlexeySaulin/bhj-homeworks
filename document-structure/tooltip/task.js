const tooltip = document.querySelectorAll('.has-tooltip');

tooltip.forEach(element => element.addEventListener('click', (event) => {
    event.preventDefault();
    target = event.target;
    const position = {left, bottom} = target.getBoundingClientRect();
    target.insertAdjacentHTML("afterEnd", 
    `<div class="tooltip tooltip_active" style="top:${position.bottom}px; left:${position.left}px">
        ${target.title}
    </div>`);
}));