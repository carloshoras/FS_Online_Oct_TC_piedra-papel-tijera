const piedra = document.querySelector('.boton-jugada[data-jugada="piedra"]')
const papel = document.querySelector('.boton-jugada[data-jugada="papel"]')
const tijera = document.querySelector('.boton-jugada[data-jugada="tijera"]')
let jugada = "";
let jugadaOrdenador = "";
let resultado = "";

let posibilidades = ["piedra", "papel", "tijera"]

let comparar = function (indiceUsuario) {

    let indiceOrdenador = Math.floor(Math.random() * 3)
    console.log(indiceOrdenador)
    if (indiceUsuario == indiceOrdenador) {
        resultado = "Empate"
    } else if (indiceUsuario == indiceOrdenador -1 ) {
        resultado = "Gana ordenador"
    } else if (indiceUsuario == 2 && indiceOrdenador==0) {
        resultado = "Gana ordenador";
    } else {
        resultado = "Ganas tú";
    }

    const resultados = document.getElementById("resultados")
    resultados.innerHTML=`<p>Tú ha elegido ${posibilidades[indiceUsuario]} y el ordenador ha elegido ${posibilidades[indiceOrdenador]} . ${resultado}</p>`
}
piedra.addEventListener("click", function() {
    jugada = 0
    console.log(jugada)
    console.log(comparar(jugada));
   
})

papel.addEventListener("click", function() {
    jugada = 1
    console.log(jugada)
    console.log(comparar(jugada));
})

tijera.addEventListener("click", function() {
    jugada = 2
    console.log(jugada)
    console.log(comparar(jugada));
})
