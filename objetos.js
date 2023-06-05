var listaCarros = []

//declarando um objeto e informando os atributos
//todo objeto declaro com {}
var carro = {
    ano:'2020',
    modelo:'Gol',
    marc: 'VW'
}

//Para exibir o atributo do objeto faço da seguinte forma o : objeto.atributo
console.log (carro.modelo+ '-' + carro.ano)
console.log (`${carro.modelo} - ${carro.ano}`)

//adicionando o objeto carro ao vetor ListaCarros
listaCarros.push (carro)
console.log (listaCarros.length)

//novo objeto - novo carro
carro = {
    ano: '2022', 
    modelo: 'Onix' ,
    marc: 'GM' 
}

listaCarros.push (carro)
console.log (listaCarros.length)

for (var andar in listaCarros){
    console.log (listaCarros[andar].modelo)
}