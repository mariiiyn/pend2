const canvas = document.getElementById('canvas');
const contexto = canvas.getContext('2d');
contexto.lineWidth = 10;
contexto.lineCap="round";
contexto.lineJoin="round";
//desenhando a cabeça
contexto.beginPath();
contexto.arc(255, 120, 40, 0, Math.PI * 2);
contexto.stroke();
//desenhando o corpo
contexto.beginPath();
contexto.moveTo(250, 160);
contexto.lineTo(255, 300);
contexto.stroke();
//desenhando o braço esquerdo dobrado para a esquerda
contexto.beginPath();
contexto.moveTo(250, 170);
contexto.lineTo(200, 210);
contexto.lineTo(280, 220);
contexto.stroke();
//desenhando o braço direito dobrado para a direita
contexto.beginPath();
contexto.moveTo(250, 170);
contexto.lineTo(300, 210);
contexto.lineTo(340, 160);
contexto.stroke();
//desenhando a perna esquerda meio agachada
contexto.beginPath();
contexto.moveTo(255, 300);
contexto.lineTo(195, 350);
contexto.lineTo(195, 450);
contexto.stroke();
//desenhando a perna direita meio agachada
contexto.beginPath();
contexto.moveTo(255, 300);
contexto.lineTo(320, 350);
contexto.lineTo(320, 450);
contexto.stroke();