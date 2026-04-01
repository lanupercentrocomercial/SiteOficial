document.getElementById('form-contato').addEventListener('submit', function (e) {
    e.preventDefault();

    const btn = document.getElementById('btn-submit');
    const status = document.getElementById('form-status');
    const form = e.target;

    // 1. Checagem de dados antes de enviar
    const nomeDigitado = document.getElementById('nome').value;
    const interesseSelecionado = document.getElementById('interesse').value;
    const whatsappDigitado = document.getElementById('whatsapp').value;

    if (!nomeDigitado || !interesseSelecionado) {
        status.innerText = "Por favor, preencha todos os campos obrigatórios.";
        status.style.color = "orange";
        return;
    }

    const scriptURL = 'https://script.google.com/macros/s/AKfycbzFaB1JFXU6yiHOhy0AYWRnW4LYv7LNZ5ZS17QiE7lnoWdmZLnZ9k2qNtslH4MqC-hG/exec';

    // Feedback visual
    btn.disabled = true;
    btn.innerHTML = '<span>Salvando dados...</span> <i class="fas fa-spinner fa-spin"></i>';
    status.innerText = "Conectando ao servidor...";
    status.style.color = "#555";

    const formData = new FormData(form);

    // 2. Envio com checagem de resposta
    fetch(scriptURL, { method: 'POST', body: formData })
        .then(response => {
            if (!response.ok) throw new Error('Erro na rede');
            return response.json();
        })
        .then(res => {
            if (res.result === "success") {
                status.style.color = "#27ae60";
                status.innerText = "Dados salvos com sucesso! Preparando WhatsApp...";

                // 3. Montagem da mensagem (Usa a resposta do Google ou o que foi digitado como backup)
                const nomeFinal = res.nome || nomeDigitado;
                const interesseFinal = res.interesse || interesseSelecionado;
                const dataFinal = res.dataEnvio || new Date().toLocaleDateString('pt-BR');

                const meuNumero = "5521980236867";
                const textoMensagem =
                    `*NOVO CONTATO LANUPER*\n\n` +
                    `*Nome:* ${nomeFinal}\n` +
                    `*Interesse:* ${interesseFinal}\n` +
                    `*Data:* ${dataFinal}`;

                const linkWhatsapp = `https://wa.me/${meuNumero}?text=${encodeURIComponent(textoMensagem)}`;

                // Pequena pausa de 1.5s para garantir que o usuário veja a confirmação
                setTimeout(() => {
                    window.open(linkWhatsapp, '_blank');
                    form.reset();
                }, 1500);
            }
        })
        .catch(error => {
            status.style.color = "#e74c3c";
            status.innerText = "Erro ao salvar. Verifique sua conexão e tente novamente.";
            console.error('Erro:', error);
        })
        .finally(() => {
            btn.disabled = false;
            btn.innerHTML = '<span>Enviar Mensagem</span> <i class="fas fa-paper-plane"></i>';
        });
});