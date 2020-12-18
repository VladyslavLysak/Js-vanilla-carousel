const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let count = 1;
const size = carouselImages[0].clientWidth;
const interval = 3000;
const animDuration = 600;

carouselSlide.style.transform = 'translateX(' + (-size * count) + 'px)';

for (let i = 0; i < carouselImages.length; i++) {
    const slider = carouselImages[i];
    console.log(slider);
    const dots = slider.querySelector('.dots');

    // for (let i = 0; i < carouselImages.length; i++) {
    // const dot = document.createElement('div');
    // dot.classList.add('dot');
    // dots.appendChild(dot);
    // dot.addEventListener('click',
    //     dotClick.bind(null, i), false);
    // console.log(dot);
    // }
}

nextBtn.addEventListener('click', () => {
    console.log(count);
    if (count >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    count++;
    carouselSlide.style.transform = 'translateX(' + (-size * count) + 'px)';
});

prevBtn.addEventListener('click', () => {
    console.log(count);
    if (count <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    count--;
    carouselSlide.style.transform = 'translateX(' + (-size * count) + 'px)';
});

carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[count].id === 'lastClone') {
        carouselSlide.style.transition = "none";
        count = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * count) + 'px)';
    }
    if (carouselImages[count].id === 'firstClone') {
        carouselSlide.style.transition = "none";
        count = carouselImages.length - count;
        carouselSlide.style.transform = 'translateX(' + (-size * count) + 'px)';
    }
});