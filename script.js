const slider = document.querySelector('.image-list');
const images = document.querySelectorAll('.image-list img');
const prevButton = document.querySelector('.previous');
const nextButton = document.querySelector('.next');

let Index = 0;
const image = images[0].clientWidth;

function Slider() {
    slider.style.transform = `translateX(${-Index * image}px)`;
}

nextButton.addEventListener('click', () => {
    if (Index < images.length - 1) {
        Index++;
        Slider();
    }
});

prevButton.addEventListener('click', () => {
    if (Index > 0) {
        Index--;
        Slider();
    }
});

window.addEventListener('resize', () => {
    Slider();  
});
