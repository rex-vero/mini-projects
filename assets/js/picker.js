const sun = document.getElementById('sun');
const moon = document.getElementById('moon');
const input = document.getElementById('input');
const btn = document.getElementById('btn');
sun.addEventListener('click', () => {
    const bodys = document.querySelectorAll('.body');
    const navs = document.querySelectorAll('.navs');
    const nORp = document.querySelectorAll('.text');
    const links = document.querySelectorAll('.links');
    const label = document.getElementById('label');
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
    label.classList.add('label2');
    if (color.innerText !== '') {
        btn.setAttribute('class', 'picker');
    } else {
        btn.setAttribute('class', 'picker d-none');
    }
});
moon.addEventListener('click', () => {
    const bodys = document.querySelectorAll('.body');
    const navs = document.querySelectorAll('.navs');
    const nORp = document.querySelectorAll('.text');
    const links = document.querySelectorAll('.links');
    const label = document.getElementById('label');
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
    label.classList.remove('label2');
    if (color.innerText !== '') {
        btn.setAttribute('class', 'picker');
    } else {
        btn.setAttribute('class', 'picker d-none');
    }
});
input.addEventListener('change', () => {
    const img = document.getElementById('img');
    let reader = new FileReader();
    reader.onload = (e) => {
        img.setAttribute('src', e.target.result);
    };
    reader.readAsDataURL(input.files[0]);
    img.setAttribute('class', 'img-fluid img mt-3');
    btn.setAttribute('class', 'picker');
    label.innerText = 'Choose Another?';
});
btn.addEventListener('click', async () => {
    const color = document.getElementById('color');
    const body = document.body;
    const eyeDropper = new EyeDropper();
    let { sRGBHex } = await eyeDropper.open();
    color.classList.remove('d-none');
    color.innerText = sRGBHex;
    body.classList.add('trans');
    body.style.backgroundColor = sRGBHex;
});