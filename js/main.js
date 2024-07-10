const botones = document.querySelectorAll("button");

// Obtener valor del campo input
const campoEntrada = document.getElementById("resultado");
let limpiarCampo = false;

for (let i = 0; i < botones.length - 1; i++) {
  botones[i].addEventListener("click", () => {
    const valorBoton = botones[i].textContent;

    // Validaciones
    if (valorBoton === "C") {
      limpiarCampo = true;
      borrarResultado();
    } else if (valorBoton === "=") {
      limpiarCampo = true;
      calcularResultado();
    } else {
      if (limpiarCampo) {
        limpiarCampo = false;
        campoEntrada.value = "";
      }
      anexarValor(valorBoton);
    }
  });
}

function borrarResultado() {
  campoEntrada.value = "";
}

function anexarValor(valorBoton) {
  campoEntrada.value += valorBoton;
}

function calcularResultado() {
  try {
    campoEntrada.value = eval(campoEntrada.value);
  } catch (error) {
    campoEntrada.value = "Error";
  }
}
