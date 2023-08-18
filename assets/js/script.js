document.addEventListener('DOMContentLoaded', function () {
  const campoBusca = document.getElementById('productSearch');
  const produtos = document.querySelectorAll('.product');
  const carrinho = [];

  campoBusca.addEventListener('input', function () {
      const termoBusca = campoBusca.value.trim().toLowerCase();

      produtos.forEach(produto => {
          const nomeProduto = produto.querySelector('h2').textContent.toLowerCase();

          if (nomeProduto.includes(termoBusca)) {
              produto.style.display = 'block';
          } else {
              produto.style.display = 'none';
          }
      });
  });

  function adicionarAoCarrinho(nomeProduto, preco) {
      carrinho.push({ nome: nomeProduto, preco: preco });
      alert('Produto adicionado ao carrinho: ' + nomeProduto);
  }
});