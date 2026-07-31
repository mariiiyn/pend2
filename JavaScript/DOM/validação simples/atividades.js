let nome = document.getElementById("nome");
let senha = document.getElementById("senha");
let validar = document.getElementById("validar");
let mensagem = document.getElementById("mensagem-senha");

validar.addEventListener("click", function() {
    if(nome.value.trim() === "" || !nome.value.includes("@") || !nome.value.includes(".")) {
        alert("Por favor, preencha todos os campos ");
        return;
    } 
    alert("Login bem-sucedido!");
});

senha.addEventListener("keyup", function() {
    if (senha.value.length < 6) {
        senha.style.borderColor = "red";
        mensagem.textContent = "Senha fraca";
        mensagem.style.color = "red";
        
    } else if (senha.value.length >= 6 && senha.value.length < 10) {
        senha.style.borderColor = " orange";
        mensagem.textContent = "Senha aceitavel";
         mensagem.style.color = "orange";
    } else {
        senha.style.borderColor = "green";
        mensagem.textContent = "Senha forte";
        mensagem.style.color = "green";
    }
}
);
