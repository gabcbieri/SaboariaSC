// Aqui, vamos ter um objeto com as informações dos produtos
const produtos = {
    floral: {
        nome: "Sabonete de Argila Azul",
        descricao: "Um sabonete natural feito com argila azul, excelente para hidratar a pele.",
        imagem: "./img/sabonete_argila_azul.png",
        preco: 15.00
    },
    citrico: {
        nome: "Sabonete Cítrico",
        descricao: "Sabonete com um aroma refrescante de frutas cítricas, perfeito para energizar seu dia.",
        imagem: "./img/sabonete2.png",
        preco: 40.00
    },
    ervas: {
        nome: "Sabonete de Ervas",
        descricao: "Sabonete aromático com essências de ervas frescas, ideal para momentos de relaxamento.",
        imagem: "./img/sabonete3.png",
        preco: 45.00
    }
};

// Função para capturar o parâmetro da URL
function getProductId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Preencher os detalhes do produto com base no id
function preencherDetalhesProduto(id) {
    const produto = produtos[id];
    if (produto) {
        document.getElementById('produto-nome').textContent = produto.nome;
        document.getElementById('produto-imagem').src = produto.imagem;
        document.getElementById('produto-imagem').alt = produto.nome;
        document.getElementById('produto-descricao').textContent = produto.descricao;
        document.getElementById('preco').textContent = `Preço: R$ ${produto.preco.toFixed(2)}`;
    }
}

// Função para adicionar ao carrinho
document.getElementById('adicionar-carrinho').addEventListener('click', function() {
    const id = getProductId();
    const produto = produtos[id];
    if (produto) {
        // Aqui, podemos adicionar o produto ao carrinho
        alert(`${produto.nome} foi adicionado ao carrinho!`);
        // Lógica para adicionar ao carrinho vai aqui...
    }
});

// Quando a página for carregada, preenchemos os detalhes do produto
window.onload = function() {
    const id = getProductId();
    preencherDetalhesProduto(id);
}
