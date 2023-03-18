
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
let reset = document.getElementById("reset");



var lastTipValue = 0;
var lastTotalValue = 0;

var activeBtn = null;

tip.innerHTML = "$ 0";
total.innerHTML = "$ 0";



// five.addEventListener("click", () => {
//     let number = parseFloat(input.value);
//     let five = Math.round((5 / 100) * number);
//     console.log(ten);
//     tip.innerText = `$ ${five.toFixed(0)}`;
//     total.innerHTML = `$ ${five + number}`;
// });


five.addEventListener("click", () => {
    let number = Math.round(input.value);
    console.log(typeof (number));
    let five = Math.round((5 / 100) * number);

    tip.innerText = `$ ${five}`;
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
    let amount = Math.round(input.value);
    lastTipValue = (25 / 100) * amount;
    lastTotalValue = lastTipValue + parseFloat(input.value);
    tip.innerText = `$ ${lastTipValue / people.value}`;
    total.innerHTML = `$ ${lastTotalValue / people.value}`;
    activeBtn = 0.25;
});



fifty.addEventListener("click", () => {
    let amount = Math.round(input.value);
    lastTipValue = (50 / 100) * amount;
    lastTotalValue = lastTipValue + parseFloat(input.value);
    tip.innerText = `$ ${lastTipValue / people.value}`;
    total.innerHTML = `$ ${lastTotalValue / people.value}`;
    activeBtn = 0.5;
});

people.addEventListener("input", () => {
    if (people.value == 0 || input.value == "") {
        tip.innerText = `$ ${(lastTipValue).toFixed(1)}`;
        total.innerHTML = `$ ${(lastTotalValue).toFixed(1)}`;
    } else {
        tip.innerText = `$ ${(lastTipValue / people.value).toFixed(1)}`;
        total.innerHTML = `$ ${(lastTotalValue / people.value).toFixed(1)}`;
    }
})

input.addEventListener("input", () => {


    let amount = input.value;
    lastTipValue = activeBtn * amount;
    lastTotalValue = lastTipValue + parseFloat(input.value);
    tip.innerText = `$ ${lastTipValue / people.value}`;
    total.innerHTML = `$ ${lastTotalValue / people.value}`;
})


reset.addEventListener("click", () => {
    bill.value = "";
    tip.innerHTML = "$ 0";
    total.innerHTML = "$ 0";
    people.value = 1;
})















// fifty.addEventListener("click", () => {
//     let number = Math.round(input.value);
//     let fifty = (50 / 100) * number;
//     tip.innerText = `$ ${fifty / people.value}`;
//     total.innerHTML = `$ ${(fifty + number) / people.value}`;
//     lastTipValue = fifty;
//     lastTotalValue = fifty + number;
//     actoveBtn = fifty;
// });