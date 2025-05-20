const minimist = require("minimist")
const soma = require("../module_interno").soma

const argumentos = minimist(process.argv.slice(2))

console.log(argumentos)

const a = parseInt(argumentos["a"])
const b = parseInt(argumentos["b"])

soma(a, b)