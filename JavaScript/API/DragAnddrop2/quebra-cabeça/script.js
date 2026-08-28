
const inputImagem = document.getElementById("imagem");
const botaoIniciar = document.getElementById("iniciar");
const pecasArea = document.getElementById("pecas");
const tabuleiroArea = document.getElementById("tabuleiro");
const mensagem = document.getElementById("mensagem");

let imagemSelecionada = null;
let pecaArrastada = null;

inputImagem.addEventListener("change", function (event) {

    const arquivo = event.target.files[0];

    if (arquivo) {

        imagemSelecionada = URL.createObjectURL(arquivo);

        mensagem.textContent =
            'Imagem selecionada. Clique em "Montar Quebra-Cabeça" para iniciar.';

    }

});

botaoIniciar.addEventListener("click", function () {

    if (!imagemSelecionada) {

        mensagem.textContent =
            "Por favor, selecione uma imagem antes de iniciar o quebra-cabeça.";

        return;
    }

    criarQuebraCabeca();

});

function criarQuebraCabeca() {

    pecasArea.innerHTML = "";
    tabuleiroArea.innerHTML = "";

    let posicoes = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    posicoes.sort(() => Math.random() - 0.5);

    posicoes.forEach(function (posicao) {

        const peca = document.createElement("div");

        peca.classList.add("peca");
        peca.draggable = true;
        peca.dataset.posicao = posicao;

        peca.style.backgroundImage =
            `url(${imagemSelecionada})`;

        peca.style.backgroundSize = "300px 300px";

        const coluna = posicao % 3;
        const linha = Math.floor(posicao / 3);

        peca.style.backgroundPosition =
            `-${coluna * 100}px -${linha * 100}px`;

        pecasArea.appendChild(peca);

        peca.addEventListener("dragstart", function () {

            pecaArrastada = peca;

            peca.classList.add("arrastando");

        });

        peca.addEventListener("dragend", function () {

            peca.classList.remove("arrastando");

        });

    });

    for (let i = 0; i < 9; i++) {

        const espaco = document.createElement("div");

        espaco.classList.add("espaco");
        espaco.dataset.posicao = i;

        tabuleiroArea.appendChild(espaco);

        espaco.addEventListener("dragover", function (event) {

            event.preventDefault();

        });

        espaco.addEventListener("drop", function (event) {

            event.preventDefault();

            if (!pecaArrastada) {
                return;
            }

            const posicaoPeca =
                pecaArrastada.dataset.posicao;

            const posicaoEspaco =
                espaco.dataset.posicao;

            if (posicaoPeca === posicaoEspaco) {

                espaco.appendChild(pecaArrastada);

                verificarVitoria();

            } else {

                alert("Lugar errado! Tente novamente.");

            }

            pecaArrastada = null;

        });

    }

}

function verificarVitoria() {

    const pecasCertas =
        document.querySelectorAll(".espaco .peca");

    if (pecasCertas.length === 9) {

        mensagem.textContent =
            "🎉 Parabéns! Você completou o quebra-cabeça!";

    }

}

