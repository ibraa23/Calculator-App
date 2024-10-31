class ScientificCalculator extends BasicCalculator {
    processInput(value) {
        switch (value) {
            case '√':
                this.currentValue = Math.sqrt(parseFloat(this.currentValue));
                break;
            case 'π':
                this.currentValue = Math.PI;
                break;
            case 'e':
                this.currentValue = Math.E;
                break;
            default:
                super.processInput(value);
        }
        return this.currentValue;
    }
}