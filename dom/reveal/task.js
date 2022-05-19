const reveals = document.querySelectorAll('.reveal');
reveals.forEach(element => {
    document.addEventListener('scroll', ()=>{
        const {top, bottom} = element.getBoundingClientRect();
        if ( bottom > 0 || top < window.innerHeight ) {
            element.classList.add('reveal_active')
        }
    });
});
