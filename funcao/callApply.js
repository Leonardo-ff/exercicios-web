function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook', 
    preco: 4569.9,
    desc: 0.15,
    getPreco
}

globalThis.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())


const carro = {
    preco: 45000.0, 
    desc: 0.10
}
//invocam uma funcao
console.log(getPreco.call(carro))

console.log(getPreco.apply(carro))
//a diferenca esta na passagem dops parametros na chamada
console.log(getPreco.call(carro, 0.15, '$'))

console.log(getPreco.apply(carro, [0.15, '$']))