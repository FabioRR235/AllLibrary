//input de pesquisa
const input = document.getElementById('filtro-livros');
const list = document.getElementById('livros');
const items = list.getElementsByTagName('li');

// Adiciona um listener de evento de input na caixa de texto
input.addEventListener('input', function() {
  const filter = input.value.toLowerCase();

  // Percorre todos os itens da lista de cidades
  for (let i = 0; i < items.length; i++) {
    const text = items[i].textContent.toLowerCase();

    // Verifica se o texto da cidade corresponde ao filtro
    if (text.indexOf(filter) > -1) {
      items[i].classList.remove('hidden');
    } else {
      items[i].classList.add('hidden');
    }
  }
});
