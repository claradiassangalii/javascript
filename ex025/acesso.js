var listaCadastro = []
listaCadastro = JSON.parse(localStorage.getItem('bdLogin'))
if (listaCadastro == null){
    listaCadastro = []
}

function entrar(){
    var user = document.getElementById("user").value
    var senh = document.getElementById("senh").value

    listaCadastro.forEach ( item =>  {
        if (item.usuario == user && item.senha1 == senh){ 
            alert ('VocÊ entrou !')
            encontrado = true
        }
        
    })
      return encontrado
}