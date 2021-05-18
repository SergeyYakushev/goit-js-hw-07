const input = document.querySelector('[data-length="6"]');

input.addEventListener('blur', onBlurInputChange);



function onBlurInputChange(event) {
    if (event.currentTarget.value.length === Number(input.dataset.length)) {
        input.classList.remove('invalid');
        input.classList.add('valid');


    } else {
        input.classList.remove('valid');
        input.classList.add('invalid');

    }
}