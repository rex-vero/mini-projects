const sun = document.getElementById('sun');
const moon = document.getElementById('moon');
const add = document.getElementById('add');
const input = document.getElementById('input');
const list = document.getElementById('list');
const del = document.getElementById('del');
const data = JSON.parse(localStorage.getItem('todo'));
let title = document.title;
window.addEventListener('focus', () => {
    document.title = title;
});
window.addEventListener('blur', () => {
    document.title = 'Oh Come On Come Back :(';
});
let todoList = data || [];
const liMaker = (value) => {
    const div = document.createElement('div');
    div.setAttribute('class', 'bg-todo align-items-center justify-content-between');
    div.innerHTML += `<span class="text-white fs-5 px-3">${value}</span>
    <i class="bi bi-trash px-2 fs-5"></i>`;
    list.appendChild(div);
}
todoList.forEach(todo => {
    liMaker(todo);
});
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
    nORp[1].classList.remove('offcanvas-btn2');
});
add.addEventListener('click', () => {
    const warn = document.getElementById('warn');
    if (input.value === '') {
        warn.innerText = 'Input Is Empty!';
    } else {
        liMaker(input.value);
        todoList.push(input.value)
        localStorage.setItem('todo', JSON.stringify(todoList));
    }
    input.value = '';
    if (list.scrollHeight >= 240) {
        list.classList.add('limit');
    }
});
del.addEventListener('click', () => {
    list.classList.remove('limit');
    localStorage.clear();
    todoList = [];
    list.innerHTML = '';
    input.value = '';
});
input.addEventListener('input', () => {
    if (input.value.length > 20) {
        input.value = input.value.slice(0, 20);
    }
});
list.addEventListener('click', (e) => {
    if (e.target.nodeName === 'I') {
        e.target.parentElement.style.display = 'none';
        todoList.splice(todoList.indexOf(e.target.parentElement.firstChild.textContent), 1);
        localStorage.setItem('todo', JSON.stringify(todoList));
        if (list.scrollHeight < 240) {
            list.classList.remove('limit');
        }
    }
    if (e.target.nodeName === 'SPAN') {
        e.target.classList.toggle('checked');
    }
});