// Función de validación y actualización de interfaz
function actualizarInterfaz(textoIngresado, textoFinal, exito) {
    let mensaje = document.getElementById("mensaje");
    let informacion = document.getElementById("instruccion");
    let monito = document.getElementById("monito");

    if (textoIngresado.length !== 0) {
        //  Si no hay txt 
        document.getElementById('textoFinal').value = textoFinal;

        // operedor ternario 
        mensaje.textContent = exito ? "Texto encriptado con éxito" : "Texto desencriptado con éxito";
        mensaje.style.color = "#2ba5cc";
        informacion.textContent = "";
        monito.src = "assets/img/monitohacker.png";
    } else {
        // Si no hay txt
        document.getElementById('textoFinal').value = "";
        monito.src = "assets/img/muneco.png";
        mensaje.textContent = "Ningún texto ingresado";
        informacion.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        mensaje.style.color = "#e7603c";
        informacion.style.fontSize = "25px";
    }
}




function encriptar() {
    let textoIngresado = document.getElementById("texto_usuario").value.toLowerCase();
    let textoProcesado = textoIngresado
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    // actualiza lainterfaz
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

    // actualiza lainterfaz
    actualizarInterfaz(textoIngresado, textoProcesado, false);
}
