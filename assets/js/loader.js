const sun = document.getElementById('sun');
const moon = document.getElementById('moon');
const text = document.getElementById('text-loader');
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
    nORp[1].classList.add('offcanvas-btn2');
});
moon.addEventListener('click', () => {
    const bodys = document.querySelectorAll('.body');
    const navs = document.querySelectorAll('.navs');
    const nORp = document.querySelectorAll('.text');
    const links = document.querySelectorAll('.links');
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
    nORp[1].classList.remove('offcanvas-btn2');
});
setInterval(() => {
    text.textContent = 'Loading.';
}, 500);
setInterval(() => {
    text.textContent = 'Loading..';
}, 550);
setInterval(() => {
    text.textContent = 'Loading...';
}, 600);