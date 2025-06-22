const prompt = require('prompt-sync')()
let texto = prompt('Digite o texto:    ')
const palavras = texto.split(' ')
const unicas =[]

for (let i = 0; i < palavras.length; i++) {
    const palavra = palavras[i];
    let repetida = false;
    for (let j =0; j < unicas.length; j++){
        if (palavra === unicas[j]){
            repetida = true;
            break
        }
    }
    if (!repetida){
        unicas.push(palavra)
    }
}
console.log(unicas);