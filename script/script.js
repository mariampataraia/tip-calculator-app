
const buttons = document.querySelectorAll('.tip_button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Set the background color of the clicked button to red
        button.style.backgroundColor = 'rgb(16, 187, 150)';

        // Set the background color of all the other buttons back to green
        buttons.forEach(otherButton => {
            if (otherButton !== button) {
                otherButton.style.backgroundColor = 'green';
            }
        });
    });
});



let input = document.getElementById("bill");
let five = document.getElementById("five");
let ten = document.getElementById("ten");
let fifteen = document.getElementById("fifteen");
let twentyfive = document.getElementById("twentyfive");
let fifty = document.getElementById("fifty");
let tip = document.getElementById("tip");
let total = document.getElementById("total");
let people = document.getElementById("people");



five.addEventListener("click", () => {
    let number = parseFloat(input.value);
    let five = Math.round((5 / 100) * number);
    console.log(ten);
    tip.innerText = `$ ${five.toFixed(0)}`;
    total.innerHTML = `$ ${five + number}`;
});
ten.addEventListener("click", () => {
    let number = parseFloat(input.value);
    let ten = Math.round((10 / 100) * number);
    console.log(ten);
    tip.innerText = `$ ${ten.toFixed(0)}`;
    total.innerHTML = `$ ${ten + number}`;
});
fifteen.addEventListener("click", () => {
    let number = parseFloat(input.value);
    let fifteen = (15 / 100) * number;
    tip.innerText = `$ ${fifteen.toFixed(0)}`;
    total.innerHTML = `$ ${fifteen + number}`;
});
twentyfive.addEventListener("click", () => {
    let number = parseFloat(input.value);
    let twentyfive = (25 / 100) * number;
    tip.innerText = `$ ${twentyfive.toFixed(0)}`;
    total.innerHTML = `$ ${twentyfive + number}`;
});
fifty.addEventListener("click", () => {
    let number = parseFloat(input.value);
    let fifty = (50 / 100) * number;
    tip.innerText = `$ ${fifty.toFixed(0)}`;
    total.innerHTML = `$ ${fifty + number}`;
});



