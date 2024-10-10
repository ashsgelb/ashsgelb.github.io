const themeToggleBtn = document.getElementById('theme-toggle');
const themeStyle = document.getElementById('theme-style');

// Check for saved user preference
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
    themeStyle.setAttribute('href', savedTheme); // Apply saved theme
    themeToggleBtn.textContent = savedTheme === 'assets/css/light-mode.css' ? 'Switch to Dark Mode' : 'Switch to Light Mode';
}

themeToggleBtn.addEventListener('click', function() {
    if (themeStyle.getAttribute('href') === 'assets/css/light-mode.css') {
        themeStyle.setAttribute('href', 'assets/css/dark-mode.css');
        themeToggleBtn.textContent = 'Switch to Light Mode';
        localStorage.setItem('theme', 'assets/css/dark-mode.css'); // Save preference
    } else {
        themeStyle.setAttribute('href', 'assets/css/light-mode.css');
        themeToggleBtn.textContent = 'Switch to Dark Mode';
        localStorage.setItem('theme', 'assets/css/light-mode.css'); // Save preference
    }
});
