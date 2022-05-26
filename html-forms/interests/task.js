'use strict';

let checkboxes = document.querySelectorAll('.interest__check');

const toggleCheckboxes = (event) => {
    const checkbox = event.target;
    const parent = checkbox.closest('.interest');
    const innerList = parent.querySelector('.interests_active');

    const input = innerList.querySelectorAll('input');
    input.forEach(element => {
        if (!element.checked) {
            element.checked = true;
        } else {
            element.checked = false;
        }
    });
};

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('click', toggleCheckboxes);
});
