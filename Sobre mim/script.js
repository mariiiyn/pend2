const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem");

    if(nome === "" || email === ""){
        mensagem.style.color = "red";
        mensagem.textContent = "Preencha todos os campos!";
        return;
    }

    mensagem.style.color = "green";
    mensagem.textContent = `Obrigado, ${nome}! Seu formulário foi enviado com sucesso.`;

    formulario.reset();

});