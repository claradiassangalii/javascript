var novos = []
var links = []

function cadastrar(){
    var recebe = document.getElementById("nome").value
    var recebe2 = document.getElementById("link").value
    
    document.getElementById("resultado").innerHTML = ""
   
    novos.push(recebe)
    links.push(recebe2)

    for(var i = 0; i < novos.length; i++){
        document.getElementById("resultado").innerHTML += `<img src="${links[i]}"> <br> ${novos[i]} <br>  `
    } 
}
function indicar(){
var sortear = parseInt(Math.random() * novos.length)
document.getElementById("resultado").innerHTML = `<img src="${links[sortear]}"> <br> ${novos[sortear]}`
}