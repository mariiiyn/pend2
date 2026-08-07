class Livro {
    constructor(titulo, autor, ano, genero) {
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
        this.genero = genero;
}
iniciado() {
    console.log("O livro foi iniciado!");
}

lendo() {
    console.log("O livro está sendo lido!");
}
finalizado() {
    console.log(`${this.titulo} foi finalizado!`);
}
}

const livro1 = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 1954, "Fantasia");
console.log("Livro1:", livro1);

const livro2 = new Livro("As memórias de Marta!", "Julia Lopes", 1899, "Biografia");
console.log("Livro2:", livro2);

const livro3 = new Livro("O Pequeno Príncipe", "Antoine de Saint-Exupéry", 1943, "Ficção");
console.log("Livro3:", livro3);

console.log("📖📖📖📖📖📖📖📖📖");
console.log("Atributos do Livro1:");
console.log("- ", livro1.titulo);
console.log("- ", livro1.autor);
console.log("- ", livro1.ano);
console.log("- ", livro1.genero);

    livro1.iniciado();
    livro1.lendo();

console.log("📖📖📖📖📖📖📖📖📖");
console.log("Atributos do Livro1:");
console.log("- ", livro2.titulo);
console.log("- ", livro2.autor);
console.log("- ", livro2.ano);
console.log("- ", livro2.genero);

    livro2.iniciado();
    livro2.lendo();
    livro2.finalizado();

console.log("📖📖📖📖📖📖📖📖📖");
console.log("Atributos do Livro1:");
console.log("- ", livro3.titulo);
console.log("- ", livro3.autor);
console.log("- ", livro3.ano);
console.log("- ", livro3.genero);
    
    livro3.iniciado();