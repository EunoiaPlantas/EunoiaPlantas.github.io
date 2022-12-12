document.addEventListener('DOMContentLoaded', ( )=> {
const elementoscarousel = document.querySelectorAll ('.carousel')
M.Carousel.init(elementoscarousel, {
    duration: 1500,
    shift: 5,
    numVisible: 3,
    indicators: true,
});


});