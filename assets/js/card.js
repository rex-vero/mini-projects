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
    body.classList.remove('dark');
    body.classList.add('light');
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
input.addEventListener('input', () => {
    if (input.value === '') {
        number.innerText = '0000-0000-0000-0000';
    } else {
        const dash = (input) => {
            return input.replace(/\d{4}(?=.)/g, '$&-');
        };
        let newValue = dash(input.value);
        number.innerText = newValue;
    }
    if (input.value.length > 16) {
        input.value = input.value.slice(0, 16);
        number.innerText = number.innerText.slice(0, 19);
    }
    if (isNaN(input.value) || input.value === ' ') {
        input.value = '';
        number.innerText = '0000-0000-0000-0000';
    }
    if (+input.value.startsWith(627412)) {
        bank.innerText = 'Eqtesad Novin Bank';
        card.classList.add('eqtesad-novin');
    } else if (+input.value.startsWith(627381)) {
        bank.innerText = 'Ansar Bank';
        card.classList.add('ansar');
    } else if (+input.value.startsWith(505785)) {
        bank.innerText = 'Iran Zamin Bank';
        card.classList.add('iran-zamin');
    } else if (+input.value.startsWith(622106) || +input.value.startsWith(639194) || +input.value.startsWith(627884)) {
        bank.innerText = 'Parsian Bank';
        card.classList.add('parsian');
    } else if (+input.value.startsWith(639347) || +input.value.startsWith(502229)) {
        bank.innerText = 'Pasagurd Bank';
        card.classList.add('pasagurd');
    } else if (+input.value.startsWith(636214)) {
        bank.innerText = 'Ayande Bank';
        card.classList.add('ayande');
    } else if (+input.value.startsWith(627353)) {
        bank.innerText = 'Tejarat Bank';
        card.classList.add('tejarat');
    } else if (+input.value.startsWith(502908)) {
        bank.innerText = 'Tosee Tavon Bank';
        card.classList.add('tosee-tavon');
    } else if (+input.value.startsWith(627648) || +input.value.startsWith(207177)) {
        bank.innerText = 'Tosee Saderat Iran Bank';
        card.classList.add('tosee-saderat-iran');
    } else if (+input.value.startsWith(636949)) {
        bank.innerText = 'Hekmat Iranian Bank';
        card.classList.add('hekmat-iranian');
    } else if (+input.value.startsWith(502938)) {
        bank.innerText = 'Dey Bank';
        card.classList.add('dey');
    } else if (+input.value.startsWith(589463)) {
        bank.innerText = 'Refah Karegaran Bank';
        card.classList.add('refah-karegaran');
    } else if (+input.value.startsWith(621986)) {
        bank.innerText = 'Saman Bank';
        card.classList.add('saman');
    } else if (+input.value.startsWith(589210)) {
        bank.innerText = 'Sepah Bank';
        card.classList.add('sepah');
    } else if (+input.value.startsWith(639607)) {
        bank.innerText = 'Sarmaye Bank';
        card.classList.add('sarmaye');
    } else if (+input.value.startsWith(639346)) {
        bank.innerText = 'Sina Bank';
        card.classList.add('sina');
    } else if (+input.value.startsWith(502806)) {
        bank.innerText = 'Shahr Bank';
        card.classList.add('shahr');
    } else if (+input.value.startsWith(603769)) {
        bank.innerText = 'Saderat Iran Bank';
        card.classList.add('saderat-iran');
    } else if (+input.value.startsWith(627961)) {
        bank.innerText = 'Sanat Va Madan Bank';
        card.classList.add('sanat-va-madan');
    } else if (+input.value.startsWith(606373)) {
        bank.innerText = 'Qarz Alhasane Bank';
        card.classList.add('qarz-alhasane');
    } else if (+input.value.startsWith(639599)) {
        bank.innerText = 'Qavamim Bank';
        card.classList.add('qavamim');
    } else if (+input.value.startsWith(627488) || +input.value.startsWith(502910)) {
        bank.innerText = 'Kar Afarin Bank';
        card.classList.add('kar-afarin');
    } else if (+input.value.startsWith(603770) || +input.value.startsWith(639217)) {
        bank.innerText = 'Keshavarzi Bank';
        card.classList.add('keshavarzi');
    } else if (+input.value.startsWith(505416)) {
        bank.innerText = 'Gardeshgari Bank';
        card.classList.add('gardeshgari');
    } else if (+input.value.startsWith(636795)) {
        bank.innerText = 'Markazi Bank';
        card.classList.add('markazi');
    } else if (+input.value.startsWith(628023)) {
        bank.innerText = 'Maskan Bank';
        card.classList.add('maskan');
    } else if (+input.value.startsWith(610433) || +input.value.startsWith(991975)) {
        bank.innerText = 'Melat Bank';
        card.classList.add('melat');
    } else if (+input.value.startsWith(603799)) {
        bank.innerText = 'Meli Iran Bank';
        card.classList.add('meli');
    } else if (+input.value.startsWith(639370) || +input.value.startsWith(639369)) {
        bank.innerText = 'Mehr Eqtesad Bank';
        card.classList.add('mehr-eqtesad');
    } else if (+input.value.startsWith(627760)) {
        bank.innerText = 'Iran Post Bank';
        card.classList.add('iran-post');
    } else {
        bank.innerText = '--------';
        card.setAttribute('class', 'card default fw-bold pt-2');
    }
});