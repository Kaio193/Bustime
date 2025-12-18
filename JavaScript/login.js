document.addEventListener('DOMContentLoaded', () => {
  const checkbox = document.getElementById('toggle-tema');
  const root = document.body;
  const icone = document.getElementById('icone-tema');

  // Carrega o tema salvo
  const temaSalvo = localStorage.getItem('modo-tema');
  if (temaSalvo === 'escuro') {
    root.classList.add('escuro');
    checkbox.checked = true;
    icone.textContent = '🌙';
  } else {
    icone.textContent = '☀️';
  }

  // Alternância do modo
  checkbox.addEventListener('change', () => {
    const escuro = checkbox.checked;
    root.classList.toggle('escuro', escuro);
    icone.textContent = escuro ? '🌙' : '☀️';
    localStorage.setItem('modo-tema', escuro ? 'escuro' : 'claro');
  });
});

function mostrarSenha(idCampo, imagem) {
  const campo = document.getElementById(idCampo);
  if (campo.type === "password") {
    campo.type = "text";
    imagem.src = "../img/olhoaberto.png";
  } else {
    campo.type = "password";
    imagem.src = "../img/olhofechado.jpg";
  }
}

function irParaInicio(event) {
  event.preventDefault();
  alert("Login realizado com sucesso!");
  window.location.href = "../html/principal.html";
}
