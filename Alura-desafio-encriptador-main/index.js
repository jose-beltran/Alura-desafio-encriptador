function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.getElementById(elemento)
    elementoHTML.innerText = texto
}


function obtenerYEncriptarValor() {



    //Encriptar texto
    let textoSinEncriptar = document.getElementById('input').value
    let encriptado = textoSinEncriptar.replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat")
    asignarTextoElemento("texto_final", encriptado)

    //Mostrar Botón de copiar
    document.getElementById("container_result_buttonCopiar").style.display = "block"
    alinearElementos("container_result")
    ocultarElementos()
    //document.getElementById("container_result").style.display.height = '80%'
}

function obtenerYDesencriptarValor() {
    let textoEncriptado = document.getElementById('input').value
    let textoDesencriptado = textoEncriptado
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u')

    asignarTextoElemento('texto_final', textoDesencriptado)
}

function copiarTexto() {
    //Copiar texto
    let elementoTexto = document.getElementById('texto_final')
    let texto = elementoTexto.innerText

    navigator.clipboard.writeText(texto)
}

function ocultarElementos() {
    let image = document.getElementById("container_result_img")
    let tittle = document.getElementById("container_result_tittle")
    let texto = document.getElementById("container_result_p")
    let button = document.getElementById("container_result_buttonCopiar")

    if (button.style.display === 'none' || button.style.display === '') {
        image.style.display = 'block'
        tittle.style.display = 'block'
        texto.style.display = 'block'
    } else {
        image.style.display = 'none'
        tittle.style.display = 'none'
        texto.style.display = 'none'
    }
}

function alinearElementos(id) {
    let container = document.getElementById(id)

    if (container.style.height === '80%') {
        container.style.height = 'auto'
    } else {
        container.style.height = '80%'
    }
}