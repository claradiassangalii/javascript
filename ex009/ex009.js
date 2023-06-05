function media(){
var nome = document.getElementById ("aluno").value
var idade = document.getElementById ("idade").value

if (idade >= 18){
    document.getElementById("resultado").innerHTML =
     ` <b class="felz"> Parábens </b> ${nome}, você ja pode tirar sua CNH <br>
     <img class="img" src="/img/cnh2..png">`
     
} else {
    document.getElementById("resultado").innerHTML =
    `<b class="nao">  Sinto muito </b> ${nome}, você ainda NÃO pode tirar sua CNH <br>
     <img class="img" src="/img/cnh.jpg">`
    
}
}
