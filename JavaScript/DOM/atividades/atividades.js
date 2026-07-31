//atividade 1
let vermelho = document.getElementById("vermelho");
let azul = document.getElementById("azul");


vermelho.addEventListener("click", function() { //evento de clique
    document.querySelector("h1").style.color = "red";

});

azul.addEventListener("click", function() { //evento de clique
    document.querySelector("h1").style.color = "blue";
});


//atividade 2
let botao = document.getElementById("mostrar");
let mensagem = document.getElementById("mensagem");

botao.addEventListener("click", function() {
    mensagem.classList.toggle("oculto");
});

//atividade 3

let input = document.getElementById("entrada");

input.addEventListener("input", function() {
     let contador = document.getElementById("contador");
     contador.textContent = "caracteres digitados: " + input.value.length;
});

//atividade 4
let clique = document.getElementById("Cliques");
let contadorCliques = document.getElementById("contadorCliques");
let contador = 0;
clique.addEventListener("click", function() {
    contador++;
    contadorCliques.textContent = "Número de cliques: " + contador;
});

//atividade 5,6, extra
let adicionar = document.getElementById("adicionar");
let lista = document.getElementById("lista");
let novoItem = document.getElementById("novoItem");

adicionar.addEventListener("click", function() {
    if(novoItem.value.trim() === "") {
        alert("Por favor, insira um item válido.");
        return;
    }

    let item = document.createElement("li");
    item.textContent = novoItem.value;
    lista.appendChild(item);
    novoItem.value = "";  
    item.addEventListener("click", function() {
        if(confirm("Deseja excluir este item?")) {
            lista.removeChild(item);
        }
    });
});

//desafio hard
 let validar = document.getElementById("validar");
 let nome = document.getElementById("nome");
 let resultado = document.getElementById("resultado");
    validar.addEventListener("click", function() {
        if(nome.value.trim() === "") {
            resultado.textContent = "Por favor, insira um nome válido.";
            resultado.style.color = "red";
            resultado.addEventListener("click", function() {
            });
        } else {
            resultado.textContent ="Campo preenchido com sucesso!";
            resultado.style.color = "green";
            resultado.addEventListener("click", function() {
            });         
        }});

        
