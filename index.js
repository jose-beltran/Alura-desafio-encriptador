let textoSinEncriptar = "";
let textoEncriptado = "";

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerText = texto;
}

function encriptarTexto(texto) {
    let encriptado = texto.replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    return encriptado
    
}

function desencriptarTexto(texto) {
    let desencriptado = texto.replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    return desencriptado
}

function obtenerYEncriptarValor() {
    textoSinEncriptar = document.getElementById('input').value;
    let valorEncriptado = encriptarTexto(textoSinEncriptar);
    console.log("texto encriptado: ", valorEncriptado);
    textoEncriptado = valorEncriptado;
    asignarTextoElemento("texto_encriptado", textoEncriptado);

    //Mostrar Botón de copiar
    document.getElementById("container_result_buttonCopiar").style.display = "block";

    //Esconder titulos
    document.getElementById()
    
}

function obtenerYDesencriotarValor() {
    textoEncriptado = document.getElementById('texto_encriptado').value;

}
