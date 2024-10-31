class BasicCalculator {
    constructor(display) {
        this.display = display;
        this.currentValue = '0';
        this.operator = null;
        this.operand = null;
        this.isNewValue = false;
    }

    handleInput(value) {
        if (/\d/.test(value)) {
            this.inputNumber(value);
        } else if (value === '.') {
            this.inputDecimal();
        } else if (value === 'AC') {
            this.clear();
        } else if (value === '+/-') {
            this.toggleSign();
        } else if (value === '%') {
            this.percent();
        } else if (value === '=') {
            this.calculate();
        } else {
            this.setOperator(value);
        }
    }

    inputNumber(num) {
        if (this.isNewValue) {
            this.currentValue = num;
            this.isNewValue = false;
        } else {
            this.currentValue = this.currentValue === '0' ? num : this.currentValue + num;
        }
        this.display.update(this.currentValue);
    }

    inputDecimal() {
        if (!this.currentValue.includes('.')) {
            this.currentValue += '.';
        }
        this.display.update(this.currentValue);
    }

    clear() {
        this.currentValue = '0';
        this.operator = null;
        this.operand = null;
        this.display.update(this.currentValue);
    }

    toggleSign() {
        this.currentValue = (parseFloat(this.currentValue) * -1).toString();
        this.display.update(this.currentValue);
    }

    percent() {
        this.currentValue = (parseFloat(this.currentValue) / 100).toString();
        this.display.update(this.currentValue);
    }

    setOperator(op) {
        if (this.operator && !this.isNewValue) {
            this.calculate();
        }
        this.operand = parseFloat(this.currentValue);
        this.operator = op;
        this.isNewValue = true;
    }

    calculate() {
        if (!this.operator) return;

        const current = parseFloat(this.currentValue);
        let result = 0;

        switch (this.operator) {
            case '+':
                result = this.operand + current;
                break;
            case '-':
                result = this.operand - current;
                break;
            case '*':
                result = this.operand * current;
                break;
            case '/':
                result = this.operand / current;
                break;
        }

        this.currentValue = result.toString();
        this.display.update(this.currentValue);
        this.operator = null;
        this.isNewValue = true;
    }
}