

function encriptar() {
  let textoIngresado = document.getElementById("texto_usuario").value.toLowerCase();
  let mensaje = document.getElementById("mensaje");
  let informacion = document.getElementById("instruccion");
  let monito = document.getElementById("monito");


  let textoProcesado = textoIngresado
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  let textoFinal = document.getElementById('textoFinal').value = textoProcesado;
  console.log(textoProcesado);


  //validacion
  if (textoIngresado.length != 0) {
    // document.getElementById("texto_usuario").value = textoProcesado;

    mensaje.textContent = "Texto encriptado con éxito";
    mensaje.style.color = "#2ba5cc";
    informacion.textContent = "";
    monito.src = "assets/img/monitohacker.png";

    // mostrar btn coppiar
    // monito.getElementById("monito").src = "excelente.gif";
  } else {
    document.getElementById("monito").src = "assets/img/muneco.png";
    mensaje.textContent = "Ningún texto ingresado";
    informacion.textContent = ("Ingresa el texto que deseas encriptar o desencriptar");
    mensaje.style.color = "#e7603c";
    informacion.style.fontSize = "25px";
    // alert("Ingresa un txt madafaca");
  }
}




function desencriptar() {
  let textoIngresado = document.getElementById("texto_usuario").value.toLowerCase();
  let informacion = document.getElementById("instruccion");
  let mensaje = document.getElementById("mensaje");
  let monito = document.getElementById("monito");

  let textoProcesado = textoIngresado

    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  document.getElementById('textoFinal').value = textoProcesado;

  if (textoIngresado.length != 0) {
    // document.getElementById("texto_usuario").value = textoProcesado;
    mensaje.textContent = "Texto desencriptado con éxito";
    informacion.style.display = "none";
    // informacion.textContent = "";
    monito.src = "assets/img/monitohacker.png";
    mensaje.style.color = "#2ba5cc";
    // monito.getElementById("monito").src = "excelente.gif";

  } else {
    document.getElementById("monito").src = "assets/img/muneco.png";
    mensaje.textContent = "Ningún texto ingresado";
    informacion.textContent = ("Ingresa el texto que deseas encriptar o desencriptar");
    mensaje.style.color = "#e7603c";
    informacion.style.fontSize = "25px";

    // alert("Ingresa un txt madafaca");
  }
}











// function mostrarClaseTexto(selector, texto) {
//     elementoHTML = document.querySelector(selector);
//     elementoHTML.innerHTML = texto;
// }


// // asignarTextoElemento('.mensaje', 'Ningún mensaje fue encontrado')
// mostrarClaseTexto('.instruccion', 'Ingresa del texto que desees encriptar')