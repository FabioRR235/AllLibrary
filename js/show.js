const item = document.querySelectorAll("[data-anime]");

const animeScroll = () => {
  const windowTop = window.pageYOffset + window.innerHeight * 0.85;

  item.forEach(element => {
    if (windowTop > element.offsetTop) {
      element.classList.add("animate");
    } else {
      element.classList.remove("animate"); // Adicionando o bloco "else" para remover a classe
    }
  });
};

animeScroll();

window.addEventListener("scroll", () => {
  animeScroll();
});
