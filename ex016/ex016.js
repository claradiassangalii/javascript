function gerar(){
    var nr = document.getElementById("final").value 

    for (var cont = 1; cont <= 10; cont++){
    var conta = nr * cont
    document.getElementById("tabuada").innerHTML +=`${nr} X ${cont} = ${conta} <br>`
}
}







  