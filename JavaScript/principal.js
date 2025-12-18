// ================== TEMA CLARO / ESCURO ==================
document.addEventListener('DOMContentLoaded', () => {
  const checkbox = document.getElementById('toggle-tema');
  const root = document.body;
  const icone = document.getElementById('icone-tema');

  const temaSalvo = localStorage.getItem('modo-tema');

  if (temaSalvo === 'escuro') {
    root.classList.add('escuro');
    checkbox.checked = true;
    icone.textContent = '🌙';
  } else {
    icone.textContent = '☀️';
  }

  checkbox.addEventListener('change', () => {
    const escuro = checkbox.checked;
    root.classList.toggle('escuro', escuro);
    icone.textContent = escuro ? '🌙' : '☀️';
    localStorage.setItem('modo-tema', escuro ? 'escuro' : 'claro');
  });
});

const formViagem = document.getElementById("form-viagem");

formViagem.addEventListener("submit", function (event) {
  event.preventDefault();

  const distancia = parseFloat(document.getElementById("distancia").value);
  const velocidade = parseFloat(document.getElementById("velocidade").value);
  const resultado = document.getElementById("resultado-viagem");

  if (isNaN(distancia) || isNaN(velocidade) || velocidade <= 0) {
    resultado.textContent = "Preencha os campos corretamente.";
    resultado.style.color = "red";
    return;
  }

  const tempo = distancia / velocidade;

  resultado.textContent = "Tempo estimado de viagem: " + tempo.toFixed(2) + " horas.";
  resultado.style.color = "green";
});

