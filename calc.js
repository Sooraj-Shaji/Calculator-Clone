function clearScreen() {
    document.getElementById('calculator-screen').value = '';
}

function deleteLast() {
    let screen = document.getElementById('calculator-screen');
    screen.value = screen.value.slice(0, -1);
}

function appendNumber(number) {
    let screen = document.getElementById('calculator-screen');
    screen.value += number;
}

function appendOperator(operator) {
    let screen = document.getElementById('calculator-screen');
    screen.value += operator;
}

function calculateResult() {
    let screen = document.getElementById('calculator-screen');
    try {
        screen.value = eval(screen.value);
    } catch (e) {
        screen.value = 'Error';
    }
}
