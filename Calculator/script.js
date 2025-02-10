document.addEventListener('DOMContentLoaded', () => {
    const result = document.getElementById('result');
    let currentNumber = '';
    let previousNumber = '';
    let operation = null;
    let shouldResetScreen = false;

    // Add event listeners to all buttons
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => {
            if (button.classList.contains('number')) {
                handleNumber(button.textContent);
            } else if (button.classList.contains('operator')) {
                handleOperator(button.textContent);
            } else if (button.classList.contains('equals')) {
                handleEquals();
            } else if (button.classList.contains('decimal')) {
                handleDecimal();
            } else if (button.classList.contains('clear')) {
                handleClear();
            }
        });
    });

    function handleNumber(number) {
        if (shouldResetScreen) {
            result.value = '';
            shouldResetScreen = false;
        }
        result.value += number;
        currentNumber = result.value;
    }

    function handleOperator(op) {
        if (operation !== null) handleEquals();
        previousNumber = result.value;
        operation = op;
        shouldResetScreen = true;
    }

    function handleEquals() {
        if (operation === null || shouldResetScreen) return;
        
        const prev = parseFloat(previousNumber);
        const current = parseFloat(currentNumber);
        let resultValue;

        switch (operation) {
            case '+':
                resultValue = prev + current;
                break;
            case '-':
                resultValue = prev - current;
                break;
            case '*':
                resultValue = prev * current;
                break;
            case '/':
                resultValue = prev / current;
                break;
            default:
                return;
        }

        result.value = resultValue;
        operation = null;
        previousNumber = '';
        currentNumber = resultValue.toString();
        shouldResetScreen = true;
    }

    function handleDecimal() {
        if (shouldResetScreen) {
            result.value = '0';
            shouldResetScreen = false;
        }
        if (!result.value.includes('.')) {
            result.value += '.';
            currentNumber = result.value;
        }
    }

    function handleClear() {
        result.value = '';
        currentNumber = '';
        previousNumber = '';
        operation = null;
        shouldResetScreen = false;
    }
});