
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
});

ten.addEventListener("click", () => {
    let amount = Math.round(input.value);
    lastTipValue = (10 / 100) * amount;
    lastTotalValue = lastTipValue + parseFloat(input.value);
    tip.innerText = `$ ${(lastTipValue / people.value).toFixed(1)}`;
    total.innerHTML = `$ ${(lastTotalValue / people.value).toFixed(1)}`;
    activeBtn = 0.1;
});

fifteen.addEventListener("click", () => {
    let amount = Math.round(input.value);
    lastTipValue = (15 / 100) * amount;
    lastTotalValue = lastTipValue + parseFloat(input.value);
    tip.innerText = `$ ${(lastTipValue / people.value).toFixed(1)}`;
    total.innerHTML = `$ ${(lastTotalValue / people.value).toFixed(1)}`;
    activeBtn = 0.15;
});

twentyfive.addEventListener("click", () => {
    let amount = Math.round(input.value);
    lastTipValue = (25 / 100) * amount;
    lastTotalValue = lastTipValue + parseFloat(input.value);
    tip.innerText = `$ ${(lastTipValue / people.value).toFixed(1)}`;
    total.innerHTML = `$ ${(lastTotalValue / people.value).toFixed(1)}`;
    activeBtn = 0.25;
});

fifty.addEventListener("click", () => {
    let amount = input.value;
    lastTipValue = (50 / 100) * amount;
    lastTotalValue = lastTipValue + parseFloat(input.value);
    tip.innerText = `$ ${(lastTipValue / people.value).toFixed(1)}`;
    total.innerHTML = `$ ${(lastTotalValue / people.value).toFixed(1)}`;
    activeBtn = 0.5;
});


// people.addEventListener("input", () => {

//     tip.innerText = `$ ${(lastTipValue / people.value).toFixed(1)}`;
//     total.innerHTML = `$ ${(lastTotalValue / people.value).toFixed(1)}`;

// })

people.addEventListener("input", () => {

    if (people.value == 0) {
        alert.style.display = "block";

    } else {
        alert.style.display = "none";
        tip.innerText = `$ ${(lastTipValue / people.value).toFixed(1)}`;
        total.innerHTML = `$ ${(lastTotalValue / people.value).toFixed(1)}`;
        validateInput()
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

    let amount = input.value;
    lastTipValue = activeBtn * amount;
    lastTotalValue = lastTipValue + parseFloat(input.value);
    tip.innerText = `$ ${(lastTipValue / people.value).toFixed(1)}`;
    total.innerHTML = `$ ${(lastTotalValue / people.value).toFixed(1)}`;

})




reset.addEventListener("click", () => {
    bill.value = "";
    tip.innerHTML = "$ 0";
    total.innerHTML = "$ 0";
    people.value = 1;
    alert.style.display = "none";
})


custom.addEventListener("click", () => {

})



let button = document.getElementById('custom');

button.addEventListener('click', () => {
    const input = document.createElement('input');
    input.type = 'text';
    input.style.width = '5.88vw';
    input.setAttribute('id', 'customInput');
    input.classList.add('input');
    input.classList.add('inputtt');
    input.addEventListener('blur', () => {
        button.innerText = input.value;

    });
    button.replaceWith(input);
    input.focus();

});


// button.addEventListener("click", () => {
//     let amount = Math.round(input.value);
//     let value=button.value
//     lastTipValue = (50 / 100) * amount;
//     lastTotalValue = lastTipValue + parseFloat(input.value);
//     tip.innerText = `$ ${lastTipValue / people.value}`;
//     total.innerHTML = `$ ${lastTotalValue / people.value}`;
//     activeBtn = 0.5;
// });







// fifty.addEventListener("click", () => {
//     let number = Math.round(input.value);
//     let fifty = (50 / 100) * number;
//     tip.innerText = `$ ${fifty / people.value}`;
//     total.innerHTML = `$ ${(fifty + number) / people.value}`;
//     lastTipValue = fifty;
//     lastTotalValue = fifty + number;
//     actoveBtn = fifty;
// });

