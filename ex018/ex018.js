function gerar(){
    document.getElementById("resultado").innerHTML = ""
    var nrCoracoes = document.getElementById("vezes").value
    for (var contador = 1; contador <= nrCoracoes; contador++ ){
        document.getElementById("resultado").innerHTML += ` <img src="coracao.png" alt="">`
       
    }
}