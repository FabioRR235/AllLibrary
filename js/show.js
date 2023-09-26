const item = document.querySelectorAll("[data-anime]");

const animeScroll = () => {
  const windowTop = window.pageYOffset + window.innerHeight * 0.85;

  item.forEach(element => {
    if (windowTop > element.offsetTop) {
      element.classList.add("animate");
    } 
  });
};

animeScroll();

window.addEventListener("scroll", () => {
  animeScroll();
});
