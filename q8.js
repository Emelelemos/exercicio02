function somarVendasPorCliente(vendas) {
  return vendas.reduce((acumulador, vendaAtual) => {
    const { cliente, total } = vendaAtual;
    if (acumulador[cliente]) {
      acumulador[cliente] += total;
    } else {
      acumulador[cliente] = total;
    }
    return acumulador;
  }, {}); 
}

const vendas = [
  { cliente: 'Ana', total: 100 },
  { cliente: 'Maria', total: 50 },
  { cliente: 'Ana', total: 200 },
  { cliente: 'Carlos', total: 75 },
  { cliente: 'Maria', total: 120 },
  { cliente: 'Ana', total: 50 }
];

const vendasPorCliente = somarVendasPorCliente(vendas);
console.log(vendasPorCliente); 
const outrasVendas = [
  { cliente: 'Josefa', total: 30 },
  { cliente: 'José', total: 80 },
  { cliente: 'Josefa', total: 45 }
];
const outrasVendasPorCliente = somarVendasPorCliente(outrasVendas);
console.log(outrasVendasPorCliente);