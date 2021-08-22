let valor
console.log(valor)// undefined

valor = null
console.log(valor)
//console.log(valor.toString()) dará erro!!

const produto = {}
console.log(produto.preco)// undefined
console.log(produto)

produto.preco = 3.5

console.log(produto)

produto.preco = undefined //evitar atribuir undefined
console.log(!!produto.preco)
console.log(produto)

produto.preco = null //essa é a melhor forma
