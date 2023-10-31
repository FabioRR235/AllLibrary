 // Função para mostrar a imagem e texto de acordo com o botão clicado
 function showContent(btnId) {
    // Defina um objeto de mapeamento de botões para identificar as imagens e textos correspondentes
    const buttonMapping = {
        afogamentosBtn: { imageId: "imagemAfogamentos", textId: "textoAfogamentos" },
        convulsoesBtn: { imageId: "imagemConvulsoes", textId: "textoConvulsoes" },
        engasgamentoBtn: { imageId: "imagemEngasgamento", textId: "textoEngasgamento" },
        queimaduraBtn: { imageId: "imagemQueimadura", textId: "textoQueimadura" },
        fraturasBtn: { imageId: "imagemFraturas", textId: "textoFraturas" },
        mordidaBtn: { imageId: "imagemMordida", textId: "textoMordida" },
        desmaiosBtn: { imageId: "imagemDesmaios", textId: "textoDesmaios" },
        derrameBtn: { imageId: "imagemDerrame", textId: "textoDerrame"},
        infartoBtn: { imageId: "imagemInfarto", textId: "textoInfarto"}

    };

    // Oculta todas as imagens e textos
    for (const key in buttonMapping) {
        const { imageId, textId } = buttonMapping[key];
        document.getElementById(imageId).style.display = "none";
        document.getElementById(textId).style.display = "none";
    }

    // Exibe a imagem e o texto correspondentes ao botão clicado
    const { imageId, textId } = buttonMapping[btnId];
    document.getElementById(imageId).style.display = "block";
    document.getElementById(textId).style.display = "block";
}

// Adiciona ouvintes de evento aos botões
document.getElementById("afogamentosBtn").addEventListener("click", function() {
    showContent("afogamentosBtn");
});

document.getElementById("convulsoesBtn").addEventListener("click", function() {
    showContent("convulsoesBtn");
});

document.getElementById("engasgamentoBtn").addEventListener("click", function() {
    showContent("engasgamentoBtn");
});

document.getElementById("queimaduraBtn").addEventListener("click", function() {
    showContent("queimaduraBtn");
});

document.getElementById("fraturasBtn").addEventListener("click", function() {
    showContent("fraturasBtn");
});

document.getElementById("mordidaBtn").addEventListener("click", function() {
    showContent("mordidaBtn");
});

document.getElementById("desmaiosBtn").addEventListener("click", function() {
    showContent("desmaiosBtn");
});

document.getElementById("derrameBtn").addEventListener("click", function() {
    showContent("derrameBtn");
});

document.getElementById("infartoBtn").addEventListener("click", function() {
    showContent("infartoBtn");
});

// Exibe o conteúdo inicialmente para o primeiro botão
showContent("afogamentosBtn");