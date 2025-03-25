
alert('Boas vindas ao jogo do número secreto');
let ha = 5000;
let numeroSecreto = 10
console.log(numeroSecreto)
let chute;
let tentativas = 10;

// enquanto chute não for igual ao n.s
while (chute != numeroSecreto) {
   chute = prompt(`Escolha um número entre 1 e ${ha}`);
   // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}  

if (tentativas > 1) {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
} else {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
}
