const sun = document.getElementById('sun');
const moon = document.getElementById('moon');
const nowDate = document.getElementById('date');
const sec = document.querySelector('.sec');
const min = document.querySelector('.min');
const hour = document.querySelector('.hour');
sun.addEventListener('click', () => {
    const clockAnalog = document.querySelector('.clock');
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
    clockAnalog.classList.add('clock2');
    hour.classList.add('hour2');
    min.classList.add('min2');
    sec.classList.add('sec2');
});
moon.addEventListener('click', () => {
    const clockAnalog = document.querySelector('.clock');
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
    clockAnalog.classList.remove('clock2');
    hour.classList.remove('hour2');
    min.classList.remove('min2');
    sec.classList.remove('sec2');
});
setInterval(() => {
    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    hour.style.transform = `rotateZ(${(h * 30) + (m / 12)}deg)`;
    min.style.transform = `rotateZ(${(m * 6)}deg)`;
    sec.style.transform = `rotateZ(${(s * 6)}deg)`;
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
    clock.innerText = `${h}:${m}:${s}`;
}, 1000);
const date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();
month = month < 10 ? '0' + month : month;
day = day < 10 ? '0' + day : day;
nowDate.innerText = `${year}-${month}-${day}`;