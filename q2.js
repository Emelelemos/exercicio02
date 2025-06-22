const prompt = require('prompt-sync')()
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
        let tentativas = 0;
        let palpite; 

        while (palpite != numeroSecreto) {
            palpite = parseInt(prompt("Adivinhe o número (entre 1 e 100):"));
            tentativas++;

            if (palpite < numeroSecreto) {
                console.log("Mais alto!");
            } else if (palpite > numeroSecreto) {
                console.log("Mais baixo!");
            } else if (palpite === numeroSecreto) {
                console.log("Parabéns! Você acertou em " + tentativas + " tentativas!");
            } else {
                console.log("Digite um número válido.");
            }
        }