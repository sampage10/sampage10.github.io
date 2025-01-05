document.getElementById('theme').addEventListener('click', function(){
    document.body.classList.toggle('dark-mode');
    updateIcon();
})

const themeButton = document.getElementById('theme');

function updateIcon() {
    const iconClass = document.body.classList.contains('dark-mode') ? 'fa-sun' : 'fa-moon';
    themeButton.innerHTML = `<i class="fa-regular ${iconClass}"></i>`;
}

updateIcon();

function showSidebar(){
    const sidebar = document.getElementById('sidebar');
    sidebar.style.display = 'flex';
}