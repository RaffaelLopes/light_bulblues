// Obtém a referência do elemento da lâmpada e do botão
const lampada = document.getElementById('lampada');
const btnLigar = document.getElementById('ligar');

// Adiciona ouvinte de evento ao botão "Ligar"
btnLigar.addEventListener('click', exibirPergunta);

// Adiciona ouvinte de evento aos botões "Sim" e "Não"
const btnSim = document.getElementById('sim');
const btnNao = document.getElementById('nao');

btnSim.addEventListener('click', () => {
  ascenderLampada();
  setTimeout(() => {
    window.location.href = "https://alura-flix-blues-stream.vercel.app/";
  }, 1500);
});

btnNao.addEventListener('click', () => {
  quebrarLampada();
});

function exibirPergunta() {
  document.getElementById('resposta-container').style.display = 'block';
}

// Função para ascender a lâmpada
function ascenderLampada() {
  lampada.src = "images/lamp_on.jpg";
}

// Função para quebrar a lâmpada
function quebrarLampada() {
  lampada.src = "images/lamp_broken.jpg";
  btnLigar.disabled = true; // Desabilita o botão "Ligar"
  // Recarrega a página após quebrar a lâmpada
  setTimeout(() => {
    location.reload();
  }, 1000);
}

