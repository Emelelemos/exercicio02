function memoize(fn) {
  const cache = {};

  return function(...args) {
    const key = JSON.stringify(args); 

    if (cache[key]) {
      console.log(`Retornando do cache para a chave: ${key}`);
      return cache[key];
    } else {
      console.log(`Calculando e armazenando em cache para a chave: ${key}`);
      const result = fn(...args);
      cache[key] = result; 
      return result;
    }
  };
}
function add(a, b) {
  console.log('Executando a função add...');
  return a + b;
}
const memoizedAdd = memoize(add);
console.log(memoizedAdd(1, 2)); 
console.log(memoizedAdd(1, 2)); 
console.log(memoizedAdd(3, 4)); 
console.log(memoizedAdd(1, 2));
