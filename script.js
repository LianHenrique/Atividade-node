 let argumentos = process.argv.slice(2)

const module_interno = require("./module_interno")

let soma = module_interno.soma
let mult = module_interno.mult
let div = module_interno.div
let sub = module_interno.sub

console.log(argumentos)

if(argumentos[0] == "soma"){
    soma(argumentos[1], argumentos[2])
}
else if(argumentos[0] == "mult"){
    mult(argumentos[1], argumentos[2])
}
else if(argumentos[0] == "sub"){
    sub(argumentos[1], argumentos[2])
}
else if(argumentos[0] == "div"){
    div(argumentos[1], argumentos[2])
}
else{
    console.log("Operação invalida")
}
