console.log("funcoes nativas")/*data e hora*/
let agora = new Date();
console.log(agora);

function mostrarDataHora() {
    let dataHoraAtual = new Date();
    
    console.log("data atual " + dataHoraAtual.getDate());
    console.log("mês  " + (dataHoraAtual.getMonth() + 1));
    console.log("ano " + dataHoraAtual.getFullYear());
    console.log("horas  " + dataHoraAtual.getHours());
    console.log("minuto  " + dataHoraAtual.getMinutes());
    console.log("desafio: " + dataHoraAtual.getHours() + ":" + dataHoraAtual.getMinutes() + ":" + dataHoraAtual.getSeconds() + " " + dataHoraAtual.getDate() + "/" + (dataHoraAtual.getMonth() + 1) + "/" + dataHoraAtual.getFullYear());
}
mostrarDataHora();

console.log(Math.PI)
function calcularOperacoes(numero) {
    console.log("raiz quadrada " + Math.sqrt(numero));
    console.log("arredondamento " + Math.round(numero));
    console.log("arredondamento para baixo " + Math.floor(numero));
    console.log("arredondamento para cima " + Math.ceil(numero));
    console.log("Quadrado " + Math.pow(numero, 2));
    console.log("valor absoluto " + Math.abs(numero));
}
calcularOperacoes(7.2);

function analisarTexto(texto) {
    console.log("tamanho do texto " + texto.length);
    console.log("texto em maiúsculo " + texto.toUpperCase());
    console.log("texto em minúsculo " + texto.toLowerCase());

}
analisarTexto("JavaScript");

function Verificarpalavra (frase){
console.log(frase.includes("js"));
}
Verificarpalavra("javascript");


function junta(nome,curso) {
    return "Aluno:" + nome + " | Curso: " + curso;

}
console.log(junta("Mariana", "Front-end"));