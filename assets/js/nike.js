const img = document.getElementById('img');
const white = document.getElementById('white');
const black = document.getElementById('black');
black.addEventListener('click', () => {
    img.setAttribute('src', './assets/images/black.webp');
});
white.addEventListener('click', () => {
    img.setAttribute('src', './assets/images/white.webp');
});