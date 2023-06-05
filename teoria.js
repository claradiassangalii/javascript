 /* 
            Comentarios 
            em multiplas linhas
        */
        // comentário em uma unica linha
        
        //o alerta é utilizado para exibir uma mensagem em popup
        //alert("olá mundo!")

        //No console conseguimos visualizar informações sem exibir na página
        console.log ("Olá mundo! ultilizando console!")

            //Criando uma funçao chamada quando clicamos no botao
        function botaoTeste() {
            alert ("você clicou no botao")
        }
        //Tipo de exibiçao de mensagens no console
        console.error("esta é uma mensagem de erro")
        console.warn("esta é uma mensagem de alerta")
        console.info("esta é uma mensagem de informaçao")
        
        //declarando váriaveis
        //String - conjunto de caracteres - declarar com "" ou '' 
        var name = "Clara"
        var sobrenome = "Sangali"

        //number - todo número em JS é do tipo number - declarar sem ""
        var idade = 16
        //boolean - somente recebe true false
        var aprovado = true

        console.log (typeof nome) //comando typeof para saber o tipo do dado
        console.log (typeof + " " + sobrenome) //concatenando strings com o + 
        //se utilizarmos o + com string ele concatena se ultilizar com number soma
        var n1 = 10
        var n2 = 25
        console.log (n1 + n2)
        var n3 = 10
        var n4 = 25
        console.log (n3 + n4)//irá juntar as duas variaveis ("1025")

        n1 = n2 //uma variavel pode receber o valor de outra variavel
        console.log(" n1 = "+ n1 + ' e o n2 =' + n2)
    
        var salario = 1200
        salario = salario + 200 // Posso tambem somar a variavel com ela mesma 
        console.log (salario)
        salario += 200 //representaçao  mais simplificada da expressao acima 
        console.log (salario) 
        //hoje ultilizamos o templastring - forma mais simples 
        console.log (`Olá, ${nome} voce tem ${idade} e recebe R$ ${salario}`)

        //funçao do botao para obter o nome 
        function botao2() {
            //no pronpt abre a opçao de digitar algo
            var nome2=  prompt ('Qual é seu nome')
            //no confirm abre texto com opçao ok e cancel
            confirm(`Olá ${nome2}, entendeu JS?`)
        }

        function somar(){
            //Receber o valor 1 de um prompt
            var n1= prompt('Digite o valor 1')

            //receber o valor 2 de um prompt
            var n2= prompt('Digite o valor 2')

            //convertendo a variavel n1 e 2 de straing para number 
            //Posso ultilizar parseInt() parseFloat() ou Number()
            //exibir em um alert o valor da soma 
            var soma = Number(n1) + Number(n2)
           //Exibir em um alert o valor da soma 
           //alert(`A soma dos numeros é: ${soma}`)

           //é usado para adicionar a informaçao na pagina
           document.getElementById("resultadoSoma").innerHTML += 
                `<br> A soma dos números ${n1} e ${n2} é = ${soma} `
        }

        function exibirCidade(){
            // cria um input que recebe a informaçao deixando o nome inserido na página
            var nomeCidade = document.getElementById ("cidade").value
            document.getElementById ("resultadoCidade").innerHTML = nomeCidade
        }
        //Operadores Aritméticos e Ordem de precedência
    var opSoma = 5 + 2 //Operador de soma +
    console.log(opSoma) // 7
    var opSubtracao = 5 - 2 //Operador de subtração -
    console.log(opSubtracao) // 3 
    var opMultiplicacao = 5 * 2 //Operador de multiplicação *
    console.log(opMultiplicacao) // 10
    var opDivisao = 5 / 2 //Operador de divisão /
    console.log(opDivisao) // 2.5

    var opExponenciacao = 5 ** 2 //Operador de exponenciação **
    console.log(opExponenciacao) // 25
    var opResto = 5 % 2 //Operador de resto da divisão %
    console.log(opResto) // 1

    //Ordem de precedencia
    var ordemPrecedencia1 = 5 + 3 / 2
    console.log(ordemPrecedencia1) // 6.5
    var ordemPrecedencia2 = (5 + 3) / 2
    console.log(ordemPrecedencia2) // 4
    /*  1º ()
        2º **
        3º * / 
        4º %
        5º + - 
    */
        
    //Constantes - o valor não pode ser alterado depois de atribuído
    const pi = 3.14
    // pi = 3 - Se o valor for alterado dará erro no javascript


    // auto atribuiçao
    var n = 3
    n = n + 3 // a variavel recebe ela mesma +3
    n += 3 // quer dizer o mesmo que o de cima

    n++ //quando precisamos somar +1 ao valor da variavel
    n-- //quando precisamos subtrair -1 ao valor da variavel

    //operadores relacionais
    var n1 = 5
    var n2 = 6
    console.log (n1 > n2)// > maior que
    console.log (n1 < n2)// < menor que
    console.lo(n1 >= n2) // >= maior ou igual que
    console.lo(n1 <= n2) // <=menor ou igual que
    console.log( n1 == n2) // == igual
    console.log(n1 != n2) // != nao igual - diferente

    //estruturas adicionais 
    if (n1 > n2){ //verificando a condiçao entre parenteses
        //se a condiçao for verdadeira "entra" nesse bloco
        console.log("O n1 é maior que n2")   

    } else{
        //se a condiçao NAO for verdadeira "entra" nesse bloco ELSE
        console.log ("o n1 nao é maior que n2") 
    }
    //exemplo de condiçao
    var MinhaIdade = 15
    if (MinhaIdade >= 16){
        console.log ("Voce pode votar")
    } else {
        console.log ("voce NAO pode votar")
    }

    //operadores lógicos
    //&& representa o E
    var login = "adm"
    var senha = "123"
    //para entrar na condiçao TRUE as 2 condiçoes precisar ser verdadeira
    if (login == "adm" && senha == "123"){
        //executa esse bloco quando as condiçoes forem TRUE
    }
    else{
        //executa esse bloco quando as condiçoes forem FALSE
    }

    var media = 6
    // operador OU -> || (pique)
    //para entrar na condiçao TRUE pelo menos 1 condiçao precisa ser verdadeira
    if (media == 6 || media == 5){
        //executa esse bloco quando 1 condiçao é TRUE
    }
    else{
    //aqui entra se todas as condiçoes forem falsas
    }

    //estruturas condicionais encadeadas
    if (media >=7){
        console.log("APROVADO")
    } else if (media >=5){
        //podemos fazer um novo if junto com o else
        console.log ("RECUPERAÇAO")
    }
    else if (media<5){
        console.log ("REPROVADO")
    }
    //debugger
    //podemos ultilizar o debugger para analisar o código linha a linha 

    //exit
    //quando queremos para de executar uma funçao do JS utilizamos o exit



   //Para sortearmos um valor aleatorio utilizamos o math.random()
   //O math.random reorna um numero decimal e precisamos multiplicar 
   //pelo nr maximo que desejamos e somar 1 quando necessario
   //o parseInit utilizamos para obter apenas a parte inteira do numero 
    var nrSorteio = parseInt(Math.random()* 100)+1
    console.log (nrSorteio)

    //switch case 
    // é como se fosse varios else if de forma mais simples
    var diaSemana = 3
    switch(diaSemana){
        case 1:
        console.log ("Hoje é domingo")
        break // Para o switch case n verificar as outras opçoes

        case 2:
            console.log ("Hoje é Segunda")
        break

        case 3:
            console.log ("Hoje é Terça")
        break

        case 4:
            console.log ("Hoje é Quarta")
        break

        case 5:
            console.log ("Hoje é Quinta")
        break

        case 6:
            console.log ("Hoje é Sexta")
        break

        case 7:
            console.log ("Hoje é sábado")
        break

        default:
            console.log("Dia inválido")
    }

        //laços de repetiçao WHILE (que quer dizer enquanto)
        //while(condiçao)
        //enquanto a condiçao do parenteses for verdadeira
        //continua repetindo o codigo do bloco
        var nrVidas = 5
        while(nrVidas > 0){
            console.log (` voce ainda tem ${nrVidas}`)
            nrVidas--
        }

        var cont = 1
        while (cont <= 5){
            console.log(cont)
            cont++
        }

        for (var cont = 1; cont = 5; cont++ ){
            console.log(cont)
        }
        //for - Laço de repetiçao
        //1° rexpressao var i = i
        //(aqui eu inicio o controle de vezes )
        //2° expressao i <= 10
        //(aqui nos verificamos a condiçao para se 
        // manter no loop)
        for (let i =1; i <= 10; i++){
            console.log(i)
        }
