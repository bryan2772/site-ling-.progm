// Obtém todas as instâncias dos elementos de título do acordeão
const accordionTitles = document.querySelectorAll('.accordion-title');

// Adiciona o evento de clique a cada título do acordeão
accordionTitles.forEach((title) => {
  title.addEventListener('click', () => {
    // Obtém o conteúdo associado ao título clicado
    const content = title.nextElementSibling;

    // Fecha todos os itens do acordeão
    accordionTitles.forEach((otherTitle) => {
      if (otherTitle !== title) {
        otherTitle.classList.remove('active');
        otherTitle.nextElementSibling.style.maxHeight = 0;
      }
    });

    // Alterna a classe 'active' no título para abrir/fechar o acordeão
    title.classList.toggle('active');

    // Abre ou fecha o conteúdo do acordeão
    if (title.classList.contains('active')) {
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      content.style.maxHeight = 0;
    }
  });
  
});

