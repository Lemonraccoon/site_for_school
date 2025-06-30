let links = document.querySelectorAll('.scroll');
let targetID;
links.forEach( (e) => {
    e.addEventListener('click', function (event) {
        event.preventDefault();
        targetID = e.getAttribute('href');
        document.querySelector(targetID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
})

$(document).ready(function () {
    $('.slider').bxSlider();
});