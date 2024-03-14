const sun = document.getElementById('sun');
const moon = document.getElementById('moon');
const height = document.getElementById('height');
const weight = document.getElementById('weight');
const btn = document.getElementById('btn');
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
    nORp[1].classList.remove('offcanvas-btn2')
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
    const body = document.body;
    const text = document.getElementById('text');
    const text2 = document.getElementById('text2');
    if ((height.value && weight.value) === '') {
        text.innerText = 'Enter Height & Weight!';
        text2.innerText = '';
        text.classList.add('text-danger');
        text.classList.remove('text-success');
    } else {
        const bmi = (weight.value / ((height.value * 0.01) ** 2)).toFixed(2);
        if (bmi >= 0 && bmi < 19) {
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
        } else if (bmi >= 40 && bmi < 99990001) {
            body.setAttribute('class', 'eobese');
            text2.setAttribute('class', 'eobese-text fs-5 text-decoration-underline');
            text2.innerText = 'Extremely Obese';
        }
        text.innerText = `Your BMI is ${bmi}`;
        text.classList.remove('text-danger');
        text.classList.add('text-success');
    }
});