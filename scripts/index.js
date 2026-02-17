/**
 * Lanuper Centro Comercial - Lógica do Site
<<<<<<< HEAD
 * Desenvolvedor: [Seu Nome/AI]
=======
 * Desenvolvedor: Greice Lacerda
>>>>>>> 6651b99ad816c0d47fe6f1d6f089e5a18b727ab3
 */

// 1. Função para abrir informações adicionais (Modais Simples)
function openModal(tipo) {
    const mensagens = {
        'lojas': 'Temos espaços de diversos tamanhos para o seu negócio em Itambi! Entre em contato para agendar uma visita.',
        'servicos': 'Facilite sua vida: Aceitamos pagamentos de boletos, recargas de celular e cartão de transporte via Pix ou Cartão.',
        'workshops': 'As inscrições para os workshops de 07/03 já estão abertas! Garanta sua vaga no balcão.'
    };

    // Usando um alerta por enquanto, mas preparado para um modal customizado no futuro
    if (mensagens[tipo]) {
        alert(mensagens[tipo]);
    }
}

// 2. Gerenciamento de Abas e Scroll Suave
const tabs = document.querySelectorAll('.tab');
const sections = document.querySelectorAll('section[id]');

// Função para remover classe ativa de todas as abas
function removeActiveClasses() {
    tabs.forEach(tab => tab.classList.remove('active'));
}

// Evento de clique nas abas
tabs.forEach(tab => {
    tab.addEventListener('click', function (e) {
        // Scroll Suave
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            e.preventDefault();
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }

            // Destaque visual imediato
            removeActiveClasses();
            this.classList.add('active');
        }
    });
});

// 3. Scroll Spy: Destacar aba automaticamente ao rolar a página
window.addEventListener('scroll', () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        // Verifica se o scroll está dentro da seção (com margem de 150px)
        if (pageYOffset >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    tabs.forEach(tab => {
        tab.classList.remove('active');
        if (tab.getAttribute('href').includes(current)) {
            tab.classList.add('active');
        }
    });
});

// 4. Log de Inicialização
console.log("🚀 Lanuper Web App carregado com sucesso.");
<<<<<<< HEAD
console.log("Identidade visual: Roxo/Laranja/Vermelho aplicada.");
=======
console.log("Identidade visual: Roxo/Laranja/Vermelho aplicada.");
>>>>>>> 6651b99ad816c0d47fe6f1d6f089e5a18b727ab3
