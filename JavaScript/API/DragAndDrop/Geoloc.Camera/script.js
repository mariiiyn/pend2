function pegarLocalizacao() {

    const latitude = document.getElementById("latitude");
    const longitude = document.getElementById("longitude");
    const precisao = document.getElementById("precisao");
    const erro = document.getElementById("erroLocalizacao");

    erro.textContent = "";

    if (!navigator.geolocation) {
        erro.textContent = "Seu navegador não suporta geolocalização.";
        return;
    }
    latitude.textContent = "Obtendo...";
    longitude.textContent = "Obtendo...";
    precisao.textContent = "Obtendo...";

    navigator.geolocation.getCurrentPosition(
        function (posicao) {
            const dados = posicao.coords;
            latitude.textContent = dados.latitude.toFixed(6);
            longitude.textContent = dados.longitude.toFixed(6);
            precisao.textContent =
                dados.accuracy.toFixed(2) + " metros";
        },
        function (erroLocal) {
            latitude.textContent = "Não disponível";
            longitude.textContent = "Não disponível";
            precisao.textContent = "Não disponível";
            if (erroLocal.code === 1) {
                erro.textContent =
                    "Permissão de localização negada.";
            }
            else if (erroLocal.code === 2) {
                erro.textContent =
                    "Não foi possível encontrar sua localização.";
            }
            else if (erroLocal.code === 3) {
                erro.textContent =
                    "Tempo para obter a localização esgotado.";
            }
            else {
                erro.textContent =
                    "Erro ao obter localização.";
            }
        },

        {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        }
    );
}

let stream = null;

async function abrirCamera() {

    const camera = document.getElementById("camera");
    const erro = document.getElementById("erroCamera");

    erro.textContent = "";

    try {

        stream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: false
        });
        camera.srcObject = stream;
    } catch (error) {
        console.log(error);
        erro.textContent =
            "Não foi possível acessar a câmera. Verifique a permissão do navegador.";
    }
}

function tirarFoto() {

    const camera = document.getElementById("camera");
    const foto = document.getElementById("foto");

    if (!stream) {
        document.getElementById("erroCamera").textContent =
            "Primeiro abra a câmera.";
        return;
    }

    foto.width = camera.videoWidth;
    foto.height = camera.videoHeight;

    const contexto = foto.getContext("2d");

    contexto.drawImage(
        camera,
        0,
        0,
        foto.width,
        foto.height
    );

    foto.style.display = "block";
}