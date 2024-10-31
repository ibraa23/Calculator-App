class ButtonHandler {
    constructor(calculator) {
        this.calculator = calculator;
        this.initialize();
    }

    initialize() {
        document.querySelectorAll('.btn').forEach(button => {
            button.addEventListener('click', () => {
                const value = button.getAttribute('data-value');
                this.calculator.handleInput(value);
            });
        });
    }
}