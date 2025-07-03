document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-button');
    const closeButton = document.getElementById('close-sidebar');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    menuButton.addEventListener('click', () => {
        sidebar.classList.add('visible');
        overlay.classList.remove('hidden');
    });

    closeButton.addEventListener('click', () => {
        sidebar.classList.remove('visible');
        overlay.classList.add('hidden');
    });

    overlay.addEventListener('click', () => {
        sidebar.classList.remove('visible');
        overlay.classList.add('hidden');
    });
});
