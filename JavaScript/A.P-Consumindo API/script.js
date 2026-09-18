const botao = document.getElementById("buscar");
const resultado = document.getElementById("resultado");

botao.addEventListener("click", buscarPersonagem);

async function buscarPersonagem() {

    const numero = document.getElementById("numero").value;

    if (numero < 1 || numero > 15) {
        resultado.innerHTML = "<p>Digite um número de 1 a 15.</p>";
        return;
    }

    try {

        const resposta = await fetch(
            `https://rickandmortyapi.com/api/character/${numero}`
        );

        if (!resposta.ok) {
            throw new Error("Personagem não encontrado");
        }

        const personagem = await resposta.json();

        let status = personagem.status;

        if (status === "Alive") {
            status = "Vivo";
        } else if (status === "Dead") {
            status = "Morto";
        } else {
            status = "Desconhecido";
        }

        let especie = personagem.species;

        if (especie === "Human") {
            especie = "Humano";
        } else if (especie === "Alien") {
            especie = "Alienígena";
        }

        resultado.innerHTML = `
            <div class="card">

                <img src="${personagem.image}" alt="${personagem.name}">

                <h2>${personagem.name}</h2>

                <p><strong>Status:</strong> ${status}</p>

                <p><strong>Espécie:</strong> ${especie}</p>

                <p><strong>Origem:</strong> ${personagem.origin.name}</p>

                <p><strong>Localização:</strong> ${personagem.location.name}</p>

            </div>
        `;

    } catch (erro) {

        resultado.innerHTML = `
            <p>Erro ao buscar o personagem.</p>
        `;

        console.error(erro);
    }
}