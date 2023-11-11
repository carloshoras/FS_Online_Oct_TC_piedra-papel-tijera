const piedra = document.querySelector('.boton-jugada[data-jugada="piedra"]')
const papel = document.querySelector('.boton-jugada[data-jugada="papel"]')
const tijera = document.querySelector('.boton-jugada[data-jugada="tijera"]')
const contadorusuario = document.getElementById("contador-usuario");
const contadorordenador = document.getElementById("contador-ordenador");
let puntosusuarios = 0
let puntosordenador = 0
const resultados = document.getElementById("resultados")

let posibilidades = ["piedra", "papel", "tijera"]

let comparar = function (indiceUsuario) {
    let resultado = "";
    let indiceOrdenador = Math.floor(Math.random() * 3);
    if (indiceUsuario == indiceOrdenador) {
        resultado = "Empate"
    } else if (indiceUsuario == indiceOrdenador -1 ) {
        puntosordenador = puntosordenador + 1;
        resultado = "Gana ordenador"
    } else if (indiceUsuario == 2 && indiceOrdenador==0) {
        puntosordenador = puntosordenador + 1;
        resultado = "Gana ordenador";
    } else {
        puntosusuarios = puntosusuarios +1;
        resultado = "Ganas tú";
    }
    resultados.innerHTML=`<p>Tú ha elegido ${posibilidades[indiceUsuario]} y el ordenador ha elegido ${posibilidades[indiceOrdenador]} . ${resultado}</p>`
    contadorordenador.textContent =`Puntos de la máquina: ${puntosordenador}`
    contadorusuario.textContent =`tus puntos: ${puntosusuarios}`
}

piedra.addEventListener("click", function() {
    comparar(0);
})
papel.addEventListener("click", function() {
    comparar(1);
})
tijera.addEventListener("click", function() {
    comparar(2);
})