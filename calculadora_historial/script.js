// Cargar historial desde localStorage al iniciar
window.onload = function () {
  mostrarHistorial();
};

function operar(operador) {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  let resultado;

  if (isNaN(num1) || isNaN(num2)) {
    alert("Por favor ingresa ambos números.");
    return;
  }

  switch (operador) {
    case "+":
      resultado = num1 + num2;
      break;
    case "-":
      resultado = num1 - num2;
      break;
    case "*":
      resultado = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        alert("No se puede dividir entre 0");
        return;
      }
      resultado = num1 / num2;
      break;
  }

  document.getElementById("resultado").innerText = `Resultado: ${resultado}`;
  guardarEnHistorial(`${num1} ${operador} ${num2} = ${resultado}`);
}

function guardarEnHistorial(operacion) {
  let historial = JSON.parse(localStorage.getItem("historial")) || [];
  historial.push(operacion);
  localStorage.setItem("historial", JSON.stringify(historial));
  mostrarHistorial();
}

function mostrarHistorial() {
  const historial = JSON.parse(localStorage.getItem("historial")) || [];
  const lista = document.getElementById("historial");
  lista.innerHTML = "";
  historial.forEach(item => {
    const li = document.createElement("li");
    li.innerText = item;
    lista.appendChild(li);
  });
}

function limpiarHistorial() {
  localStorage.removeItem("historial");
  mostrarHistorial();
}
