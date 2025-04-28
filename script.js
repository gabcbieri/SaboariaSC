function enviarMensagem(event) {
    event.preventDefault(); 

    const nome = document.getElementById('nome').value.trim(); 
    const mensagem = document.getElementById('mensagem').value.trim();  
    const telefone = '5541995346049'; 
    const mensagemErro = document.getElementById('mensagem-erro');

    if (nome === '' || mensagem === '') {
        mensagemErro.style.display = 'block';
        mensagemErro.textContent = 'Por favor, preencha seu nome e a mensagem antes de enviar.';
        return;
    }

    // Se estiver tudo certo, esconde o aviso
    mensagemErro.style.display = 'none';

    const texto = `Olá, meu nome é ${nome}. ${mensagem}`; 
    const mgsFormatada = encodeURIComponent(texto); 
    const url = `https://wa.me/${telefone}?text=${mgsFormatada}`;  

    window.open(url, '_blank'); 

    document.getElementById('formulario').reset();
}

function toggleSideMenu() {
    document.getElementById("sideMenu").classList.toggle("open");
  }

  function openCart() {
    document.getElementById("sideMenu").classList.remove("open");
    document.getElementById("sideCart").classList.add("open");
  }

  function closeCart() {
    document.getElementById("sideCart").classList.remove("open");
}