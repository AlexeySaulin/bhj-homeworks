const cases = document.querySelectorAll('.rotator__case');
let index = 0;

setInterval(()=> {
    for(let i = 0; i < cases.length; i++) {
        for(let j = 0; j < cases.length; j++) {
            cases[j].classList.remove('rotator__case_active');
        }
        cases[index].classList.toggle('rotator__case_active'); 
    }
    index++;
    if (index == cases.length) {
        index = 0;
    }
}, 1000);

