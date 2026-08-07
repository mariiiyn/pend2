// CLASSE
class Carro {
 
     //ATRIBUTOS -> características do objeto
    constructor(marca, modelo, ano, cor) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }
    //METODOS -> ações do objeto
    ligar() {
        console.log("O carro está ligado!");
    }
    //
    acelerar() {
        console.log("O carro está acelerando!");
    }

        frear() {
            console.log(`${this.modelo} está freando!`);
        
    }
} 
//
const carro1 = new Carro("Volkswagen", "Gol", 2022, "Branco");
console.log("Carro1: ", carro1);

const carro2 = new Carro("Toyota", "Corolla", 2025, "Preto");
console.log("Carro2: ", carro2);

const carro3 = new Carro("Honda", "Civic", 2023, "Cinza");
console.log("Carro3: ", carro3);

console.log("------------------------------");
console.log("Atributos do Carro1:");
console.log("- ", carro1.marca);
console.log("- ", carro1.modelo);
console.log("- ", carro1.ano);
console.log("- ", carro1.cor);

carro1.ligar();
carro1.acelerar();
carro1.frear();

console.log("------------------------------");
console.log("Atributos do Carro2:");
console.log("- ", carro2.marca);
console.log("- ", carro2.modelo);
console.log("- ", carro2.ano);
console.log("- ", carro2.cor);

console.log("------------------------------");
console.log("Atributos do Carro3:");
console.log("- ", carro3.marca);
console.log("- ", carro3.modelo);
console.log("- ", carro3.ano);
console.log("- ", carro3.cor);


