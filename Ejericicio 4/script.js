const circulo = document.getElementById('circulo');
const contenedor = document.getElementById('juego');
const puntosTexto = document.getElementById('puntos');
const tiempoTexto = document.getElementById('tiempo');
const final = document.getElementById('final');

let puntos = 0;
let tiempo = 50;
let intervalo;

function moverCirculo() {
  const maxX = contenedor.clientWidth - circulo.clientWidth;
  const maxY = contenedor.clientHeight - circulo.clientHeight;
  const x = Math.floor(Math.random() * maxX);
  const y = Math.floor(Math.random() * maxY);
  circulo.style.left = x + 'px';
  circulo.style.top = y + 'px';
}

circulo.addEventListener('click', () => {
  puntos++;
  puntosTexto.textContent = puntos;
  moverCirculo();
});

function iniciarJuego() {
  moverCirculo();
  intervalo = setInterval(() => {
    tiempo--;
    tiempoTexto.textContent = tiempo;
    if (tiempo === 0) {
      clearInterval(intervalo);
      circulo.style.display = 'none';
      final.textContent = ` ¡Tiempo terminado! Tu puntuación final fue: ${puntos}`;
    }
  }, 1000);
}

window.onload = iniciarJuego;
