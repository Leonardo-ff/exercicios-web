console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
module.exports.b = 2
exports.c = 3

console.log(module.exports)
exports = null
console.log(module.exports)


exports = {
    nome: 'Leo'
}

console.log(module.exports)