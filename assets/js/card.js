const body = document.getElementById('body');
const navbar = document.getElementById('navbar');
const sun = document.getElementById('sun');
const moon = document.getElementById('moon');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const input = document.getElementById('input');
const number = document.getElementById('number');
const bank = document.getElementById('bank');
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
input.addEventListener('input', () => {
    input.value === '' ? number.innerText = '0000-0000-0000-0000' : number.innerText = input.value;
    if (+number.innerText.includes(627412)) {
        bank.innerText = 'Eqtesad Novin Bank';
    } else if (+number.innerText.includes(627381)) {
        bank.innerText = 'Ansar Bank';
    } else if (+number.innerText.includes(505785)) {
        bank.innerText = 'Iran Zamin Bank';
    } else if (+number.innerText.includes(622106)||+number.innerText.includes(639194)||+number.innerText.includes(627884)||+number.innerText.includes(622106)||+number.innerText.includes(627884)||+number.innerText.includes(639194)) {
        bank.innerText = 'Parsian Bank';
    }
    else {
        bank.innerText = '-----';
    }
});