//Declarando array vazio
var meuVetor = []

//Criando vetores com dados
var numeros = [4, 1, 18, 2, 7]
var nomes = ['silvia', 'marcos', 'sandra']
var novoVetor = [20,'SESI', true]

//acessando os dados de um vetor
console.log (nomes [1])
console.log(novoVetor[1])
//verificando o tamanho de um vetor
console.log(numeros.length)
//indice
var frutas = ['maça', 'laranja', 'uva', 'pera']
for (var i = 0; i < frutas.length; i++){
    //coloco o i no indice das frutas para pegar o 
    //valor de cada indice no vetor
    console.log(frutas[i])
}
//adicionando novo valor no FINAL do vetor
frutas.push('abacaxi')
console.log (frutas.length)

novaListaFrutas[1] = 'banana' // substitui um valor pelo outro

//for in -> nao preciso inicializar uma variável de contador do loop
for (var indice in novaListaFrutas){
    console.log (indice + '-' + novaListaFrutas[indice])
}

//método forEach de um vetor percorre e retorna todo sos elementos do vetor
novaListaFrutas.forEach(frutas=> {
    console.log (fru)
});

//O metodo forEach -significa que para cada item do vetor dentre dos parenteses 
//com o => {} informamos o bloco que irá executar para cada linha 
frutas.forEach( item => {
    console.log (item)
} )

frutas.forEach((item, pos) =>{
    console.log ('item pelo forEach com posiçao ', pos,item)
})
