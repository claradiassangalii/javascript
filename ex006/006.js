 function calcular(){
    var valor1 = document.getElementById ("numero1").value
    var valor2 = document.getElementById ("numero2").value

    var soma = Number(valor1) + Number(valor2)
    var subtracao = valor1 - valor2
    var multiplicacao = valor1 * valor2

    document.getElementById("resultadoSoma").innerHTML += 
    `<br> ${valor1} + ${valor2} é = ${soma} <br>  ${valor1} - ${valor2} é = ${subtracao} 
    <br>  ${valor1} x ${valor2} é = ${multiplicacao}`
    
}