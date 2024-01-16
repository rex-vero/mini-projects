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
const height = document.getElementById('height');
const weight = document.getElementById('weight');
const btn = document.getElementById('btn');
const text = document.getElementById('text');
const text2 = document.getElementById('text2');
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
});
height.addEventListener('input', () => {
    if (height.value.length > 3) {
        height.value = height.value.slice(0, 3);
    }
    if (isNaN(height.value) || height.value === ' ') {
        height.value = '';
    }
});
weight.addEventListener('input', () => {
    if (weight.value.length > 4) {
        weight.value = weight.value.slice(0, 4);
    }
    if (isNaN(weight.value) || weight.value === ' ') {
        weight.value = '';
    }
});
btn.addEventListener('click', () => {
    if ((height.value && weight.value) === '') {
        text.innerText = 'Enter Height & Weight!';
        text2.innerText = '';
        text.classList.add('text-danger');
        text.classList.remove('text-success');
    } else {
        const bmi = (weight.value / ((height.value * 0.01) ** 2)).toFixed(2);
        if (bmi >= 9 && bmi < 19) {
            body.setAttribute('class', 'low');
            text2.setAttribute('class', 'low-text fs-5 text-decoration-underline');
            text2.innerText = 'Underweight';
        } else if (bmi >= 19 && bmi < 25) {
            body.setAttribute('class', 'normal');
            text2.setAttribute('class', 'normal-text fs-5 text-decoration-underline');
            text2.innerText = 'Healthy';
        } else if (bmi >= 25 && bmi < 30) {
            body.setAttribute('class', 'over');
            text2.setAttribute('class', 'over-text fs-5 text-decoration-underline');
            text2.innerText = 'Overweight';
        } else if (bmi >= 30 && bmi < 40) {
            body.setAttribute('class', 'obese');
            text2.setAttribute('class', 'obese-text fs-5 text-decoration-underline');
            text2.innerText = 'Obese';
        } else if (bmi >= 40 && bmi < 66) {
            body.setAttribute('class', 'eobese');
            text2.setAttribute('class', 'eobese-text fs-5 text-decoration-underline');
            text2.innerText = 'Extremely Obese';
        }
        text.innerText = `Your BMI is ${bmi}`;
        text.classList.remove('text-danger');
        text.classList.add('text-success');
    }
});