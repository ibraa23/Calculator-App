class Theme {
    constructor() {
        this.isDarkMode = false;
        this.icon = document.getElementById('theme-toggle');
        this.updateTheme();
    }

    toggleTheme() {
        this.isDarkMode = !this.isDarkMode;
        this.updateTheme();
    }

    updateTheme() {
        document.body.classList.toggle('dark-mode', this.isDarkMode);
        this.icon.innerText = this.isDarkMode ? '🌙' : '🌞';
    }
}