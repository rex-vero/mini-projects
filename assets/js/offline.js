const body = document.getElementById('body');
const navbar = document.getElementById('navbar');
const sun = document.getElementById('sun');
const moon = document.getElementById('moon');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const offcanvasBtn = document.getElementById('offcanvas-btn');
const offcanvasHeader = document.getElementById('offcanvas-header');
const offcanvasBody = document.getElementById('offcanvas-body');
const offcanvasText = document.getElementById('offcanvas-text');
const title = document.getElementById('title');
const online = document.getElementById('online');
const offline = document.getElementById('offline');
const icon = document.getElementById('icon');
const text = document.getElementById('text');
const icon2 = document.getElementById('icon2');
const text2 = document.getElementById('text2');
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
    offcanvasBtn.classList.add('offcanvas-btn2');
    offcanvasBtn.classList.remove('offcanvas-btn');
    offcanvasHeader.classList.remove('bg-2');
    offcanvasHeader.classList.add('bg-3');
    offcanvasBody.classList.add('bg');
    offcanvasText.classList.add('text-white');
    offcanvasText.classList.remove('text-black');
    icon.classList.add('text-white');
    text.classList.add('text-white');
    icon.classList.add('trans');
    text.classList.add('trans');
    icon2.classList.add('text-white');
    text2.classList.add('text-white');
});
moon.addEventListener('click', () => {
    sun.classList.remove('d-none');
    moon.classList.add('d-none');
    body.classList.remove('bg');
    body.classList.add('trans');
    navbar.classList.add('bg-2');
    navbar.classList.remove('bg-3');
    prev.classList.add('text');
    next.classList.add('text');
    prev.classList.remove('text-2');
    next.classList.remove('text-2');
    offcanvasBtn.classList.remove('offcanvas-btn2');
    offcanvasBtn.classList.add('offcanvas-btn');
    offcanvasHeader.classList.add('bg-2');
    offcanvasHeader.classList.remove('bg-3');
    offcanvasBody.classList.remove('bg');
    offcanvasBody.classList.add('trans');
    offcanvasText.classList.remove('text-white');
    offcanvasText.classList.add('text-black');
    icon.classList.remove('text-white');
    text.classList.remove('text-white');
    icon2.classList.remove('text-white');
    text2.classList.remove('text-white');
});
window.addEventListener('offline', () => {
    online.classList.add('d-none');
    navbar.style.display = 'none';
    offline.classList.remove('d-none');
    title.innerText = 'You Are Offline Now!!!';
});
window.addEventListener('online', () => {
    online.classList.remove('d-none');
    navbar.style.display = 'block';
    offline.classList.add('d-none');
    title.innerText = 'Offline';
});
setInterval(() => {
    icon.classList.toggle('bi-wifi')
}, 730);
setInterval(() => {
    icon.classList.toggle('bi-wifi-2')
}, 700);