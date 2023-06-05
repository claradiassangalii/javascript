function media(){
    var nome = document.getElementById ("aluno").value
    var idade = document.getElementById ("idade").value
    
    if (idade >= 18 && idade <=65){
        document.getElementById("resultado").innerHTML =
         ` <b class="felz"> Parábens </b> ${nome}, você é obrigado a votar <br>`
    }
    else if ( idade >=16 && idade > 65 || idade >= 70){
         document.getElementById("resultado").innerHTML = 
         `Parabéns ${nome}, você é nao obrigado a votar `

    } 
    else{
        document.getElementById("resultado").innerHTML =
        `<b class="nao">  você nao pode a votar </b>`    
    }
}
    