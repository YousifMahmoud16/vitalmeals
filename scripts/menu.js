// menu.js
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-button');
    const closeButton = document.getElementById('close-sidebar');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    // فتح القائمة الجانبية وإظهار الخلفية الشفافة
    menuButton.addEventListener('click', () => {
        sidebar.classList.add('visible');
        overlay.classList.remove('hidden');
    });

    // إغلاق القائمة الجانبية وإخفاء الخلفية الشفافة عند الضغط على زر الإغلاق
    closeButton.addEventListener('click', () => {
        sidebar.classList.remove('visible');
        overlay.classList.add('hidden');
    });

    // إغلاق القائمة عند الضغط على الخلفية الشفافة نفسها
    overlay.addEventListener('click', () => {
        sidebar.classList.remove('visible');
        overlay.classList.add('hidden');
    });
});
closeButton.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        sidebar.classList.remove('visible');
        overlay.classList.add('hidden');
    }
});
