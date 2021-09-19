"use strict";

let input = document.querySelector(".email-type"),
    form = document.querySelector(".form"),
    error = document.querySelector(".error"),
    pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (input.value.match(pattern)) {
        input.value = input.value;
        input.style.borderColor = "hsl(223, 87%, 63%)";
        error.style.color = "hsl(223, 87%, 63%)";
        error.textContent = "Congratulations ! You will have a notify soon";
        error.classList.add("show");

        setTimeout(() => {
            input.style.borderColor = "hsl(209, 33%, 12%)";
            input.value = "";
            input.placeholder = "Your email address...";
            error.classList.remove("show");
        }, 2000);
    } else {
        input.value = input.value;
        input.style.borderColor = "hsl(354, 100%, 66%)";
        error.style.color = "hsl(354, 100%, 66%)";
        error.textContent = "Please provide valid email address";
        error.classList.add("show");

        setTimeout(() => {
            input.style.borderColor = "hsl(209, 33%, 12%)";
            input.value = "";
            input.placeholder = "Your email address...";
            error.classList.remove("show");
        }, 2000);
    }
})