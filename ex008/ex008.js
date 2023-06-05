function media(){
    var nome = document.getElementById("aluno").value
    var nota1 = document.getElementById("Nota1").value
    var nota2 = document.getElementById("nota2").value
//exibir um alerta 
    if (number(nota1) > 10){
        alert("nota 1 nao pode ser maior que 10")
        exit
    }
    if (number(nota2) > 10){
        alert("nota 2 nao pode ser maior que 10")
        exit
    }

    var media = (Number(nota1)  +  Number (nota2))/2 
    if (media >= 7){
        document.getElementById("resultado").innerHTML =
         `O aluno ${nome} tirou nota ${nota1} e ${nota2} sua media foi ${media} APROVADO`
    } else {
        document.getElementById("resultado").innerHTML =
         `O aluno ${nome} tirou nota ${nota1} e ${nota2} sua media foi ${media} REPROVADO`
    }
    
 
}