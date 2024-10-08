// Declaración de variables importantes al inicio
let mensaje = document.getElementById("mensaje");
let informacion = document.getElementById("instruccion");
let monito = document.getElementById("monito");
let copiarBoton = document.getElementById('copiar');
let textoFinalElement = document.getElementById('textoFinal');
let textoUsuario = document.getElementById("texto_usuario");




// Valida entrada de caracteres
function validarEntrada(event) {
  const input = event.target.value;
  const regex = /^[a-z\s]*$/i;

  if (!regex.test(input)) {
    event.target.value = input.slice(0, -1); // Eliminar el último carácter ingresado si no es válido
    mensaje.textContent = "Por favor considere solo palabras sin tildes ni caracteres especiales";
    mensaje.classList.add('animate__animated', 'animate__shakeY');
    mensaje.style.color = "#e7603c";
  } else {
    mensaje.textContent = ""; // Limpiar el mensaje si la entrada es válida
  }
}


// Función para validar que el textarea no esté vacío
function validarTextoNoVacio() {
  if (textoUsuario.value.trim() === "") {
    destacaIndicaciones();
    return false;
  } else {
    return true;
  }
}



// Vincular la función de validación al campo de texto
document.getElementById('texto_usuario').addEventListener('input', validarEntrada);

// Función de validación y actualización de interfaz
function actualizarInterfaz(textoIngresado, textoFinal, exito) {
  if (textoIngresado.length !== 0) {
    mensaje.textContent = exito ? "Texto encriptado con éxito" : "Texto desencriptado con éxito";
    textoFinalElement.style.display = 'block';
    textoFinalElement.value = textoFinal;
    copiarBoton.style.display = 'block';
    mensaje.style.color = '#2ba5cc';
    informacion.style.display = "none";
    monito.src = "assets/img/monitohacker2.png";
    monito.style.height = "60px";
    monito.style.margin = "10px";
  } else {
    destacaIndicaciones();
  }
}


function destacaIndicaciones() {
  mensaje.textContent = "Ningún texto ingresado";
  mensaje.classList.add('animate__animated', 'animate__shakeX');
  mensaje.style.color = "#e7603c";
  informacion.style.display = "block";
  informacion.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
  informacion.style.fontSize = "25px";
  textoFinalElement.value = "";
  textoFinalElement.style.display = "none";
  copiarBoton.style.display = 'none';
  monito.src = "assets/img/muneco.png";
  monito.style.height = "304px";
  monito.style.margin = "0px";

}


function encriptar() {
  if (validarTextoNoVacio()) {
    let textoIngresado = textoUsuario.value.toLowerCase();
    let textoProcesado = textoIngresado
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
    actualizarInterfaz(textoIngresado, textoProcesado, true);
  }
}



function desencriptar() {
  if (validarTextoNoVacio()) {
    let textoIngresado = textoUsuario.value.toLowerCase();
    let textoProcesado = textoIngresado
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
    mensaje.classList.add('animate__animated', 'animate__shakeY');
    actualizarInterfaz(textoIngresado, textoProcesado, false);
  }
}


function copiarTexto() {
  let textoCopiado = textoFinalElement.value;
  navigator.clipboard.writeText(textoCopiado)
    .then(() => {
      mensaje.textContent = "Texto copiado al portapapeles";
      mensaje.classList.remove('animate__animated', 'animate__fadeOut');
      mensaje.classList.add('animate__animated', 'animate__fadeIn');
    })
    .catch(err => {
      console.error('Error al copiar el texto: ', err);
    });
}
