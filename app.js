let secondsLeft = 10;

function countdown() {
    const countdownElement = document.querySelector('h1');
    if (secondsLeft > 1) {
        countdownElement.textContent = secondsLeft + " sekunder";
    } else {
        countdownElement.textContent = secondsLeft + " sekund";
    }
    secondsLeft--;
    if (secondsLeft < 0) {
        clearTimeout(timerId);
        countdownElement.textContent = "Hej på dig";
        document.body.style.backgroundColor = 'red'
    } else {
        timerId = setTimeout(countdown, 1000);
    }
}

let timerId = setTimeout(countdown, 1000);