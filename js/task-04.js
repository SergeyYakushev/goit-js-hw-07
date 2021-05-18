const refs = {
    decrement: document.querySelector('[data-action="decrement"]'),
    increment: document.querySelector('[data-action="increment"]'),
    count: document.querySelector('#value'),
};

refs.decrement.addEventListener('click', onBtnDecrement);
refs.increment.addEventListener('click', onBtnIncrement);


let counter = 0;

function onBtnDecrement() {

    counter = counter - 1;

    refs.count.textContent = counter;
};

function onBtnIncrement() {

    counter = counter + 1;

    refs.count.textContent = counter;
};
