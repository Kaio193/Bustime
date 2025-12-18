// Executa ao carregar o DOM
document.addEventListener('DOMContentLoaded', () => {
  const checkbox = document.getElementById('toggle-tema');
  const root = document.body;
  const icone = document.getElementById('icone-tema');

  // Carrega o tema salvo no localStorage
  const temaSalvo = localStorage.getItem('modo-tema');
  if (temaSalvo === 'escuro') {
    root.classList.add('escuro');
    checkbox.checked = true;
    icone.textContent = '🌙';
  }
  else if (temaSalvo == 'claro') {
    root.classList.add('claro');
    checkbox.checked = false;
    icone.textContent = '☀️';
  }

  // Alternância do modo claro/escuro
  checkbox.addEventListener('change', () => {
    const escuro = checkbox.checked;
    root.classList.toggle('escuro', escuro);
    icone.textContent = escuro ? '🌙' : '☀️';
    localStorage.setItem('modo-tema', escuro ? 'escuro' : 'claro');
  });
});

function mostrarSenha(idCampo, imagem) {
  let campo = document.getElementById(idCampo);

  if (campo.type === "password") {
    campo.type = "text"; // Mostra a senha
    imagem.src = "../img/olhoaberto.png"; // Troca a imagem para olho aberto
  } else {
    campo.type = "password"; // Esconde a senha
    imagem.src = "../img/olhofechado.jpg"; // Troca a imagem para olho fechado
  }
}

function voltarLogin() {
  window.location.href = "login.html";
}