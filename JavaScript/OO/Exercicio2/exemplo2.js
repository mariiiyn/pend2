// CLASSE
class Aluno {
 
     //ATRIBUTOS -> características do objeto
    constructor(nome, idade, curso, matricula) {
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        this.matricula = matricula;
    }
    //METODOS -> ações do objeto
    aprender() {
        console.log("O aluno está aprendendo!");
    }

    estudar() {
        console.log(`${this.nome} está estudando!`);
    }
    //
    apresentar() {
        console.log(`${this.nome} está apresentando seu trabalho!`);
    }
} 
//
const aluno1 = new Aluno("Mariana", 18, "Biomedicina", 23456);
console.log("Aluno1: ", aluno1);

const aluno2 = new Aluno("Murilo", 19, "História", 67890);
console.log("Aluno2: ", aluno2);

const aluno3 = new Aluno("Beatriz", 18, "Medicina Veterinária", 12345);
console.log("Aluno3: ", aluno3);

console.log("------------------------------");
console.log("Atributos do Aluno1:");
console.log("- ", aluno1.nome);
console.log("- ", aluno1.idade);
console.log("- ", aluno1.curso);
console.log("- ", aluno1.matricula);

aluno1.aprender();
aluno1.estudar();
aluno1.apresentar();

console.log("------------------------------");
console.log("Atributos do Aluno2:");
console.log("- ", aluno2.nome);
console.log("- ", aluno2.idade);
console.log("- ", aluno2.curso);
console.log("- ", aluno2.matricula);

aluno2.estudar();


console.log("------------------------------");
console.log("Atributos do Aluno3:");
console.log("- ", aluno3.nome);
console.log("- ", aluno3.idade);
console.log("- ", aluno3.curso);
console.log("- ", aluno3.matricula);

aluno3.aprender();
aluno3.estudar();
aluno3.apresentar();
