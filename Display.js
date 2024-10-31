class Display {
    constructor(displayElement) {
        this.displayElement = displayElement;
        this.reset();
    }

    reset() {
        this.displayElement.innerText = '0';
    }

    update(value) {
        this.displayElement.innerText = value;
    }
}