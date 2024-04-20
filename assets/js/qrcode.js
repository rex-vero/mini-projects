const sun = document.getElementById('sun');
const moon = document.getElementById('moon');
const btn = document.getElementById('btn');
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
    const input = document.getElementById('input');
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
    input.classList.add('dark');
    btn.classList.add('btn-click1');
});
moon.addEventListener('click', () => {
    const bodys = document.querySelectorAll('.body');
    const navs = document.querySelectorAll('.navs');
    const nORp = document.querySelectorAll('.text');
    const links = document.querySelectorAll('.links');
    const input = document.getElementById('input');
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
    input.classList.remove('dark');
    btn.classList.remove('btn-click1');
});
btn.addEventListener('click', () => {
    const qrcodeDiv = document.getElementById('qrcode');
    const input = document.getElementById('input');
    qrcodeDiv.innerHTML = '';
    if (input.value === '') {
        qrcodeDiv.innerHTML = '';
    } else {
        let qrcode = new QRCode(qrcodeDiv, {
            text: input.value,
            width: 200,
            height: 200
        });
    }
});
