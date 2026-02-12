"use strict";

const button = document.querySelector('.search-box__toggle');
const form = document.querySelector('.search-box__form');

button.addEventListener("click", showForm);

function showForm() {

    form.classList.toggle('active');
    button.classList.toggle('hidden');

    form.querySelector('input').focus();
}


function closeForm() {

    form.classList.remove('active');
    button.classList.remove('hidden');

}

document.addEventListener("click", function (event) {
    if (!form.contains(event.target) && !button.contains(event.target)) closeForm();
});
    
document.addEventListener("keydown", function (event) {
    if (event.key == "Escape") closeForm();
});