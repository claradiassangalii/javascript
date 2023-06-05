function media() {
    var usuario = document.getElementById("aluno").value
    var senha = document.getElementById("idade").value
   

    if (usuario == "adm" && senha == "123") {

        document.getElementById("resultado").innerHTML =
        `<b class="felz"> acesso permitido</b>`
     }
     else {
        document.getElementById("resultado").innerHTML =
        ` <b class="nao"> Acesso negado</b>` 
     }
}