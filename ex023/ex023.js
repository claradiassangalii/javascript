
function calcular(){
    var nome = document.getElementById("aluno").value
    var nota1 = document.getElementById("Nota1").value
    var nota2 = document.getElementById("nota2").value
    
    var media = (Number (nota1) + Number (nota2))/2

    if(media >= 7){
        document.getElementById("resultado").innerHTML = 
        `o aluno ${nome} tirou nota ${nota1} e ${nota2}, sua média foi ${media} PASSOU DE ANO `
    } else{
        document.getElementById("resultado").innerHTML = 
        `o aluno ${nome} tirou nota ${nota1} e ${nota2}, sua média foi ${media} NAO PASSOU DE ANO`
    }
}


function ValidarNota ( nota1, nota2) {
   
    if (nota1 > 10){
        alert("nota 1 nao pode ser maior que 10")
        return false
       } 
       if (nota2 > 10) {
        alert("nota 1 nao pode ser maior que 10")
        return false
       }
} 






