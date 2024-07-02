
        const display = document.getElementById('result');

        function appendToDisplay(value) {
            display.value += value;
        }

        function clearDisplay() {
            display.value = '';
        }

        function calculate() {
            try {
                display.value = eval(display.value);
            } catch {
                alert('Invalid expression');
                clearDisplay();
            }
        }

        document.addEventListener('keydown', (event) => {
            const key = event.key;
            if (/\d/.test(key)) {
                appendToDisplay(key);
            } else if (['+', '-', '*', '/', '%'].includes(key)) {
                appendToDisplay(key);
            } else if (key === 'Enter') {
                calculate();
            } else if (key === 'Backspace') {
                display.value = display.value.slice(0, -1);
            } else if (key !== 'Shift' && key !== 'Control' && key !== 'Alt' && key !== 'Meta') {
                alert('Only numbers are allowed');
                event.preventDefault();
            }
        });
