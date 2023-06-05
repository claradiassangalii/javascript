var contadorCora = 5
function adicionar(){
    contadorCora++
    document.getElementById("resultado").innerHTML = ''
    for (var contador = 1; contador <= contadorCora; contador++){
        document.getElementById("resultado").innerHTML += `<img src="../ex018/coracao.png" alt="" width="30px"></img>`
    }
}
function diminuir(){
    document.getElementById("resultado").innerHTML = ''
    contadorCora--
    for (var contador = 1; contador <= contadorCora; contador++){
        document.getElementById("resultado").innerHTML += `<img src="../ex018/coracao.png" alt="" width="30px"></img>`        
    }
    
    if (contadorCora <= 0){
        document.getElementById("mario").innerHTML = `<img src="fim.gif" alt="">`
     }
     else{
        document.getElementById("resultado").innerHTML = `<img src="mario.webp" alt="">`
     }
    
}

