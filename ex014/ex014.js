

function resultados() {
    document.getElementById("final").innerHTML = ""
    var aleatorio = 1
    while (aleatorio <= 6) {
        var nrSorteio = parseInt(Math.random() * 60) + 1
        document.getElementById("final").innerHTML += `${nrSorteio}   `
        aleatorio++
    }
}