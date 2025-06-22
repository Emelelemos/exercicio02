function paresParaObjeto(pares) {
  const obj = {};

  for (const [chave, valor] of pares) {
    obj[chave] = valor
  }

  return obj
}

const minhasConfiguracoesPares = [
  ['tema', 'dark'],
  ['idioma', 'português'],
  ['notificacoesAtivadas', true]
];

const minhasConfiguracoesObjeto = paresParaObjeto(minhasConfiguracoesPares);
console.log(minhasConfiguracoesObjeto)