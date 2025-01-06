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

document.getElementById('hamburger').addEventListener('click', function(){
    showSidebar();
})

function hideSidebar(){
    const sidebar = document.getElementById('sidebar');
    sidebar.style.display = 'none';
}

document.getElementById('hamburger-exit').addEventListener('click', function(){
    hideSidebar();
})