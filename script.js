document.getElementById('theme').addEventListener('click', function(){
    document.body.classList.toggle('dark-mode');
})

const themeButton = document.getElementById('theme');

function updateIcon() {
    const iconClass = body.classList.contains('darkmode') ? 'fa-sun' : 'fa-moon';
    themeButton.innerHTML = `<i class="fa-regular ${iconClass}"></i>`;
}