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
const birthDate = document.getElementById('date');
const btn = document.getElementById('btn');
const text = document.getElementById('text');
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
    body.classList.remove('bg');
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
btn.addEventListener('click', () => {
    if (birthDate.value === '') {
        text.innerText = 'Enter Your Age';
        text.classList.add('text-danger');
        text.classList.remove('text-success');
    } else {
        const today = new Date();
        const then = new Date(birthDate.value);
        let year = today.getFullYear() - then.getFullYear();
        let month = today.getMonth() - then.getMonth();
        let day = today.getDay() - then.getDay();
        if (day < 0) {
            month--;
            day += new Date(
                today.getFullYear(),
                today.getMonth(),
                0
            ).getDate();
        }
        if (month < 0) {
            year--;
            month += 12;
        }
        text.innerText = `${year} years, ${month} months & ${day} days`;
        text.classList.add('text-success');
        text.classList.remove('text-danger');
    }
});