// Obtém a referência do elemento da lâmpada e dos botões
const lampada = document.getElementById('lampada');
const btnLigar = document.getElementById('ligar');

// Função chamada ao clicar no botão "Ligar"
function ligarLampada() {
  // Verifica se a lâmpada está quebrada
  if (lampada.src.includes("lamp_broken")) {
    // Se quebrada, exibe um alerta, recarrega a página e encerra a função
    alert("A lâmpada está quebrada. Recarregando a página.");
    location.reload();
    return;
  }

  // Pede ao usuário se gosta de blues
  const resposta = prompt("Você gosta de blues? sim ou não");

  if (resposta) {
    // Converte a resposta para minúsculas para tratamento mais flexível
    const respostaFormatada = resposta.toLowerCase();

    // Executa ações com base na resposta
    if (respostaFormatada === "sim") {
      // Se sim, ascende a lâmpada e redireciona para a página de blues após 1 segundos
      ascenderLampada();
      setTimeout(() => {
        window.location.href = "https://alura-flix-blues-stream.vercel.app/";
      }, 1000);
    } else if (respostaFormatada === "não") {
      // Se não, quebra a lâmpada e recarrega a página após 1 segundo
      quebrarLampada();
    } else {
      // Se resposta inválida, exibe um alerta
      alert("Digite uma opção válida.");
    }
  }
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

// Função para restaurar os botões
function restaurarBotoes() {
  btnLigar.disabled = false; // Habilita o botão "Ligar"
  lampada.src = "images/lamp_off.jpg"; // Reseta a imagem para desligado ao restaurar os botões
}

// Adiciona ouvintes de eventos aos elementos
btnLigar.addEventListener('click', ligarLampada);
lampada.addEventListener('click', restaurarBotoes);
