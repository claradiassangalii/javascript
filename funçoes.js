var resultado = 0
resultado = calcularDobro(7)

function calcularDobro(nr){
    var dobro = nr * 2
  console.log(dobro)
}

ricardoCalculeTabuada(3)

function ricardoCalculeTabuada(nr){
    for(var i = 1; i <= 20; i++){
        console.log(`${nr} x ${i} = ${nr * i}`)
    }
}

var resultado = 0
resultado = calcularDobro(544076)
console.log(resultado)

function calcularDobro(nr){
    dobro = nr * 2
    return dobro
}

function calcularSoma(nota1, nota2){
    var soma = nota1 + nota2
    var media = soma / 2
}

var mediaAluno1 = calcularSoma(0,7)
console.log (`mediado aluno 1 é ${mediaAluno1}`)
var mediaAluno2 = calcularSoma (5,3)
console.log (`media de aluno 2 é ${mediaAluno2}`)

var login = 'adm'

var senha = '123'

var possoAcessar = ValidarLogin(login, senha)

    if (possoAcessar == true){
        console.log ('Voce pode acessar o sistema')

    }else{
        console.log ('Voce nao tem permissao')
    }


function ValidarLogin (login, senha){
    if (login == '' || senha == ''){
        return false
    }
    if (login =='adm' && senha == '123'){
        return true
    } else{
        return false
    }
}