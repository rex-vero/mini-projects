const body = document.getElementById('body');
const navbar = document.getElementById('navbar');
const sun = document.getElementById('sun');
const moon = document.getElementById('moon');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const img = document.getElementById('img');
const white = document.getElementById('white');
const black = document.getElementById('black');
black.addEventListener('click', () => {
    img.setAttribute('src', './assets/images/black.webp');
});
white.addEventListener('click', () => {
    img.setAttribute('src', './assets/images/white.webp');
});
sun.addEventListener('click', () => {
    sun.classList.add('d-none');
    moon.classList.remove('d-none');
    body.classList.add('bg');
    navbar.classList.remove('bg-2');
    navbar.classList.add('bg-3');
    prev.classList.add('text-2');
    next.classList.add('text-2');
    prev.classList.remove('text');
    next.classList.remove('text');
});
moon.addEventListener('click', () => {
    sun.classList.remove('d-none');
    moon.classList.add('d-none');
    body.classList.remove('bg');
    body.classList.add('trans');
    navbar.classList.add('bg-2');
    navbar.classList.remove('bg-3');
    navbar.classList.add('trans');
    prev.classList.add('text');
    next.classList.add('text');
    prev.classList.remove('text-2');
    next.classList.remove('text-2');
});