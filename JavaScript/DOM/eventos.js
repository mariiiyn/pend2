let botao = document.querySelector("#botao");
let texto = document.querySelector(".texto");
botao.addEventListener("click", function() {
    texto.textContent = "texto alterado após o click";
});

let input = document.querySelector("#nome")
let resultado = document.querySelector("#resultado");
input.addEventListener("keyup", function() {
    resultado.textContent = input.value;
});
