var listaCadastro = []
listaCadastro = JSON.parse(localStorage.getItem('bdLogin'))
if (listaCadastro == null){
    listaCadastro = []
}
exibir()

function cadastrar(){
    var validaAcesso = validarCadastro(document.getElementById("senha").value, document.getElementById("senha2").value)
    
    if(validaAcesso)
    {
     
    var i = {
        nome: document.getElementById("nome").value,
        usuario: document.getElementById("usuario").value,
        senha: document.getElementById("senha").value 
    }

    listaCadastro.push(i)

    localStorage.setItem( 'bdLogin', JSON.stringify(listaCadastro) )
    exibir()
}
}

function validarCadastro(senha, senha2){
    if (senha != '' && senha2 != ''){
        return true
    } 
    else{
        alert ("Verifique se seus digitos estao corretos")
        return false 
    }
}

function exibir(){
   
    document.getElementById("resultado").innerHTML =''
    listaCadastro.forEach ((item, pos) => {

    document.getElementById("resultado").innerHTML +=
     `<div><b> Nome:</b>${item.nome} - 
     <b>Usuário:</b> ${item.usuario}
     <img src="excluir.svg" onclick='excluirUsuario(${pos})'></div>`
    })

}
function excluirUsuario(pos){

    listaCadastro.splice(pos, 1)
    localStorage.setItem( 'bdLogin', JSON.stringify(listaCadastro))
    exibir()
}
function botaoLimpar(){
    listaCadastro = []
    localStorage.setItem( 'bdLogin', JSON.stringify(listaCadastro) )
    exibir()
}
