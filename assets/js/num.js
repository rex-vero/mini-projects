const sun = document.getElementById('sun');
const moon = document.getElementById('moon');
const input = document.getElementById('input');
const btn = document.getElementById('btn');
const easyBtn = document.getElementById('easy');
const normalBtn = document.getElementById('normal');
const hardBtn = document.getElementById('hard');
let number = Math.floor(Math.random() * 10);
let limit = 10;
let counter = 1;
let question = '?';
let title = document.title;
window.addEventListener('focus', () => {
    document.title = title;
});
window.addEventListener('blur', () => {
    document.title = 'Oh Come On Come Back :(';
});
const calc = (number, q) => {
    const body = document.body;
    const score = document.getElementById('score');
    const reveal = document.getElementById('reveal');
    if (+input.value > number) {
        body.classList.remove('green');
        score.classList.add('text-danger');
        score.classList.remove('text-success');
        score.textContent = 'The Number Is Lower!';
        input.value = '';
        reveal.textContent = q;
        counter++;
    } else if (+input.value < number) {
        body.classList.remove('green');
        score.classList.add('text-danger');
        score.classList.remove('text-success');
        score.textContent = 'The Number Is Higher!';
        input.value = '';
        reveal.textContent = q;
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
const setMode = (limit, question) => {
    const body = document.body;
    const limitNum = document.getElementById('limit');
    const reveal = document.getElementById('reveal');
    const score = document.getElementById('score');
    body.classList.remove('green');
    limitNum.textContent = `Guess The Number ( Between 0 To ${limit} )`;
    reveal.textContent = question;
    score.textContent = '';
}
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
easyBtn.addEventListener('click', () => {
    limit = 10;
    number = Math.floor(Math.random() * 10);
    question = '?';
    setMode(limit, question);
});
normalBtn.addEventListener('click', () => {
    limit = 20;
    question = '??';
    number = Math.floor(Math.random() * 20);
    setMode(limit, question);
});
hardBtn.addEventListener('click', () => {
    limit = 30;
    number = Math.floor(Math.random() * 30);
    question = '??';
    setMode(limit, question);
});
input.addEventListener('input', () => {
    const errors = document.getElementById('errors');
    if (input.value.length > 2) {
        input.value = input.value.slice(0, 2);
    }
    if (isNaN(input.value)) {
        input.value = '';
    }
    input.value > limit ? errors.textContent = `Guess Between 0 To ${limit} Not Higher!` : errors.textContent = '';
});
btn.addEventListener('click', () => {
    const errors = document.getElementById('errors');
    if (input.value === '') {
        errors.textContent = 'Input Is Empty!';
    } else {
        errors.textContent = '';
        calc(number, question);
    }
});