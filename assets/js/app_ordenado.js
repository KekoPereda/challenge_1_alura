// Declaración de variables importantes al inicio
let mensaje = document.getElementById("mensaje");
let informacion = document.getElementById("instruccion");
let monito = document.getElementById("monito");
let copiarBoton = document.getElementById('copiar');
let textoFinalElement = document.getElementById('textoFinal');

// Función de validación y actualización de interfaz
function actualizarInterfaz(textoIngresado, textoFinal, exito) {
  if (textoIngresado.length !== 0) {
    // Si hay texto ingresado
    textoFinalElement.value = textoFinal;
    copiarBoton.style.display = 'block';

    // Usando operador ternario para el mensaje de éxito
    mensaje.textContent = exito ? "Texto encriptado con éxito" : "Texto desencriptado con éxito";
    mensaje.style.color = '#2ba5cc';

    // Limpiar y actualizar información visual
    informacion.textContent = "";
    monito.src = "assets/img/monitohacker.png";
  } else {
    // Si no hay texto ingresado
    textoFinalElement.value = "";
    copiarBoton.style.display = 'none';

    // Actualizar la interfaz con mensajes de error
    monito.src = "assets/img/muneco.png";
    mensaje.textContent = "Ningún texto ingresado";
    informacion.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    mensaje.style.color = "#e7603c";
    informacion.style.fontSize = "25px";
  }
}

// Función de encriptar
function encriptar() {
  let textoIngresado = document.getElementById("texto_usuario").value.toLowerCase();
  let textoProcesado = textoIngresado
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  // Actualiza la interfaz
  actualizarInterfaz(textoIngresado, textoProcesado, true);
}

// Función de desencriptar
function desencriptar() {
  let textoIngresado = document.getElementById("texto_usuario").value.toLowerCase();
  let textoProcesado = textoIngresado
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  // Actualiza la interfaz
  actualizarInterfaz(textoIngresado, textoProcesado, false);
}

// Función de copiar texto
function copiarTexto() {
  let textoCopiado = textoFinalElement.value;

  navigator.clipboard.writeText(textoCopiado)
    .then(() => {
      mensaje.textContent = "Texto copiado al portapapeles";
      mensaje.classList.remove('animate__animated', 'animate__fadeOut'); // Eliminar animación anterior
      mensaje.classList.add('animate__animated', 'animate__fadeIn'); // Agregar nueva animación
    })
    .catch(err => {
      console.error('Error al copiar el texto: ', err);
    });
}
