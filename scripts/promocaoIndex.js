document.addEventListener("DOMContentLoaded", function() {
    const banner = document.querySelector('.promo-banner');
    banner.style.display = 'none'; // Começa escondido
    
    setTimeout(() => {
        banner.style.display = 'block';
        banner.animate([
            { transform: 'translateY(-100%)' },
            { transform: 'translateY(0)' }
        ], {
            duration: 500,
            easing: 'ease-out'
        });
    }, 1000); // Aparece após 1 segundo
});