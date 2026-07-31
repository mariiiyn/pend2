function saudacao() {
    console.log("Olá Javascript");
}
saudacao();


function saudacaocomnome(nome) {
    console.log("Olá " + nome);
}
saudacaocomnome("Mariana");


function somar (a , b) {
    return a + b;
}
let resultado = (somar (5, 3));


/*exercicio7*/

function calcularImc(peso, altura) {
    return peso / (altura * altura);
}
let peso = prompt ("Digite seu peso em kg:");

let altura = 1.65;
console.log(calcularImc(peso, altura));

/*exercicio8*/
function parOuImpar(numero) {
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }   
}
let numero = prompt("Digite um número:");
console.log(parOuImpar(numero));


console.log("funcoes nativas")/*data e hora*/
let agora = new Date();
console.log(agora);


