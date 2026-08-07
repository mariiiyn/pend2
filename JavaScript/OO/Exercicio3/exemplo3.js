// CLASSE
class Produto {
 
     //ATRIBUTOS -> características do objeto
    constructor(nome, preço, estoque) {
        this.nome = nome;
        this.preço = preço;
        this.estoque = estoque;
    }
    //METODOS -> ações do objeto
    vender() {
        console.log("O produto está sendo vendido!");
    }
    //
    repor() {
        console.log("O produto está sendo reposto!");
    }

        alterarPreço() {
            console.log(`${this.nome} está tendo seu preço alterado!`);
          
        }
} 
//
const produto1 = new Produto("Notebook", 2500, 10);
console.log("Produto1: ", produto1);

const produto2 = new Produto("Smartphone", 1500, 20);
console.log("Produto2: ", produto2);

const produto3 = new Produto("Tablet", 800, 15);
console.log("Produto3: ", produto3);

console.log("------------------------------");
console.log("Atributos do Produto1:");
console.log("- ", produto1.nome);
console.log("- ", produto1.preço);
console.log("- ", produto1.estoque);

produto1.vender();
produto1.repor();
produto1.alterarPreço(2700);

console.log("------------------------------");
console.log("Atributos do Produto2:");
console.log("- ", produto2.nome);
console.log("- ", produto2.preço);
console.log("- ", produto2.estoque);
console.log("- ", produto2.cor);

produto2.vender();

console.log("------------------------------");
console.log("Atributos do Produto3:");
console.log("- ", produto3.nome);
console.log("- ", produto3.preço);
console.log("- ", produto3.estoque);
console.log("- ", produto3.cor);

produto3.vender();
produto3.repor();
