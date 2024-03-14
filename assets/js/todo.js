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
const add = document.getElementById('add');
const input = document.getElementById('input');
const list = document.getElementById('list');
const del = document.getElementById('del');
const data = JSON.parse(localStorage.getItem('todo'));
let todoList = data || [];
todoList.forEach(todo => {
    const div = document.createElement('div');
    div.setAttribute('class', 'bg-todo align-items-center justify-content-between');
    div.innerHTML += `<span class="text-white fs-5 px-3">${todo}</span>
    <i class="bi bi-trash px-2 fs-5"></i>`;
    list.appendChild(div);
});
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
add.addEventListener('click', () => {
    const warn = document.getElementById('warn');
    if (input.value === '') {
        warn.innerText = 'Input Is Empty!';
    } else {
        const div = document.createElement('div');
        div.setAttribute('class', 'bg-todo align-items-center justify-content-between');
        warn.innerText = '';
        div.innerHTML += `<span class="text-white fs-5 px-3">${input.value}</span>
        <i class="bi bi-trash px-2 fs-5"></i>`;
        list.appendChild(div);
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
    if (e.target.nodeName === 'DIV') {
        e.target.classList.toggle('checked');
    }
});