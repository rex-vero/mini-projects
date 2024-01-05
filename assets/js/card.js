const body = document.getElementById('body');
const navbar = document.getElementById('navbar');
const sun = document.getElementById('sun');
const moon = document.getElementById('moon');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const input = document.getElementById('input');
const number = document.getElementById('number');
const bank = document.getElementById('bank');
const card = document.getElementById('card');
sun.addEventListener('click', () => {
    sun.classList.add('d-none');
    moon.classList.remove('d-none');
    body.classList.add('dark');
    body.classList.remove('light');
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
    body.classList.remove('dark');
    body.classList.add('light');
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
        card.classList.add('eqtesad-novin');
    } else if (+number.innerText.includes(627381)) {
        bank.innerText = 'Ansar Bank';
        card.classList.add('ansar');
    } else if (+number.innerText.includes(505785)) {
        bank.innerText = 'Iran Zamin Bank';
    } else if (+number.innerText.includes(622106) || +number.innerText.includes(639194) || +number.innerText.includes(627884)) {
        bank.innerText = 'Parsian Bank';
    } else if (+number.innerText.includes(639347) || +number.innerText.includes(502229)) {
        bank.innerText = 'Pasagurd Bank';
    } else if (+number.innerText.includes(636214)) {
        bank.innerText = 'Tat Bank';
    } else if (+number.innerText.includes(627353)) {
        bank.innerText = 'Tejarat Bank';
    } else if (+number.innerText.includes(502908)) {
        bank.innerText = 'Tosee Tavon Bank';
    } else if (+number.innerText.includes(627648) || +number.innerText.includes(207177)) {
        bank.innerText = 'Tosee Saderat Iran Bank';
    } else if (+number.innerText.includes(636949)) {
        bank.innerText = 'Hekmat Iranian Bank';
    } else if (+number.innerText.includes(502938)) {
        bank.innerText = 'Dey Bank';
    } else if (+number.innerText.includes(589463)) {
        bank.innerText = 'Refah Karegaran Bank';
    } else if (+number.innerText.includes(621986)) {
        bank.innerText = 'Saman Bank';
    } else if (+number.innerText.includes(589210)) {
        bank.innerText = 'Sepah Bank';
    } else if (+number.innerText.includes(639607)) {
        bank.innerText = 'Sarmaye Bank';
    } else if (+number.innerText.includes(639346)) {
        bank.innerText = 'Sina Bank';
    } else if (+number.innerText.includes(502806)) {
        bank.innerText = 'Shahr Bank';
    } else if (+number.innerText.includes(603769)) {
        bank.innerText = 'Saderat Iran Bank';
    } else if (+number.innerText.includes(627961)) {
        bank.innerText = 'Sanat Va Madan Bank';
    } else if (+number.innerText.includes(606373)) {
        bank.innerText = 'Qarz Alhasane Mehr Iran Bank';
    } else if (+number.innerText.includes(639599)) {
        bank.innerText = 'Qavamim Bank';
    } else if (+number.innerText.includes(627488) || +number.innerText.includes(502910)) {
        bank.innerText = 'Kar Afarin Bank';
    } else if (+number.innerText.includes(603770) || +number.innerText.includes(639217)) {
        bank.innerText = 'Keshavarzi Bank';
    } else if (+number.innerText.includes(505416)) {
        bank.innerText = 'Gardeshgari Bank';
    } else if (+number.innerText.includes(636795)) {
        bank.innerText = 'Markazi Bank';
    } else if (+number.innerText.includes(628023)) {
        bank.innerText = 'Maskan Bank';
    } else if (+number.innerText.includes(610433) || +number.innerText.includes(991975)) {
        bank.innerText = 'Melat Bank';
    } else if (+number.innerText.includes(603799)) {
        bank.innerText = 'Meli Iran Bank';
    } else if (+number.innerText.includes(639370)) {
        bank.innerText = 'Mehr Eqtesad Bank';
    } else if (+number.innerText.includes(627760)) {
        bank.innerText = 'Iran Post Bank';
    } else if (+number.innerText.includes(628157)) {
        bank.innerText = 'Tosee Credit Institution';
    } else if (+number.innerText.includes(505801)) {
        bank.innerText = 'Kosar Credit Institution';
    } else {
        bank.innerText = '--------';
        card.classList.add('default')
        card.classList.remove('eqtesad-novin');
        card.classList.remove('ansar');
    }
});