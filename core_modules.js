const fs = require("fs")

//Read
fs.readFile("testeRead.txt", "utf8", (erro, dados) => {
    if(erro){
        console.log(erro)
    }
    else{
        console.log(dados)
    }
})

const link = "testeWrite.txt"

// Create
let message = "arquivo criado"

fs.writeFile(link, message, "utf8", (erro) => {
    if(erro){
        console.log(erro)
    }
    else{
        console.log("Sucesso ( Criado )")
    }
})

// Update
message = "\narquivo modificado, informação adicionada"

fs.appendFile(link, message, "utf8", (erro) => {
    if(erro){
        console.log(erro)
    }
    else{
        console.log("Sucesso ( Editado )")
    }
})

// Delete
fs.unlink(link, (erro) => {
    if(erro){
        console.log(erro)
    }
    else{
        console.log("Sucesso ( Deletado )")
    }
})