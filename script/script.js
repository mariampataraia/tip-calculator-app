// Your JavaScript code
const buttons = document.querySelectorAll('.green-button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Set the background color of the clicked button to red
        button.style.backgroundColor = 'red';

        // Set the background color of all the other buttons back to green
        buttons.forEach(otherButton => {
            if (otherButton !== button) {
                otherButton.style.backgroundColor = 'green';
            }
        });
    });
});
