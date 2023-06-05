function gerarFilme(){
    var filmes = ['filme interestelar', //0
                ' Filme star wars',//1
                 'filme harry potter', //2
                 'filme guradioes das galáxias',//3
                 'filme vingadores',//4
                ' filme da barbie']//5
    for (var i = 0; i < filmes.length; i++){
        document.getElementById("resultado").innerHTML += `Posiçoes no vetor ${i} - ${filmes[i]} <br> <br>`
    }
}