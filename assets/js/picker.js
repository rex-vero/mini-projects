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
const pcText = document.getElementById('pc');
const label = document.getElementById('label');
const input = document.getElementById('input');
const img = document.getElementById('img');
const btn = document.getElementById('btn');
const color = document.getElementById('color');
sun.addEventListener('click', () => {
    sun.classList.add('d-none');
    moon.classList.remove('d-none');
    body.setAttribute('class', 'bg');
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
    label.setAttribute('class', 'label2');
    if (color.innerText !== '') {
        btn.setAttribute('class', 'picker');
    } else {
        btn.setAttribute('class', 'picker d-none');
    }
    pcText.classList.add('text-white');
});
moon.addEventListener('click', () => {
    sun.classList.remove('d-none');
    moon.classList.add('d-none');
    body.setAttribute('class', 'bg-white');
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
    label.setAttribute('class', 'label');
    if (color.innerText !== '') {
        btn.setAttribute('class', 'picker');
    } else {
        btn.setAttribute('class', 'picker d-none');
    }
    pcText.classList.remove('text-white');
});
input.addEventListener('change', () => {
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
    const eyeDropper = new EyeDropper();
    let { sRGBHex } = await eyeDropper.open();
    color.classList.remove('d-none');
    color.innerText = sRGBHex;
    body.classList.add('trans');
    body.style.backgroundColor = sRGBHex;
});