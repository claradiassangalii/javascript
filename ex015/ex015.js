function gerar() {
    var nr = document.getElementById("final").value
    var multip = 1
    while (multip <= 10){
        var conta = nr * multip
    document.getElementById("tabuada").innerHTML +=`${nr} X ${multip} = ${conta} <br>`
    multip++
}
}
