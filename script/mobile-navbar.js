class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      // Seleciona o menu móvel, a lista de navegação e os links de navegação com base nos seletores passados como argumentos
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
  
      // Classe CSS usada para alternar a exibição do menu móvel e aplicar estilos diferentes quando a barra de navegação está ativa
      this.activeClass = "active";
  
      // Vincula o contexto atual (this) à função handleClick
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      // Percorre todos os links de navegação e aplica uma animação a cada um deles
      this.navLinks.forEach((link, index) => {
        // Se o link já possui uma animação, remove-a; caso contrário, adiciona uma nova animação
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
      });
    }
  
    handleClick() {
      // Alterna a exibição da lista de navegação e do menu móvel
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
  
      // Executa a função animateLinks para animar os links de navegação
      this.animateLinks();
    }
  
    addClickEvent() {
      // Adiciona um evento de clique ao menu móvel para chamar a função handleClick
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      // Verifica se o menu móvel existe antes de adicionar o evento de clique
      if (this.mobileMenu) {
        this.addClickEvent();
      }
  
      return this;
    }
  }
  
  // Cria uma instância da classe MobileNavbar passando os seletores do menu móvel, da lista de navegação e dos links de navegação
  const mobileNavbar = new MobileNavbar(".mobile-menu", ".nav-list", ".nav-list li");
  
  // Inicializa a barra de navegação móvel
  mobileNavbar.init();
  