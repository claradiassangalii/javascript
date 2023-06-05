 
    function sorte(){
    var sorteio = parseInt(Math.random()* 13) +1
        var nome = document.getElementById("nome").value

        switch(sorteio){
        case 1:
        document.getElementById("resultado").innerHTML += ` ${nome}, Você irá se casar em janeiro <br>` 
        break // Para o switch case n verificar as outras opçoes

        case 2:
            document.getElementById("resultado").innerHTML += ` ${nome},Você irá se casar em Fevereiro <br>`
        break
        
        case 3:
            document.getElementById("resultado").innerHTML +=  `${nome}, Você irá se casar em Março<br>`
        break

        case 4:
            document.getElementById("resultado").innerHTML +=  `${nome}, Você irá se casar em Abril<br>`
        break

        case 5:
            document.getElementById("resultado").innerHTML += `${nome}, Você irá se casar em Maio<br>`
        break

        case 6:
            document.getElementById("resultado").innerHTML += `${nome}, Você irá se casar em Junho<br>`
        break

        case 7:
            document.getElementById("resultado").innerHTML += `${nome}, Você irá se casar em julho<br>`
        break

        case 8:
            document.getElementById("resultado").innerHTML += `${nome}, Você irá se casar em Agosto<br>`
        break

        case 9:
            document.getElementById("resultado").innerHTML += `${nome}, Você irá se casar em Setembro<br>`
        break

        case 10:
            document.getElementById("resultado").innerHTML += `${nome}, Você irá se casar em outubro<br>`
        break

        case 11:
            document.getElementById("resultado").innerHTML += `${nome}, Você irá se casar em Novembro<br>`
        break

        case 12:
            document.getElementById("resultado").innerHTML += `${nome}, Você irá se casar em Dezembro<br>`
        break

        default:
            document.getElementById("resultado").innerHTML += `${nome}, Você nao irá se casar<br>`
            
    }
}
