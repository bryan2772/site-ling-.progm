// Exibir hora atual
function showCurrentTime() {
    const now = new Date();
    const timeElement = document.getElementById('current-time');
    timeElement.textContent = now.toLocaleTimeString();
}

// Atualizar a cada segundo
setInterval(showCurrentTime, 1000);


function submitForm() {
    // Lógica para processar o formulário de cadastro aqui
    alert("Formulário enviado com sucesso!");
    //return false; // Impede que a página seja recarregada
}

