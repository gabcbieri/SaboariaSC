const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

window.addEventListener("DOMContentLoaded", () => {
  const produto = produtos.find(p => p.id === id);
  const secao = document.getElementById("detalhe");

  if (!produto) {
    secao.innerHTML = "<p>Produto não encontrado.</p>";
    return;
  }

  secao.innerHTML = `
    <img src="${produto.imagem}" alt="${produto.nome}">
    <h1>${produto.nome}</h1>
    <p>${produto.descricao}</p>
    <button class="adicionar-btn" onclick="adicionarAoCarrinho('${produto.nome}')">
      ➕ Adicionar ao Carrinho
    </button>
  `;
});

const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function adicionarAoCarrinho(produto) {
  carrinho.push(produto);
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  alert(produto + " adicionado ao carrinho!");
}
