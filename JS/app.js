function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + "";
    if (pinString.length == 4) {
        return pin;

    }
    else {
        return getPin()
    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById('pin-control').value = pin;
}


document.getElementById('calculate-number').addEventListener('click', function (event) {
    const number = (event.target.innerText);
    const inputNumber = document.getElementById('display-number');
    if (isNaN(number)) {
        if (number == "C") {
            inputNumber.value = '';
        }
    }
    else {
        const previousNumber = inputNumber.value;
        const newNumber = previousNumber + number;
        inputNumber.value = newNumber;
    }

})
//Pin matching
document.getElementById('submit-button').addEventListener('click', function () {
    const generatedPin = document.getElementById('pin-control');
    const displayPin = generatedPin.value;


    const calcNumber = document.getElementById('display-number');
    const displayNumber = calcNumber.value;

    const successMessage = document.getElementById('notification-success');
    const ErrorMessage = document.getElementById('notification-fail');

    if (displayPin == displayNumber) {

        successMessage.style.display = 'block';
        ErrorMessage.style.display = 'none';
    }
    else {

        ErrorMessage.style.display = 'block';
        successMessage.style.display = 'none';
    }
})