const sun = document.getElementById('sun');
const moon = document.getElementById('moon');
const input = document.getElementById('input');
const btn = document.getElementById('btn');
const number = Math.floor(Math.random() * 10);
let counter = 1;
console.log(number);
sun.addEventListener('click', () => {
    const bodys = document.querySelectorAll('.body');
    const navs = document.querySelectorAll('.navs');
    const nORp = document.querySelectorAll('.text');
    const links = document.querySelectorAll('.links');
    const card = document.getElementById('card');
    sun.classList.add('d-none');
    moon.classList.remove('d-none');
    input.classList.add('input2');
    btn.classList.add('guess2');
    card.classList.add('bg-list2');
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
    const card = document.getElementById('card');
    sun.classList.remove('d-none');
    moon.classList.add('d-none');
    input.classList.remove('input2');
    btn.classList.remove('guess2');
    card.classList.remove('bg-list2');
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
input.addEventListener('input', () => {
    const errors = document.getElementById('errors');
    if (input.value.length > 2) {
        input.value = input.value.slice(0, 2);
    }
    if (isNaN(input.value)) {
        input.value = '';
    }
    input.value > 10 ? errors.textContent = 'Guess Between 0 To 10 Not Higher!' : errors.textContent = '';
});
btn.addEventListener('click', () => {
    const body = document.body;
    const errors = document.getElementById('errors');
    const score = document.getElementById('score');
    const reveal = document.getElementById('reveal');
    if (input.value === '') {
        errors.textContent = 'Input Is Empty!';
    } else {
        errors.textContent = '';
        if (+input.value > number) {
            body.classList.remove('green');
            score.classList.add('text-danger');
            score.classList.remove('text-success');
            score.textContent = 'The Number Is Lower!';
            input.value = '';
            reveal.textContent = '?';
            counter++;
        } else if (+input.value < number) {
            body.classList.remove('green');
            score.classList.add('text-danger');
            score.classList.remove('text-success');
            score.textContent = 'The Number Is Higher!';
            input.value = '';
            reveal.textContent = '?';
            counter++;
        } else if (+input.value === number) {
            body.classList.add('green');
            score.classList.remove('text-danger');
            score.classList.add('text-success');
            score.textContent = `You Guessed It After ${counter} Times.`;
            input.value = '';
            reveal.textContent = number;
        }
    }
});