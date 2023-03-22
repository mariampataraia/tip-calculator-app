
const buttons = document.querySelectorAll('.tip_button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Set the background color of the clicked button to red
        button.style.backgroundColor = '#26c2ad';

        // Set the background color of all the other buttons back to green
        buttons.forEach(otherButton => {
            if (otherButton !== button) {
                otherButton.style.backgroundColor = '#00474b';
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
let reset = document.getElementById("reset");

let border = document.getElementById("inputBorder");

let alert = document.getElementById("alert");
let secAlert = document.getElementById("secAlert");

let button = document.getElementById('custom');
let inputButton = document.getElementById('customInput');

var lastButton = "";

var lastTipValue = 0;
var lastTotalValue = 0;

var activeBtn = null;

tip.innerHTML = "$ 0";
total.innerHTML = "$ 0";


five.addEventListener("click", () => {
    let amount = Math.round(input.value);
    lastTipValue = (5 / 100) * amount;
    lastTotalValue = lastTipValue + parseFloat(input.value);
    tip.innerText = `$ ${(lastTipValue / people.value).toFixed(1)}`;
    total.innerHTML = `$ ${(lastTotalValue / people.value).toFixed(1)}`;
    activeBtn = 0.05;
    inputButton.style.display = "none";
    inputButton.value = "";
    button.style.display = "block";
});

ten.addEventListener("click", () => {
    let amount = Math.round(input.value);
    lastTipValue = (10 / 100) * amount;
    lastTotalValue = lastTipValue + parseFloat(input.value);
    tip.innerText = `$ ${(lastTipValue / people.value).toFixed(1)}`;
    total.innerHTML = `$ ${(lastTotalValue / people.value).toFixed(1)}`;
    activeBtn = 0.1;
    inputButton.style.display = "none";
    inputButton.value = "";
    button.style.display = "block";
});

fifteen.addEventListener("click", () => {
    let amount = Math.round(input.value);
    lastTipValue = (15 / 100) * amount;
    lastTotalValue = lastTipValue + parseFloat(input.value);
    tip.innerText = `$ ${(lastTipValue / people.value).toFixed(1)}`;
    total.innerHTML = `$ ${(lastTotalValue / people.value).toFixed(1)}`;
    activeBtn = 0.15;
    inputButton.style.display = "none";
    inputButton.value = "";
    button.style.display = "block";
});

twentyfive.addEventListener("click", () => {
    let amount = Math.round(input.value);
    lastTipValue = (25 / 100) * amount;
    lastTotalValue = lastTipValue + parseFloat(input.value);
    tip.innerText = `$ ${(lastTipValue / people.value).toFixed(1)}`;
    total.innerHTML = `$ ${(lastTotalValue / people.value).toFixed(1)}`;
    activeBtn = 0.25;
    inputButton.style.display = "none";
    inputButton.value = "";
    button.style.display = "block";
});

fifty.addEventListener("click", () => {
    let amount = input.value;
    lastTipValue = (50 / 100) * amount;
    lastTotalValue = lastTipValue + parseFloat(input.value);
    tip.innerText = `$ ${(lastTipValue / people.value).toFixed(1)}`;
    total.innerHTML = `$ ${(lastTotalValue / people.value).toFixed(1)}`;
    activeBtn = 0.5;
    inputButton.style.display = "none";
    inputButton.value = "";
    button.style.display = "block";
});












inputButton.addEventListener("input", () => {

    if (input.value == "" || input.value == 0) {
        secAlert.style.display = "block";
    }

    let amount = Math.round(input.value);
    let value = inputButton.value;
    lastTipValue = (value / 100) * amount;
    lastTotalValue = lastTipValue + parseFloat(input.value);
    tip.innerText = `$ ${(lastTipValue / people.value).toFixed(1)}`;
    total.innerHTML = `$ ${(lastTotalValue / people.value).toFixed(1)}`;
    activeBtn = value / 100;

    buttons.style.backgroundColor = '#26c2ad';

});


button.addEventListener('click', () => {


    button.style.display = "none";
    inputButton.style.display = "block";
    inputButton.focus();

});


people.addEventListener("input", () => {

    if (people.value == 0) {
        alert.style.display = "block";

    } else {
        alert.style.display = "none";
        tip.innerText = `$ ${(lastTipValue / people.value).toFixed(1)}`;
        total.innerHTML = `$ ${(lastTotalValue / people.value).toFixed(1)}`;
        validateInput();
    }
})

people.addEventListener("click", () => {
    people.value = "";
});

function removeError() {
    if (people.value > 0) {
        alert.style.display = "none";
    }
}



input.addEventListener("input", () => {

    if (input.value == 0) {
        secAlert.style.display = "block";
    } else {
        secAlert.style.display = "none";
        let amount = input.value;
        lastTipValue = activeBtn * amount;
        lastTotalValue = lastTipValue + parseFloat(input.value);
        tip.innerText = `$ ${(lastTipValue / people.value).toFixed(1)}`;
        total.innerHTML = `$ ${(lastTotalValue / people.value).toFixed(1)}`;

    }


})




reset.addEventListener("click", () => {
    bill.value = "";
    tip.innerHTML = "$ 0";
    total.innerHTML = "$ 0";
    people.value = 1;
    alert.style.display = "none";
    inputButton.style.display = "none";
    inputButton.value = "";
    button.style.display = "block";

})




















