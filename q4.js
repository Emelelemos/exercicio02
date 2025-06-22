const prompt = require('prompt-sync')();
let entrada = prompt('Digite um número: ');
let n = parseInt(entrada); 

function fatorial(n) {
    if (n < 0) {
        throw new Error("Fatorial não definido para números negativos.");
    } else if (n === 0) {
        return 1;
    } else {
        return n * fatorial(n - 1);
    }
}

try {
    console.log(`Fatorial de ${n} é ${fatorial(n)}`);
} catch (e) {
    console.error(e.message);
}
