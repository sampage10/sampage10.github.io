const themeButton = document.getElementById('theme');
const sidebar = document.getElementById('sidebar');

function setDarkMode(on) {
  if (on) {
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
  } else {
    document.body.classList.remove('dark-mode');
    localStorage.removeItem('darkMode');
  }
    const icon = themeButton.querySelector('i');
    if (icon) {
        icon.classList.toggle('fa-sun', on);
        icon.classList.toggle('fa-moon', !on);
    }
}

// Load saved preference or default to light mode
setDarkMode(localStorage.getItem('darkMode') === 'enabled');

// Toggle dark mode on button click
themeButton.addEventListener('click', () => {
  setDarkMode(!document.body.classList.contains('dark-mode'));
});
