const canvas = document.querySelector("#canvas");
const contexto = canvas.getContext("2d");
//desenhando uma linha
contexto.beginPath();
contexto.moveTo(10, 0);
contexto.lineTo(50, 200);
contexto.lineTo(200, 200);
contexto.stroke();
//desenhando um retângulo
contexto.fillRect(50, 50, 150, 100); //preencher o retângulo
contexto.strokeRect(250, 50, 150, 100);//desenhar o contorno do retângulo
//desenhando um círculo
contexto.beginPath();
contexto.arc(250, 250, 50, 0, Math.PI *  2);
contexto.fill();