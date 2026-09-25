const noticiasApi = document.getElementById("noticiasApi");
const climaApi = document.getElementById("climaApi");

// Busca as notícias atuais
async function carregarNoticias(){

    try{

        const resposta = await fetch(
            "https://noozra.com/api/articles?limit=10"
        );

        if(!resposta.ok){
            throw new Error("Erro ao acessar a API");
        }

        const dados = await resposta.json();

        noticiasApi.innerHTML = "";

        if(!dados.articles || dados.articles.length === 0){

            const mensagem = document.createElement("p");

            mensagem.textContent = "Nenhuma notícia encontrada.";

            noticiasApi.appendChild(mensagem);

            return;
        }

        dados.articles.forEach(function(noticia){

            criarNoticia(noticia);

        });

    }catch(erro){

        noticiasApi.innerHTML = "";

        const mensagemErro = document.createElement("p");

        mensagemErro.className = "erro";

        mensagemErro.textContent =
            "Não foi possível carregar as notícias atuais.";

        noticiasApi.appendChild(mensagemErro);

        console.log(erro);
    }
}

// Cria as notícias na página
function criarNoticia(noticia){

    const artigo = document.createElement("article");

    artigo.className = "noticia-api";

    if(noticia.image_url){

        const imagem = document.createElement("img");

        imagem.src = noticia.image_url;

        imagem.alt = noticia.headline || "Imagem da notícia";

        artigo.appendChild(imagem);
    }

    const conteudo = document.createElement("div");

    const titulo = document.createElement("h3");

    titulo.textContent =
        noticia.headline || "Notícia sem título";

    const descricao = document.createElement("p");

    descricao.textContent =
        noticia.description || "Descrição não disponível.";

    const fonte = document.createElement("p");

    fonte.textContent =
        "Fonte: " + (noticia.source || "Não informada");

    const data = document.createElement("p");

    if(noticia.published_at){

        const dataNoticia = new Date(noticia.published_at);

        data.textContent =
            "Publicado em: " +
            dataNoticia.toLocaleString("pt-BR");
    }

    const link = document.createElement("a");

    link.href = noticia.url || "#";

    link.target = "_blank";

    link.textContent = "Ler notícia completa";

    conteudo.appendChild(titulo);
    conteudo.appendChild(descricao);
    conteudo.appendChild(fonte);
    conteudo.appendChild(data);
    conteudo.appendChild(link);

    artigo.appendChild(conteudo);

    noticiasApi.appendChild(artigo);
}

// Busca o clima atual
async function carregarClima(){

    try{

        const resposta = await fetch(
            "https://api.open-meteo.com/v1/forecast?latitude=-21.4678&longitude=-47.0047&current=temperature_2m,relative_humidity_2m,wind_speed_10m&timezone=America%2FSao_Paulo"
        );

        if(!resposta.ok){
            throw new Error("Erro ao acessar o clima");
        }

        const dados = await resposta.json();

        climaApi.innerHTML = `
            <p>Temperatura: ${dados.current.temperature_2m}°C</p>
            <p>Umidade: ${dados.current.relative_humidity_2m}%</p>
            <p>Vento: ${dados.current.wind_speed_10m} km/h</p>
        `;

    }catch(erro){

        climaApi.innerHTML =
            "<p>Não foi possível carregar o clima.</p>";

        console.log(erro);
    }
}

carregarNoticias();
carregarClima();
