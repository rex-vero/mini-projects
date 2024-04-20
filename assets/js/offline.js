const sun = document.getElementById('sun');
const moon = document.getElementById('moon');
let title = document.title;
window.addEventListener('focus', () => {
    document.title = title;
});
window.addEventListener('blur', () => {
    document.title = 'Oh Come On Come Back :(';
});
sun.addEventListener('click', () => {
    const bodys = document.querySelectorAll('.body');
    const navs = document.querySelectorAll('.navs');
    const nORp = document.querySelectorAll('.text');
    const offs = document.querySelectorAll('.offs');
    const links = document.querySelectorAll('.links');
    sun.classList.add('d-none');
    moon.classList.remove('d-none');
    for (const text of nORp) {
        text.classList.add('text-2');
    }
    for (const nav of navs) {
        nav.classList.add('bg-3');
    }
    for (const body of bodys) {
        body.classList.add('bg');
    }
    for (const link of links) {
        link.classList.add('links2');
    }
    for (const off of offs) {
        off.classList.add('text-white');
    }
    nORp[1].classList.add('offcanvas-btn2');
});
moon.addEventListener('click', () => {
    const bodys = document.querySelectorAll('.body');
    const navs = document.querySelectorAll('.navs');
    const nORp = document.querySelectorAll('.text');
    const links = document.querySelectorAll('.links');
    const offs = document.querySelectorAll('.offs');
    sun.classList.remove('d-none');
    moon.classList.add('d-none');
    for (const text of nORp) {
        text.classList.remove('text-2');
    }
    for (const nav of navs) {
        nav.classList.remove('bg-3');
    }
    for (const body of bodys) {
        body.classList.remove('bg');
    }
    for (const link of links) {
        link.classList.remove('links2');
    }
    for (const off of offs) {
        off.classList.remove('text-white');
    }
    nORp[1].classList.remove('offcanvas-btn2');
});
window.addEventListener('offline', () => {
    const title = document.getElementById('title');
    const online = document.getElementById('online');
    const offline = document.getElementById('offline');
    const navbar = document.getElementById('navbar');
    online.classList.add('d-none');
    navbar.style.display = 'none';
    offline.classList.remove('d-none');
    title.innerText = 'You Are Offline Now!!!';
});
window.addEventListener('online', () => {
    const title = document.getElementById('title');
    const online = document.getElementById('online');
    const offline = document.getElementById('offline');
    const navbar = document.getElementById('navbar');
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