function obterNomesOrdenadosPorPreco(produtos) {
  const produtosOrdenados = [...produtos].sort((a, b) => a.preco - b.preco);
  const nomes = produtosOrdenados.map(produto => produto.nome);
  return nomes;
}
const produtos = [
  { nome: 'Laptop', preco: 2500 },
  { nome: 'Mouse', preco: 150 },
  { nome: 'Teclado', preco: 300 },
  { nome: 'Monitor', preco: 1200 },
  { nome: 'Webcam', preco: 200 }
];
const nomesOrdenados = obterNomesOrdenadosPorPreco(produtos);
console.log(nomesOrdenados); 
const outrosProdutos = [
  { nome: 'Camiseta', preco: 50 },
  { nome: 'Calça', preco: 100 },
  { nome: 'Meia', preco: 10 },
  { nome: 'Jaqueta', preco: 300 }
];
const outrosNomesOrdenados = obterNomesOrdenadosPorPreco(outrosProdutos);
console.log(outrosNomesOrdenados);