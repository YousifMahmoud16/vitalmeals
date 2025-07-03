document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-button');
    const closeButton = document.getElementById('close-sidebar');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    // فتح المنيو
    menuButton.addEventListener('click', () => {
        sidebar.classList.add('visible');
        overlay.classList.remove('hidden');
    });

    // غلق المنيو بزر الإغلاق
    closeButton.addEventListener('click', () => {
        sidebar.classList.remove('visible');
        overlay.classList.add('hidden');
    });

    // غلق المنيو عند الضغط على الخلفية الشفافة
    overlay.addEventListener('click', () => {
        sidebar.classList.remove('visible');
        overlay.classList.add('hidden');
    });
});
