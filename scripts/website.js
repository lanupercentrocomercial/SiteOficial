/* --- website.js --- */
function enviarZap() {
    const curso = "Construção de Websites e IA";
    const msg = encodeURIComponent(`Olá Lanuper! Gostaria de mais informações sobre o curso de ${curso}.`);
    const fone = "55219XXXXXXXX"; // Substitua pelo seu número
    window.open(`https://wa.me/${fone}?text=${msg}`, '_blank');
}

// Pequena animação de entrada para os itens da lista
document.querySelectorAll('.learning-list li').forEach((item, index) => {
    item.style.opacity = "0";
    item.style.transform = "translateX(-20px)";
    item.style.transition = "all 0.5s ease " + (index * 0.2) + "s";
    
    setTimeout(() => {
        item.style.opacity = "1";
        item.style.transform = "translateX(0)";
    }, 100);
});