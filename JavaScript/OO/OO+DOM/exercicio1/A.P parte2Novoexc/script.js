class Produto {
    constructor(nome, preco, categoria, desconto) {
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
        this.desconto = desconto;
    }

    aplicarDesconto() {
        const precoComDesconto = this.preco - (this.preco * this.desconto / 100);
        return precoComDesconto;
    }
    
}

class Estoque {
    constructor(){
        this.produtos = [];
    }

    adicionarProduto(produto) {
        this.produtos.push(produto);
        this.salvar();
    }

    excluirProduto(Indice) {
        this.produtos.splice(Indice, 1);
        this.salvar();
        this.exibirNaTela();
    }
    salvar() {
        localStorage.setItem("estoque", JSON.stringify(this.produtos));
    }

    exibirNaTela(){
        const resultado = document.querySelector("#resultado");
        resultado.innerHTML="";
        this.produtos.forEach((produto, index) => {
            resultado.innerHTML += `
                <div>
                    <p>Nome: ${produto.nome}</p>
                    <p>Preço: ${produto.preco}</p>
                    <p>Categoria: ${produto.categoria}</p>
                    <p>Desconto: ${produto.desconto}</p>
                    <p>Preço com desconto: ${produto.aplicarDesconto()}</p>
                    <button onclick="estoque.excluirProduto(${index})">Excluir</button>
                </div>
            `;
        });
    }

}

const estoque = new Estoque();

const nome = document.querySelector("#nome");
const preco = document.querySelector("#preco");
const categoria = document.querySelector("#categoria");
const desconto = document.querySelector("#desconto");
const botaoCadastrar = document.querySelector("#botaoCadastrar");

botaoCadastrar.addEventListener("click", function (){
    const produto = new Produto(
        nome.value,
        preco.value,
        categoria.value,
        desconto.value
    );

    estoque.adicionarProduto(produto);
    estoque.exibirNaTela();

    nome.value = "";
    preco.value = "";
    categoria.value = "";
    desconto.value = "";
});

const dados = localStorage.getItem("estoque");
if (dados) {
    const estoqueSalvo = JSON.parse(dados);
    estoque.produtos = estoqueSalvo.map(produtoSalvo => new Produto(
            produtoSalvo.nome,
            produtoSalvo.preco,
            produtoSalvo.categoria,
            produtoSalvo.desconto
    ));
    estoque.exibirNaTela();
}
