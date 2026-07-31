function mostrarHora() {
    let HoraAtual = new Date();
    console.log("horas  " + HoraAtual.getHours()); 
    console.log("minuto  " + HoraAtual.getMinutes());
}
mostrarHora();


function ReceberDoisNumeros(numeero1, numeero2) {
    console.log("soma ", numeero1 + numeero2);
    console.log("média ", (numeero1 + numeero2) / 2);
}
let numeero1 =prompt("Digite o primeiro número:");
let numeero2 =prompt("Digite o segundo número:");
ReceberDoisNumeros(Number(numeero1), Number(numeero2));


function RecebaumNome(nome) {
    console.log("quantidade de letras no nome: ", nome.length);
    console.log("nome em maiúsculo ", nome.toUpperCase());
}
let nome = prompt("Digite seu nome:"); 
RecebaumNome(nome);

function VerificaHTML(frase) {
    console.log(frase.includes("html"));
}
let frase = prompt("Digite uma frase:");
VerificaHTML(frase);