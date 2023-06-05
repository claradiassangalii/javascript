var sorteio = parseInt(Math.random()* 100) +1
var tentativas = 0

function chute(){
    var chutes = prompt ('Digite um numero')
    tentativas ++

    if (chutes == sorteio){
        document.getElementById("resultado").innerHTML +=
        ` <b> Parabéns! você acertou o numero ${sorteio} em ${tentativas} tentativas </b> <br>`
    }
    
    else if (chutes > sorteio ){
        document.getElementById("resultado").innerHTML += 
        ` voê chutou ${chutes}, eu pensei em um numero menor <br>`
    }
    else if (chutes < sorteio){
        document.getElementById("resultado").innerHTML += 
        ` você chutou ${chutes} Eu pensei em um numero maior <br>`
    }
    else if (tentativas <= 5){
        alert (" GAME OVER! voce execedeu o numero de tentativas")
        exit
    }
}
function limpar(){
    tentativas = 0
    document.getElementById("resultado").innerHTML = "" 
    sorteio = parseInt(Math.random()* 100) +1
}
